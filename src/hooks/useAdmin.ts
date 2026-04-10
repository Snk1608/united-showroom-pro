import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const SUPER_ADMIN_EMAIL = "mudadlanarendra@gmail.com";

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user) {
        setIsAdmin(false);
        setIsSuperAdmin(false);
        setLoading(false);
        return;
      }

      const currentUser = session.user;
      setUser(currentUser);

      // ✅ FORCE SUPER ADMIN ACCESS
      if (currentUser.email === SUPER_ADMIN_EMAIL) {
        setIsSuperAdmin(true);
        setIsAdmin(true);
        setLoading(false);
        return; // 🔥 IMPORTANT: skip all DB checks
      }

      // ✅ NORMAL ADMIN CHECK
      try {
        const { data, error } = await supabase.rpc("has_role", {
          _user_id: currentUser.id,
          _role: "admin",
        });

        if (error) {
          console.error("Role check error:", error);
          setIsAdmin(false);
        } else {
          setIsAdmin(!!data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setIsAdmin(false);
      }

      setIsSuperAdmin(false);
      setLoading(false);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAdmin();
    });

    checkAdmin();

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setIsSuperAdmin(false);
    setUser(null);
  };

  return { isAdmin, isSuperAdmin, loading, user, signOut };
};