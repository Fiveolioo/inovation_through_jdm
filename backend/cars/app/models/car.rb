class Car < ApplicationRecord
    has_many :favs
    has_many :users, through: :favs
end