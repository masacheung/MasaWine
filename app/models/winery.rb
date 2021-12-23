class Winery < ApplicationRecord

    validates :name, presence: true, uniqueness: {scope: :country}

end