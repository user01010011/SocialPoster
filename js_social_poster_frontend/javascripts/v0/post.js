class Post {
    // static call = []
    constructor(post, postAttributes){
        this.id = post.id
        this.title = postAttributes.title
        this.content = postAttributes.content
        this.media_url = postAttributes.media_url
        this.category = postAttributes.category
        Post.all.push(this)
        console.log(this);
    }

    renderPostCard(){
        return `
        <div class="col-md-4">
            <div class="card mb-4 shadown-sm">
                <div class="card-body">
                    <h4 class="card-title">${this.title}</h4><br>
                    <p class="card-content">${this.content}</p>
                    <p class="card-url">${this.media_url}</p>
                    <p class="card-category">${this.category.category_name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </divd>
        `
    }

}

Post.all = [];
