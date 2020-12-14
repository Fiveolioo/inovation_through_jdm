class CreateFavs < ActiveRecord::Migration[5.2]
    def change
      create_table :favorites do |t|
        t.references :user, foreign_key: true
        t.references :car, foreign_key: true
  
        t.timestamps
    end
  end
end