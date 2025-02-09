import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, CheckCircle2, ChevronRight, Globe2, BarChart3, Users } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Enterprise</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground">Services</a>
              <a href="#case-studies" className="text-muted-foreground hover:text-foreground">Case Studies</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" className="hidden md:inline-flex">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Business with Enterprise Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your organization with cutting-edge technology and expert consulting services.
              </p>
              <div className="flex space-x-4">
                <Button size="lg">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Enterprise Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions for modern enterprises</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="h-8 w-8" />,
                title: "Digital Transformation",
                description: "Modernize your business with cutting-edge digital solutions"
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Data Analytics",
                description: "Transform your data into actionable insights"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Consulting Services",
                description: "Expert guidance for your business challenges"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground">Success stories from our clients</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "Tech Corp",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
                title: "Digital Transformation Success",
                description: "How we helped Tech Corp achieve 200% growth"
              },
              {
                company: "Finance Plus",
                image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a",
                title: "Analytics Implementation",
                description: "Revolutionizing data-driven decision making"
              }
            ].map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{study.company}</div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Button variant="outline">Read More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect plan for your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$499",
                features: ["Basic consulting", "5 user licenses", "Email support"]
              },
              {
                name: "Professional",
                price: "$999",
                features: ["Advanced consulting", "20 user licenses", "Priority support"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Full service suite", "Unlimited licenses", "24/7 support"]
              }
            ].map((plan, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">Enterprise</span>
              </div>
              <p className="text-muted-foreground">
                Transforming businesses with innovative solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Business Avenue</li>
                <li>San Francisco, CA 94105</li>
                <li>contact@enterprise.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Enterprise Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}