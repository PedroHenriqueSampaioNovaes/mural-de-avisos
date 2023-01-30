module.exports = {
  posts: [
    {
      id: 0,
      title: 'Um título qualquer',
      description: 'Uma descrição qualquer',
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
