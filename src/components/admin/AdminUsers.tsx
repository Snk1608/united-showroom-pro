import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ShieldX } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const SUPER_ADMIN_EMAIL = "mudadlanarendra@gmail.com";

const AdminUsers = () => {
  const qc = useQueryClient();
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data: roles, error } = await supabase.from("user_roles").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      
      // Fetch profiles to get emails
      const { data: profiles } = await supabase.from("profiles").select("user_id, email, full_name");
      const profileMap = new Map((profiles || []).map(p => [p.user_id, p]));
      
      return (roles || []).map(r => ({
        ...r,
        email: profileMap.get(r.user_id)?.email || null,
        full_name: profileMap.get(r.user_id)?.full_name || null,
      }));
    },
  });

  const updateRole = useMutation({
    mutationFn: async ({ id, role }: { id: string; role: "admin" | "user" }) => {
      const { error } = await supabase.from("user_roles").update({ role }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-users"] });
      toast.success("Role updated!");
    },
    onError: (e: any) => toast.error(e.message),
  });

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-foreground mb-6">User Management ({users.length})</h2>
      <div className="space-y-3">
        {users.map((u) => (
          <div key={u.id} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">{u.email || "No email"}</p>
              {u.full_name && <p className="text-xs text-muted-foreground">{u.full_name}</p>}
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${u.role === "admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {u.role}
                </span>
                <span className="text-xs text-muted-foreground">{format(new Date(u.created_at), "dd MMM yyyy")}</span>
              </div>
            </div>
            <div>
              {u.email === SUPER_ADMIN_EMAIL ? (
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent/20 text-accent">Super Admin</span>
              ) : u.role === "user" ? (
                <Button size="sm" variant="outline" onClick={() => updateRole.mutate({ id: u.id, role: "admin" })}>
                  <ShieldCheck className="w-4 h-4 mr-1" /> Approve Admin
                </Button>
              ) : (
                <Button size="sm" variant="outline" onClick={() => updateRole.mutate({ id: u.id, role: "user" })}>
                  <ShieldX className="w-4 h-4 mr-1" /> Revoke Admin
                </Button>
              )}
            </div>
          </div>
        ))}
        {users.length === 0 && <p className="text-muted-foreground text-center py-8">No users found.</p>}
      </div>
    </div>
  );
};

export default AdminUsers;
