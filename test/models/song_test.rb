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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
