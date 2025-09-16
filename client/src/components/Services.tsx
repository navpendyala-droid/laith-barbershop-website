import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Users, Star, Clock } from 'lucide-react'
import { handleBookingAction } from '@/utils/booking'

interface ServiceTier {
  name: string
  description: string
  prices: {
    kids: number
    youngMen: number
    seniors: number
  }
  icon: React.ReactNode
}

const services: ServiceTier[] = [
  {
    name: "Basic/Regular Haircut",
    description: "Guard or higher on sides & back, edge, scissors on top",
    prices: { kids: 23, youngMen: 28, seniors: 21 },
    icon: <Scissors className="w-6 h-6" />
  },
  {
    name: "Simple Fades & Tapers",
    description: "#4 on or higher on sides & back, faded or tapered, scissors on top, edge, med or high fades",
    prices: { kids: 28, youngMen: 35, seniors: 26 },
    icon: <Users className="w-6 h-6" />
  },
  {
    name: "Special Fades & Tapers",
    description: "Low fades/tapers, blowouts, Mohawks, designed fades & any special or custom haircut",
    prices: { kids: 35, youngMen: 45, seniors: 30 },
    icon: <Star className="w-6 h-6" />
  }
]

const additionalServices = [
  { name: "Any Cut & Beard", price: "$44" },
  { name: "Fade & Beard", price: "$55" },
  { name: "Low Fade/Tapers & Beard", price: "$65" },
  { name: "Beard", price: "$20" },
  { name: "Hot Towel Shave", price: "$35" },
  { name: "Hair Treatment", price: "$20" },
  { name: "Hair Color", price: "$45" }
]

export default function Services() {
  const handleBookClick = () => handleBookingAction('Services')

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional barbering services for all ages. Every cut includes expert styling and attention to detail.
          </p>
          <div className="mt-6">
            <Button 
              size="lg" 
              onClick={handleBookClick}
              data-testid="button-book-services-top"
            >
              Book Your Appointment
            </Button>
          </div>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Kids</p>
                    <p className="text-xs text-muted-foreground mb-1">(12yrs & Under)</p>
                    <p className="text-lg font-bold text-primary">${service.prices.kids}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Young men/</p>
                    <p className="text-xs text-muted-foreground mb-1">Gentlemen</p>
                    <p className="text-lg font-bold text-primary">${service.prices.youngMen}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Seniors</p>
                    <p className="text-xs text-muted-foreground mb-1">(63yrs & up)</p>
                    <p className="text-lg font-bold text-primary">${service.prices.seniors}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-lg border border-card-border p-8">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">
            Combinations & Additional Services
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover-elevate transition-all duration-200"
                data-testid={`additional-service-${index}`}
              >
                <span className="font-medium text-foreground">{service.name}</span>
                <span className="font-bold text-primary">{service.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              All services include expert consultation, precision cutting, and styling.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Online booking powered by Square Appointments</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={handleBookClick}
            data-testid="button-book-services-bottom"
          >
            Schedule Your Appointment
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Walk-ins welcome, but appointments recommended
          </p>
        </div>
      </div>
    </section>
  )
}