class Gpx < ApplicationRecord
  has_one_attached :file
  belongs_to :user
  has_many :elevation
  has_many :lat_long

  validates_presence_of :name
  validates_presence_of :activity

  enum activity: [:Hike, :Run, :Bike, :Swim, :Ski, :Snowboard]
end
