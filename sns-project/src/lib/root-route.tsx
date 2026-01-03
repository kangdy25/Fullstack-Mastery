import GlobalLayout from "@/components/layout/globalLayout";
import GuestOnlyLayout from "@/components/layout/guestOnlyLayout";
import ForgetPasswordPage from "@/pages/forgetPasswordPage";
import IndexPage from "@/pages/indexPage";
import PostDetailPage from "@/pages/postDetailPage";
import ProfileDetailPage from "@/pages/profileDetailPage";
import ResetPasswordPage from "@/pages/resetPasswordPage";
import SignInPage from "@/pages/signInPage";
import SignUpPage from "@/pages/signUpPage";
import { Navigate, Route, Routes } from "react-router";

const RootRoute = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route element={<GuestOnlyLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
        </Route>

        <Route path="/" element={<IndexPage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/profile/:userId" element={<ProfileDetailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
