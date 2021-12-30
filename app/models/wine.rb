class Wine < ApplicationRecord

    validates :wine_full, presence: true, uniqueness: {scope: :winery_id}
    validates :winery_id, presence: true

end