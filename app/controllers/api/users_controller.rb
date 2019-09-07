class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    p @user
    if @user.save
      login(@user)
      render :show      
    else
      render json: @user.errors.full_messages, status: 401
    end   
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :gender, :dob)
  end
end
