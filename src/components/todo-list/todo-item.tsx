import { Button } from "../ui/button";
import { Link } from "react-router";
import { useUpdateTodoMutation } from "@/hooks/mutation/useUpdateTodoMutation";
import { useDeleteTodoMutation } from "@/hooks/mutation/useDeleteTodoMutation";
import { useTodoDataById } from "@/hooks/quries/useTodoDataById";

const TodoItem = ({ id }: { id: string }) => {
  const { data: todo } = useTodoDataById(id, "LIST");

  if (!todo) throw new Error("Todo Data Undefined");
  const { content, isDone } = todo;

  const { mutate: updatedTodo } = useUpdateTodoMutation();
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updatedTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type="checkbox"
          disabled={isDeleteTodoPending}
          checked={isDone}
          onClick={handleCheckboxClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeleteTodoPending}
        onClick={handleDeleteClick}
        variant={"destructive"}
      >
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
