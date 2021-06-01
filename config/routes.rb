Rails.application.routes.draw do
  devise_for :users
  root to: "rooms#index"
  resources :room_messages
  resources :rooms
end
