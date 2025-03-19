
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full shadow-sm border-border">
        <CardHeader className="text-center pb-0">
          <div className="mx-auto mb-4 size-14 rounded-full flex items-center justify-center bg-amber-50 text-amber-500">
            <AlertTriangle className="size-7" />
          </div>
          <h1 className="page-title text-foreground">404</h1>
          <p className="text-muted-foreground">Page not found</p>
        </CardHeader>
        
        <CardContent className="text-center pt-6">
          <p className="text-sm text-muted-foreground mb-6">
            The page <span className="font-medium text-foreground">"{location.pathname}"</span> doesn't exist.
          </p>
        </CardContent>
        
        <CardFooter className="flex justify-center gap-4 pb-6">
          <Button asChild variant="default" size="sm" className="gap-2">
            <Link to="/">
              <Home className="size-4" />
              Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="gap-2">
            <Link to="javascript:history.back()">
              <ArrowLeft className="size-4" />
              Back
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
