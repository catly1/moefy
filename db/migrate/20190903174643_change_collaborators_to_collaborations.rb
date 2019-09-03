class ChangeCollaboratorsToCollaborations < ActiveRecord::Migration[5.2]
  def change
    rename_table :collaborators, :collaborations
  end
end
