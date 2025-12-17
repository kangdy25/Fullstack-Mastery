import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useTodosStore, useTodos, useCreateTodo, useDeleteTodo } from "./todos";

describe("Todo Store", () => {
  beforeEach(() => {
    act(() => {
      useTodosStore.setState({ todos: [] });
    });
  });

  it("처음에는 할 일이 비어있어야 한다", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current).toEqual([]);
  });

  it("새로운 할 일을 추가할 수 있어야 한다", () => {
    const { result: todosResult } = renderHook(() => useTodos());
    const { result: createTodoResult } = renderHook(() => useCreateTodo());

    act(() => {
      createTodoResult.current("Zustand 테스트하기");
    });

    expect(todosResult.current).toHaveLength(1);
    expect(todosResult.current[0].content).toBe("Zustand 테스트하기");
    expect(todosResult.current[0].id).toBeTypeOf("number");
  });

  it("할 일을 삭제할 수 있어야 한다", () => {
    const { result: todosResult } = renderHook(() => useTodos());
    const { result: createTodoResult } = renderHook(() => useCreateTodo());
    const { result: deleteTodoResult } = renderHook(() => useDeleteTodo());

    act(() => {
      createTodoResult.current("삭제할 투두");
    });

    const addedTodoId = todosResult.current[0].id;

    act(() => {
      deleteTodoResult.current(addedTodoId);
    });

    expect(todosResult.current).toHaveLength(0);
  });
});
