
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import Integrations from "./pages/Integrations";
import MetaAds from "./pages/MetaAds";
import GoogleAds from "./pages/GoogleAds";
import Account from "./pages/Account";
import HelpSupport from "./pages/HelpSupport";
import Campaigns from "./pages/Campaigns";
import Performance from "./pages/Performance";
import Intelligence from "./pages/Intelligence";
import Navbar from "./components/Navbar";
import MainSidebar from "./components/Sidebar";
import { LanguageProvider } from "./hooks/use-language";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import "./App.css";

const queryClient = new QueryClient();

const AppLayout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isAuthRoute = ['/login', '/register', '/signup', '/forgot-password', '/reset-password'].includes(location.pathname);
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F6F6F7]">
        {!isAuthRoute && (
          <>
            <MainSidebar className="hidden md:block" />
            <div className="flex flex-col flex-1">
              <Navbar />
              <main className="flex-1 p-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
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
              </main>
            </div>
          </>
        )}
        
        {isAuthRoute && (
          <main className="flex-1">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        )}
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
