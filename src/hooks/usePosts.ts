import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    createPost,
    deletePost,
    fetchPosts,
    patchPost,
    updatePost,
} from "../api/posts";

export const usePosts = (userId?: number) =>
  useQuery({
    queryKey: ["posts", userId],
    queryFn: fetchPosts,
    select: (data) =>
      userId ? data.filter((p: any) => p.userId === userId) : data,
  });

export const useCreatePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
};

export const useUpdatePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
};

export const usePatchPost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchPost,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
};

export const useDeletePost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["posts"] }),
  });
};
