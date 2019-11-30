Rails.application.routes.draw do
  resources :places
  get 'onepage/index'
  root 'frontpages#index'
  resources :plans
  resources :frontpages
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
