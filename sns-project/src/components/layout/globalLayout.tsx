import React from "react";
import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.png";
import defualtAvatar from "@/assets/default-avatar.jpg";
import { SunIcon } from "lucide-react";

const GlobalLayout = () => {
  return (
    <div className="">
      <header className="h-15 border-b">
        <div className="m-auto flex h-full w-full max-w-175 justify-between px-4">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              className="h-5"
              src={logo}
              alt="한입 로그의 로고, 메세지 말풍선을 형성화한 모양이다."
            />
            <div className="font-bold">한입 로그</div>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hover:bg-muted cursor-pointer rounded-full p-2">
              <SunIcon />
            </div>
            <img className="h-6" src={defualtAvatar} alt="" />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GlobalLayout;
