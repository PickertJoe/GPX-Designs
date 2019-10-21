class Elevation < ApplicationRecord
  has_one_attached :file
  belongs_to :gpx

  validates_presence_of :chart_title
  validates_presence_of :x_title
  validates_presence_of :y_title
  validates_presence_of :gpx_id

  enum size: ['12"x16"', '18"x24"', '36"x48"']

  private

    def parse_gpx_file

      raw_file = Nokogiri::XML(open(url_for(gpx.file)))
      elev_parse = []
      time_array = []

      # Pulling elevation data into array
      doc.css("ele").each do |link|
        elev_parse << link.text.to_f
      end

      # Pulling time data into array; also removes unnecessary date and time zone info
      doc.css("time").each do |link|
        time_array << Time.parse(link.text, "DD.MM.YYYY hh:mm:ss").to_i*1000
      end

      # Casting arrays as Daru vectors
      elev_vector = Daru::Vector.new(elev_parse)
      time_vector = Daru::Vector.new(time_array)

      # Combining vectors into Daru data frame for use in plotting
      @elev_df = Daru::DataFrame.new({
        Time: time_vector,
        Elevation: elev_vector
      })

    end

end
