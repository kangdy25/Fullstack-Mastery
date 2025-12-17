import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";

const dummyData = [
  {
    id: 1,
    content: "내용 1 입니다.",
  },
  {
    id: 2,
    content: "내용 2 입니다.",
  },
  {
    id: 3,
    content: "내용 3 입니다.",
  },
];

const TodoListPage = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoListPage</h1>
      <TodoEditor />
      {dummyData.map((todo) => (
        <TodoItem id={todo.id} content={todo.content} />
      ))}
    </div>
  );
};

export default TodoListPage;
