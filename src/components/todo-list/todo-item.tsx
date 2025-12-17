import { Button } from "../ui/button";

const TodoItem = ({ id, content }: { id: Number; content: String }) => {
  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button variant={"destructive"}>삭제</Button>
    </div>
  );
};

export default TodoItem;
