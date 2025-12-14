import App from "./App";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("App Component UI Test", () => {
  it("텍스트 요소들이 화면에 올바르게 렌더링되어야 한다", () => {
    render(<App />);

    expect(screen.getByText("text-xs")).toBeInTheDocument();
    expect(screen.getByText("text-2xl")).toBeInTheDocument();
    expect(screen.getByText("border-x")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("특정 요소에 Tailwind CSS 클래스가 올바르게 적용되어야 한다", () => {
    render(<App />);

    const bgElement = screen.getByText("bg-amber-100");
    expect(bgElement).toHaveClass("bg-amber-100");

    const flexItem = screen.getByText("1");
    expect(flexItem.parentElement).toHaveClass(
      "flex",
      "flex-row",
      "items-center",
    );
  });

  it("UI 구조가 이전 스냅샷과 일치해야 한다", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
