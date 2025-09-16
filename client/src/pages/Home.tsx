import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ThemeToggle />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}