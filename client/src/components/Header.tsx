import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from 'lucide-react'
import { handleBookingAction, handleDirectCall, phoneHref, displayPhoneNumber } from '@/utils/booking'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCallClick = () => handleDirectCall('Header')

  const handleBookClick = () => handleBookingAction('Header')

  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`)
    setIsMenuOpen(false)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-serif font-bold text-foreground">
              Lw by Laith L.L.C
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Barbershop</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCallClick}
              data-testid="button-call"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              onClick={handleBookClick}
              data-testid="button-book-header"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-card-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <div className="flex space-x-3 px-3 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={handleCallClick}
                  data-testid="mobile-button-call"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handleBookClick}
                  data-testid="mobile-button-book"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}