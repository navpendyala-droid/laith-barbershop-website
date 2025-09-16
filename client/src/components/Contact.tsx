import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { handleBookingAction, handleDirectCall, phoneHref, displayPhoneNumber } from '@/utils/booking'

const businessHours = [
  { day: "Monday", hours: "Closed", isToday: false },
  { day: "Tuesday", hours: "10 AM – 7 PM", isToday: false },
  { day: "Wednesday", hours: "10 AM – 7 PM", isToday: false },
  { day: "Thursday", hours: "10 AM – 7 PM", isToday: false },
  { day: "Friday", hours: "10 AM – 7 PM", isToday: false },
  { day: "Saturday", hours: "9 AM – 5 PM", isToday: false },
  { day: "Sunday", hours: "10 AM – 4:30 PM", isToday: true }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    console.log(`Form field ${name} updated:`, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // Create mailto link with form data
    const subject = `Barbershop Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:info@lwbylaith.com?subject=${subject}&body=${body}`
  }

  const handleCallClick = () => handleDirectCall('Contact')

  const handleDirectionsClick = () => {
    console.log('Directions clicked')
    window.open('https://maps.google.com/?q=13948+W+Hillsborough+Ave,+Tampa,+FL+33635', '_blank')
  }

  const handleBookingClick = () => {
    console.log('Square booking clicked - directing to call for now')
    // Show better user feedback until Square Appointments is integrated
    const confirmed = confirm(
      'Online booking is coming soon! Would you like to call us now to schedule your appointment?'
    )
    if (confirmed) {
      window.location.href = phoneHref
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Visit Us & Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in Tampa, Florida. Easy parking and convenient scheduling for your next visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="lg:col-span-1" data-testid="card-contact-info">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Address */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Address</h4>
                <p className="text-muted-foreground">
                  13948 W Hillsborough Ave<br />
                  Tampa, FL 33635
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={handleDirectionsClick}
                  data-testid="button-directions"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>

              {/* Phone */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <a 
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 bg-transparent border border-input rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  data-testid="button-call-contact"
                  aria-label={`Call us at ${displayPhoneNumber}`}
                >
                  <Phone className="w-4 h-4" />
                  {displayPhoneNumber}
                </a>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <a 
                  href="mailto:info@lwbylaith.com" 
                  className="text-primary hover:underline flex items-center gap-2"
                  data-testid="link-email"
                >
                  <Mail className="w-4 h-4" />
                  info@lwbylaith.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="lg:col-span-1" data-testid="card-hours">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center py-2 px-3 rounded-md ${
                      schedule.isToday ? 'bg-primary/10 border border-primary/20' : ''
                    }`}
                    data-testid={`hours-${schedule.day.toLowerCase()}`}
                  >
                    <span className={`font-medium ${schedule.isToday ? 'text-primary' : 'text-foreground'}`}>
                      {schedule.day}
                    </span>
                    <span className={`${
                      schedule.hours === 'Closed' ? 'text-muted-foreground' : 
                      schedule.isToday ? 'text-primary font-medium' : 'text-foreground'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full" 
                  onClick={handleBookingClick}
                  data-testid="button-book-contact"
                >
                  Book Appointment Online
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Powered by Square Appointments
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="lg:col-span-1" data-testid="card-contact-form">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  data-testid="button-submit-form"
                >
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card data-testid="card-map">
          <CardContent className="p-0">
            <div className="h-96 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=13948+W+Hillsborough+Ave,+Tampa,+FL+33635&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lw by Laith L.L.C & Barbershop Location"
                data-testid="map-embed"
              ></iframe>
            </div>
            <div className="p-4 bg-card">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Visit Our Shop</h4>
                  <p className="text-sm text-muted-foreground">13948 W Hillsborough Ave, Tampa, FL 33635</p>
                </div>
                <Button 
                  size="sm"
                  onClick={handleDirectionsClick}
                  data-testid="button-map-directions"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}