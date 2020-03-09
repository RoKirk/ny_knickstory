require 'test_helper'

class PlayersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @player = players(:one)
  end

  test "should get index" do
    get players_url, as: :json
    assert_response :success
  end

  test "should create player" do
    assert_difference('Player.count') do
      post players_url, params: { player: { apg: @player.apg, bpg: @player.bpg, first_name: @player.first_name, height: @player.height, jersey_number: @player.jersey_number, last_name: @player.last_name, photo_url: @player.photo_url, ppg: @player.ppg, rpg: @player.rpg, spg: @player.spg, team_id_id: @player.team_id_id, weight: @player.weight } }, as: :json
    end

    assert_response 201
  end

  test "should show player" do
    get player_url(@player), as: :json
    assert_response :success
  end

  test "should update player" do
    patch player_url(@player), params: { player: { apg: @player.apg, bpg: @player.bpg, first_name: @player.first_name, height: @player.height, jersey_number: @player.jersey_number, last_name: @player.last_name, photo_url: @player.photo_url, ppg: @player.ppg, rpg: @player.rpg, spg: @player.spg, team_id_id: @player.team_id_id, weight: @player.weight } }, as: :json
    assert_response 200
  end

  test "should destroy player" do
    assert_difference('Player.count', -1) do
      delete player_url(@player), as: :json
    end

    assert_response 204
  end
end
