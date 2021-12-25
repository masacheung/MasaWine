class Wine < ApplicationRecord

    validates :wine_full, presence: true, uniqueness: {scope: :winery_id}
    validates :winery_id, presence: true

    belongs_to :winery,
        foreign_key: :winery_id,
        class_name: "Winery"

end