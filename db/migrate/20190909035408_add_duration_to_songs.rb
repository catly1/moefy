class AddDurationToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :duration, :string
    change_column_null :songs, :duration, false
  end
end
