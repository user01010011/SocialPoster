const endPoint = "http://localhost:3000/posts"

document.addEventListener('DOMContentLoaded', () => {
  // fetch and load posts
  console.log("DOM is Loaded");
  getPosts()

//   event listener and handler for create post form
  const createPostForm = document.querySelector("#create-post-form")
  createPostForm.addEventListener("submit", (e) => createFormHandler(e))

//   const loginForm = document.querySelector("#login-form")
//   loginForm.addEventListener("submit", (e) => loginFormHandler(e))

})

function getPosts() {
  fetch(endPoint)
  .then(response => response.json())
  .then(posts => {
    posts.data.forEach(post => {
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      // debugger
      let newPost = new Post(post, post.attributes)

      document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
    })
  })
}

// function loginFormHandler(e) {
//   e.preventDefault()
//   const emailInput = e.target.querySelector("#login-email").value
//   const pwInput = e.target.querySelector("#login-password").value
//   loginFetch(emailInput, pwInput)
// }

// function loginFetch(email, password) {
//   const bodyData = {user: { email, password} }

//   fetch("http://localhost:3000/login", {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(bodyData)
//   })
//   .then(response => response.json())
//   .then(json => {
//     localStorage.setItem('jwt_token', json.jwt)
//     renderUserProfile()
//   })
// }

// function renderUserProfile() {
//   console.log(localStorage.getItem('jwt_token'));
// }

function createFormHandler(e) {
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const contentInput = document.querySelector('#input-content').value
  const mediaInput = document.querySelector('#input-url').value
  const categoryId = parseInt(document.querySelector('#input-category').value)
  postFetch(titleInput, contentInput, mediaInput, categoryId)
}


// function deletePost(e) {
//   e.preventDefault()
//   const titleInput = document.querySelector('#card-title').value
//   const contentInput = document.querySelector('#card-content').value
//   const mediaInput = document.querySelector('#card-url').value
//   const categoryId = parseInt(document.querySelector('#card-category').value)
//   postFetch(titleInput, contentInput, mediaInput, categoryId)
// }


function postFetch(title, content, media_url, category_id) {
  // build my body object outside of my fetch
  const bodyData = {title, content, media_url, category_id}

  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(post => {
    // console.log(post);
    const postData = post.data
    // render JSON response
    let newPost = new Post(post, post.attributes)
    document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
  })

}

  // deleteButton.addEventListener('click', this.deletePost);
//   const deletePost = document.querySelector("#delete-button")
//   deletePost.addEventListener("delete", (e) => deletePostHandler(e))

//   deletePost = () => {
//     fetch('http://localhost:3000/posts/' + this.id, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       Post.all = Post.all.filter(post => post.id !== this.post);
//       Post.displayAll();
//     })
//   }

