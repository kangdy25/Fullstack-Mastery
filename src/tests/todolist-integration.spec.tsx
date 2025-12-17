import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import TodoListPage from "@/pages/todo-list-page";
import { useTodosStore } from "@/store/todos";

describe("Todo App 통합 테스트 (Integration)", () => {
  beforeEach(() => {
    useTodosStore.setState({ todos: [] });
  });

  it("사용자는 할 일을 추가하고, 목록에서 확인한 뒤, 삭제할 수 있다", async () => {
    const user = userEvent.setup();

    // 1. 페이지 전체 렌더링 (TodoListPage + TodoEditor + TodoItem 다 그려짐)
    render(<TodoListPage />);

    // --- [Step 1] 할 일 추가하기 ---
    const input = screen.getByPlaceholderText("할 일을 입력하세요 ...");
    const addButton = screen.getByRole("button", { name: "추가" });

    // "통합 테스트 공부하기" 입력 후 추가 버튼 클릭
    await user.type(input, "통합 테스트 공부하기");
    await user.click(addButton);

    // --- [Step 2] 목록에 잘 추가됐는지 확인 ---
    // 입력창은 비워져야 하고 화면에 텍스트가 나타나야 함
    expect(input).toHaveValue("");
    const addedItem = screen.getByText("통합 테스트 공부하기");
    expect(addedItem).toBeInTheDocument();

    // --- [Step 3] 삭제하기 ---
    // 방금 추가된 아이템 옆에 있는 삭제 버튼 찾기
    // (closest를 써서 해당 투두 아이템 영역 내의 버튼을 찾는 게 더 정확함)
    const deleteButton = within(
      addedItem.closest("div") as HTMLElement,
    ).getByRole("button", { name: "삭제" });

    await user.click(deleteButton);

    // --- [Step 4] 목록에서 사라졌는지 확인 ---
    expect(screen.queryByText("통합 테스트 공부하기")).not.toBeInTheDocument();
  });

  it("여러 개를 추가하고, 특정 항목만 콕 집어서 삭제해도 문제가 없어야 한다", async () => {
    const user = userEvent.setup();
    render(<TodoListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력하세요 ...");
    const addButton = screen.getByRole("button", { name: "추가" });

    // 1. A와 B 두 개 추가
    await user.type(input, "할 일 A");
    await user.click(addButton);

    await user.type(input, "할 일 B");
    await user.click(addButton);

    // 화면에 둘 다 있는지 확인
    const todoA = screen.getByText("할 일 A");
    const todoB = screen.getByText("할 일 B");
    expect(todoA).toBeInTheDocument();
    expect(todoB).toBeInTheDocument();

    // 2. '할 일 A' (첫 번째 것)만 삭제
    const deleteButtonA = within(todoA.closest("div") as HTMLElement).getByRole(
      "button",
      { name: "삭제" },
    );
    await user.click(deleteButtonA);

    // 3. 검증: A는 사라지고, B는 살아있어야 함! (ID 버그 체크)
    expect(todoA).not.toBeInTheDocument();
    expect(todoB).toBeInTheDocument();
  });
});
