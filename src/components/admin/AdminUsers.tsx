import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ShieldX } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const AdminUsers = () => {
  const qc = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data, error } = await supabase.from("user_roles").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
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
              <p className="text-sm font-mono text-foreground">{u.user_id}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${u.role === "admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {u.role}
                </span>
                <span className="text-xs text-muted-foreground">{format(new Date(u.created_at), "dd MMM yyyy")}</span>
              </div>
            </div>
            <div>
              {u.role === "user" ? (
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
