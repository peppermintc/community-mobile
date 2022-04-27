import { store } from "..";
import { Post } from "../interfaces/index";

const postPkGenerator = () => {
  const posts: Post[] = store.getState().community.posts;
  const lastPost = posts[posts.length - 1];
  return lastPost.pk + 1;
};

export default postPkGenerator;
