
import { Routes, Route, useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

// Pages
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import NotFound from "@/pages/NotFound";
import Integrations from "@/pages/Integrations";
import MetaAds from "@/pages/MetaAds";
import GoogleAds from "@/pages/GoogleAds";
import Account from "@/pages/Account";
import HelpSupport from "@/pages/HelpSupport";
import Campaigns from "@/pages/Campaigns";
import Performance from "@/pages/Performance";
import Intelligence from "@/pages/Intelligence";

const AppRoutes = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const { open } = useSidebar();
  const isAuthRoute = ['/login', '/register', '/signup', '/forgot-password', '/reset-password'].includes(location.pathname);
  
  if (isAuthRoute) {
    return (
      <AuthLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthLayout>
    );
  }
  
  return (
    <MainLayout sidebarOpen={open} isMobile={isMobile}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/meta-ads" element={<MetaAds />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/account" element={<Account />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
