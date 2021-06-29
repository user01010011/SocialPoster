class Category {

  constructor(category, categoryAttributes) {
    this.id = category.id
    this.category_name = categoryAttributes.category_name
    this.category_description = categoryAttributes.category_description
    Category.all.push(this)
    console.log(this);
  }

  renderCategoryCard() {
    return `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h3 class="card-category-name">${this.category_name}</h3>
            <p class="card-category-description">${this.category_description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

}

Category.all = [];
