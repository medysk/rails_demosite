class Api::V1::CharactersController < ApplicationController
  before_action :set_character, only: %i[show update destroy]

  respond_to :json

  def index
    @characters = Character.all.order(name: :asc)
    respond_with @characters
  end

  def show
    respond_with @character
  end

  def create
    @character = Character.create(character_params)
    render json: @character.errors, status: :unprocessable_entity unless @character.save
    respond_with @character
  end

  def update
    unless @character.update(character_params)
      render json: @character.errors,
             status: :unprocessable_entity
    end
    respond_with @character
  end

  def destroy
    @character.destroy
    respond_with @character
  end

  private

  def set_character
    @character = Character.find(params[:id])
  end

  def character_params
    params.require(:character).permit(:name)
  end
end
