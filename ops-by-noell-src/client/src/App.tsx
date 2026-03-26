/*
 * OPS BY NOELL — App Router
 * Design: Quiet Editorial Luxury
 * Routes: Home, Services, Case Study, About, Book
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";

// Components
import ChatWidget from "./components/ChatWidget";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Book from "./pages/Book";
import BotAnalytics from "./pages/BotAnalytics";

// SEO meta descriptions per page
const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Ops by Noell — AI Automation Systems for Local Businesses",
    description:
      "Done-for-you AI automation systems for Orange County local service businesses. Ops by Noell designs, installs, and manages complete automation for lead capture, booking, follow-up, and reviews.",
  },
  "/services": {
    title: "Services — Ops by Noell",
    description:
      "Complete AI automation services for local businesses: missed call text-back, AI booking + reminders, review generation, lead follow-up, and marketing automation. Fully done-for-you.",
  },
  "/case-study": {
    title: "Case Study: 25 Years of Expertise, Zero Infrastructure — Ops by Noell",
    description:
      "How Ops by Noell transformed a 25-year massage therapist's business in Laguna Niguel from zero digital infrastructure to a fully automated operation in two weeks.",
  },
  "/about": {
    title: "About — Ops by Noell",
    description:
      "Ops by Noell builds and manages complete AI automation systems for Orange County local service businesses. We specialize in revenue-focused operational infrastructure — done for you.",
  },
  "/book": {
    title: "Book a Free Automation Audit — Ops by Noell",
    description:
      "Book a free 30-minute Revenue Leak Audit with Ops by Noell. We identify your top operational gaps and quantify what each is costing you monthly. No pitch, no obligation.",
  },
  "/analytics": {
    title: "Bot Analytics — Ops by Noell",
    description: "Telegram bot lead qualification analytics dashboard.",
  },
};

// Component to update document meta tags on route change
function MetaUpdater() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = pageMeta[location] || pageMeta["/"];
    document.title = meta.title;

    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.setAttribute("name", "description");
      document.head.appendChild(descEl);
    }
    descEl.setAttribute("content", meta.description);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return null;
}
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <MetaUpdater />
      <ChatWidget />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/case-study" component={CaseStudy} />
        <Route path="/about" component={About} />
        <Route path="/book" component={Book} />
        <Route path="/analytics" component={BotAnalytics} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
