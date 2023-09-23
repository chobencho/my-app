Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins "localhost:3000" # React側はポート番号3000で作るので「localhost:3000」を指定
    origins 'http://localhost:3000', "https://web.chobencho.site"

    resource "*",
             headers: :any,
             expose: %w[access-token expiry token-type uid client], # 追記
             methods: %i[get post put patch delete options head]
  end
end
