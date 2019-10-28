class Gpx < ApplicationRecord
  has_one_attached :file
  belongs_to :user
  has_many :elevation
  has_many :lat_long

  validates_presence_of :name
  validates_presence_of :activity

  enum activity: [:Hike, :Run, :Bike, :Swim, :Ski, :Snowboard]


  def self.parse

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
