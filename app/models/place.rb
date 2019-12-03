class Place < ApplicationRecord
  belongs_to :plan
  has_one :user
end
