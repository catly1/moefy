# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  year       :integer          not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :name, :year, :image_url, :artist_id, presence: true

    belongs_to :artist
    has_many :songs
end
