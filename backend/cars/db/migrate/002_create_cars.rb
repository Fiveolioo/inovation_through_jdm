<<<<<<< HEAD
class CreateGifts < ActiveRecord::Migration[5.2]
=======
class CreateCars < ActiveRecord::Migration[5.2]
>>>>>>> e204525a04132dad16d1688100c8bdd94db15d10
    def change
      create_table :cars do |t|
        t.string :name
        t.integer :year  #change if need
        t.string :description
        t.string :link
        t.string :image
<<<<<<< HEAD

        t.timestamps
    end
  end
end 
=======
  
        t.timestamps
      end
    end
  end
>>>>>>> e204525a04132dad16d1688100c8bdd94db15d10
