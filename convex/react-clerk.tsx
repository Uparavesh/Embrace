// convex/react-clerk.tsx
import React, { ReactNode } from "react";
import { ConvexProviderWithAuth } from "convex/react";
import { useAuth as clerkUseAuth } from "@clerk/clerk-expo";

type Props = {
  children: ReactNode;
  client: any;
};

export const ConvexProviderWithClerk = ({ children, client }: Props) => {
  return (
    <ConvexProviderWithAuth
      client={client}
      useAuth={() => {
        const { isLoaded, isSignedIn, getToken } = clerkUseAuth();

        return {
          isLoading: !isLoaded,
          isAuthenticated: isSignedIn ?? false,
          fetchAccessToken: async ({ forceRefreshToken }) =>
            getToken({ template: "convex", skipCache: !forceRefreshToken }),
        };
      }}
    >
      {children}
    </ConvexProviderWithAuth>
  );
};
