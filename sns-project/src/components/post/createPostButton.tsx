import { useOpenPostEditorModal } from "@/store/postEditorModal";
import { PlusCircleIcon } from "lucide-react";

const CreatePostButton = () => {
  const openPostEditorModal = useOpenPostEditorModal();

  return (
    <div
      onClick={openPostEditorModal}
      className="bg-muted text-muted-foreground cursor-pointer rounded-xl px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="">나누고 싶은 이야기가 있나요?</div>
        <PlusCircleIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default CreatePostButton;
