# == Schema Information
#
# Table name: collaborations
#
#  id         :bigint           not null, primary key
#  song_id    :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Collaboration < ApplicationRecord
    validates :song_id, :artist_id, presence: true

    belongs_to :song

    belongs_to :artist
end
