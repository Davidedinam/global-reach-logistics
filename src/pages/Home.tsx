import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Clock, Globe, Award, ArrowRight, Search, Package } from "lucide-react";
import heroLogistics from "@/assets/hero-logistics.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import airFreightImg from "@/assets/air-freight.jpg";
import truckFleetImg from "@/assets/truck-fleet.jpg";
import serviceAirFreight from "@/assets/service-air-freight.jpg";
import serviceSeaFreight from "@/assets/service-sea-freight.jpg";
import serviceLandTransport from "@/assets/service-land-transport.jpg";
import serviceWarehousing from "@/assets/service-warehousing.jpg";
import serviceCustoms from "@/assets/service-customs.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const Home = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();
  const services = [
    {
      image: serviceAirFreight,
      title: "Air Freight",
      description: "Fast and reliable air cargo services worldwide with express delivery options",
    },
    {
      image: serviceSeaFreight,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping for large volumes with FCL and LCL options",
    },
    {
      image: serviceLandTransport,
      title: "Land Transport",
      description: "Efficient ground transportation across continents with GPS tracking",
    },
    {
      image: serviceWarehousing,
      title: "Warehousing",
      description: "Secure storage solutions with advanced inventory management",
    },
    {
      image: serviceCustoms,
      title: "Customs Clearance",
      description: "Expert customs brokerage for smooth import/export documentation",
    },
    {
      image: serviceEcommerce,
      title: "E-Commerce Delivery",
      description: "Last-mile delivery solutions with same-day and next-day options",
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

  const stats = [
    { value: "150+", label: "Countries Served" },
    { value: "10M+", label: "Shipments Delivered" },
    { value: "98%", label: "On-Time Rate" },
    { value: "24/7", label: "Customer Support" },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?id=${trackingNumber}`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroLogistics} 
            alt="Cargo ship with containers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Trusted by 10,000+ businesses worldwide
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
              Reliable Global Shipping & Logistics Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Connecting businesses worldwide with fast, secure, and cost-effective shipping services
            </p>

            {/* Special Tracking Input */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <Package className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground">Track Your Shipment</h3>
                  <p className="text-sm text-primary-foreground/70">Enter your tracking ID to get real-time updates</p>
                </div>
              </div>
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter tracking number (e.g., NC-2024-XXXXXX)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="pl-12 h-14 text-lg bg-white border-0 rounded-xl shadow-inner placeholder:text-muted-foreground/60"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="secondary" 
                  className="h-14 px-8 text-lg rounded-xl font-semibold"
                >
                  Track Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                to="/services" 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm md:text-base">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="default" className="px-8">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
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
              <div key={index} className="text-center animate-slide-up p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors" style={{ animationDelay: `${index * 0.1}s` }}>
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
            <div className="relative overflow-hidden rounded-xl shadow-lg group animate-fade-in">
              <img 
                src={warehouseImg} 
                alt="Modern warehouse facility" 
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Advanced Warehousing</h3>
                <p className="text-white/90">Secure storage with real-time inventory tracking</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <img 
                src={airFreightImg} 
                alt="Air freight operations" 
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Air Freight Network</h3>
                <p className="text-white/90">Fast international shipping via major airlines</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={truckFleetImg} 
                alt="Truck fleet" 
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
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
              <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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