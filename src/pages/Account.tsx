
import React, { useState } from "react";
import AccountSettings from "@/components/account/AccountSettings";
import SubscriptionManagement from "@/components/account/SubscriptionManagement";
import PaymentMethods from "@/components/account/PaymentMethods";
import useTranslation from "@/hooks/use-translation";

const Account = () => {
  const [activeTab, setActiveTab] = useState("settings");
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('account')}</h1>
        <p className="text-muted-foreground">{t('accountManage')}</p>
      </div>

      <div className="dashboard-tabs mb-8">
        <button
          className={`dashboard-tab ${activeTab === "settings" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "settings" ? "active" : "inactive"}
          onClick={() => setActiveTab("settings")}
        >
          {t('settings')}
        </button>
        <button
          className={`dashboard-tab ${activeTab === "subscriptions" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "subscriptions" ? "active" : "inactive"}
          onClick={() => setActiveTab("subscriptions")}
        >
          {t('subscriptions')}
        </button>
        <button
          className={`dashboard-tab ${activeTab === "payment" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "payment" ? "active" : "inactive"}
          onClick={() => setActiveTab("payment")}
        >
          {t('paymentMethods')}
        </button>
      </div>

      {activeTab === "settings" && <AccountSettings />}
      {activeTab === "subscriptions" && <SubscriptionManagement />}
      {activeTab === "payment" && <PaymentMethods />}
    </div>
  );
};

export default Account;
