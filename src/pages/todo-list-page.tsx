import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/quries/useTodosData";

const TodoListPage = () => {
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중입니다 ...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoListPage</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} content={todo.content} />
      ))}
    </div>
  );
};

export default TodoListPage;
