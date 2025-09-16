import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone } from 'lucide-react'
import heroImage from '@assets/generated_images/Professional_barbershop_interior_shot_803651b9.png'
import { handleBookingAction, handleDirectCall, phoneHref, displayPhoneNumber } from '@/utils/booking'

export default function Hero() {
  const handleBookClick = () => handleBookingAction('Hero')

  const handleCallClick = () => handleDirectCall('Hero')

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional barbershop interior"
          className="w-full h-full object-cover"
        />
        {/* Dark wash overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
          Look Great.{' '}
          <span className="text-primary">Feel Amazing.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Expert cuts, precision fades, and classic styling at Tampa's premier barbershop. 
          Experience the craft of traditional barbering with modern techniques.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-3 bg-primary hover:bg-primary/90"
            onClick={handleBookClick}
            data-testid="button-book-hero"
          >
            Book Your Appointment
          </Button>
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 h-11 text-lg px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 rounded-md font-medium transition-colors"
            data-testid="button-call-hero"
            aria-label={`Call us at ${displayPhoneNumber}`}
          >
            <Phone className="w-5 h-5" />
            {displayPhoneNumber}
          </a>
        </div>

        {/* Quick Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
            <MapPin className="w-6 h-6 text-primary mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">Tampa Location</h3>
            <p className="text-sm text-gray-200">13948 W Hillsborough Ave</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white">
            <Clock className="w-6 h-6 text-primary mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">Open Today</h3>
            <p className="text-sm text-gray-200">10 AM – 7 PM</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white sm:col-span-2 lg:col-span-1">
            <div className="w-6 h-6 text-primary mb-2 mx-auto flex items-center justify-center">
              ✂️
            </div>
            <h3 className="font-semibold mb-1">Expert Cuts</h3>
            <p className="text-sm text-gray-200">All ages welcome</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}