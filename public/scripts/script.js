// document.addEventListener('DOMContentLoaded', () => updatePosts());

async function updatePosts() {
  const response = await fetch('http://localhost:3000/api/all');
  const posts = await response.json();
  console.log(posts)

  let postElements = '';
  posts.forEach((post) => {
    postElements += `<div id="${post.id}" class="card mb-4">
                        <div class="card-header">
                          <h5 class="card-title">${post.title}</h5>
                        </div>
                        <div class="card-body">
                          <div class="card-text">${post.description}</div>
                        </div>
                    </div>`;
  });
  document.querySelector('#posts').innerHTML = postElements;
}

function newPost() {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#desc').value;

  if (!title.length || !description.length) return;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  }
  fetch('http://localhost:3000/api/new', options).then(() => {
    updatePosts();
    document.querySelector('#title').value = '';
    document.querySelector('#desc').value = '';
  });
}
