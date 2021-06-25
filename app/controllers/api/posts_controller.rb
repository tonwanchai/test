
module API
  class PostsController < ApplicationController
    
    def index
      posts = ["post 1", "posts 2"]
      render json: { posts: posts }
    end

    def create
      Rails.logger.debug("****************************************** #{params["title"]}")
  
      render json: { params: params }
    end

    private
      def page_params
        params.require(:page).permit(:name)
      end

  end
end