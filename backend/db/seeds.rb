# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



categories = ['Tools', 'Plants', 'Dirt', 'Seeds']

categories.each do |c|
    Category.create(name: c)
end

Item.all.each do |i|
    i.update(category: Category.all.sample(1)[0])
end