import { useCount } from "@/store/count";

const Viewer = () => {
  const count = useCount();
  return <div className="text-xl font-medium">{count}</div>;
};

export default Viewer;
