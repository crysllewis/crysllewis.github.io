import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Work from "@/pages/Work";
import VibeCodingProject from "@/pages/VibeCodingProject";
import CaseStudy from "@/pages/CaseStudy";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/ai-expertise/:id" component={VibeCodingProject} />
        <Route path="/case-study/:id" component={CaseStudy} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
