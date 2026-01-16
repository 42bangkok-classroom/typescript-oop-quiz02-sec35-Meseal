export {}

import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

async function getEdgePosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    if (posts.length === 0) return [];

    const first = posts[0];
    const last = posts[posts.length - 1];

    return [first, last].map(post => ({
      id: post.id,
      title: post.title
    }));
  } catch (error) {
    throw error;
  }
}