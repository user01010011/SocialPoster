class Post {

    constructor(post, postData) {
      this.id = post.id
      this.title = post.attributes.title
      this.content = post.attributes.content
      this.media_url = post.attributes.media_url
      this.category = post.attributes.category
      Post.all.push(this)
      console.log(this);
    }
  
    renderPostCard() {
      return `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h3 class="card-title">${this.title}</h3>
              <p class="card-content">${this.content}</p>
              <p class="card-url">${this.media_url}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <input type="button" class="view-button" value="View"/>
                <input type="button" class="like-button" value="Like"/>
               
                </ul>
              </footer>
                </div>
                <small class="card-category">Category:${this.category.category_name}</small>
                <div class="post-footer-line post-footer-line-3"/>
               </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  }

  Post.all = [];

