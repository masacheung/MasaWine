class Wine < ApplicationRecord

    validates :wine_full, presence: true, uniqueness: {scope: :winery_id}
    validates :winery_id, presence: true

    has_many :notes,
        foreign_key: :wine_id,
        class_name: "TastingNote",
        dependent: :destroy
end