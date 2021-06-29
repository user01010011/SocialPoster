document.addEventListener('DOMContentLoaded', () => {
  // fetch and load posts
  console.log("DOM is Loaded");
  getPosts()
})

const endPoint = "http://localhost:3000/posts"

const addBtn = document.querySelector('#new-post-btn')
const postForm = document.querySelector('#form-container')
// let addPost = false
let divCollect = document.querySelector('#posts-collection')

function getPosts(){
  fetch(endPoint)
    .then(response => response.json())
    .then(posts => {
      posts.data.forEach(post => {
        renderPosts(post)
        })
    })
}

function postPost(postData){
  fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },
    body: JSON.stringify({
      "title": post.title,
      "content": post.content,
      "media_url": post.media_url,
      "category": post.category,
      // "likes": 0
    })
  })
  .then(res => res.json())
  .then((obj_post) => {
    renderPosts(obj_post)
  })
}

function likes(e){
  e.preventDefault()
  let more = parseInt(e.target.previousElementSibling.innerText) + 1

  fetch('http://localhost:3000/posts/${e.target.id}', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "likes": more 
    })
  })
  .then(res => res.json())
  .then((like_obj => {
    e.target.previousElementSibling.innerText = `${more} likes`; 
  }))
}

function renderPosts(post){
  let h3 = document.createElement('h3')
  h3.innerText = post.title;

  let p = document.createElement('p')
  p.innerText = post.content;

  let url = document.createElement('url')
  url.innerText = post.media_url;

  let c = document.createElement('c')
  c.innerText = post.category;

  let l = document.createElement('l')
  l.innerText - `${post.likes} likes`;

  let btn = document.createElement('button')
  btn.setAttribute('class', 'like-btn')
  btn.setAttribute('id', post.id)
  btn.innerText = "like"
  btn.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    likes(e)
  })

  let divCard = document.createElement('div')
  divCard.setAttribute('class', 'card')
  divCard.append(h3, p, url, c, l, btn)
  divCollect.append(divCard)
}

// addBtn.addEventListener('click',() => {
//   addPost = !addPost
//   if (addToy) {
//     postForm.style.display = 'block'
//     postForm.addEventListener('submit', event => {
//       event.preventDefault()
//       postPost(event.target)
//     })
//   } else {
//     postForm.style.display = 'none'
//   }
// })

