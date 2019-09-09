# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  credits    :text             not null
#  duration   :string           not null
#

class Song < ApplicationRecord
    validates :name, :album_id, presence: true

    belongs_to :album

    has_many :collaborations

    has_many :artists,
        through: :collaborations

    has_one_attached :song
end
