# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

NewYorkTeam.create!(name: "New York Knicks", team_logo_url: "https :/ / stats.nba.com / media / img / teams / logos / NYK_logo.svg", location: "4 Pennsylvania Plaza, New York, NY 10001", arena: "Madison Square Garden")

Player.create!(first_name: "Julius", last_name: "Randall", jersey_number: 30, height: "6ft 8in", weight: "250lbs", ppg: 19.3, rpg: 9.8, apg: 3.1, spg: 0.8, bpg: 0.3, photo_url: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612752/2019/260x190/203944.png", new_york_team_id: 1)
Player.create!(first_name: "Elfrid", last_name: "Payton", jersey_number: 6, height: "6ft 3in", weight: "195lbs", ppg: 19.3, rpg: 9.8, apg: 3.1, spg: 0.8, bpg: 0.3, photo_url: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612752/2019/260x190/203944.png", new_york_team_id: 1)
Player.create!(first_name: "Kevin", last_name: "Knox", jersey_number: 20, height: "6ft 7in", weight: "215lbs", ppg: 19.3, rpg: 9.8, apg: 3.1, spg: 0.8, bpg: 0.3, photo_url: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612752/2019/260x190/203944.png", new_york_team_id: 1)
Player.create!(first_name: "RJ", last_name: "Barrett", jersey_number: 9, height: "6ft 6in", weight: "214lbs", ppg: 19.3, rpg: 9.8, apg: 3.1, spg: 0.8, bpg: 0.3, photo_url: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612752/2019/260x190/203944.png", new_york_team_id: 1)
Player.create!(first_name: "Mitchell", last_name: "Robinson", jersey_number: 23, height: "7ft 0in", weight: "240lbs", ppg: 19.3, rpg: 9.8, apg: 3.1, spg: 0.8, bpg: 0.3, photo_url: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612752/2019/260x190/203944.png", new_york_team_id: 1)

user1 = User.create(username: "Ro", email: "Ro@gmail.com", password: "password")
user2 = User.create(username: "Ro718nyc", email: "Ro718nyc@gmail.com", password: "password")
user3 = User.create(username: "Phantom", email: "PhantomOfTheOpera@gmail.com", password: "password")

post1 = BlogPost.create(post_text: "NYK FOREVER!", user_id: 1)
post2 = BlogPost.create(post_text: "I <3 the Knicks!", user_id: 1)
post3 = BlogPost.create(post_text: "Blue & Orange Nation!", user_id: 1)

puts "#{NewYorkTeam.count} NY Team's successfully created!"
puts "#{Player.count} Player's successfully created!"
puts "#{User.count} User's successfully created!"
puts "#{BlogPost.count} Blog Post successfully created!"
