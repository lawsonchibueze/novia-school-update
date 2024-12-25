import { ErrorLayout } from "@/components/frontend/error-layout";
import { FrownIcon as FaceFrownIcon } from "lucide-react";

export default function NotFound() {
  return (
    <ErrorLayout
      icon={<FaceFrownIcon className="w-10 h-10" />}
      title="404 - Page Not Found"
      description="Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
    />
  );
}
