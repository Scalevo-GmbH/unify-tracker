
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, LifeBuoy } from "lucide-react";
import useTranslation from "@/hooks/use-translation";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('contactTitle')}</CardTitle>
          <CardDescription>{t('contactDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">{t('nameLabel')}</label>
                <Input id="name" placeholder={t('nameLabel')} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">{t('emailLabel')}</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">{t('subjectLabel')}</label>
              <Input id="subject" placeholder={t('subjectLabel')} />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">{t('messageLabel')}</label>
              <Textarea 
                id="message" 
                placeholder={t('messageLabel')} 
                rows={5} 
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">{t('sendMessage')}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('otherWaysTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">{t('emailContact')}</h3>
              <p className="text-muted-foreground">support@scalevo.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">{t('liveChatContact')}</h3>
              <p className="text-muted-foreground">{t('liveChatHours')}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <LifeBuoy className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">{t('phoneContact')}</h3>
              <p className="text-muted-foreground">{t('phoneNumber')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
