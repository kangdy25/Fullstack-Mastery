import App from "./App";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";

// Sonner(Toast) 라이브러리 Mocking
vi.mock("sonner", () => ({
  toast: vi.fn(),
  Toaster: () => <div>Toaster Mock</div>,
}));

describe("App Component UI Test", () => {
  it("Input과 Textarea, Button이 화면에 올바르게 렌더링되어야 한다", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("입력을 부탁드립니다."),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("상세 내용을 입력하세요"),
    ).toBeInTheDocument();
    expect(screen.getByText("버튼(destructive)")).toBeInTheDocument();
  });

  it("isActive가 true일 때 텍스트가 녹색이어야 한다", () => {
    render(<App />);

    const activeText = screen.getByText("isActive");
    expect(activeText).toHaveClass("text-green-500");
    expect(activeText).not.toHaveClass("text-red-500");
  });

  it("첫 번째 버튼을 클릭하면 Toast가 호출되어야 한다", async () => {
    const user = userEvent.setup();
    render(<App />);

    const mainButton = screen.getAllByText("버튼!!")[0];

    await user.click(mainButton);

    expect(toast).toHaveBeenCalledTimes(1);
    expect(toast).toHaveBeenCalledWith("Event has been created.", {
      position: "top-center",
    });
  });

  it("UI 구조가 이전 스냅샷과 일치해야 한다", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
