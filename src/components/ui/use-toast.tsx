import * as React from 'react';
import { Toaster as Sonner, toast } from 'sonner';

type ToastProps = {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
};

function useToast() {
  const showToast = ({ title, description, variant }: ToastProps) => {
    if (variant === 'destructive') {
      toast.error(title, { description });
    } else {
      toast(title, { description });
    }
  };

  return { toast: showToast };
}

export { useToast, toast };
