
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Clock, MapPin } from 'lucide-react'; // Added MapPin for consistency if needed elsewhere, NAV_ITEMS defines its own icon.
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_ITEMS, SITE_TITLE } from '@/lib/constants';
import type { NavItem } from '@/lib/types';

// A simple theme toggle example. In a real app, this would use context or a state manager.
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference on mount
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};


export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavLinks = (items: NavItem[], isMobile: boolean = false) => (
    items.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        target={item.target}
        rel={item.rel}
        className={`transition-colors hover:text-primary ${
          isMobile ? 'block py-2 text-lg' : 'text-sm font-medium'
        }`}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        <div className="flex items-center gap-2">
          {item.icon && isMobile && <item.icon className="h-5 w-5" />}
          {item.label}
        </div>
      </Link>
    ))
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Optional: Add a logo icon here */}
          {/* <Leaf className="h-6 w-6 text-primary" /> */}
          <span className="font-bold text-xl text-primary">{SITE_TITLE.split(' ')[0]}</span>
          <span className="font-semibold text-xl text-foreground hidden sm:inline-block">{SITE_TITLE.split(' ').slice(1).join(' ')}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {renderNavLinks(NAV_ITEMS)}
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 flex flex-col">
              <div className="flex-grow">
                <Link href="/" className="flex items-center space-x-2 mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-bold text-lg">{SITE_TITLE}</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                 {renderNavLinks(NAV_ITEMS, true)}
                </nav>
              </div>
              {/* Mobile menu footer content can go here if needed, e.g. social links */}
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Clinic Timings Bar */}
      <div className="bg-primary/10 text-primary-foreground dark:bg-primary/30 dark:text-foreground py-2 text-center text-sm shadow-sm">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>Clinic Timings: Mon-Sat: 10:30 AM - 12:00 PM &amp; 6:00 PM - 8:00 PM. Sunday: Holiday.</span>
        </div>
      </div>
      
      {/* Notice Bar */}
      <div className="bg-secondary/40 text-secondary-foreground py-2 text-center text-sm shadow-sm">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <span>📢 Important Notice: Please message or call on WhatsApp before visiting the clinic.</span>
        </div>
      </div>
    </header>
  );
}
