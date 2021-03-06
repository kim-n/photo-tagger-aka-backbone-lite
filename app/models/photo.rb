class Photo < ActiveRecord::Base
  attr_accessible :owner_id, :title, :url

  belongs_to :owner, :class_name => "User"
  has_many :photo_taggings
  has_many(
    :tagged_users,
    :through => :photo_taggings,
    :source => :user
  )

  validates :owner_id, :title, :url, :presence => true
end
