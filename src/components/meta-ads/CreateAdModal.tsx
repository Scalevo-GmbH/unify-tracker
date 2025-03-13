
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FilePlus, Upload, Facebook, Instagram } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface CreateAdModalProps {
  trigger?: React.ReactNode;
}

export const CreateAdModal: React.FC<CreateAdModalProps> = ({ trigger }) => {
  const [adImage, setAdImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("both");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAdImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <FilePlus className="mr-2 h-4 w-4" />
            Create New Ad
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create New Meta Ad</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new Facebook/Instagram ad campaign. Once completed, your ad will be submitted for review.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="campaign-name">Campaign Name</Label>
            <Input id="campaign-name" placeholder="Summer Collection Promotion" />
          </div>
          
          <div className="grid gap-2">
            <Label>Platforms</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={selectedPlatform === "facebook" || selectedPlatform === "both" ? "default" : "outline"}
                className={cn(
                  "flex-1",
                  (selectedPlatform === "facebook" || selectedPlatform === "both") && "bg-blue-600 hover:bg-blue-700"
                )}
                onClick={() => setSelectedPlatform(prev => prev === "both" ? "instagram" : prev === "facebook" ? "none" : "both")}
              >
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
              <Button
                type="button"
                variant={selectedPlatform === "instagram" || selectedPlatform === "both" ? "default" : "outline"}
                className={cn(
                  "flex-1",
                  (selectedPlatform === "instagram" || selectedPlatform === "both") && "bg-pink-600 hover:bg-pink-700"
                )}
                onClick={() => setSelectedPlatform(prev => prev === "both" ? "facebook" : prev === "instagram" ? "none" : "both")}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="ad-objective">Ad Objective</Label>
              <Select>
                <SelectTrigger id="ad-objective">
                  <SelectValue placeholder="Select objective" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Objectives</SelectLabel>
                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                    <SelectItem value="consideration">Traffic</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="leads">Lead Generation</SelectItem>
                    <SelectItem value="conversions">Conversions</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="budget">Daily Budget</Label>
              <Input id="budget" placeholder="$50.00" type="number" min="5" step="0.01" />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="ad-headline">Headline</Label>
            <Input id="ad-headline" placeholder="30% Off Summer Collection" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="ad-text">Primary Text</Label>
            <Textarea 
              id="ad-text" 
              placeholder="Shop our exclusive summer collection with free shipping on all orders." 
              className="resize-none"
              rows={3}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="destination-url">Destination URL</Label>
            <Input id="destination-url" placeholder="https://example.com/summer-collection" type="url" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="call-to-action">Call to Action</Label>
            <Select>
              <SelectTrigger id="call-to-action">
                <SelectValue placeholder="Select CTA" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Call to Action</SelectLabel>
                  <SelectItem value="shop_now">Shop Now</SelectItem>
                  <SelectItem value="learn_more">Learn More</SelectItem>
                  <SelectItem value="sign_up">Sign Up</SelectItem>
                  <SelectItem value="book_now">Book Now</SelectItem>
                  <SelectItem value="download">Download</SelectItem>
                  <SelectItem value="contact_us">Contact Us</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="ad-image">Ad Image</Label>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Input 
                  id="ad-image" 
                  type="file" 
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <Label 
                  htmlFor="ad-image" 
                  className="flex h-10 items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background cursor-pointer hover:bg-accent hover:text-accent-foreground"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Label>
                <span className="text-sm text-muted-foreground">
                  {adImage ? adImage.name : "No file selected"}
                </span>
              </div>
              
              {imagePreview && (
                <div className="relative w-full overflow-hidden rounded-md border border-input">
                  <div className="aspect-[1.91/1] relative">
                    <img 
                      src={imagePreview} 
                      alt="Ad preview" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="text-white text-shadow">
                        <p className="font-bold text-sm">Ad Preview</p>
                        <p className="text-xs opacity-90">Recommended image size: 1200x628 pixels</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Input id="start-date" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="end-date">End Date</Label>
              <Input id="end-date" type="date" />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="audience">Target Audience</Label>
            <Select>
              <SelectTrigger id="audience">
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Audiences</SelectLabel>
                  <SelectItem value="saved_audience_1">Saved Audience 1</SelectItem>
                  <SelectItem value="saved_audience_2">Saved Audience 2</SelectItem>
                  <SelectItem value="custom">Create New Audience</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Create Ad</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAdModal;

