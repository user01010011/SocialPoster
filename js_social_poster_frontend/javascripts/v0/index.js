// document.addEventListener('DOMContentLoaded', () => {
//     alert('loaded');
// });

const endPoint = 'http://localhost:3000/posts'  

document.addEventListener('DomContentLoaded', () => {
    // console.log("DOM is loaded");
    getPosts()

    // const createPostForm = document.querySelector("#create-post-form")
    // createPostForm.addEventListener("submit", (e) => createFormHandler(e))
})

// function getPosts() {
//   fetch(endPoint)
//     .then(res => res.json())
//     .then(json => console.log(json));
// }
   
function getPosts() {
    fetch(endPoint)
    .then(response => response.json())
    .then(posts => {
        // console.log(posts);
        posts.data.forEach(post => {
            // let newPost = new Post(post, post.attributes)
            // document.querySelector('#posts-container').innerHTML += newPost.renderPostCard()
            render(post)
            })    
        })
}

function render(post){
    const postMarkup = `
        <div data-id=${post.id}>
            <img src=${post.attributes.media_url} height="200" width="250">
            <h3>${post.attributes.title}</h3>
            <p>${post.attributes.category.category_name}</p>
            <button data-id=${post.id}>edit</button>
        </div>
        <br><br>
    `;
    document.querySelector('#syllabus-container').innerHTML += postMarkup 
}

// function createFormHandler(e){
//     e.preventDefault()
//     const titleInput = document.querySelector('#input-title').value 
//     const contentInput = document.querySelector('#input-content').value 
//     const mediaInput = document.querySelector('#input-url').value
//     const categoryId = parseInt(document.querySelector('#categories').value)
//     postFetch(titleInput, contentInput, mediaInput, categoryId)
// }

// function postFetch(title, content, media_url, category_id) {
//     const bodyData = {title, content, media_url, category_id}
//     fetch(endPoint, {
//         method: "POST",
//         hearders: {"Content-Type": "application/json"},
//         body: JSON.stringify(bodyData)
//     })
//     .then(response => response.json())
//     .then(post => {
//         console.log(post);
//         const postData = post.data 
//         let newPost = new Post(postData, postData.attributes)
//         document.querySelector('#posts-container').innerHTML =+ newPost.renderPostCard();
//     })
// }