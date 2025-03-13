
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 
import { CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const BillingAddressForm = () => {
  const { toast } = useToast();

  const handleSaveChanges = () => {
    toast({
      title: "Billing information updated",
      description: "Your billing information has been saved successfully."
    });
  };

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="billingName">Name</Label>
            <Input id="billingName" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="billingEmail">Email</Label>
            <Input id="billingEmail" type="email" defaultValue="john.doe@example.com" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company (Optional)</Label>
          <Input id="company" defaultValue="Acme Inc." />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" defaultValue="123 Main St" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" defaultValue="San Francisco" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" defaultValue="CA" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input id="zip" defaultValue="94103" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" defaultValue="United States" />
        </div>
      </div>
      <CardFooter className="flex justify-end mt-6">
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </CardFooter>
    </>
  );
};

export default BillingAddressForm;
