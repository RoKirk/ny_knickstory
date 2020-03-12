Rails.application.routes.draw do
  post "/auth/login", to: "authentication#login"
  get "/auth/verify", to: "authentication#verify"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    resources :blog_posts
  end
  resources :blog_posts
  resources :new_york_teams
  resources :players
end
