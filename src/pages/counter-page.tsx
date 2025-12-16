import Controller from "@/components/ui/counter/controller";

const CounterPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Counter Page</h1>
      <Controller />
    </div>
  );
};

export default CounterPage;
