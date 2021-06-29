class Post {
    // static call = []
    constructor(post, postAttributes){
        this.id = post.id
        this.title = post.title
        this.content = post.content
        this.media_url = post.media_url
        this.category = post.category
        Post.all.push(this)
        console.log(this)
    }
}

// Post.all = []
