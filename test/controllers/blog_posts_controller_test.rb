require 'test_helper'

class BlogPostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @blog_post = blog_posts(:one)
  end

  test "should get index" do
    get blog_posts_url, as: :json
    assert_response :success
  end

  test "should create blog_post" do
    assert_difference('BlogPost.count') do
      post blog_posts_url, params: { blog_post: { post_text: @blog_post.post_text, user_id_id: @blog_post.user_id_id } }, as: :json
    end

    assert_response 201
  end

  test "should show blog_post" do
    get blog_post_url(@blog_post), as: :json
    assert_response :success
  end

  test "should update blog_post" do
    patch blog_post_url(@blog_post), params: { blog_post: { post_text: @blog_post.post_text, user_id_id: @blog_post.user_id_id } }, as: :json
    assert_response 200
  end

  test "should destroy blog_post" do
    assert_difference('BlogPost.count', -1) do
      delete blog_post_url(@blog_post), as: :json
    end

    assert_response 204
  end
end
