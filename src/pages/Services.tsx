import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  FileCheck,
  ShoppingBag,
  Clock,
  Shield,
  DollarSign,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description:
        "Fast and reliable air cargo services for urgent shipments. We offer both standard and express air freight options with real-time tracking.",
      features: [
        "Express delivery within 24-48 hours",
        "Temperature-controlled cargo",
        "Dangerous goods handling",
        "Door-to-door service",
      ],
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description:
        "Cost-effective ocean shipping for large volumes. Full container load (FCL) and less than container load (LCL) options available.",
      features: [
        "FCL and LCL services",
        "Specialized container options",
        "Port-to-port and door-to-door",
        "Customs clearance support",
      ],
    },
    {
      icon: Truck,
      title: "Land Transport",
      description:
        "Efficient ground transportation across continents with full truckload (FTL) and less than truckload (LTL) services.",
      features: [
        "Cross-border transport",
        "Dedicated fleet",
        "Real-time GPS tracking",
        "Flexible scheduling",
      ],
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description:
        "Secure storage solutions with advanced inventory management systems. Climate-controlled and standard warehousing available.",
      features: [
        "Short and long-term storage",
        "Inventory management",
        "Pick and pack services",
        "24/7 security monitoring",
      ],
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description:
        "Expert customs brokerage services to ensure smooth clearance of your goods. We handle all documentation and compliance requirements.",
      features: [
        "Import/export documentation",
        "Duty calculation",
        "Compliance management",
        "Fast-track clearance",
      ],
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Delivery",
      description:
        "Specialized last-mile delivery solutions for e-commerce businesses. Same-day and next-day delivery options available.",
      features: [
        "Same-day delivery",
        "Returns management",
        "Cash on delivery",
        "Integration with major platforms",
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "98% on-time delivery rate",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive cargo insurance",
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Best value for money",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive logistics solutions tailored to meet your unique business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading features that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Request a custom quote for your shipping needs
          </p>
          <Link to="/quote">
            <Button size="lg" variant="secondary">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
