import CreatePostButton from "@/components/post/createPostButton";
import PostFeed from "@/components/post/postFeed";

const indexPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <CreatePostButton />
      <PostFeed />
    </div>
  );
};

export default indexPage;
