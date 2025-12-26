import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router";
import App from "./App";

// 1. 페이지 컴포넌트들을 가짜(Mock)로 만듭니다.
// -> 페이지 안에 무슨 복잡한 로직이 있든 신경 쓰지 않고, 라우팅만 테스트하기 위함입니다.
vi.mock("./pages/index-page", () => ({
  default: () => <div>Index Page Mock</div>,
}));

vi.mock("./pages/sign-in-page", () => ({
  default: () => <div>Sign In Page Mock</div>,
}));

vi.mock("./pages/sign-up-page", () => ({
  default: () => <div>Sign Up Page Mock</div>,
}));

vi.mock("./pages/counter-page", () => ({
  default: () => <div>Counter Page Mock</div>,
}));

vi.mock("./pages/todo-list-page", () => ({
  default: () => <div>Todolist Page Mock</div>,
}));

describe("App Router & Layout 테스트", () => {
  // Case 1: 메인 페이지('/') 접속 테스트
  it("기본 경로('/')로 접속하면 IndexPage가 렌더링되어야 한다", () => {
    render(
      // MemoryRouter: 테스트 환경에서 브라우저 주소를 시뮬레이션
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("Index Page Mock")).toBeInTheDocument();
    expect(screen.queryByText("Auth!")).not.toBeInTheDocument();
  });

  // Case 2: 로그인 페이지('/sign-in') 접속 및 레이아웃 테스트
  it("'/sign-in' 경로로 접속하면 SignInPage와 AuthLayout 헤더가 보여야 한다", () => {
    render(
      <MemoryRouter initialEntries={["/sign-in"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("Sign In Page Mock")).toBeInTheDocument();
    expect(screen.getByText("Auth!")).toBeInTheDocument();
  });

  // Case 3: 회원가입 페이지('/sign-up') 접속 테스트
  it("'/sign-up' 경로로 접속하면 SignUpPage와 AuthLayout 헤더가 보여야 한다", () => {
    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("Sign Up Page Mock")).toBeInTheDocument();
    expect(screen.getByText("Auth!")).toBeInTheDocument();
  });

  // Case 4: 카운터 페이지('/counter') 접속 테스트
  it("'/counter' 경로로 접속하면 CounterPage와 AuthLayout 헤더가 보여야 한다", () => {
    render(
      <MemoryRouter initialEntries={["/counter"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("Counter Page Mock")).toBeInTheDocument();
  });

  // Case 5: 회원가입 페이지('/todolist') 접속 테스트
  it("'/todolist' 경로로 접속하면 TodoListPage가 보여야 한다", () => {
    render(
      <MemoryRouter initialEntries={["/todolist"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("Todolist Page Mock")).toBeInTheDocument();
  });

  // Case 6: 존재하지 않는 경로 테스트
  it("정의되지 않는 경로로 접속하면 404 페이지가 떠야 한다", () => {
    render(
      <MemoryRouter initialEntries={["/wrong-path"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText("404 Not Found")).toBeInTheDocument();
    // 모든 Mock 페이지가 없어야 함
    expect(screen.queryByText("Index Page Mock")).not.toBeInTheDocument();
    expect(screen.queryByText("Sign In Page Mock")).not.toBeInTheDocument();
    expect(screen.queryByText("Sign Up Page Mock")).not.toBeInTheDocument();
    expect(screen.queryByText("Counter Page Mock")).not.toBeInTheDocument();
    expect(screen.queryByText("Todolist Page Mock")).not.toBeInTheDocument();
  });
});
