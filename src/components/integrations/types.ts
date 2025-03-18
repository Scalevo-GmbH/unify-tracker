
import React from "react";
import { TranslationKey } from "@/translations/types";

export interface Integration {
  name: string;
  icon: React.ReactNode;
  descriptionKey: TranslationKey;
  popular?: boolean;
}

export interface IntegrationsDataProps {
  advertising: Integration[];
  social: Integration[];
  email: Integration[];
  analytics: Integration[];
  ecommerce: Integration[];
  other: Integration[];
}
