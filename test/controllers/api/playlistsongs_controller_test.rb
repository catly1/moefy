require 'test_helper'

class Api::PlaylistsongsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_playlistsongs_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_playlistsongs_destroy_url
    assert_response :success
  end

end
