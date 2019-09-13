class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.playlist_songs.destroy_all
    @playlist.destroy

    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :user_id)
  end
end
