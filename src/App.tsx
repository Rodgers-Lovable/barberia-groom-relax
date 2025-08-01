import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Haircut from "./pages/Haircut";
import NailCare from "./pages/NailCare";
import Massage from "./pages/Massage";
import Facial from "./pages/Facial";
import Waxing from "./pages/Waxing";
import Memberships from "./pages/Memberships";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/haircut" element={<Haircut />} />
          <Route path="/services/nail-care" element={<NailCare />} />
          <Route path="/services/massage" element={<Massage />} />
          <Route path="/services/facial" element={<Facial />} />
          <Route path="/services/waxing" element={<Waxing />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
