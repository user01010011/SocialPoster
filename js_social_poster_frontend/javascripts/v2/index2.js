document.addEventListener('DOMContentLoaded', () => {
  // fetch and load posts
  console.log("DOM is Loaded");
  getPosts()
})

const postsContainer = document.querySelector("#posts-container")
const createPostBttn = document.getElementById('create-post-bttn')
const postForm = document.querySelector("#posts-form")
// createPostBttn.addEventListener('submit', createPost)

function getPosts(){
    fetch('http://127.0.0.1:3000/posts')
    .then(resp => resp.json())
    .then(renderPosts)
}

function renderPosts(posts){
    let postsArr = posts.data
    postsArr.forEach(post => {
        renderPost(post)
    })
}

// // trying to show just the title and category first before clicking view:
// function renderPost(post){
//     let postDetails = post.attributes
//     postsContainer.innerHTML += `
//         <div data-id=${post.id}>
//             <h3>${postDetails.title}</h3>
//             <c>Category: ${postDetails.category.category_name}<c><br>
//             <br>
//             <button>View</button>
//             <button>Edit</button>
//             <button>Delete</button>
//             <br>
//             <br>
//         </div>
//     `
//     elListners()
// }

function renderPost(post){
    let postDetails = post.attributes
    postsContainer.innerHTML += `
        <div data-id=${post.id}>
            <h3>${postDetails.title}</h3>
            <p>${postDetails.content}</p>
            <url>${postDetails.media_url}</url>
            <c>Category: ${postDetails.category.category_name}</c>
            <br>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
            <br>
            <br>
        </div>
    `
    elListeners()
}

function elListeners(){
    const bttns = document.querySelectorAll('button')
    for (const bttn of bttns){
        bttn.addEventListener('click', handleButton)
    }
}

function handleButton(event){
   if (event.target.innerText === 'Delete'){
       deletePost(event.target)
   } else if (event.target.innerText === 'Edit'){
       // do something with edit 
       editPost(event.target)
   } else if (event.target.innerText ==='View'){
       postShow(event.target)
   }
}

function postShow(){
    const id = event.target.dataset.id
    fetch(`http://127.0.0.1:3000/posts/${id}`)
    .then(resp => resp.json())
    .then(post => {
        const postDetails = post.data.attributes
        postsContainer.innerHTML = ''
        postsContainer.innerHTML += `
            Title: ${postDetails.title}
            Content: ${postDetails.content}
            Media attachment (optional): ${postDetails.media_url}
            Category: ${postDetails.category.category_name}
            <a id="back-bttn" href="#">Back</a>
        `
        const backBttn = document.getElementById('back-bttn')
        backBttn.addEventListener('click', goBack)
    })
}

function goBack(){
    postsContainer.innerHTML = ''
    getPosts()
}

function deletePost(element){
    const div = element.parentElement
    const id = div.dataset.id
    div.remove()
    
    fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => alert(data.message))
}

function collectFormData(){
    const postObj = {
        title: document.getElementById('post-title').value,
        content: document.getElementById('post-content').value,
        media_url: document.getElementById('post-media-url').value,
        category: document.getElementById('post-category').value
    }
    return postObj
}

function createPost(){
    event.preventDefault()
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(collectFormData())
    }

    // fetch by default makes get request 
    fetch('http://localhost:3000/posts', options)
    .then(resp => resp.json())
    .then(post => {
        renderPost(post.data)
        clearForm()
    })
}

function clearForm(){
    postForm.reset()
}

getPosts()


