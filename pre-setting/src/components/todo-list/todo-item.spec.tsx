import * as todoStore from "@/store/todos";
import userEvent from "@testing-library/user-event";
import TodoItem from "./todo-item";
import { render, screen } from "@testing-library/react";

vi.mock("@/store/todos", () => ({
  useDeleteTodo: vi.fn(),
}));

describe("TodoItem", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("삭제 버튼을 누르면 할 일이 제거되어야 한다", async () => {
    const deleteTodoMock = vi.fn();
    vi.mocked(todoStore.useDeleteTodo).mockReturnValue(deleteTodoMock);

    const user = userEvent.setup();
    const testId = 123;
    const testContent = "리액트 공부하기";

    render(<TodoItem id={testId} content={testContent} />);

    const button = screen.getByRole("button", {
      name: "삭제",
    });
    await user.click(button);

    expect(deleteTodoMock).toHaveBeenCalledWith(testId);
  });
});
