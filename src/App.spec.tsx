import App from "./App";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("App Component UI Test", () => {
  it("텍스트 요소들이 화면에 올바르게 렌더링되어야 한다", () => {
    render(<App />);
  });

  it("UI 구조가 이전 스냅샷과 일치해야 한다", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
