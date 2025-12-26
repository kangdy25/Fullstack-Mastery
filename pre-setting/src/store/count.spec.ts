import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCountStore } from "./count";

describe("useCountStore 상태 관리", () => {
  beforeEach(() => {
    useCountStore.setState({ count: 0 });
  });

  it("초기 카운트 값은 0이어야 합니다.", () => {
    const { result } = renderHook(() => useCountStore());
    expect(result.current.count).toBe(0);
  });

  it("카운트를 증가시켜야 합니다.", () => {
    const { result } = renderHook(() => useCountStore());
    act(() => {
      result.current.actions.increase();
    });
    expect(result.current.count).toBe(1);
  });

  it("카운트를 감소시켜야 합니다.", () => {
    const { result } = renderHook(() => useCountStore());
    act(() => {
      result.current.actions.decrease();
    });
    expect(result.current.count).toBe(-1);
  });

  it("카운트를 증가시킨 후 감소시켜야 합니다.", () => {
    const { result } = renderHook(() => useCountStore());
    act(() => {
      // increase 액션을 두 번 호출합니다.
      for (let i = 0; i < 2; i++) {
        result.current.actions.increase();
      }
    });
    // 카운트가 2가 되었는지 확인합니다.
    expect(result.current.count).toBe(2);
    act(() => {
      // decrease 액션을 두 번 호출합니다.
      for (let i = 0; i < 2; i++) {
        result.current.actions.decrease();
      }
    });
    // 카운트가 다시 0이 되었는지 확인합니다.
    expect(result.current.count).toBe(0);
  });
});
