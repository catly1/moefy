class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def show
    @song = Song.with_attached_songs.find(params[:id])
  end

end
