// providers/ClerkAndConvexProviders.tsx

import React from "react";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { ConvexProviderWithClerk } from "@/convex/react-clerk.tsx";
import { ConvexReactClient } from "convex/react";
import { tokenCache } from "@/cache.ts";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Missing publishable key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file."
  );
}

export default function ClerkAndConvexProviders({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ConvexProviderWithClerk client={convex}>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
