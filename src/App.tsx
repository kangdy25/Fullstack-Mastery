import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}></Route>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
