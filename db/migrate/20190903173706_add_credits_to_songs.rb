class AddCreditsToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :credits, :text
    change_column_null :songs, :credits, false
  end
end
