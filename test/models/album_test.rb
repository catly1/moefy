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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
