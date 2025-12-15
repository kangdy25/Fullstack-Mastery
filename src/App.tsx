import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "./lib/utils";
import { ChefHat } from "lucide-react";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";

function App() {
  const isActive = true;
  return (
    <div className="p-5">
      <ChefHat className="h-10 w-10 fill-red-500 text-blue-400" />
      <AlertDialog>
        <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <br />
      <br />
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="body"></div>
        </DialogContent>
      </Dialog>
      <br />
      <br />
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

      <Carousel className="m-10">
        <CarouselContent>
          <CarouselItem className="h-20 basis-1/3 border-2">1</CarouselItem>
          <CarouselItem className="h-20 basis-1/3 border-2">2</CarouselItem>
          <CarouselItem className="h-20 basis-1/3 border-2">3</CarouselItem>
          <CarouselItem className="h-20 basis-1/3 border-2">4</CarouselItem>
          <CarouselItem className="h-20 basis-1/3 border-2">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

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
