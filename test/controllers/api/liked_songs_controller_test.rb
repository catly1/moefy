require 'test_helper'

class Api::LikedSongsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_liked_songs_show_url
    assert_response :success
  end

  test "should get create" do
    get api_liked_songs_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_liked_songs_destroy_url
    assert_response :success
  end

end
