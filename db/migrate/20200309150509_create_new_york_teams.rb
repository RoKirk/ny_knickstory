class CreateNewYorkTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :new_york_teams do |t|
      t.string :name
      t.string :team_logo_url
      t.string :location
      t.string :arena

      t.timestamps
    end
  end
end
