import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import ImageUpload from "./ImageUpload";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

const categories = ["Power Tools", "Hand Tools", "Outdoor Equipment", "Accessories", "Cutting Tools"];
const brands = ["BOSCH", "STIHL", "Stanley", "Black & Decker", "Makita", "MAX"];

type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string | null;
  image_url: string | null;
  is_featured: boolean | null;
};

const emptyProduct = { name: "", brand: "BOSCH", category: "Power Tools", description: "", image_url: null as string | null, is_featured: false };

const AdminProducts = () => {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState(emptyProduct);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const save = useMutation({
    mutationFn: async () => {
      if (editing) {
        const { error } = await supabase.from("products").update(form).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("products").insert(form);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-products"] });
      toast.success(editing ? "Product updated!" : "Product added!");
      setOpen(false);
      setEditing(null);
      setForm(emptyProduct);
    },
    onError: (e: any) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-products"] });
      toast.success("Product deleted!");
    },
  });

  const openEdit = (p: Product) => {
    setEditing(p);
    setForm({ name: p.name, brand: p.brand, category: p.category, description: p.description || "", image_url: p.image_url, is_featured: p.is_featured ?? false });
    setOpen(true);
  };

  const openNew = () => {
    setEditing(null);
    setForm(emptyProduct);
    setOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-bold text-foreground">Products ({products.length})</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew}><Plus className="w-4 h-4 mr-1" />Add Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing ? "Edit Product" : "Add Product"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Input placeholder="Product Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Select value={form.brand} onValueChange={(v) => setForm({ ...form, brand: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{brands.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
              </Select>
              <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
              <Textarea placeholder="Description" value={form.description || ""} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <ImageUpload value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} folder="products" />
              <div className="flex items-center gap-2">
                <Switch checked={form.is_featured ?? false} onCheckedChange={(v) => setForm({ ...form, is_featured: v })} />
                <span className="text-sm text-muted-foreground">Featured Product</span>
              </div>
              <Button onClick={() => save.mutate()} disabled={save.isPending || !form.name} className="w-full">
                {save.isPending ? "Saving..." : editing ? "Update" : "Add"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <div key={p.id} className="bg-card border border-border rounded-lg p-4">
              {p.image_url && <img src={p.image_url} alt={p.name} className="h-32 w-full object-cover rounded mb-3" />}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-primary">{p.brand}</span>
                  <h3 className="font-heading font-semibold text-foreground">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                </div>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" onClick={() => openEdit(p)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => del.mutate(p.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
