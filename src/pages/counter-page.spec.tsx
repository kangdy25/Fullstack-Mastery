import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import CounterPage from "./counter-page";
import { useCountStore } from "@/store/count";
import userEvent from "@testing-library/user-event";

describe("Counter Page", () => {
  beforeEach(() => {
    useCountStore.setState({ count: 0 });
  });

  it("카운터가 렌더링되고 카운트를 증가/감소시켜야 합니다.", async () => {
    const user = userEvent.setup();

    render(<CounterPage />);

    expect(screen.getByText("0")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByText("1")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByText("2")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
