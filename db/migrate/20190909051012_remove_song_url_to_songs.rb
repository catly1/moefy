class RemoveSongUrlToSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :song_url, :string
  end
end
