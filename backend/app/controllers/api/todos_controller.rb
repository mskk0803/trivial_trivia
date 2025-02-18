class Api::TodosController < ApplicationController
  def index
    post = Post.all
    render json: post
  end

  # def create
  #   todo = Post.new(todo_params)

  #   if todo.save
  #     render json: {status: 200, todo: todo}
  #   else
  #     render json: { status: 500, message: "Todoの作成に失敗しました" }
  #   end
  # end

  private

  def todo_params
    params.require(:post).permit(:content)
  end
end
