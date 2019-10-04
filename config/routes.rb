Rails.application.routes.draw do
  root to: 'welcomes#index'
  resources :faqs, only: [:index]

  devise_for :users
  resources :users, only: [:show]
  resources :gpxes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
