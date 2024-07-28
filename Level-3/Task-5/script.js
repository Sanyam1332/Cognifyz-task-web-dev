const id = document.querySelector(".id");
const title = document.querySelector(".title");
const body = document.querySelector(".body");
const tags = document.querySelector(".tags");
const reactions = document.querySelector(".reactions");
const container = document.querySelector(".container");
const blogBtn = document.querySelector("#blog");

blogBtn.addEventListener("click", () => {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(({ posts }) => {
      const postsContainer = document.getElementById("posts-container");
      let htmlContent = " ";

      posts.forEach((posts) => {
        htmlContent += `
        <div class="container">
        <div class="posts">
            <div class="id"></div>
            <div class="title"><h1>${posts.title}</h1></div>
            <div class="body">
              <p>
                ${posts.body}
              </p>
            </div>
            <div class="tags">
            ${posts.tags}
            </div>
            <div class="reactions">
            <i class="fa-solid fa-heart icon"> ${posts.reactions.likes}</i>
            <i class="fa-solid fa-comment icon"></i>
            <i class="fa-solid fa-share icon"></i></div>
            </div>
          </div>
      `;
        postsContainer.innerHTML = htmlContent;
      });
    });
});
