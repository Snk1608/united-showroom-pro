import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "@/hooks/useAdmin";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, LayoutDashboard, Package, Image, Tag, MessageSquare, Users } from "lucide-react";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminBanners from "@/components/admin/AdminBanners";
import AdminOffers from "@/components/admin/AdminOffers";
import AdminEnquiries from "@/components/admin/AdminEnquiries";
import AdminUsers from "@/components/admin/AdminUsers";

const Admin = () => {
  const { isAdmin, isSuperAdmin, loading, signOut } = useAdmin();
  const [tab, setTab] = useState("dashboard");

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>;
  if (!isAdmin) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
        <h1 className="font-heading text-xl font-bold text-foreground">United Groups Admin</h1>
        <Button variant="outline" size="sm" onClick={signOut}>
          <LogOut className="w-4 h-4 mr-1" /> Logout
        </Button>
      </div>
      <div className="container py-6">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-6 flex-wrap h-auto gap-1">
            <TabsTrigger value="dashboard"><LayoutDashboard className="w-4 h-4 mr-1" />Dashboard</TabsTrigger>
            <TabsTrigger value="products"><Package className="w-4 h-4 mr-1" />Products</TabsTrigger>
            <TabsTrigger value="banners"><Image className="w-4 h-4 mr-1" />Banners</TabsTrigger>
            <TabsTrigger value="offers"><Tag className="w-4 h-4 mr-1" />Offers</TabsTrigger>
            <TabsTrigger value="enquiries"><MessageSquare className="w-4 h-4 mr-1" />Enquiries</TabsTrigger>
            {isSuperAdmin && <TabsTrigger value="users"><Users className="w-4 h-4 mr-1" />Users</TabsTrigger>}
          </TabsList>
          <TabsContent value="dashboard"><AdminDashboard /></TabsContent>
          <TabsContent value="products"><AdminProducts /></TabsContent>
          <TabsContent value="banners"><AdminBanners /></TabsContent>
          <TabsContent value="offers"><AdminOffers /></TabsContent>
          <TabsContent value="enquiries"><AdminEnquiries /></TabsContent>
          {isSuperAdmin && <TabsContent value="users"><AdminUsers /></TabsContent>}
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
