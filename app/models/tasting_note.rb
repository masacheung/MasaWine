class TastingNote < ApplicationRecord

    validates :wine_id, presence: true

    belongs_to :wine,
        foreign_key: :wine_id,
        class_name: "Wine"
end