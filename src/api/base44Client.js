import { createClient } from "@base44/sdk";
import { appParams } from "@/lib/app-params";

export const base44 = (appParams.appId && appParams.appId !== 'null') 
  ? createClient({
      appId: appParams.appId,
      token: appParams.token,
    })
  : {
      auth: {
        me: async () => null,
        logout: () => {},
        redirectToLogin: () => {},
      }
    };
