import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, LayoutDashboard, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';

export function UnifiedNavigation({ 
  userRole, 
  currentPage, 
  setCurrentPage, 
  onLogout, 
  onReturnToDashboard, 
  onShowAccount,
  onBackToHome 
}) {
  const navigate = useNavigate();
  
  // Common navigation items for all users
  const commonNavItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'contact', label: 'Contact Us', path: '/contact' },
  ];

  // Role-specific navigation items
  const getRoleNavItems = () => {
    switch (userRole) {
      case 'patient':
        return [
          { id: 'home', label: 'Home', path: '/' },
          { id: 'blog', label: 'Blog', path: '/blog' },
          { id: 'about', label: 'About Us', path: '/about' },
          { id: 'contact', label: 'Contact Us', path: '/contact' },
        ];
      case 'doctor':
        return [
          { id: 'home', label: 'Home', path: '/' },
          { id: 'blog', label: 'Blog', path: '/blog' },
          { id: 'about', label: 'About Us', path: '/about' },
          { id: 'contact', label: 'Contact Us', path: '/contact' },
        ];
      case 'consultant':
        return [
          { id: 'home', label: 'Home', path: '/' },
          { id: 'blog', label: 'Blog', path: '/blog' },
          { id: 'about', label: 'About Us', path: '/about' },
          { id: 'contact', label: 'Contact Us', path: '/contact' },
        ];
      default:
        return commonNavItems;
    }
  };

  const navItems = getRoleNavItems();

  // Handle navigation clicks
  const handleNavClick = (itemId) => {
    // For non-logged in users on home page, scroll to sections
    if (!userRole && currentPage === 'home' && (itemId === 'home' || itemId === 'blog' || itemId === 'contact')) {
      const sectionId = itemId === 'home' ? 'home' : itemId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Always redirect to home */}
          <Link 
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-green-800">AyurSutra</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-colors flex items-center gap-2 ${
                  currentPage === item.id
                    ? 'text-green-700 bg-green-100'
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Auth Buttons - Show based on user state */}
            {userRole ? (
              <div className="flex items-center space-x-4">
                <Button
                  onClick={onReturnToDashboard}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg"
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  onClick={onShowAccount}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg"
                >
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
                <Button
                  onClick={onLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-full"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/simple-registration">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {userRole ? (
              <div className="flex space-x-2">
                <Button
                  onClick={onReturnToDashboard}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-sm"
                >
                  <LayoutDashboard className="w-4 h-4" />
                </Button>
                <Button
                  onClick={onShowAccount}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-sm"
                >
                  <User className="w-4 h-4" />
                </Button>
                <Button
                  onClick={onLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full text-sm"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 px-3 py-2 rounded-full text-sm"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/simple-registration">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full text-sm"
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-1 ${
                  currentPage === item.id
                    ? 'text-green-700 bg-green-100'
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}