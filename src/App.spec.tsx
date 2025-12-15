import App from "./App";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";

// (1) Sonner (Toast)
vi.mock("sonner", () => ({
  toast: vi.fn(),
  Toaster: () => null,
}));

// (2) Carousel (Embla Carousel) - 초기 렌더링 에러 주범
vi.mock("./components/ui/carousel", () => ({
  Carousel: ({ children }: any) => (
    <div data-testid="carousel-mock">{children}</div>
  ),
  CarouselContent: ({ children }: any) => <div>{children}</div>,
  CarouselItem: ({ children }: any) => <div>{children}</div>,
  CarouselPrevious: () => <button>Prev</button>,
  CarouselNext: () => <button>Next</button>,
}));

// (3) Popover (Radix UI) - 위치 계산 로직 제거
vi.mock("./components/ui/popover", () => ({
  Popover: ({ children }: any) => <div>{children}</div>,
  PopoverTrigger: ({ children }: any) => <button>{children}</button>,
  PopoverContent: ({ children }: any) => <div>{children}</div>,
}));

// (4) AlertDialog (Radix UI) - 포털/포커스 트랩 로직 제거
vi.mock("./components/ui/alert-dialog", () => ({
  AlertDialog: ({ children }: any) => <div>{children}</div>,
  AlertDialogTrigger: ({ children }: any) => <button>{children}</button>,
  AlertDialogContent: ({ children }: any) => <div>{children}</div>,
  AlertDialogHeader: ({ children }: any) => <div>{children}</div>,
  AlertDialogTitle: ({ children }: any) => <h3>{children}</h3>,
  AlertDialogDescription: ({ children }: any) => <p>{children}</p>,
  AlertDialogFooter: ({ children }: any) => <div>{children}</div>,
  AlertDialogAction: ({ children }: any) => <button>{children}</button>,
  AlertDialogCancel: ({ children }: any) => <button>{children}</button>,
}));

// (5) Dialog (일반 Dialog도 있다면)
vi.mock("./components/ui/dialog", () => ({
  Dialog: ({ children }: any) => <div>{children}</div>,
  DialogTrigger: ({ children }: any) => <button>{children}</button>,
  DialogContent: ({ children }: any) => <div>{children}</div>,
  DialogHeader: ({ children }: any) => <div>{children}</div>,
  DialogTitle: ({ children }: any) => <h3>{children}</h3>,
  DialogDescription: ({ children }: any) => <p>{children}</p>,
}));

describe("App 로직 테스트", () => {
  it("isActive 상태에 따라 텍스트 색상이 녹색이어야 한다", () => {
    render(<App />);
    const activeText = screen.getByText("isActive");
    expect(activeText).toHaveClass("text-green-500");
  });

  it("입력창에 텍스트를 입력하면 값이 반영되어야 한다", async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByPlaceholderText("입력을 부탁드립니다.");

    await user.type(input, "테스트 중입니다.");
    expect(input).toHaveValue("테스트 중입니다.");
  });

  it("버튼 클릭 시 Toast 함수가 호출되어야 한다", async () => {
    const user = userEvent.setup();
    render(<App />);

    // '버튼!!' 텍스트를 가진 요소 중 첫 번째(메인 버튼) 클릭
    const mainButton = screen.getAllByText("버튼!!")[0];
    await user.click(mainButton);

    expect(toast).toHaveBeenCalledTimes(1);
  });

  // 중요: Mocking을 했기 때문에 '클릭하면 모달이 뜬다'는 UI 동작 테스트는
  // 더 이상 '상태 변화' 테스트가 아니라 '단순 렌더링' 테스트가 됩니다.
  // 따라서 아래 테스트는 Mock 컴포넌트가 children을 잘 뱉어내는지만 확인합니다.
  it("AlertDialog 트리거 버튼이 렌더링되어야 한다", () => {
    render(<App />);
    expect(screen.getByText("Open Alert Dialog")).toBeInTheDocument();
  });
});
