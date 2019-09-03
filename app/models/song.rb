# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  song_url   :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  credits    :text             not null
#

class Song < ApplicationRecord
    validates :name, :song_url, :album_id, presence: true

    belongs_to :album

    has_many :collaborations

    has_many :artists,
        through: :collaborations
end
