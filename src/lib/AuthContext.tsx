import React, { createContext, useContext, useState, useCallback } from 'react';

interface AuthError {
  type: string;
  message: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
  authChecked: boolean;
  authError: AuthError | null;
  checkUserAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated] = useState(true);
  const [isLoadingAuth] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [authError] = useState<AuthError | null>(null);

  const checkUserAuth = useCallback(() => {
    // For now, auto-authenticate
    setAuthChecked(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoadingAuth, authChecked, authError, checkUserAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
