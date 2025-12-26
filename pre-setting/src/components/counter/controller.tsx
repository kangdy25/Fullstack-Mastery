import { Button } from "@/components/ui/button";
import Viewer from "./viewer";
import {
  useCountStore,
  useDecreaseCount,
  useIncreaseCount,
} from "@/store/count";

const Controller = () => {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div className="flex flex-row items-center gap-4">
      <Button onClick={decrease}>-</Button>
      <Viewer />
      <Button onClick={increase}>+</Button>
    </div>
  );
};

export default Controller;
