import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Zap, 
  Bot, 
  Sparkles, 
  MessageSquareCode, 
  Network, 
  Search,
  List,
  ChartPie
} from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Intelligence = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Intelligence</h1>
        <p className="text-muted-foreground">
          Powerful AI-driven insights designed to transform your marketing strategy
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-8 mb-12">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cal">
              Meet Your Marketing AI Assistant
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              We're building a powerful AI tool that analyzes your marketing data, provides 
              actionable insights, and helps you make data-driven decisions with confidence.
            </p>
            <p className="text-muted-foreground mb-6">
              Our AI assistant uses advanced machine learning algorithms to identify patterns, 
              predict trends, and recommend optimizations across all your marketing channels.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email for early access" 
                className="px-4 py-2 rounded-md border border-input bg-background w-full sm:w-auto flex-grow" 
              />
              <Button variant="default">
                Join Waitlist
              </Button>
            </form>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-slate-100 rounded-full"></div>
              <div className="absolute inset-4 bg-slate-200 rounded-full"></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <Brain className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FadeInSection>
        <h3 className="text-2xl font-bold mb-6 text-center">What Our AI Will Do For You</h3>
      </FadeInSection>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FadeInSection delay={100}>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Insights</h3>
              <p className="text-muted-foreground mb-3">
                Get immediate analysis of your marketing performance across all channels.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  Real-time performance metrics
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  Anomaly detection
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  Comparative analysis
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeInSection>

        <FadeInSection delay={200}>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Bot className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automation</h3>
              <p className="text-muted-foreground mb-3">
                Automate reporting and uncover opportunities you might have missed.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  Scheduled insight reports
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  Automated campaign adjustments
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  Budget optimization
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeInSection>

        <FadeInSection delay={300}>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Optimization</h3>
              <p className="text-muted-foreground mb-3">
                Receive personalized recommendations to optimize your campaigns.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <span className="mr-2 text-pink-500">•</span>
                  A/B testing insights
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-pink-500">•</span>
                  Creative performance analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-pink-500">•</span>
                  Audience targeting suggestions
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>

      <FadeInSection delay={350}>
        <div className="bg-slate-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Core Intelligence Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                  <Search className="h-5 w-5 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Predictive Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leverage machine learning to forecast campaign performance, identify trends before they happen, 
                  and allocate resources more effectively based on predicted outcomes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <MessageSquareCode className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Content Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI-powered content analysis to identify which messages resonate with your audience, 
                  optimize copy for better engagement, and generate content ideas based on performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                  <ChartPie className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Cross-Channel Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Holistic analysis across all marketing channels to understand customer journeys, 
                  identify attribution patterns, and optimize your marketing mix for maximum ROI.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <Network className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Competitive Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analyze competitor strategies, benchmark your performance against industry standards, 
                  and identify market gaps and opportunities for your brand to capitalize on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold">Connect Your Data</h4>
                    <p className="text-muted-foreground">Our AI integrates with all your marketing platforms including Google Ads, Meta, Email services, and analytics tools to create a unified view of your marketing ecosystem.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold">AI Analysis</h4>
                    <p className="text-muted-foreground">Advanced algorithms analyze patterns and trends across historical and real-time data, applying machine learning models trained on marketing performance data across industries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold">Get Recommendations</h4>
                    <p className="text-muted-foreground">Receive actionable insights tailored to your specific business goals, with clear explanations of why each recommendation matters and how to implement it effectively.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-purple-900 flex items-center justify-center">
                  <MessageSquareCode className="w-16 h-16 text-white opacity-30" />
                  <Network className="w-24 h-24 text-white opacity-20 absolute -bottom-4 -right-4" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full bg-black bg-opacity-50 p-4 rounded-md border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                      <p>$ analyzing data...</p>
                      <p>$ discovering patterns...</p>
                      <p className="animate-pulse">$ generating insights_</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={450}>
        <div className="mb-12 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <Collapsible 
              open={isOpen} 
              onOpenChange={setIsOpen}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
                <span>When will the AI Intelligence tool be available?</span>
                <span>{isOpen ? '−' : '+'}</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
                We're currently in the final stages of development and testing. We anticipate a beta release for waitlist members within the next quarter, with full release shortly after.
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border border-gray-200 rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
                <span>What marketing platforms will be supported?</span>
                <span>+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
                At launch, we'll support Google Ads, Meta Ads, Google Analytics, and major email marketing platforms. Additional integrations will be added based on user needs and feedback.
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border border-gray-200 rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
                <span>How does the AI make recommendations?</span>
                <span>+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
                Our AI analyzes your historical data, current performance, industry benchmarks, and emerging trends to generate recommendations. Each insight is accompanied by an explanation of the reasoning behind it and the expected impact.
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border border-gray-200 rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
                <span>Will the AI automatically make changes to my campaigns?</span>
                <span>+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
                While the AI can provide automated optimizations, you'll have full control over which recommendations to implement. You can choose between manual approval, scheduled implementation, or fully automated optimization with customizable guardrails.
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={500}>
        <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Be Among The First To Experience It</h3>
          <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
            Our AI Intelligence tools are currently in development. Join our waitlist to be notified
            when we launch and get exclusive early access to our beta program with special introductory pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-md border border-gray-300 w-full" 
            />
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Join the Waitlist
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy and will never share your information with third parties.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Intelligence;
