import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Ship, Truck, Warehouse, Shield, Clock, Globe, Award } from "lucide-react";
import heroShip from "@/assets/hero-ship.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import airFreightImg from "@/assets/air-freight.jpg";
import truckFleetImg from "@/assets/truck-fleet.jpg";

const Home = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services worldwide",
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping for large volumes",
    },
    {
      icon: Truck,
      title: "Land Transport",
      description: "Efficient ground transportation across continents",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Secure storage solutions with inventory management",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Full insurance coverage and real-time monitoring",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "98% on-time delivery rate guaranteed",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Presence in over 150 countries worldwide",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence in logistics services",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroShip} 
            alt="Cargo ship with containers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-primary-foreground">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reliable Global Shipping & Logistics Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Connecting businesses worldwide with fast, secure, and cost-effective shipping services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/track">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Track Shipment
                </Button>
              </Link>
              <Link to="/quote">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg" variant="default">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose N Cargo Shipping?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading logistics services you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Infrastructure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art facilities and equipment to serve you better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group animate-fade-in">
              <img 
                src={warehouseImg} 
                alt="Modern warehouse facility" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">Advanced Warehousing</h3>
                <p className="text-white/90">Secure storage with real-time inventory tracking</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <img 
                src={airFreightImg} 
                alt="Air freight operations" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">Air Freight Network</h3>
                <p className="text-white/90">Fast international shipping via major airlines</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={truckFleetImg} 
                alt="Truck fleet" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">Modern Fleet</h3>
                <p className="text-white/90">GPS-tracked vehicles for land transportation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship with N Cargo Shipping?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get started today with a free quote or track your existing shipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Get a Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
