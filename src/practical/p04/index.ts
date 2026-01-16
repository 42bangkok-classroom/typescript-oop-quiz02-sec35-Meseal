const axios = require('axios');

async function countCommentsByPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const comments = response.data;

    if (!Array.isArray(comments) || comments.length === 0) {
      return {};
    }

    const result = comments.reduce((acc, comment) => {
      const postId = comment.postId;
      if (postId === null || postId === undefined) {
        return acc;
      }
      if (acc[postId]) {
        acc[postId] += 1;
      } else {
        acc[postId] = 1;
      }
      return acc;
    }, {});

    return result;
  } catch (error) {
    return {};
  }
}