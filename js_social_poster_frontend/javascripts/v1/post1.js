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
              <input type="button" class="view-button" value="View"/>
              <input type="button" class="like-button" value="Like"/>
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
   if (event.target.innerText === 'Delete'){
       deletePost(event.target)
   } else if (event.target.innerText === 'Edit'){
       editPost(event.target)
   } else if (event.target.innerText ==='View'){
       postShow(event.target)
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


Post.all = [];

