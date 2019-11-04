Rails.application.routes.draw do
  root to: 'welcomes#index'
  resources :faqs, only: [:index]

  devise_for :users
  resources :users, shallow: true do
    resources :gpxes, shallow: true do
      resources :elevations
      resources :lat_longs
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
