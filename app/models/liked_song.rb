# == Schema Information
#
# Table name: liked_songs
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class LikedSong < ApplicationRecord

    validates :user_id, uniqueness: { scope: :song_id }

    belongs_to :user
    belongs_to :song

end
