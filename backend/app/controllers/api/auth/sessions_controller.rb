class Api::Auth::SessionsController < ApplicationController

  def index
    if current_api_user
      render json: { is_logged_in: true, user: current_api_user }
    else
      render json: { is_logged_in: false , message: 'ユーザーが存在しません'}
    end
  end
end
