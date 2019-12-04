Rails.application.routes.draw do


  devise_for :users
  resources :locations
  root 'frontpages#index'
  resources :places
  resources :plans
  resources :frontpages
  get 'onepage/index'
  get '/plans/:plan_id/places' => 'places#index', as: 'plans_places'
  get '/plans/:plan_id/places/new' => 'places#new', as: 'new_plan_place'
  post '/plans/:plan_id/places' => 'places#create'
  get '/plans/:plan_id/places/:id' => 'places#show'
  delete '/plans/:plan_id/places/:id' => 'places#destroy', as:'plan_place_delete'
  # get '/ajax/something' => 'places#getAllPlaces'
  # post '/ajax/something/:id' => 'places#getOnePlace'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
