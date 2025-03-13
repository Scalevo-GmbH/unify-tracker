
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter 
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { PieChart, ArrowUpRight } from "lucide-react";

interface CurrentSubscriptionProps {
  currentPlan: {
    name: string;
    renewDate: string;
    amount: string;
  };
  onCancelSubscription: () => void;
}

const CurrentSubscription: React.FC<CurrentSubscriptionProps> = ({
  currentPlan,
  onCancelSubscription
}) => {
  const { toast } = useToast();

  const handleCancelSubscription = () => {
    onCancelSubscription();
    toast({
      title: "Subscription canceled",
      description: "Your subscription has been canceled. It will remain active until the end of the billing period."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChart className="h-5 w-5" />
          Current Subscription
        </CardTitle>
        <CardDescription>
          Manage your current subscription plan and billing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                {currentPlan.name} Plan
                <Badge variant="outline" className="ml-2">Active</Badge>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Renews on {currentPlan.renewDate}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">Cancel Subscription</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Cancel Subscription</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to cancel your subscription? Your plan will remain active until the end of the current billing period.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="mt-4">
                    <Button variant="outline" className="mr-2">Keep Subscription</Button>
                    <Button variant="destructive" onClick={handleCancelSubscription}>
                      Cancel Subscription
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button size="sm" className="gap-1">
                Billing History
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <h3 className="font-medium mb-1">Payment Method</h3>
          <div className="flex items-center">
            <div className="bg-card p-2 rounded border">
              <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="25" rx="4" fill="#252525"/>
                <circle cx="15" cy="12" r="5" fill="#EB001B" fillOpacity="0.8"/>
                <circle cx="25" cy="12" r="5" fill="#F79E1B" fillOpacity="0.8"/>
                <path d="M20 16C21.0544 14.5675 21.0544 9.43254 20 8C18.9456 9.43254 18.9456 14.5675 20 16Z" fill="#FF5F00"/>
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Mastercard ending in 4242</p>
              <p className="text-xs text-muted-foreground">Expires 12/2025</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentSubscription;
