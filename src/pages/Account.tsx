
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountSettings from "@/components/account/AccountSettings";
import SubscriptionManagement from "@/components/account/SubscriptionManagement";
import PaymentMethods from "@/components/account/PaymentMethods";
import useTranslation from "@/hooks/use-translation";
import { Settings, CreditCard, Bookmark } from "lucide-react";

const Account = () => {
  const [activeTab, setActiveTab] = useState("settings");
  const { t } = useTranslation();

  // Create a type-safe handler for tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="page-title">{t('account')}</h1>
        <p className="page-description">{t('accountManage')}</p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <div className="dashboard-tabs">
          <button 
            className={`dashboard-tab ${activeTab === "settings" ? "data-[state=active]" : "data-[state=inactive]"}`}
            data-state={activeTab === "settings" ? "active" : "inactive"}
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="h-4 w-4 mr-2" />
            {t('settings')}
          </button>
          <button 
            className={`dashboard-tab ${activeTab === "subscriptions" ? "data-[state=active]" : "data-[state=inactive]"}`}
            data-state={activeTab === "subscriptions" ? "active" : "inactive"}
            onClick={() => setActiveTab("subscriptions")}
          >
            <Bookmark className="h-4 w-4 mr-2" />
            {t('subscriptions')}
          </button>
          <button 
            className={`dashboard-tab ${activeTab === "payment" ? "data-[state=active]" : "data-[state=inactive]"}`}
            data-state={activeTab === "payment" ? "active" : "inactive"}
            onClick={() => setActiveTab("payment")}
          >
            <CreditCard className="h-4 w-4 mr-2" />
            {t('paymentMethods')}
          </button>
        </div>

        <TabsContent value="settings" className="mt-6">
          <AccountSettings />
        </TabsContent>
        <TabsContent value="subscriptions" className="mt-6">
          <SubscriptionManagement />
        </TabsContent>
        <TabsContent value="payment" className="mt-6">
          <PaymentMethods />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Account;
