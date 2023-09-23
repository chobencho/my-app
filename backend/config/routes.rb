Rails.application.routes.draw do
  get '/health_check', to: 'health_checks#index'
  root to: "api/user/users#index"

  namespace :api do
    mount_devise_token_auth_for "User",
                                at: "auth",
                                controllers: {
                                  registrations: "api/auth/registrations",
                                  passwords: "api/auth/passwords"
                                }

    namespace :auth do
      resources :sessions, only: %i[index]
    end

    namespace :board do
      resources :boards, only: %i[index create update destroy] do
        member do
          get :show
          get :edit
          get :myboard
          get :favboard
        end
      end

      resources :board_comments, only: [:create] do
        member { get :show }
      end

      resources :board_likes, only: %i[create destroy] do
        member { get :show }
      end
    end

    namespace :message do
      resources :messages, only: %i[index create]

      resources :chats, only: %i[create destroy] do
        member do
          get :show
          get :exist
          get :chatBuddy
        end
      end
    end

    namespace :community do
      resources :communities, only: %i[index create destroy] do
        collection { post :sendMail }
        member { get :show }
      end

      resources :community_chats, only: [:create] do
        member do
          get :show
          get :communityData
          get :subscribed
        end
      end
    end

    namespace :setting do
      resources :informations, only: [:index] do
        member { get :show }
      end
    end

    namespace :user do
      resources :users, only: %i[index update] do
        collection { post :updateLastLogin }
        member do
          get :show
          get :sort
          get :edit
        end
      end

      resources :user_likes, only: %i[create destroy] do
        member { get :show }
      end

      resources :verifications, only: [:create]

      resources :check_ages, only: [] do
        member { get :show }
      end
    end
  end
end
