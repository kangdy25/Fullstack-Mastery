import CommentEditor from "@/components/comment/commentEditor";
import CommentList from "@/components/comment/commentList";
import PostItem from "@/components/post/postItem";
import { Navigate, useParams } from "react-router";

const postDetailPage = () => {
  const params = useParams();
  const postId = params.postId;

  if (!postId) return <Navigate to={"/"} />;

  return (
    <div>
      <PostItem postId={Number(postId)} type="DETAIL" />
      <div className="mb-3 text-xl font-bold">댓글</div>
      <CommentEditor postId={Number(postId)} />
      <CommentList postId={Number(postId)} />
    </div>
  );
};

export default postDetailPage;
