Rails.application.routes.draw do
  resources :places
  get 'onepage/index'
  root 'onepage#index'
  resources :plans

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
