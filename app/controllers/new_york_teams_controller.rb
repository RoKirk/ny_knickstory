class NewYorkTeamsController < ApplicationController
  before_action :set_new_york_team, only: [:show, :update, :destroy]

  # GET /new_york_teams
  def index
    @new_york_teams = NewYorkTeam.all

    render json: @new_york_teams
  end

  # GET /new_york_teams/1
  def show
    render json: @new_york_team
  end

  # POST /new_york_teams
  def create
    @new_york_team = NewYorkTeam.new(new_york_team_params)

    if @new_york_team.save
      render json: @new_york_team, status: :created, location: @new_york_team
    else
      render json: @new_york_team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /new_york_teams/1
  def update
    if @new_york_team.update(new_york_team_params)
      render json: @new_york_team
    else
      render json: @new_york_team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /new_york_teams/1
  def destroy
    @new_york_team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_new_york_team
      @new_york_team = NewYorkTeam.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def new_york_team_params
      params.require(:new_york_team).permit(:name, :team_logo_url, :location, :arena)
    end
end
