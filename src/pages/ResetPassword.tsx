import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Eye, EyeOff, Lock, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const passwordSchema = z
  .object({
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof passwordSchema>;

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (!token) {
      toast({
        title: "Invalid reset link",
        description: "The password reset link is invalid or has expired.",
        variant: "destructive",
      });
      return;
    }
    
    setIsTokenValid(true);
  }, [token, toast]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const onSubmit = async (values: FormValues) => {
    if (!token || !isTokenValid) return;
    
    setIsResetting(true);
    
    try {
      console.log("Resetting password with:", { token, newPassword: values.password });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Password reset successful",
        description: "Your password has been reset. You can now log in with your new password.",
      });
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast({
        title: "Error resetting password",
        description: "There was a problem resetting your password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResetting(false);
    }
  };

  if (!token) {
    return (
      <div className="container flex items-center justify-center min-h-screen py-12">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
              alt="Scalevo Logo" 
              className="h-4 sm:h-5"
            />
          </div>
          <Card className="w-full max-w-md border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Invalid Reset Link</CardTitle>
              <CardDescription className="text-center">
                The password reset link is invalid or has expired.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Link to="/forgot-password">
                <Button variant="secondary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Forgot Password
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
            alt="Scalevo Logo" 
            className="h-4 sm:h-5"
          />
        </div>
        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Reset Your Password</CardTitle>
            <CardDescription className="text-center">
              Enter your new password below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Enter new password"
                            type={passwordVisible ? "text" : "password"}
                            className="pl-10 pr-10"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={togglePasswordVisibility}
                            className="absolute right-1 top-1.5 h-8 w-8"
                          >
                            {passwordVisible ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                            <span className="sr-only">Toggle password visibility</span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Confirm new password"
                            type={confirmPasswordVisible ? "text" : "password"}
                            className="pl-10 pr-10"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute right-1 top-1.5 h-8 w-8"
                          >
                            {confirmPasswordVisible ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                            <span className="sr-only">Toggle confirm password visibility</span>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isResetting || !isTokenValid}
                >
                  {isResetting ? "Resetting..." : "Reset Password"}
                  {!isResetting && <Check className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <Link to="/login" className="inline-flex items-center gap-1 text-primary hover:underline">
                <ArrowLeft className="h-3 w-3" /> 
                Back to login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
