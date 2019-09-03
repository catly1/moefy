# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, :image_url, presence: true

    has_many :albums
    
    has_many :collaborations
    
    has_many :songs,
        through: :collaborations
end
