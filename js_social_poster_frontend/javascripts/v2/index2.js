const attachSubmitFormEvent = event => {
  form().addEventListener('submit', Post.submitForm);
}

document.addEventListener('DOMContentLoaded', event => {
  attachSubmitFormEvent();
  Api.fetchPosts();
})

