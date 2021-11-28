class Post {
    constructor(post) {
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
                  <input type="button" class="like-button" value="Like "/>
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
  //   deletePost = () => {
  //     fetch('http://localhost:3000/posts/' + this.id, {
  //       method: 'delete',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(resp => resp.json())
  //     .then(posts => {
  //       Post.all = Post.all.filter(post => post.id !== this.post);
  //       Post.displayAll();
  //     })
  //   }

  //   editPost = () => {
  //     fetch('http://localhost:3000/posts/' + this.id, {
  //       method: 'post',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(resp => resp.json())
  //     .then(posts => {
  //       Post.all = Post.all.filter(post => post.id !== this.post);
  //       Post.displayAll();
  //     })
  //   }

  
  //   renderPostCard = () => {
  //     const div = document.createElement('div');
  //     const h4 = document.createElement('h4');
  //     const pContent = document.createElement('p');
  //     const pUrl = document.createElement('p');
  //     const deleteButton = document.createElement('delete-button');
  //     const editButton = document.createElement('edit-button');
  //     const likeButton = document.createElement('like-button');
    
  //     deleteButton.innerText = 'Delete';
  //     editButton.innerText = 'Edit';
  //     likeButton.innerText = 'Like';
  //     h4.innerText = this.title;
  //     pContent.innerText = this.content;
  //     pUrl.innerText = this.media_url
  
  //     deleteButton.addEventListener('click', this.deletePost);
  //     editButton.addEventListener('click', this.editPost);
  //     likeButton.addEventListener('click', this.likePost);
    
  //     div.appendChild(h4);
  //     div.appendChild(pContent);
  //     div.appendChild(pUrl);
  //     div.appendChild(deleteButton);
  //     div.appendChild(editButton);
  //     div.appendChild(likeButton);
    
  //     // postsDiv().appendChild(div);
  //   }
  
  //   submitForm = event => {
  //     event.preventDefault();
      
  //     let post = {
  //       title: titleInput().value,
  //       content: contentInput().value,
  //       media_url: urlInput().value,
  //       category: categoryInput().value,
  //     }
    
  //     Api.postPost(post)
    
  //   }
  
  //   // static displayAll = () => {
  //   //   postsDiv().innerHTML = '';
  //   //   Post.all.forEach(post => post.display());
  //   // }

  //   displayAll = () => {
  //     postsDiv().innerHTML = '';
  //     Post.all.forEach(post => post.display());
  //   }

  // }

  Post.all = [];