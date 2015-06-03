class Note < ActiveRecord::Base
  # Remember to create a migration!
  validates_presence_of :title, :content
end
