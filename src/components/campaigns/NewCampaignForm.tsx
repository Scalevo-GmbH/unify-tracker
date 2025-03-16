
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Search, Mail } from "lucide-react";

// Form schema
const formSchema = z.object({
  name: z.string().min(3, {
    message: "Campaign name must be at least 3 characters.",
  }),
  platform: z.string({
    required_error: "Please select a platform.",
  }),
  type: z.string({
    required_error: "Please select a campaign type.",
  }),
  budget: z.string().min(1, {
    message: "Please enter a budget amount.",
  }),
  startDate: z.string().min(1, {
    message: "Please select a start date.",
  }),
  endDate: z.string().min(1, {
    message: "Please select an end date.",
  }),
  description: z.string().optional(),
  objectives: z.string().optional(),
  targetAudience: z.string().optional(),
});

// Platform options with icons
const platforms = [
  { value: "facebook", label: "Facebook", icon: <Facebook className="h-4 w-4 text-blue-600" /> },
  { value: "instagram", label: "Instagram", icon: <Instagram className="h-4 w-4 text-pink-600" /> },
  { value: "twitter", label: "Twitter", icon: <Twitter className="h-4 w-4 text-blue-400" /> },
  { value: "google-ads", label: "Google Ads", icon: <Search className="h-4 w-4 text-amber-600" /> },
  { value: "email", label: "Email Marketing", icon: <Mail className="h-4 w-4 text-yellow-600" /> },
];

// Campaign types
const campaignTypes = [
  { value: "paid-social", label: "Paid Social" },
  { value: "paid-search", label: "Paid Search" },
  { value: "display", label: "Display Advertising" },
  { value: "email", label: "Email Marketing" },
  { value: "content", label: "Content Marketing" },
  { value: "influencer", label: "Influencer Marketing" },
];

const NewCampaignForm = () => {
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      platform: "",
      type: "",
      budget: "",
      startDate: "",
      endDate: "",
      description: "",
      objectives: "",
      targetAudience: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
    alert("Campaign created successfully!");
    form.reset();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campaign Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Summer Sale 2025" {...field} />
                  </FormControl>
                  <FormDescription>
                    A clear, descriptive name for your campaign
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Platform */}
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Platform</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {platforms.map((platform) => (
                        <SelectItem 
                          key={platform.value} 
                          value={platform.value}
                        >
                          <div className="flex items-center gap-2">
                            {platform.icon}
                            {platform.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    The marketing platform for this campaign
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campaign Type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select campaign type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {campaignTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    The type of marketing campaign
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Budget */}
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="$1,000" {...field} />
                  </FormControl>
                  <FormDescription>
                    Total budget allocated for this campaign
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Start Date */}
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* End Date */}
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the purpose and details of your campaign"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campaign Objectives */}
          <FormField
            control={form.control}
            name="objectives"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Objectives</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What are the main goals of this campaign?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Target Audience */}
          <FormField
            control={form.control}
            name="targetAudience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Audience</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your target audience for this campaign"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit">Create Campaign</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewCampaignForm;
