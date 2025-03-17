
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Robot, Sparkles, MessageSquareCode, Network } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";

const Intelligence = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Intelligence</h1>
        <p className="text-muted-foreground">
          Powerful AI-driven insights coming soon to transform your marketing strategy
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 text-white mb-12">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cal">
              Meet Your Marketing AI Assistant
            </h2>
            <p className="text-lg opacity-90 mb-6">
              We're building a powerful AI tool that will analyze your marketing data, provide 
              actionable insights, and help you make data-driven decisions with confidence.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email for early access" 
                className="px-4 py-2 rounded-md text-gray-800 w-full sm:w-auto flex-grow" 
              />
              <Button variant="default" className="bg-white text-purple-600 hover:bg-gray-100">
                Join Waitlist
              </Button>
            </form>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 animate-spin-slow blur-sm bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" style={{ animationDuration: '15s' }}></div>
              <div className="absolute inset-4 animate-spin-reverse-slow bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <Brain className="h-24 w-24 text-white" />
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
              <p className="text-muted-foreground">
                Get immediate analysis of your marketing performance across all channels.
              </p>
            </CardContent>
          </Card>
        </FadeInSection>

        <FadeInSection delay={200}>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Robot className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automation</h3>
              <p className="text-muted-foreground">
                Automate reporting and uncover opportunities you might have missed.
              </p>
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
              <p className="text-muted-foreground">
                Receive personalized recommendations to optimize your campaigns.
              </p>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>

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
                    <p className="text-muted-foreground">Our AI integrates with all your marketing platforms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold">AI Analysis</h4>
                    <p className="text-muted-foreground">Advanced algorithms analyze patterns and trends.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold">Get Recommendations</h4>
                    <p className="text-muted-foreground">Receive actionable insights tailored to your business.</p>
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

      <FadeInSection delay={500}>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Be Among The First To Experience It</h3>
          <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
            Our AI Intelligence tools are currently in development. Join our waitlist to be notified
            when we launch and get exclusive early access.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Join the Waitlist
          </Button>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Intelligence;
