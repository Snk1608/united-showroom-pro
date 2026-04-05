import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  value?: string | null;
  onChange: (url: string | null) => void;
  folder?: string;
}

const ImageUpload = ({ value, onChange, folder = "general" }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${folder}/${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from("images").upload(path, file);
      if (error) throw error;
      const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(path);
      onChange(publicUrl);
      toast.success("Image uploaded!");
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {value ? (
        <div className="relative inline-block">
          <img src={value} alt="Uploaded" className="h-32 w-auto rounded-lg border border-border object-cover" />
          <button onClick={() => onChange(null)} className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-0.5">
            <X className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg text-sm text-muted-foreground hover:bg-muted/80 transition-colors">
          <Upload className="w-4 h-4" />
          {uploading ? "Uploading..." : "Upload Image"}
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
        </label>
      )}
    </div>
  );
};

export default ImageUpload;
