Rails.application.routes.draw do
  devise_for :users
  root to: 'welcomes#index'
  resources :faqs, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
