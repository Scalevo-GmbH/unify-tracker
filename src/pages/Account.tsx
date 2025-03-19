
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

      <Tabs defaultValue="settings" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full">
          <TabsTrigger value="settings">
            {t('settings')}
          </TabsTrigger>
          <TabsTrigger value="subscriptions">
            {t('subscriptions')}
          </TabsTrigger>
          <TabsTrigger value="payment">
            {t('paymentMethods')}
          </TabsTrigger>
        </TabsList>

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
