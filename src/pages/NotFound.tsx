
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-2xl w-full rounded-xl overflow-hidden shadow-elevated bg-white">
        <div className="p-6 md:p-10">
          <FadeInSection>
            <div className="flex items-center justify-center mb-6">
              <div className="size-16 rounded-full flex items-center justify-center bg-amber-100 text-amber-600 animate-pulse">
                <AlertTriangle className="size-8" />
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-marketing-purple to-marketing-blue bg-clip-text text-transparent">
              404
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={400}>
            <p className="text-xl text-center text-gray-600 mb-8">
              Oops! We couldn't find the page you're looking for.
            </p>
          </FadeInSection>
          
          <FadeInSection delay={600}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Button asChild variant="default" className="gap-2">
                <Link to="/">
                  <Home className="size-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/">
                  <ArrowLeft className="size-4" />
                  Go Back
                </Link>
              </Button>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={800}>
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-gray-400">
                      <Search className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">
                        Looking for something?
                      </h3>
                      <p className="text-sm text-gray-500">
                        The page "{location.pathname}" doesn't exist. Check the URL or navigate 
                        back to the homepage to find what you're looking for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
