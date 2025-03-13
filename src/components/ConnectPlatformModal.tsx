
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ConnectPlatformModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platformName: string;
  platformIcon: React.ReactNode;
}

export const ConnectPlatformModal: React.FC<ConnectPlatformModalProps> = ({
  open,
  onOpenChange,
  platformName,
  platformIcon,
}) => {
  const { toast } = useToast();
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string>("");
  const [apiSecret, setApiSecret] = useState<string>("");

  const handleConnect = () => {
    if (!apiKey || !apiSecret) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      
      // Success toast
      toast({
        title: "Connection successful",
        description: `${platformName} has been connected to your account.`,
      });
    }, 1500);
  };

  const handleFinish = () => {
    onOpenChange(false);
    setStep(1);
    setApiKey("");
    setApiSecret("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center mb-2">
            <div className="mr-3 h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center">
              {platformIcon}
            </div>
            <DialogTitle>Connect to {platformName}</DialogTitle>
          </div>
          <DialogDescription>
            Connect your {platformName} account to analyze performance and automate reporting.
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <>
            <div className="grid gap-6 py-4">
              <div className="grid gap-3">
                <Label htmlFor="api-key">API Key</Label>
                <Input
                  id="api-key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your API key"
                />
                <p className="text-xs text-muted-foreground">
                  You can find your API key in your {platformName} account settings.
                </p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="api-secret">API Secret</Label>
                <Input
                  id="api-secret"
                  type="password"
                  value={apiSecret}
                  onChange={(e) => setApiSecret(e.target.value)}
                  placeholder="Enter your API secret"
                />
                <p className="text-xs text-muted-foreground">
                  The API secret is used to authenticate your requests.
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={handleConnect} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connecting
                  </>
                ) : (
                  "Connect"
                )}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Connection Successful</h3>
              <p className="text-center text-muted-foreground mb-4">
                Your {platformName} account has been successfully connected. You can now view your analytics and manage your campaigns from the dashboard.
              </p>
              
              <div className="w-full max-w-xs bg-muted/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Account</span>
                  <span className="text-sm">demo@example.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <span className="text-sm flex items-center text-emerald-600">
                    <Check className="mr-1 h-3 w-3" /> Active
                  </span>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button onClick={handleFinish}>
                Done
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConnectPlatformModal;
