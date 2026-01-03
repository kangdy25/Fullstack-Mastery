import { type ReactNode } from "react";
import { useEffect } from "react";
import supabase from "@/utils/supabase";
import { useIsSessionLoaded, useSetSession } from "@/store/session";
import GlobalLoader from "@/components/globalLoader";

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;

  return children;
};

export default SessionProvider;
