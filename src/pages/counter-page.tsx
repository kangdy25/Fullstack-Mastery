import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

const CounterPage = () => {
  const { count, increase, decrease } = useCountStore();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Counter Page</h1>
      <div className="flex flex-row items-center gap-4">
        <Button onClick={decrease}>-</Button>
        <div className="text-xl font-medium">{count}</div>
        <Button onClick={increase}>+</Button>
      </div>
    </div>
  );
};

export default CounterPage;
