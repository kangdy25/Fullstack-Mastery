import RootRoute from "./lib/root-route";
import ModalProvider from "./provider/modalProvider";
import SessionProvider from "./provider/sessionProvider";

export default function App() {
  return (
    <SessionProvider>
      <ModalProvider>
        <RootRoute />
      </ModalProvider>
    </SessionProvider>
  );
}
