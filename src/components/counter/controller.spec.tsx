import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Controller from "./controller";
import * as countStore from "@/store/count";

describe("Counter Controller", () => {
  it("+ 버튼을 클릭하면 increase가 호출되어야 합니다.", () => {
    const increase = vi.fn();
    vi.spyOn(countStore, "useIncreaseCount").mockReturnValue(increase);
    render(<Controller />);
    fireEvent.click(screen.getByText("+"));
    expect(increase).toHaveBeenCalled();
  });

  it("- 버튼을 클릭하면 decrease가 호출되어야 합니다.", () => {
    const decrease = vi.fn();
    vi.spyOn(countStore, "useDecreaseCount").mockReturnValue(decrease);
    render(<Controller />);
    fireEvent.click(screen.getByText("-"));
    expect(decrease).toHaveBeenCalled();
  });
});
