import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Scissors, Heart, Clock } from 'lucide-react'
import barberImage from '@assets/generated_images/Professional_barber_portrait_7b066d2e.png'
import precisionImage from '@assets/generated_images/Precision_haircut_close-up_e40b160a.png'

const promises = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Cleanliness & Safety",
    description: "Sanitized tools and highest hygiene standards for every service"
  },
  {
    icon: <Scissors className="w-5 h-5" />,
    title: "Quality Craftsmanship",
    description: "Expert techniques and attention to detail in every cut"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Respect Your Time",
    description: "Punctual service and efficient scheduling for busy lifestyles"
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Customer Care",
    description: "Personalized service and building lasting relationships"
  }
]

export default function About() {
  const handleBookClick = () => {
    console.log('About Book Now clicked')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            About Lw by Laith L.L.C
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to the art of barbering and delivering exceptional grooming experiences in Tampa, Florida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Master of the Craft
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Lw by Laith L.L.C & Barbershop, we believe that a great haircut is more than just trimming hair—it's about 
                crafting confidence, style, and personal expression. Located in the heart of Tampa, our barbershop combines 
                traditional techniques with modern precision.
              </p>
              
              <p>
                With years of experience and a passion for the art of barbering, our team is committed to delivering 
                exceptional service to every client who walks through our doors. From classic cuts to contemporary fades, 
                we specialize in creating looks that reflect your personality and lifestyle.
              </p>
              
              <p>
                We take pride in creating a welcoming environment where quality craftsmanship meets genuine hospitality. 
                Every service is performed with meticulous attention to detail, ensuring you leave looking and feeling your best.
              </p>
            </div>

            <Button 
              size="lg" 
              onClick={handleBookClick}
              data-testid="button-book-about"
            >
              Experience Our Service
            </Button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={barberImage} 
                alt="Professional barber at work" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                data-testid="img-barber"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src={precisionImage} 
                alt="Precision haircut technique" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                data-testid="img-precision"
              />
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
            Our Promise to You
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((promise, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300" data-testid={`promise-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{promise.icon}</div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{promise.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{promise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-lg border border-card-border p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Ready for Your Best Look Yet?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join the many satisfied customers who trust us with their grooming needs.
          </p>
          <Button 
            size="lg" 
            onClick={handleBookClick}
            data-testid="button-book-about-bottom"
          >
            Book Your Appointment Today
          </Button>
        </div>
      </div>
    </section>
  )
}