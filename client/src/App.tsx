import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import LocationPage from "@/pages/location";
import ServicePage from "@/pages/service";
import { BlogIndex, BlogPost } from "@/pages/blog";
import CitationsPage from "@/pages/citations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/painters-:city" component={LocationPage} />
      <Route path="/services/:service" component={ServicePage} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/find-us" component={CitationsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
