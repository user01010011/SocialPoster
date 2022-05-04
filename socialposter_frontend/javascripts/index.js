// call to js_social_poster_backend
const endPoint = "http://localhost:3000/posts";

// fetch and load posts
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is Loaded");
  getPosts();

  // event listener and handler for create post form
  const createPostForm = document.querySelector("#create-post-form");
  createPostForm.addEventListener("submit", (e) => createFormHandler(e));

  const searchInput = document.querySelector("#search-input");
  searchInput.addEventListener("change", searchPosts);
  function searchPosts() {
    console.log("you entered a search!");
    // let text = e.target.value.toLowerCase();
    // let posts = document.getElementsById('post-card-container')
    const posts = Post.all;
    if (searchInput.value !== "") {
      searchResults = posts.filter((data) => {
        if (
          data.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
          data.content.toLowerCase().includes(searchInput.value.toLowerCase())
        ) {
          return data;
        }
      });
    }

    searchResults();

    // searchResults = searchResults.map((data) => {
    //   return (
    //     // console.log("you got to render post(s)!")
    //     renderPostCard()
    //   )
    // });
  }
  // let text = e.target.value.toLowerCase();

  //  const deleteBtns = document.getElementsByClassName('delete-button')
  // //  let deleteButtons = [...deleteBtns]
  //  deleteBtns.addEventListener('click', deletePost);
  //  function deletePost(){
  //    console.log('you clicked the delete button!')
  //   //  let postCard = document.querySelector('#card-body')
  //   //  postCard.remove()
  //  }

  // const sortButton = document.querySelector("#sort-button.submit");
  // sortButton.addEventListener("click", (e) => Post.all.sort((a,b) => a.post.title.localeCompare(b.post.title)))
  // const sortButton = document.getElementById('sort-button')
  // sortButton.addEventListener('click', function () {
  //   console.log('you clicked sort button!')
  // })

  const sortButton = document.querySelector("#sort-button");
  sortButton.addEventListener("click", sortPosts);

  function sortPosts() {
    console.log("you clicked sort button!");
    let postTitleHTML = document.getElementsByClassName("card-title");
    console.log(postTitleHTML);
    // To Convert HTML collection to Array (1st way):
    let postTitle = Array.from(postTitleHTML);
    console.log(postTitle);
    // To Convert HTML collection to Array (2nd way):
    // const postTitle = Array.prototype.slice.call(postTitleHTML)
    // console.log(postTitle)

    // const postsToSort = document.getElementsByClassName('card-body')
    // console.log(postsToSort)

    const sortedTitles = postTitle.sort((a, b) =>
      a.postTitle.localeCompare(b.postTitle)
    );
    console.log(sortedTitles);

    // const titles = postTitle.firstChild.textContent
    // console.log(titles)
    // Array.from(postTitleHTML).forEach(function(title){
    //   let titleName = title.firstChild.textContent;
    //   console.log(titleName)
    // });
    // let toSort = document.getElementById('card-body').children;
    // toSort = Array.prototype.slice.call(toSort, 0);
    // toSort.sort()
    // let sortedPosts = titleName.sort((a, b) => a.titleName.localeCompare(b.titleName))
    // // allPosts.sort((a, b) => a.post.title.localeCompare(b.post.title))
    // return sortedPosts
    // const list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    // list = document.getElementById("post-container");
    // switching = true;
    // dir = "asc";
    // while (switching) {
    //   switching = false;
    //   b = list.getElementsByTagName("card-title");
    //   for (i = 0; i < (b.length - 1); i++) {
    //     shouldSwitch = false;
    //     if (dir == "asc") {
    //       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
    //         shouldSwitch = true;
    //         break;
    //       }
    //     } else if (dir == "desc") {
    //       if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
    //         shouldSwitch = true;
    //         break;
    //       }
    //     }
    //   }
    //   if (shouldSwitch) {
    //     b[i].parentNode.insertBefore(b[i + 1], b[i]);
    //     switching = true;
    //     switchcount ++;
    //   } else {
    //     if (switchcount == 0 && dir == "asc") {
    //       dir = "desc";
    //       switching = true;
    //     }
    //   }
    // }
  }

  const filterCategory = document.querySelector("#filter-category");
  filterCategory.addEventListener("change", filterPosts);
  function filterPosts(e) {
    console.log("you selected a filter!");
    let selectedCategory = e.target.value;
    console.log(selectedCategory);

    let postCategoryHTML = document.getElementsByClassName("card-category");
    console.log(postCategoryHTML);
    Array.from(postCategoryHTML).forEach(function (postCategory) {
      let categoryName = postCategory.firstChild.textContent;
      // if(categoryName === selectedCategory){
      //   const postsToFilter = postCategoryHTML.parentElement
      //   post.style.display = 'block';
      // } else {
      //   post.style.display = 'none';
      // }
    });
  }

  // Array.from(postTitleHTML).forEach(function(title){
  //   let titleName = title.firstChild.textContent;
  //   console.log(titleName)
  // });
  // const posts = Post.all
  // let filteredPosts = posts.filter((data) => {
  //   if (post.category_name === "") return data;
  //   else if (data.category_name.includes(post.category_name)) {
  //     return data;
  //   }
  // })
  // .map((data) => {
  //   return (
  //     post.renderPostCard()
  //   )
  // })
  // const filteredPost = posts.filter((data) => {
  //   if (post.attributes.category === "") return data;
  // })
  // .map((data) => {
  //   return (
  //     renderPostCard()
  //   )
  // })
  // }

  function getPosts() {
    fetch(endPoint)
      .then((resp) => resp.json())
      .then((posts) => {
        posts.data.forEach((post) => {
          // double check how your data is nested in the console so you can successfully access the attributes of each individual object
          // debugger
          let newPost = new Post(post, post.attributes);
          document.querySelector("#post-container").innerHTML +=
            newPost.renderPostCard(); //will wipe out eventListeners appendChild HTML
          //adding event to the DOM
          //add button here - find each post card, p tag after the button, put eventListener here,
        });
      });
  }

  function createFormHandler(e) {
    console.log("you clicked sumbit!");
    e.preventDefault();
    const titleInput = document.querySelector("#input-title").value;
    const contentInput = document.querySelector("#input-content").value;
    const mediaInput = document.querySelector("#input-url").value;
    const categoryId = parseInt(
      document.querySelector("#input-category").value
    );
    console.log("you went past the form info!");
    if (titleInput.value === "" || contentInput.value === "") {
      // alert('Please enter all required fields');
      msg.textContent = "Please enter all fields";
      setTimeout(() => msg.remove(), 3000);
    } else {
      console.log("success");
    }
    postFetch(titleInput, contentInput, mediaInput, categoryId);
  }

  function postFetch(title, content, media_url, category_id) {
    // build my body object outside of my fetch
    // const bodyData = {title, content, media_url, category_id}
    const bodyData = { title, content, media_url, category_id };
    console.log("you got to the backend!");
    fetch(endPoint, {
      // POST request
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    })
      .then((resp) => resp.json())
      .then((post) => {
        // console.log(post);
        // const postData = post.data
        // render JSON response
        let newPost = new Post(post, post.attributes);
        console.log("you got to json!");
        document.querySelector("#post-container").textContent +=
          newPost.renderPostCard();
      });
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
});
