// Initial data
let posts = [
  {
    id: 1,
    title: "Welcome to My Food Blog",
    content: "This is my first food blog post. I'm excited to share my favorite dishes, recipes, and tasty discoveries with you all!"
  },
  {
    id: 2,
    title: "Best Street Food",
    content: "Street food is cheap, fresh, and full of flavor. Today I tried grilled meat skewers, fresh spring rolls, and sweet coconut pancakes."
  },
  {
    id: 3,
    title: "Easy Cooking Tips",
    content: "Always taste your food while cooking. Use fresh ingredients, season a little at a time, and keep your knives sharp."
  }
];

let nextId = 4;
const postsContainer = document.getElementById("posts");

// Show all posts on the page
function renderPosts() {
  postsContainer.innerHTML = "";

  posts.forEach(function (post) {
    const card = document.createElement("div");
    card.className = "post";

    const header = document.createElement("div");
    header.className = "post-header";

    const title = document.createElement("h3");
    title.textContent = post.title;

    const editTitleBtn = document.createElement("button");
    editTitleBtn.textContent = "Edit Title";
    editTitleBtn.addEventListener("click", function () {
      editTitle(post.id);
    });

    header.appendChild(title);
    header.appendChild(editTitleBtn);

    const content = document.createElement("p");
    content.textContent = post.content;

    const actions = document.createElement("div");
    actions.className = "actions";

    const editContentBtn = document.createElement("button");
    editContentBtn.textContent = "Edit Content";
    editContentBtn.addEventListener("click", function () {
      editContent(post.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Post";
    deleteBtn.addEventListener("click", function () {
      deletePost(post.id);
    });

    actions.appendChild(editContentBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(header);
    card.appendChild(content);
    card.appendChild(actions);
    postsContainer.appendChild(card);
  });
}

// Add a new post
function addPost() {
  const title = prompt("Enter the post title:");
  if (title === null || title.trim() === "") return;

  const content = prompt("Enter the post content:");
  if (content === null || content.trim() === "") return;

  posts.push({ id: nextId++, title: title.trim(), content: content.trim() });
  renderPosts();
}

// Edit the title of a post
function editTitle(id) {
  const post = posts.find(function (p) { return p.id === id; });
  const newTitle = prompt("Edit the title:", post.title);
  if (newTitle === null || newTitle.trim() === "") return;

  post.title = newTitle.trim();
  renderPosts();
}

// Edit the content of a post
function editContent(id) {
  const post = posts.find(function (p) { return p.id === id; });
  const newContent = prompt("Edit the content:", post.content);
  if (newContent === null || newContent.trim() === "") return;

  post.content = newContent.trim();
  renderPosts();
}

// Delete a post
function deletePost(id) {
  if (!confirm("Delete this post?")) return;

  posts = posts.filter(function (p) { return p.id !== id; });
  renderPosts();
}

document.getElementById("add-btn").addEventListener("click", addPost);

renderPosts();