import { AlertModal } from "@/components/modal/alertModal";
import PostEditorModal from "@/components/modal/postEditorModal";
import { type ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {createPortal(
        <>
          <PostEditorModal />
          <AlertModal />
        </>,
        document.getElementById("modal-root")!,
      )}

      {children}
    </>
  );
};

export default ModalProvider;
