const endPoint = "http://localhost:3000/posts"

document.addEventListener('DOMContentLoaded', () => {
  // fetch and load posts
  console.log("DOM is Loaded");
  getPosts()

// event listener and handler for create post form
  const createPostForm = document.querySelector("#create-post-form");
  createPostForm.addEventListener("submit", (e) => createFormHandler(e));

  const sortButton = document.querySelector("#sort-button.submit");
  sortButton.addEventListener("click", (e) => posts.sort((a,b) => a.post.title.localeCompare(b.post.title)))
//  sortButton.addEventListener("click", (e) => posts.sort(function(a,b) { return a.post.title.localeCompare(b.post.title);}) );
//   
})

function getPosts() {
  fetch(endPoint)
  .then(resp => resp.json())
  .then(posts => {
    posts.data.forEach(post => {
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      // debugger
      let newPost = new Post(post, post.attributes)

      document.querySelector('#post-container').innerHTML += newPost.renderPostCard() //will wipe out eventListeners appendChild HTML 
      //adding event to the DOM 
      //add button here - find each post card, p tag after the button, put eventListener here, 
      
    })
  })
}

function createFormHandler(e) {
  // debugger
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const contentInput = document.querySelector('#input-content').value
  const mediaInput = document.querySelector('#input-url').value
  const categoryId = parseInt(document.querySelector('#input-category').value)
  postFetch(titleInput, contentInput, mediaInput, categoryId)
}

function postFetch(title, content, media_url, category_id) {
  // build my body object outside of my fetch
  const bodyData = {title, content, media_url, category_id}
  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(resp => resp.json())
  .then(post => {
    // console.log(post);
    const postData = post.data
    // render JSON response
    let newPost = new Post(post, post.attributes)
    document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
  })

}


// function deletePost(e) {
//   e.preventDefault()
//   const titleInput = document.querySelector('#card-title').value
//   const contentInput = document.querySelector('#card-content').value
//   const mediaInput = document.querySelector('#card-url').value
//   const categoryId = parseInt(document.querySelector('#card-category').value)
//   postFetch(titleInput, contentInput, mediaInput, categoryId)
// }

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

