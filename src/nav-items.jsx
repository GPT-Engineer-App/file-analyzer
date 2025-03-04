import { Home } from "lucide-react";
import Index from "./pages/Index.jsx";
import AnalysisResult from "./pages/AnalysisResult.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Analysis Result",
    to: "/analysis-result",
    icon: <Home className="h-4 w-4" />,
    page: <AnalysisResult />,
  },
];