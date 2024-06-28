import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
};
