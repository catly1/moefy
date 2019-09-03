# == Schema Information
#
# Table name: collaborators
#
#  id         :bigint           not null, primary key
#  song_id    :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CollaboratorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
