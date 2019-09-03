class CreateCollaborators < ActiveRecord::Migration[5.2]
  def change
    create_table :collaborators do |t|
      t.integer :song_id, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :collaborators, :song_id
    add_index :collaborators, :artist_id
  end
end
