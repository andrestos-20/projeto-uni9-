import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Link } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ModulesProvider } from "@/contexts/ModulesContext";
import Home from "@/pages/Home";
import Course from "@/pages/Course";
import ModuleManager from "@/pages/ModuleManager";
import AdminLogin from "@/pages/AdminLogin";
import AdminStudents from "@/pages/AdminStudents";
import NotFound from "@/pages/NotFound";
import StudentLogin from "@/pages/StudentLogin";

export default function App(){
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <ModulesProvider>
          <TooltipProvider>
            <Toaster />
            <nav className="container nav">
              <Link href="/">Home</Link>
              <Link href="/curso/1">Curso</Link>
              <Link href="/admin/login">Admin</Link>
            </nav>
            <div className="container">
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/curso/:id" component={Course} />
                <Route path="/admin/login" component={AdminLogin} />
                <Route path="/admin/modulos" component={ModuleManager} />
                <Route path="/admin/alunos" component={AdminStudents} />
                <Route path="/login" component={StudentLogin} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </TooltipProvider>
        </ModulesProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}