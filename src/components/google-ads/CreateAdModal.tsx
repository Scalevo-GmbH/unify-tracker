
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
import { FilePlus, Upload } from "lucide-react";

interface CreateAdModalProps {
  trigger?: React.ReactNode;
}

export const CreateAdModal: React.FC<CreateAdModalProps> = ({ trigger }) => {
  const [adImage, setAdImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
          <DialogTitle>Create New Google Ad</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new Google ad campaign. Once completed, your ad will be sent to Google Ads for review.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="campaign-name">Campaign Name</Label>
            <Input id="campaign-name" placeholder="Summer Sale 2023" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="ad-type">Ad Type</Label>
              <Select>
                <SelectTrigger id="ad-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ad Types</SelectLabel>
                    <SelectItem value="search">Search Ad</SelectItem>
                    <SelectItem value="display">Display Ad</SelectItem>
                    <SelectItem value="video">Video Ad</SelectItem>
                    <SelectItem value="shopping">Shopping Ad</SelectItem>
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
            <Label htmlFor="headline">Headline</Label>
            <Input id="headline" placeholder="Limited Time Offer: 30% Off All Products" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Shop our exclusive summer collection with free shipping on all orders." />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="final-url">Final URL</Label>
            <Input id="final-url" placeholder="https://example.com/summer-sale" type="url" />
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
                <div className="relative w-full max-w-full overflow-hidden rounded-md border border-input">
                  <div className="aspect-video relative">
                    <img 
                      src={imagePreview} 
                      alt="Ad preview" 
                      className="object-contain w-full h-full"
                    />
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
