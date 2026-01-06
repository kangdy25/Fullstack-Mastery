import { type ReactNode } from "react";
import { useEffect } from "react";
import supabase from "@/utils/supabase";
import { useIsSessionLoaded, useSession, useSetSession } from "@/store/session";
import GlobalLoader from "@/components/globalLoader";
import { useProfileData } from "@/hooks/queries/useProfileData";

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();

  const { data: profile, isLoading: isProfileLoading } = useProfileData(
    session?.user.id,
  );

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;
  if (isProfileLoading) return <GlobalLoader />;

  return children;
};

export default SessionProvider;
