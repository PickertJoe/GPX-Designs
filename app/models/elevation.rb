class Elevation < ApplicationRecord
  has_one_attached :data
  has_one_attached :figure
  belongs_to :gpx

  validates_presence_of :chart_title
  validates_presence_of :x_title
  validates_presence_of :y_title
  validates_presence_of :gpx_id

  enum size: [:small, :medium, :large]

  def parse

    doc = Nokogiri::XML(open(ActiveStorage::Blob.service.send(:path_for, data.key)))
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
      Elevation: elev_vector,
    },
      order: [:Time, :Elevation])
  end

  def options

    @opts = {
        chart: {
          defaultSeriesType: 'line'},
        title: {
          text: self.chart_title
          },

        xAxis: {
          title:{
            text: self.x_title
          },
          type: 'datetime'
        },

        yAxis: {
          title: {
            text: self.y_title
          }
        },

        legend:{
          enabled: false
        },
      }
    end
end
