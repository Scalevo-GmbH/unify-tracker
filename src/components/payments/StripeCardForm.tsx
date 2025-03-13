
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Input,
  Label,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "@/components/ui";
import { useToast } from "@/hooks/use-toast";

// This component is a placeholder for a Stripe Elements form
// We'll replace these inputs with Stripe Elements when we integrate Stripe
interface StripeCardFormProps {
  onSuccess: (paymentMethod: any) => void;
  onCancel: () => void;
}

const StripeCardForm: React.FC<StripeCardFormProps> = ({ onSuccess, onCancel }) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would normally create a payment method with Stripe
    // For now, we'll simulate a successful payment method creation
    const mockPaymentMethod = {
      id: `pm_${Math.floor(Math.random() * 1000)}`,
      type: "visa" as const,
      last4: "1234",
      expMonth: 12,
      expYear: 2025,
      isDefault: false
    };
    
    onSuccess(mockPaymentMethod);
    
    toast({
      title: "Payment method added",
      description: "Your new card has been added successfully."
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Payment Method</CardTitle>
        <CardDescription>
          Enter your card information
          {/* When Stripe is integrated, we'll add a note about secure processing */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardName">Cardholder Name</Label>
            <Input id="cardName" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            {/* This will be replaced with Stripe CardElement */}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiration Date</Label>
              <Input id="expiry" placeholder="MM/YY" required />
              {/* This will be replaced with Stripe ExpiryElement */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" required />
              {/* This will be replaced with Stripe CVCElement */}
            </div>
          </div>
          
          <div className="pt-4 flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Add Card</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default StripeCardForm;
