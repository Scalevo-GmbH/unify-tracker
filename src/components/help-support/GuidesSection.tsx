
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { BookOpen, MessageSquare, HelpCircle, LifeBuoy } from "lucide-react";

const GuidesSection: React.FC = () => {
  const guides = [
    {
      title: "Getting Started with Scalevo",
      description: "Learn the basics of navigating and using the Scalevo platform",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Setting Up Your First Campaign",
      description: "A step-by-step guide to creating and launching your first ad campaign",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
    },
    {
      title: "Understanding Performance Metrics",
      description: "Learn how to interpret and act on campaign performance data",
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Optimizing Ad Campaigns",
      description: "Advanced techniques to improve your campaign performance",
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Guides</CardTitle>
          <CardDescription>Detailed guides to help you get the most out of our platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="flex items-start p-6 gap-4">
                  <div className="mt-1">{guide.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{guide.title}</h3>
                    <p className="text-muted-foreground text-sm">{guide.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuidesSection;
