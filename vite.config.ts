import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // describe, it, expect 등을 import 없이 사용
    environment: "jsdom", // 브라우저 환경 시뮬레이션
    setupFiles: "./src/setupTests.ts", // 초기 설정 파일 지정
    css: true,
  },
});
