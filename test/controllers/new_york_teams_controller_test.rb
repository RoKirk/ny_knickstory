require 'test_helper'

class NewYorkTeamsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @new_york_team = new_york_teams(:one)
  end

  test "should get index" do
    get new_york_teams_url, as: :json
    assert_response :success
  end

  test "should create new_york_team" do
    assert_difference('NewYorkTeam.count') do
      post new_york_teams_url, params: { new_york_team: { arena: @new_york_team.arena, location: @new_york_team.location, name: @new_york_team.name, team_logo_url: @new_york_team.team_logo_url } }, as: :json
    end

    assert_response 201
  end

  test "should show new_york_team" do
    get new_york_team_url(@new_york_team), as: :json
    assert_response :success
  end

  test "should update new_york_team" do
    patch new_york_team_url(@new_york_team), params: { new_york_team: { arena: @new_york_team.arena, location: @new_york_team.location, name: @new_york_team.name, team_logo_url: @new_york_team.team_logo_url } }, as: :json
    assert_response 200
  end

  test "should destroy new_york_team" do
    assert_difference('NewYorkTeam.count', -1) do
      delete new_york_team_url(@new_york_team), as: :json
    end

    assert_response 204
  end
end
