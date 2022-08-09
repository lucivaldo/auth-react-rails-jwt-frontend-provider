import { useQuery } from '@tanstack/react-query';

import { useAuth } from "../../context/AuthProvider";
import AppLayout from "../../layout/AppLayout";
import { getPosts } from '../../services/api';

export default function Posts() {
  const { auth } = useAuth();

  const { data: posts = [] } = useQuery(['posts', auth.user?.id], getPosts);

  return (
    <AppLayout>
      <h2>Posts from {auth.user?.username}</h2>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div>{post.description}</div>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
}