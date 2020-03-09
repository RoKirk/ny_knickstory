Rails.application.routes.draw do
  resources :players
  resources :new_york_teams
  resources :blog_posts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
