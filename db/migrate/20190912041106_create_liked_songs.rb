class CreateLikedSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :liked_songs do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false

      t.timestamps
    end
    add_index :liked_songs, :user_id
    add_index :liked_songs, :song_id
  end
end
