import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, afterEach } from "vitest";
import TodoEditor from "./todo-editor";
import * as todoStore from "@/store/todos";

vi.mock("@/store/todos", () => ({
  useCreateTodo: vi.fn(),
}));

describe("TodoEditor", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("입력을 하고 추가 버튼을 누르면 할 일이 추가되어야 한다", async () => {
    // 가짜 함수(Spy) 생성: 호출되었는지 감시할 요원
    const createTodoMock = vi.fn();
    vi.mocked(todoStore.useCreateTodo).mockReturnValue(createTodoMock);

    const user = userEvent.setup();
    render(<TodoEditor />);

    const input = screen.getByPlaceholderText("할 일을 입력하세요 ...");
    await user.type(input, "운동하기");

    const button = screen.getByRole("button", { name: "추가" });
    await user.click(button);

    expect(createTodoMock).toHaveBeenCalledWith("운동하기");

    expect(input).toHaveValue("");
  });

  it("빈 값을 입력하면 추가되지 않아야 한다", async () => {
    const createTodoMock = vi.fn();
    vi.mocked(todoStore.useCreateTodo).mockReturnValue(createTodoMock);

    const user = userEvent.setup();
    render(<TodoEditor />);

    const button = screen.getByRole("button", { name: "추가" });
    await user.click(button);

    expect(createTodoMock).not.toHaveBeenCalled();
  });
});
