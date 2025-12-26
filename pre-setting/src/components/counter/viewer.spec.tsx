import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Viewer from "./viewer";
import * as countStore from "@/store/count";

describe("Counter Viewer", () => {
  it("카운트를 렌더링해야 합니다.", () => {
    vi.spyOn(countStore, "useCount").mockReturnValue(10);
    render(<Viewer />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
