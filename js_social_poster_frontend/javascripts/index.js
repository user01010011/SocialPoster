// call to js_social_poster_backend 
const endPoint = "http://localhost:3000/posts"

// fetch and load posts
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM is Loaded");
  getPosts()

// event listener and handler for create post form
  const createPostForm = document.querySelector("#create-post-form");
  createPostForm.addEventListener("submit", (e) => createFormHandler(e));

  // const sortButton = document.querySelector("#sort-button.submit");
  // sortButton.addEventListener("click", (e) => Post.all.sort((a,b) => a.post.title.localeCompare(b.post.title)))
  // const sortButton = document.getElementById('sort-button')
  // sortButton.addEventListener('click', function () {
  //   console.log('you clicked sort button!')
  // })
 
  const sortButton = document.querySelector('#sort-button')
  sortButton.addEventListener('click', sortPosts); 
 
  function sortPosts() {
    console.log('you clicked sort button!')
    // allPosts.sort((a, b) => a.post.title.localeCompare(b.post.title))
  }

  const filterCategory = document.querySelector('#filter-category')
  filterCategory.addEventListener('change', filterPosts);
  function filterPosts() {
    console.log('you selected a filter!')
    // const filteredPost = posts.filter((data) => {
    //   if (post.attributes.category === "") return data;
    // })
    // .map((data) => {
    //   return (
    //     renderPostCard()
    //   )
    // })
    }

    const searchInput = document.querySelector('#search-input')
    searchInput.addEventListener('change', searchPosts);
    function searchPosts(){
      console.log('you entered a search!')
      // let text = e.target.value.toLowerCase(); 
      // let posts = document.getElementsById('post-card-container')
    }
     // let text = e.target.value.toLowerCase();

     const deleteBtns = document.getElementsByClassName('delete-button')
    //  let deleteButtons = [...deleteBtns]
     deleteBtns.addEventListener('click', deletePost);
     function deletePost(){
       console.log('you clicked the delete button!')
      //  let postCard = document.querySelector('#card-body')
      //  postCard.remove()
     }
})  

// convert HTML collection to 

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
  console.log('you clicked sumbit!')
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value
  const contentInput = document.querySelector('#input-content').value
  const mediaInput = document.querySelector('#input-url').value
  const categoryId = parseInt(document.querySelector('#input-category').value)
  console.log('you went past the form info!')
  if (titleInput.value === '' || contentInput.value === ''){
    // alert('Please enter all required fields'); 
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log('success');
  }
  postFetch(titleInput, contentInput, mediaInput, categoryId)
}

function postFetch(title, content, media_url, category_id) {
  // build my body object outside of my fetch
  // const bodyData = {title, content, media_url, category_id}
  const bodyData = {title, content, media_url, category_id}
  console.log('you got to the backend!')
  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(resp => resp.json())
  .then(post => {
    // console.log(post);
    // const postData = post.data
    // render JSON response
    let newPost = new Post(post, post.attributes)
    console.log('you got to json!')
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

