import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

interface Comment {
  postId: number;
}

interface PostWithCount {
  postId: number;
  title: string;
  totalComments: number;
}

export async function mapPostWithCommentCount(): Promise<PostWithCount[]> {
  try {
    const [postsRes, commentsRes] = await Promise.all([
      axios.get<Post[]>(''),
      axios.get<Comment[]>('')
    ]);

    const posts = postsRes.data;
    const comments = commentsRes.data;

    if (posts.length === 0) return [];

    return posts.map(post => ({
      postId: post.id,
      title: post.title,
      totalComments: comments.filter(c => c.postId === post.id).length
    }));
  } catch (error) {
    throw error;
  }
}