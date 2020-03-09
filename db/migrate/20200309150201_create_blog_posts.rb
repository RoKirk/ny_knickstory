class CreateBlogPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_posts do |t|
      t.string :post_text
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
