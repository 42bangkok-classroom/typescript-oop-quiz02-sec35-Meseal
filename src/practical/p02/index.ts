import axios from 'axios';

interface Post {
  id: number;
  title: string;
  userId: number;
}

export async function getPostsByUser(userId: number): Promise<Pick<Post, 'id' | 'title'>[]> {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    return posts
      .filter(post => post.userId === userId)
      .map(post => ({
        id: post.id,
        title: post.title
      }));
  } catch (error) {
    throw error;
  }
}