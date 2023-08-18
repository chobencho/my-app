Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        passwords: 'api/v1/auth/passwords'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    
      namespace :board do
        resources :boards, only: [:index, :create, :update, :destroy] do
          member do
            get :show
            get :edit
            get :myboard
            get :favboard
          end
        end
  
        resources :board_comments, only: [:create] do
          member do
            get :show
          end
        end
  
        resources :board_likes, only: [:create, :destroy] do
          member do
            get :show
          end
        end
      end

      namespace :message do
        resources :messages, only: [:index, :create]

        resources :chats, only: [:create, :destroy] do
          member do
            get :show
            get :exist
            get :chatBuddy
          end
        end
      end

      namespace :community do
        resources :communities, only: [:index, :create, :destroy] do
          collection do
            get :popular
            get :latest
            post :sendMail
          end
          member do
            get :show
          end
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
          member do
            get :show
          end
        end
      end

      namespace :user do
        resources :users, only: [:index, :update] do
          collection do 
            post :updateLastLogin
          end
          member do
            get :show
            get :sort
            get :edit
            get :hobby
            get :interest
            get :researchTag
          end
        end
  
        resources :user_likes, only: [:create, :destroy] do
          member do
            get :show
          end
        end

        resources :verifications, only: [:create]

        resources :check_ages, only: [] do
          member do
            get :show
          end
        end
      end
    end
  end
end
