import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });
      if (error) throw error;
      setSent(true);
      toast.success("Password reset link sent!");
    } catch (err: any) {
      toast.error(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-elevated text-center">
          <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Check Your Email</h1>
          <p className="text-muted-foreground mb-4">
            We've sent a password reset link to <strong>{email}</strong>.
          </p>
          <Link to="/admin/login">
            <Button variant="outline">Back to Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8 shadow-elevated">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Forgot Password</h1>
          <p className="text-sm text-muted-foreground">Enter your email to receive a reset link</p>
        </div>
        <form onSubmit={handleReset} className="space-y-4">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/admin/login" className="text-sm text-primary hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
