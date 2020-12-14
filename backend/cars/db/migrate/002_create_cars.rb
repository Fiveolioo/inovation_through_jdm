class CreateGifts < ActiveRecord::Migration[5.2]
    def change
      create_table :cars do |t|
        t.string :name
        t.integer :year  #change if need
        t.string :description
        t.string :link
        t.string :image
  
        t.timestamps
      end
    end
  end