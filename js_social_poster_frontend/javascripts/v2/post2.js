class Post {
  static all = [];

  constructor(id, title, content, media_url, category) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.media_url = media_url;
    this.category = category;
    Post.all.push(this)
  }


  deletePost = () => {
    fetch('http://localhost:3000/posts/' + this.id, {
      method: 'delete',
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

  display = () => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const pContent = document.createElement('p');
    const pUrl = document.createElement('p');
    const hr = document.createElement('hr');
    const deleteButton = document.createElement('button');
  
    deleteButton.innerText = 'Delete';
    h4.innerText = this.title;
    pContent.innerText = this.content;
    pUrl.innerText = this.media_url

    deleteButton.addEventListener('click', this.deletePost);
  
    div.appendChild(h4);
    div.appendChild(pContent);
    div.appendChild(pUrl);
    div.appendChild(deleteButton);
  
    postsDiv().appendChild(div);
    postsDiv().appendChild(hr);
  }

  static submitForm = event => {
    event.preventDefault();
    
    let post = {
      title: titleInput().value,
      content: contentInput().value,
      media_url: urlInput().value,
      category: categoryInput().value,
    }
  
    Api.postPost(post)
  
  }

  static displayAll = () => {
    postsDiv().innerHTML = '';
    Post.all.forEach(post => post.display());
  }
}