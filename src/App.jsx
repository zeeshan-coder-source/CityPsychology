// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from '@/lib/AuthContext';
// import Layout from '@/components/layout/Layout';
// import Home from '@/pages/Home';

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             {/* Add more routes here as needed */}
//             {/* <Route path="/services" element={<Services />} /> */}
//             {/* <Route path="/team" element={<Team />} /> */}
//             {/* <Route path="/about" element={<About />} /> */}
//             {/* <Route path="/faq" element={<FAQ />} /> */}
//             {/* <Route path="/contact" element={<Contact />} /> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;


import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">CP</span>
          </div>
          <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App