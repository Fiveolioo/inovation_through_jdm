class UsersController < ApplicationController
    def new
      user = User.new
    end

    def create
     user = User.find_by(email: user_params["email"])
        if user && user.authenticate(user_params  ["password"])
          session[:user_id] = user.id
          render json: user, except: [:created_at, :updated_at]
        elsif user
           render json: {message: "Sign-up Failed"}
        else
           user = User.new(user_params)
           user.save
           render json: user, except: [:created_at, :updated_at]
        end
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, except: [:created_at, :updated_at]
        else
            render json: {message: "User not found."}
        end
    end

private
    def user_params
      params.require(:user).permit(:email, :password)
    end
end