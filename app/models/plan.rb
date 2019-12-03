class Plan < ApplicationRecord
  has_many :place
  belongs_to :user
end
