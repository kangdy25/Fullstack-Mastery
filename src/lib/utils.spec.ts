import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn 유틸리티 함수", () => {
  it("여러 클래스 이름을 하나로 합쳐야 한다", () => {
    const result = cn("c-1", "c-2");
    expect(result).toBe("c-1 c-2");
  });

  it("조건부 클래스 객체와 배열을 올바르게 처리해야 한다", () => {
    const result = cn("base", true && "visible", false && "hidden", {
      active: true,
      disabled: false,
    });
    expect(result).toBe("base visible active");
  });

  it("Tailwind 클래스 충돌 시 뒤에 오는 클래스가 우선시되어야 한다", () => {
    const result = cn("p-10 text-red-500", "p-4 text-blue-500");

    expect(result).toBe("p-4 text-blue-500");
  });

  it("서로 다른 방향의 패딩이 겹칠 때 올바르게 병합해야 한다", () => {
    // px-4 (좌우) vs pl-10 (왼쪽)
    // tailwind-merge는 더 구체적인 것이나 뒤에 오는 것을 똑똑하게 처리함
    const result = cn("px-4", "pl-10");

    // 결과는 'px-4 pl-10'이거나 병합된 형태일 수 있음.
    // tailwind-merge 버전에 따라 다르지만 보통 충돌이 없으면 둘 다 유지, 충돌하면 교체
    expect(result).toContain("px-4");
    expect(result).toContain("pl-10");
  });
});
