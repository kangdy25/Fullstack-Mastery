import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest"; // afterEach 추가
import TodoListPage from "./todo-list-page";
import * as todoStore from "@/store/todos";

vi.mock("@/store/todos", () => ({
  useTodos: vi.fn(),
  useCreateTodo: vi.fn(),
  useDeleteTodo: vi.fn(),
}));

describe("TodoListPage", () => {
  // 테스트 끝날 때마다 Mock 초기화 & DOM 정리
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("스토어에서 가져온 할 일 목록을 화면에 그려야 한다", () => {
    const mockTodos = [
      { id: 1, content: "Vitest 설정하기" },
      { id: 2, content: "테스트 돌려보기" },
    ];

    // vi.mocked() 사용으로 더 깔끔하게
    vi.mocked(todoStore.useTodos).mockReturnValue(mockTodos);

    render(<TodoListPage />);

    expect(screen.getByText("Vitest 설정하기")).toBeInTheDocument();
    expect(screen.getByText("테스트 돌려보기")).toBeInTheDocument();
  });

  it("할 일이 없으면 목록이 비어 있어야 한다", () => {
    vi.mocked(todoStore.useTodos).mockReturnValue([]);

    render(<TodoListPage />);

    expect(screen.queryByText("Vitest 설정하기")).not.toBeInTheDocument();
  });
});
