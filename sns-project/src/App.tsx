import RootRoute from "./lib/root-route";
import SessionProvider from "./provider/sessionProvider";

export default function App() {
  return (
    <SessionProvider>
      <RootRoute />
    </SessionProvider>
  );
}
