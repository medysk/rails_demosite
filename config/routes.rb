Rails.application.routes.draw do
  get 'react',       to: 'react#index'
  get 'react/*path', to: 'react#index'

  namespace :api, { format: 'json' } do
    namespace :v1 do
      resources :characters, expect: %i[new edit]
    end
  end

  root to: 'home#index'
end
