import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ImageUpload from "./ImageUpload";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";

const emptyBanner = { title: "", description: "", image_url: null as string | null, cta_text: "Enquire Now", cta_link: "/enquiry", sort_order: 0, is_active: true };

const AdminBanners = () => {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState(emptyBanner);

  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["admin-banners"],
    queryFn: async () => {
      const { data, error } = await supabase.from("banners").select("*").order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const save = useMutation({
    mutationFn: async () => {
      if (editing) {
        const { error } = await supabase.from("banners").update(form).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("banners").insert(form);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-banners"] });
      toast.success(editing ? "Banner updated!" : "Banner added!");
      setOpen(false);
      setEditing(null);
      setForm(emptyBanner);
    },
    onError: (e: any) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("banners").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-banners"] });
      toast.success("Banner deleted!");
    },
  });

  const openEdit = (b: any) => {
    setEditing(b);
    setForm({ title: b.title, description: b.description || "", image_url: b.image_url, cta_text: b.cta_text || "Enquire Now", cta_link: b.cta_link || "/enquiry", sort_order: b.sort_order || 0, is_active: b.is_active ?? true });
    setOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-bold text-foreground">Banners ({banners.length})</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditing(null); setForm(emptyBanner); setOpen(true); }}>
              <Plus className="w-4 h-4 mr-1" />Add Banner
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editing ? "Edit Banner" : "Add Banner"}</DialogTitle></DialogHeader>
            <div className="space-y-4 mt-4">
              <Input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <Input placeholder="Description" value={form.description || ""} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <ImageUpload value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} folder="banners" />
              <p className="text-xs text-muted-foreground">Recommended size: <strong>1920 × 540 px</strong> (landscape, 16:4.5 ratio). Use JPG for best quality.</p>
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Button Text" value={form.cta_text || ""} onChange={(e) => setForm({ ...form, cta_text: e.target.value })} />
                <Input placeholder="Button Link" value={form.cta_link || ""} onChange={(e) => setForm({ ...form, cta_link: e.target.value })} />
              </div>
              <Input type="number" placeholder="Sort Order" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
              <div className="flex items-center gap-2">
                <Switch checked={form.is_active} onCheckedChange={(v) => setForm({ ...form, is_active: v })} />
                <span className="text-sm text-muted-foreground">Active</span>
              </div>
              <Button onClick={() => save.mutate()} disabled={save.isPending || !form.title} className="w-full">
                {save.isPending ? "Saving..." : editing ? "Update" : "Add"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? <p className="text-muted-foreground">Loading...</p> : (
        <div className="space-y-3">
          {banners.map((b) => (
            <div key={b.id} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
              <GripVertical className="w-4 h-4 text-muted-foreground" />
              {b.image_url && <img src={b.image_url} alt={b.title} className="h-16 w-24 object-cover rounded" />}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{b.title}</h3>
                <p className="text-xs text-muted-foreground">{b.description}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${b.is_active ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                {b.is_active ? "Active" : "Inactive"}
              </span>
              <div className="flex gap-1">
                <Button size="icon" variant="ghost" onClick={() => openEdit(b)}><Pencil className="w-4 h-4" /></Button>
                <Button size="icon" variant="ghost" onClick={() => del.mutate(b.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBanners;
