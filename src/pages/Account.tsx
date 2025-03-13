
import React, { useState } from "react";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>
        
        <TabsContent value="settings">
          <AccountSettings />
        </TabsContent>
        
        <TabsContent value="subscriptions">
          <SubscriptionManagement />
        </TabsContent>
        
        <TabsContent value="payment">
          <PaymentMethods />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Account;
