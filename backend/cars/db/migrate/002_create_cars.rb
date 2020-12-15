class CreateCars < ActiveRecord::Migration[5.2]
    def change
      create_table :cars do |t|
        t.string :make
        t.string :model
        t.string :year  #change if need
        t.string :description
        t.string :link
        t.string :image
  
        t.timestamps
      end
   end
end
