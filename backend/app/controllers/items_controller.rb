class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items
  end
  
  def show
    item = Item.find(params[:id])
    render json: item
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      # here is where we would render a json error object
    end
  end

  def destroy
    item = Item.find(params[:id])

    if item.destroy
      render json: { id: item.id }
    end
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :price)
  end
end
