Rails.application.routes.draw do

  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'
  match "/player/browse/(*url)", to: redirect('/404') 
end
