FROM ruby:latest

ARG RUBYGEMS_VERSION=3.4.6

RUN mkdir /api

WORKDIR /api

COPY Gemfile /api/Gemfile

COPY Gemfile.lock /api/Gemfile.lock

RUN gem update --system ${RUBYGEMS_VERSION} && \
    bundle install

# RUN gem install bundler
# RUN bundle install

COPY . /api

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]


# FROM ruby:3.2.2

# # 1. GemfileとGemfile.lockをコピーしてbundle installを実行する前に
# #    bundleのバージョンを指定します。
# RUN gem install bundler:2.4.13

# RUN mkdir /api
# WORKDIR /api

# # Gemfile をコンテナ内にコピー
# COPY Gemfile /api/Gemfile
# COPY Gemfile.lock /api/Gemfile.lock

# # Bundler を使って Gem をインストール
# RUN bundle install

# COPY . /api
# COPY entrypoint.sh /usr/bin/
# RUN chmod +x /usr/bin/entrypoint.sh

# ENTRYPOINT ["entrypoint.sh"]
# CMD ["rails", "server", "-b", "0.0.0.0"]
