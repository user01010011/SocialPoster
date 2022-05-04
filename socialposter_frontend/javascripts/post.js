class Post {
  constructor(post) {
    this.id = post.id;
    this.title = post.attributes.title;
    this.content = post.attributes.content;
    this.media_url = post.attributes.media_url;
    this.category = post.attributes.category;
    Post.all.push(this);
    console.log(this);
  }

  renderPostCard() {
    // return `
    //   <div class="col-md-4">
    //     <div class="card mb-4 shadow-sm">
    //       <div class="card-body" key=${this.id}>
    //         <h3 class="card-title">${this.title}</h3>
    //         <p class="card-content">${this.content}</p>
    //         <p class="card-url">${this.media_url}</p>
    //         <div class="d-flex justify-content-between align-items-center">
    //           <div class="btn-group">
    //           <button type="button" class="view-button" id="view-button" value="View" onClick="viewPost()">View 👀</button>
    //           <button type="button" class="like-button" id="like-button" value="Like" onClick="likePost()">Like ♡</button>
    //           <button type="button" class="view-button" id="edit-button" value="Edit" onClick="editPost()">Edit ✍🏻</button>
    //           <button type="button" class="delete-button" id="delete-button" value="Delete" onClick="deletePost()">Delete 🚫</button>
    //           </div><br/>
    //           <small class="card-category">Category:${this.category.category_name}</small>
    //           <div class="post-footer-line post-footer-line-3"/>
    //          </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // `

    // return `
    //       <div class="card-body" key=${this.id}>
    //         <a href="" class="card-title">${this.title}</a>
    //         <p class="card-content">${this.content}</p>
    //         <p class="card-url">${this.media_url}</p>
    //         <small class="card-category">Category:${this.category.category_name}</small> | <small class="card-id">Post id: ${this.id}</small>
    //         <br/>
    //           <button type="button" class="comment-button" id="comment-button" value="Comment" onClick="commentPost()">Comment 💬</button>
    //           <button type="button" class="like-button" id="like-button" value="Like ♡" onClick="likePost()">Like ♡</button>
    //           <button type="button" class="share-button" id="share-button" value="Share" onClick="sharePost()">Share ✉️</button>
    //           <button type="button" class="view-button" id="edit-button" value="Edit" onClick="editPost()">Edit ✍🏻</button>
    //           <button type="button" class="delete-button" id="delete-button" value="Delete" onClick={deletePost(event)}>Delete 🚫</button>
    //           <div class="post-footer-line post-footer-line-3"/>
    //           <br/>
    //       </div>
    //   `;
    return (
      <div class="card-body" key={this.id}>
        <a href="" class="card-title">
          {this.title}
        </a>
        <p class="card-content">{this.content}</p>
        <p class="card-url">{this.media_url}</p>
        <small class="card-category">
          Category:{this.category.category_name}
        </small>{" "}
        | <small class="card-id">Post id: ${this.id}</small>
        <br />
        <button
          type="button"
          class="comment-button"
          id="comment-button"
          value="Comment"
          onClick="commentPost()"
        >
          Comment 💬
        </button>
        <button
          type="button"
          class="like-button"
          id="like-button"
          value="Like ♡"
          onClick="likePost()"
        >
          Like ♡
        </button>
        <button
          type="button"
          class="share-button"
          id="share-button"
          value="Share"
          onClick="sharePost()"
        >
          Share ✉️
        </button>
        <button
          type="button"
          class="view-button"
          id="edit-button"
          value="Edit"
          onClick="editPost()"
        >
          Edit ✍🏻
        </button>
        <button
          type="button"
          class="delete-button"
          id="delete-button"
          value="Delete"
          onClick={() => deletePost()}
        >
          Delete 🚫
        </button>
        <div class="post-footer-line post-footer-line-3" />
        <br />
      </div>
    );
  }
}

// let posts = document.getElementsByClassName('card-body')
// posts = Array.from(posts)
// let allPosts = Array.from(document.getElementsByClassName("card-body"))
// let postsHTML = document.getElementsByClassName('card-body')
// let posts = Array.from(postsHTML)
const postList = document.getElementById("post-container");

// set like and comment counter, so it shows how many comments and likes
// comment will open a form, will need to have a content box, submit button
// Should each post have its own link? So people can view the post and threads? Check out Reddit, HackerNews, etc.
// toggle Like & Unlike, and counter +1 & -1.

function commentPost() {
  console.log("you clicked comment button! :)");
  // render post including all of its properties
}

function likePost() {
  console.log("you clicked like button! :)");
  // function likeCounter() {
  //   setCounter(counter + 1);
  // }
  // x.classList.toggle("Unlike ❤️")
  // toggle Like ♡ & Unlike ❤️
  // Add like and unlike counter
  // const like = document.querySelector(".like-button");
  //   like.classList.toggle("Unlike ❤️");
  const emptyHeart = "♡";
  const fullHeart = "❤️";
  const likeButton = document.querySelector("like-button");
  const like = likeButton.textContent;
  if (like == emptyHeart) {
    this.likeButton.textContent = fullHeart;
  } else {
    this.likeButton.textContent = emptyHeart;
  }
}

function sharePost() {
  console.log("you clicked share post!");
  // add external links to email, twitter, facebook, wechat, whatsapp
}

// After adding user classes, logged in users can share other people's posts.
// logged in users can also comment, like, share, edit delete their own posts.

function editPost() {
  console.log("you clicked edit post!");
  // toggle empty form + submit input value & current value
  main.innerHTML = "";
  // return (
  //   <form>
  //     <label>Title</label>
  //     <input></input>
  //     <button>Edit</button>
  //   </form>
  // )
}

function deletePost(event) {
  console.log("you clicked delete button!");
  if (confirm("Are you sure you want to delete this post?")) {
    const postToDelete = event.target.parentElement;
    console.log(postToDelete);
    postList.removeChild(postToDelete);
  }
  // let postId = this.id
  // id the current post then .remove()
  // const postToDelete = document.getElementsByClassName('card-body').item('${this.id}');
  // const posts = document.getElementsByClassName('card-body')
  // fetch(`http://localhost:3000/posts/ + ${this.id}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(resp => resp.json())
  // .then(posts => {
  //   posts = Post.all.filter(post => post.id !== this.post);
  //   posts.displayAll();
  //   // posts = Post.all.filter(post => post.id !== this.post);
  //   // posts.displayAll();
  // })
}

// let deleteButton = document.querySelector('#delete-button')
// deleteButton.addEventListener('click', deletePost);
// function deletePost () {
//   console.log('you clicked delete!')
// }
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
