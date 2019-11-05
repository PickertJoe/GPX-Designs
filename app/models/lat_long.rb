class LatLong < ApplicationRecord
  has_one_attached :data
  belongs_to :gpx

  validates_presence_of :chart_title
  validates_presence_of :gpx_id

  enum size: [:small, :medium, :large]

  def download
    @file = rails_blob_path(self.data, disposition: "attachment")
  end
end
