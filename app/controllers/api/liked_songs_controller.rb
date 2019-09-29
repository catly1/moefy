class Api::LikedSongsController < ApplicationController
  def index
    @liked_songs = LikedSong.all
  end

  def create
    @liked_song = LikedSong.new(liked_song_params)
    if @liked_song.save
      render :show
    else
      render json: @liked_song.errors.full_messages, status: 422
    end
  end

  def destroy
    @liked_song = LikedSong.find(params[:id])
    # @liked_song = PlaylistSong.find_by song_id: params[:song_id], params[:playlist_id]
    @liked_song.destroy
    render :show
  end

  private
  def liked_song_params
    params.require(:liked_song).permit(:user_id, :song_id)
  end
end
