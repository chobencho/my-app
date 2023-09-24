Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000', "https://web.chobencho.site"

    resource "*",
             headers: :any,
             expose: %w[access-token expiry token-type uid client], # 追記
             methods: %i[get post put patch delete options head]
  end
end
