import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  const handleCallClick = () => {
    console.log('Footer call clicked')
    window.location.href = 'tel:+18135505858'
  }

  const handleEmailClick = () => {
    console.log('Footer email clicked')
    window.location.href = 'mailto:info@lwbylaith.com'
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              Lw by Laith L.L.C
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Tampa's premier barbershop offering expert cuts, precision fades, and classic styling. 
              Experience the art of traditional barbering with modern techniques.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                size="sm" 
                onClick={handleCallClick}
                data-testid="footer-button-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleEmailClick}
                data-testid="footer-button-email"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2" data-testid="footer-address">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    13948 W Hillsborough Ave<br />
                    Tampa, FL 33635
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2" data-testid="footer-phone">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+18135505858" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (813) 550-5858
                </a>
              </div>
              
              <div className="flex items-center gap-2" data-testid="footer-email-link">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@lwbylaith.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@lwbylaith.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hours</h4>
            <div className="space-y-2 text-sm" data-testid="footer-hours">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mon</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tue-Fri</span>
                <span className="text-muted-foreground">10 AM – 7 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sat</span>
                <span className="text-muted-foreground">9 AM – 5 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sun</span>
                <span className="text-muted-foreground">10 AM – 4:30 PM</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Open Today: 10 AM – 4:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lw by Laith L.L.C & Barbershop. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="hover:text-primary transition-colors"
                data-testid="footer-link-accessibility"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}