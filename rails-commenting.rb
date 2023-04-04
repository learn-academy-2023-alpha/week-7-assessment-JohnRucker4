# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Inside the controller, we can establish CRUD/RESTful routes/HTTP Verbs.  In this case, BlogPostsController is the child class that inherits from the parent class, ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # We can create our instance variable, @posts and setting it equal to BlogPost.all will allow the user to see all instances created for BlogPost using a GET request
    @posts = BlogPost.all
  end

  # ---3)
  # Using the instance variable, we can set it to BlogPost.find with the specified params and associated id and display the desired instance.  The View in <filename>.html.erb will show the user the information. This is utilized with a GET request
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # A RESTful route that will show the user a form with a GET request.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Using a POST request, Create will allow the user to submit data to the database.  It doesn't require a view, but for a better user experience, a response for the user should be considered.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Edit uses a GET request.  We can have a user submit data input from a form and create a view with <filename>html.erb.  If we pass an id, we can find a speficic instance.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Working with Edit, we can update with the Strong Params.  The user will be redirected if the post is valid.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # After the post is successfully deleted, the user will be redirected to the index page
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # In order to prevent a method from being called where it isn't wanted, the private keyword provides protection.  This way, everything within the private keyword cannot be used outside of the controller.
  private
  def blog_post_params
    # ---10)
    # Strong params are parameters housed within the private keyword.  They only allow what is required and permitted to be altered in the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
