import { useOpenEditPostModal } from "@/store/postEditorModal";
import { Button } from "../ui/button";
import type { PostEntity } from "@/types";

const EditPostButton = (props: PostEntity) => {
  const openEditPostModal = useOpenEditPostModal();

  const handleButtonClick = () => {
    openEditPostModal({
      postId: props.id,
      content: props.content,
      imageUrls: props["image-urls"],
    });
  };

  return (
    <Button
      onClick={handleButtonClick}
      className="cursor-pointer"
      variant={"ghost"}
    >
      수정
    </Button>
  );
};

export default EditPostButton;
