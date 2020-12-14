class User < ApplicationRecord
    has_secure_password
    has_many :favs
    has_many :cars, through: :favs
end