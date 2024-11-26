import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { Auth } from './pages/Auth';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AIPlayground } from './pages/AIPlayground';
import { Analytics } from './pages/Analytics';
import { Calendar } from './pages/Calendar';
import { Brands } from './pages/Brands';
import { Profile } from './pages/Profile';
import { ComingSoon } from './pages/ComingSoon';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/auth" />;
};

export const App: React.FC = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <Router>
      <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
        {isAuthenticated && <Sidebar />}
        <div className="flex-1 flex flex-col overflow-hidden">
          {isAuthenticated && <Header />}
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={<PrivateRoute element={<Home />} />} />
              <Route path="/ai-playground" element={<PrivateRoute element={<AIPlayground />} />} />
              <Route path="/brands" element={<PrivateRoute element={<Brands />} />} />
              <Route path="/analytics" element={<PrivateRoute element={<ComingSoon title="Analytics" />} />} />
              <Route path="/calendar" element={<PrivateRoute element={<ComingSoon title="Calendar" />} />} />
              <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};