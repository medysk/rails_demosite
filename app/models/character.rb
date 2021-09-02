class Character < ApplicationRecord
  # Validators
  validates :name,
            presence: true
end
