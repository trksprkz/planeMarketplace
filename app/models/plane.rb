
class Plane < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :location, presence: true
  validates :image, presence: true
end
