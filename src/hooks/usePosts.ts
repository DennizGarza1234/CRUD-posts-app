import {
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";

import {
    createPost,
    deletePost,
    fetchPosts,
    patchPost,
    updatePost,
} from "../api/posts";

const POSTS_KEY = ["posts"];

export const usePosts = (userId?: number) => {
  return useQuery({
    queryKey: POSTS_KEY,
    queryFn: fetchPosts,
    select: (data) =>
      userId
        ? data.filter((p: any) => p.userId === userId)
        : data,
  });
};

// CREATE
export const useCreatePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      qc.setQueryData(POSTS_KEY, (old: any) => [
        { ...newPost, id: Date.now() }, // force unique local ID
        ...(old || []),
      ]);
    },
  });
};

// UPDATE (PUT)
export const useUpdatePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: (_, variables) => {
      qc.setQueryData(POSTS_KEY, (old: any) =>
        old.map((p: any) =>
          p.id === variables.id ? { ...p, ...variables } : p
        )
      );
    },
    onError: (_, variables) => {
      // fallback (for fake API failures)
      qc.setQueryData(POSTS_KEY, (old: any) =>
        old.map((p: any) =>
          p.id === variables.id ? { ...p, ...variables } : p
        )
      );
    },
  });
};

// PATCH
export const usePatchPost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: patchPost,
    onSuccess: (_, variables) => {
      qc.setQueryData(POSTS_KEY, (old: any) =>
        old.map((p: any) =>
          p.id === variables.id ? { ...p, ...variables } : p
        )
      );
    },
    onError: (_, variables) => {
      qc.setQueryData(POSTS_KEY, (old: any) =>
        old.map((p: any) =>
          p.id === variables.id ? { ...p, ...variables } : p
        )
      );
    },
  });
};

// DELETE
export const useDeletePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: (_, id) => {
      qc.setQueryData(POSTS_KEY, (old: any) =>
        old.filter((p: any) => p.id !== id)
      );
    },
    onError: (_, id) => {
      // still remove locally
      qc.setQueryData(POSTS_KEY, (old: any) =>
        old.filter((p: any) => p.id !== id)
      );
    },
  });
};
