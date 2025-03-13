
import React, { useState } from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Plus, Edit2, Trash, Check, AlertCircle, ChevronDown } from "lucide-react";
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface PaymentCardProps {
  id: string;
  type: "visa" | "mastercard" | "amex";
  last4: string;
  expMonth: number;
  expYear: number;
  isDefault?: boolean;
  onSetDefault: (id: string) => void;
  onDelete: (id: string) => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  id,
  type,
  last4,
  expMonth,
  expYear,
  isDefault = false,
  onSetDefault,
  onDelete
}) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSetDefault = () => {
    onSetDefault(id);
    toast({
      title: "Default payment method updated",
      description: `Card ending in ${last4} is now your default payment method.`
    });
  };

  const handleDelete = () => {
    onDelete(id);
    setIsDeleteDialogOpen(false);
    toast({
      title: "Payment method removed",
      description: `Card ending in ${last4} has been removed from your account.`
    });
  };

  const getCardIcon = () => {
    switch (type) {
      case 'visa':
        return (
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="25" rx="4" fill="#EDF2F7"/>
            <path d="M16 17H14L15.5 8H17.5L16 17Z" fill="#1A1F36"/>
            <path d="M23 8.5C22.5 8.2 21.7 8 20.8 8C18.8 8 17.4 9.1 17.4 10.6C17.4 11.8 18.5 12.4 19.3 12.8C20.1 13.2 20.4 13.5 20.4 13.9C20.4 14.5 19.7 14.8 19.1 14.8C18.3 14.8 17.9 14.7 17.2 14.3L16.9 14.1L16.6 16C17.2 16.3 18.2 16.5 19.2 16.5C21.3 16.5 22.7 15.4 22.7 13.8C22.7 12.8 22.1 12.1 20.9 11.5C20.2 11.1 19.7 10.8 19.7 10.4C19.7 10 20.1 9.7 20.8 9.7C21.5 9.7 22 9.9 22.3 10L22.5 10.1L22.8 8.6L23 8.5Z" fill="#1A1F36"/>
            <path d="M26.6 13C26.7 12.6 27.3 11 27.3 11C27.3 11 27.4 10.7 27.5 10.5L27.6 10.9C27.6 10.9 28 12.5 28.1 13C27.6 13 27 13 26.6 13ZM29.1 8H27.6C27.1 8 26.7 8.2 26.5 8.7L23.5 17H25.7C25.7 17 26 16.1 26.1 15.8C26.3 15.8 28.5 15.8 28.8 15.8C28.9 16.2 29 17 29 17H31L29.1 8Z" fill="#1A1F36"/>
            <path d="M13 8L11 14.1L10.8 13.1C10.4 11.9 9.3 10.6 8 9.9L9.9 17H12.1L15.2 8H13Z" fill="#1A1F36"/>
          </svg>
        );
      case 'mastercard':
        return (
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="25" rx="4" fill="#252525"/>
            <circle cx="15" cy="12" r="5" fill="#EB001B" fillOpacity="0.8"/>
            <circle cx="25" cy="12" r="5" fill="#F79E1B" fillOpacity="0.8"/>
            <path d="M20 16C21.0544 14.5675 21.0544 9.43254 20 8C18.9456 9.43254 18.9456 14.5675 20 16Z" fill="#FF5F00"/>
          </svg>
        );
      case 'amex':
        return (
          <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="25" rx="4" fill="#016FD0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 15.5V9.5H13.5L14.5 11L15.5 9.5H32V15.5H8Z" fill="#0055A5"/>
            <path d="M9 14H11L12 12L13 14H15L13.5 11L15 8H13L12 10L11 8H9L10.5 11L9 14Z" fill="white"/>
            <path d="M16 14V8H21V9.5H17.5V10.25H20.5V11.75H17.5V12.5H21V14H16Z" fill="white"/>
            <path d="M22 14V8H24L26.5 12V8H28.5V14H26.5L24 10V14H22Z" fill="white"/>
          </svg>
        );
      default:
        return <CreditCard className="h-6 w-6" />;
    }
  };

  return (
    <div className={`border rounded-lg p-4 ${isDefault ? 'bg-muted/20 border-primary/50' : ''}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {getCardIcon()}
        </div>
        <div className="ml-3 flex-1">
          <div className="flex items-center justify-between">
            <p className="font-medium">
              {type.charAt(0).toUpperCase() + type.slice(1)} •••• {last4}
              {isDefault && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                  Default
                </span>
              )}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Expires {expMonth}/{expYear}</p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {!isDefault && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleSetDefault}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Set as default
                </Button>
              )}
              <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full justify-start text-destructive hover:text-destructive"
                  >
                    <Trash className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Remove Payment Method</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to remove this card ending in {last4}? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="mt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsDeleteDialogOpen(false)}
                      className="mr-2"
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="destructive" 
                      onClick={handleDelete}
                    >
                      Remove Card
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  const { toast } = useToast();
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentCardProps[]>([
    {
      id: "pm_1",
      type: "visa",
      last4: "4242",
      expMonth: 12,
      expYear: 2024,
      isDefault: true,
      onSetDefault: () => {},
      onDelete: () => {}
    },
    {
      id: "pm_2",
      type: "mastercard",
      last4: "5555",
      expMonth: 10,
      expYear: 2025,
      isDefault: false,
      onSetDefault: () => {},
      onDelete: () => {}
    }
  ]);

  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(pm => ({
      ...pm,
      isDefault: pm.id === id
    })));
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally make an API call to add the card
    const newCard = {
      id: `pm_${Math.floor(Math.random() * 1000)}`,
      type: "visa" as const,
      last4: "1234",
      expMonth: 12,
      expYear: 2025,
      isDefault: false,
      onSetDefault: () => {},
      onDelete: () => {}
    };
    
    setPaymentMethods([...paymentMethods, newCard]);
    setIsAddingCard(false);
    
    toast({
      title: "Payment method added",
      description: "Your new card has been added successfully."
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Methods
          </CardTitle>
          <CardDescription>
            Manage your payment methods and billing information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <PaymentCard
              key={method.id}
              {...method}
              onSetDefault={handleSetDefault}
              onDelete={handleDelete}
            />
          ))}

          {isAddingCard ? (
            <Card>
              <CardHeader>
                <CardTitle>Add New Payment Method</CardTitle>
                <CardDescription>Enter your card information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddCard} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiration Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsAddingCard(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Add Card</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Button 
              variant="outline" 
              onClick={() => setIsAddingCard(true)}
              className="w-full justify-center py-6 border-dashed"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Billing Information
          </CardTitle>
          <CardDescription>
            Manage your billing address and tax information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => toast({
            title: "Billing information updated",
            description: "Your billing information has been saved successfully."
          })}>
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentMethods;
