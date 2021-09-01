Rails.application.routes.draw do
  get 'react',       to: 'react#index'
  get 'react/*path', to: 'react#index'

  root to: 'home#index'
end
