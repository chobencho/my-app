class Api::Auth::HealthChecksController < ApplicationController
  def index
    head :ok
  end
end
