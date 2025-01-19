import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";
import ExperienceDetail from "./pages/ExperienceDetail";
import AllBlogs from "./pages/AllBlogs";
import AllProjects from "./pages/AllProjects";
import EnterpriseDevOpsPlatform from "./components/project-details/EnterpriseDevOpsPlatform";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/enterprise-devops-platform" element={<EnterpriseDevOpsPlatform />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;