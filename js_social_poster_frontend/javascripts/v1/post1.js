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
    var btn = document.createElement("BUTTON")
    btn.setAttribute('class', 'like-btn')
    btn.setAttribute('id', this.id)
    btn.innerText = "like"
    btn.addEventListener('click', (e) => {
      console.log(e.target.datasest)
      likes(e) 
    })
  
    function likes(e){
      e.preventDefault()
      let more = parseInt(e.target.previousElementSibling.innerText) + 1
    }

    return `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h3 class="card-title">${this.title}</h3>
            <p class="card-content">${this.content}</p>
            <p class="card-url">${this.media_url}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <input type="button" class="view-button" data-id="${this.id}" value="View"/>
              <input type="button" class="like-button" data-id="${this.id}" value="Like"/>
              <span class="like-glyph" data-id="${this.id}">&#x2661;</span></li>
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

  //   function Delete(currentEl){
  //   currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  // }
  // function remove() {
  //   const deletePost = document.querySelector("#delete-button")
  //   addEventListener('click', this.deletePost);
  //   this.id.remove();

//     eventListeners()
//   }

//   function eventListeners(){
//     const bttns = document.querySelectorAll('button')
//     for (const bttn of bttns){
//         bttn.addEventListener('click', handleButton)
//     }
// }

function handleButton(event){
   if (event.target.innerText === 'View'){
       viewPost(e)
   } else if (event.target.innerText === 'Edit'){
       editPost(e)
   } else if (event.target.innerText ==='Delete'){
       deletePost(e)
   }  else if (event.target.innerText === 'Like'){
       likePost(e)
   }
}
// }
    // return `
    //   <div data-id=${this.id}>
    //     <img src=${this.image_url} height="200" width="250">
    //     <h3>${this.title}</h3>
    //     <p>${this.category.category_name}</p>
    //     <button data-id=${this.id}>edit</button>
    //   </div>
    //   <br><br>`;


deleteButton.addEventListener('click', this.deletePost);
const deletePost = document.querySelector("#delete-button")
deletePost.addEventListener("delete", (e) => deletePostHandler(e))

deletePost = () => {
  fetch('http://localhost:3000/posts/' + this.id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(data => {
    Post.all = Post.all.filter(post => post.id !== this.post);
    Post.displayAll();
  })
}