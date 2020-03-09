class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.integer :jersey_number
      t.string :height
      t.string :weight
      t.integer :ppg
      t.integer :rpg
      t.integer :apg
      t.integer :spg
      t.integer :bpg
      t.string :photo_url
      t.references :new_york_team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
