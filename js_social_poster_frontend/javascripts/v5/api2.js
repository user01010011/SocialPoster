class Api {
  static baseUrl = 'http://localhost:3000';

  static fetchPosts = () => {
    fetch(Api.baseUrl + '/posts')
    .then(resp => resp.json())
    .then(posts => {
      posts.data.forEach(data => {
        let post = new Post(post.id, post.title, post.content, post.media_url, post.category)
        post.display()
      })
    })
  }

  static postPost = post => {
    fetch(Api.baseUrl + '/posts', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( post )
    })
    .then(resp => resp.json())
    .then(data => {
      let newPost = new Post(post.id, post.title, post.content, post.media_url, post.category)
      post.display()
    })
  }
}