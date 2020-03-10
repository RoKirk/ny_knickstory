# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

NewYorkTeam.create!(name: "New York Knicks", team_logo_url: "https :/ / stats.nba.com / media / img / teams / logos / NYK_logo.svg", location: "4 Pennsylvania Plaza, New York, NY 10001", arena: "Madison Square Garden")

Player.create!(first_name: "Julius", last_name: "Randall", jersey_number: 30, height: "6ft 8in", weight: "250lbs", ppg: 19.3, rpg: 9.8, apg: 3.1, spg: 0.8, bpg: 0.3, photo_url: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612752/2019/260x190/203944.png", new_york_team_id: 1)

puts "#{Player.count} Player's successfully created!"
puts "#{NewYorkTeam.count} NY Team's successfully created!"

user1 = User.create(username: "a", email: "a@a.com", password: "password")

post1 = BlogPost.create(post_text: "Yo yo yo yo!", user_id: 1)
