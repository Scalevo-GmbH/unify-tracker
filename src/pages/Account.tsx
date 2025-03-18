
import React, { useState } from "react";
import AccountSettings from "@/components/account/AccountSettings";
import SubscriptionManagement from "@/components/account/SubscriptionManagement";
import PaymentMethods from "@/components/account/PaymentMethods";

const Account = () => {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Account</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <div className="dashboard-tabs mb-8">
        <button
          className={`dashboard-tab ${activeTab === "settings" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "settings" ? "active" : "inactive"}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
        <button
          className={`dashboard-tab ${activeTab === "subscriptions" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "subscriptions" ? "active" : "inactive"}
          onClick={() => setActiveTab("subscriptions")}
        >
          Subscriptions
        </button>
        <button
          className={`dashboard-tab ${activeTab === "payment" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "payment" ? "active" : "inactive"}
          onClick={() => setActiveTab("payment")}
        >
          Payment Methods
        </button>
      </div>

      {activeTab === "settings" && <AccountSettings />}
      {activeTab === "subscriptions" && <SubscriptionManagement />}
      {activeTab === "payment" && <PaymentMethods />}
    </div>
  );
};

export default Account;
