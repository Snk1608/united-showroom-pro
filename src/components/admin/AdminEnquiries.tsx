import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Check, Trash2, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const AdminEnquiries = () => {
  const qc = useQueryClient();

  const { data: enquiries = [], isLoading } = useQuery({
    queryKey: ["admin-enquiries"],
    queryFn: async () => {
      const { data, error } = await supabase.from("enquiries").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const markRead = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("enquiries").update({ is_read: true }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-enquiries"] }),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("enquiries").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-enquiries"] });
      toast.success("Enquiry deleted!");
    },
  });

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-foreground mb-6">Enquiries ({enquiries.length})</h2>
      <div className="space-y-3">
        {enquiries.map((e) => (
          <div key={e.id} className={`bg-card border rounded-lg p-4 ${e.is_read ? "border-border" : "border-primary/30 bg-primary/5"}`}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{e.name}</h3>
                <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                  {e.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{e.phone}</span>}
                  {e.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{e.email}</span>}
                </div>
                {e.product && <p className="text-xs text-primary mt-1">Product: {e.product}</p>}
                {e.message && <p className="text-sm text-foreground/80 mt-2">{e.message}</p>}
                <p className="text-xs text-muted-foreground mt-2">{format(new Date(e.created_at), "dd MMM yyyy, hh:mm a")}</p>
              </div>
              <div className="flex gap-1">
                {!e.is_read && (
                  <Button size="icon" variant="ghost" onClick={() => markRead.mutate(e.id)} title="Mark as read">
                    <Check className="w-4 h-4 text-green-600" />
                  </Button>
                )}
                <Button size="icon" variant="ghost" onClick={() => del.mutate(e.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        {enquiries.length === 0 && <p className="text-muted-foreground text-center py-8">No enquiries yet.</p>}
      </div>
    </div>
  );
};

export default AdminEnquiries;
