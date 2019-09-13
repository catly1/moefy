class Api::PlaylistsongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      render :show
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    @playlist_song.destroy

    render :show
  end

  private
  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
end
