import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Award, TrendingUp, Shield, Clock } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import operationsCenter from "@/assets/operations-center.jpg";
import partnership from "@/assets/partnership.jpg";

const About = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "150+", label: "Countries Served" },
    { value: "10M+", label: "Shipments Delivered" },
    { value: "98%", label: "On-Time Rate" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize the safety and security of your cargo with comprehensive insurance and real-time monitoring.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Our proven track record of 98% on-time delivery ensures your shipments arrive when expected.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "With operations in over 150 countries, we connect businesses across all continents.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "24/7 customer support and dedicated account managers ensure your needs are always met.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We leverage cutting-edge technology to optimize routes and provide real-time tracking.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Multiple industry awards recognize our commitment to outstanding service quality.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About 72hours cargo shipping company</h1>
            <p className="text-xl text-primary-foreground/90">
              Your trusted partner in global logistics since 2000
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground animate-slide-up">
                  <p>
                    Founded with a simple mission, 72hours cargo shipping company strives to make international
                    shipping accessible, reliable, and efficient for businesses of all sizes. What
                    started as a small freight forwarding company has grown into a global logistics
                    powerhouse.
                  </p>
                  <p>
                    Today, we operate in over 150 countries, managing millions of shipments annually.
                    Our success is built on unwavering commitment to our customers, continuous
                    innovation, and a team of dedicated logistics professionals.
                  </p>
                  <p>
                    We understand that every shipment carries more than just goods—it carries trust,
                    promises, and the success of your business. That's why we treat every package with
                    the same care and attention, whether it's crossing town or crossing the globe.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-fade-in">
              <img 
                  src={teamMeeting} 
                  alt="72hours Cargo team collaboration"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-slide-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide world-class logistics solutions that empower businesses to reach their
                  full potential through reliable, efficient, and innovative shipping services.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative logistics partner globally, setting new
                  standards in speed, safety, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Operations Center Image */}
          <div className="max-w-5xl mx-auto animate-fade-in">
            <img 
              src={operationsCenter} 
              alt="Global operations command center" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <p className="text-center text-muted-foreground mt-4 text-sm">
              Our state-of-the-art operations center monitors shipments worldwide 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src={partnership} 
                  alt="Building partnerships through trust" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose 72hours Cargo?</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  With decades of experience and a global network, we deliver more than just
                  packages—we deliver peace of mind.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our state-of-the-art tracking systems, dedicated customer support, and 
                  industry-leading on-time delivery rates make us the preferred choice for 
                  businesses worldwide. We build lasting partnerships based on trust, reliability, 
                  and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
