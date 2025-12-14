import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "./lib/utils";
import { toast } from "sonner";

function App() {
  const isActive = true;
  return (
    <div className="p-5">
      <Input placeholder="입력을 부탁드립니다." />
      <Textarea placeholder="상세 내용을 입력하세요" />

      <Button
        onClick={() =>
          toast("Event has been created.", { position: "top-center" })
        }
      >
        버튼!!
      </Button>
      <Button variant={"destructive"}>버튼(destructive)</Button>
      <Button variant={"ghost"}>버튼!!</Button>
      <Button variant={"link"}>버튼!!</Button>
      <Button variant={"outline"}>버튼!!</Button>
      <Button variant={"secondary"}>버튼!!</Button>

      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>

      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>

      <Toaster />
    </div>
  );
}

export default App;
