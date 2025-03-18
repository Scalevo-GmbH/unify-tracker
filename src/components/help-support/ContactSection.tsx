
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, LifeBuoy } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                placeholder="Describe your issue or question in detail" 
                rows={5} 
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Ways to Reach Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">support@scalevo.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-muted-foreground">Available Mon-Fri, 9am-6pm UTC</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <LifeBuoy className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Phone Support</h3>
              <p className="text-muted-foreground">+1 (800) 123-4567</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
