import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    goodsType: "",
    weight: "",
    dimensions: "",
    pickupDate: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.origin || !formData.destination) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In production, this would send data to a backend
    console.log("Quote request:", formData);
    toast.success("Quote request submitted! We'll contact you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      origin: "",
      destination: "",
      goodsType: "",
      weight: "",
      dimensions: "",
      pickupDate: "",
      additionalInfo: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you with a competitive quote within 24 hours
            </p>
          </div>

          {/* Form Card */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Shipment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Contact Information</h3>
                  
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipment Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Shipment Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="origin">Origin *</Label>
                      <Input
                        id="origin"
                        type="text"
                        value={formData.origin}
                        onChange={(e) => handleChange("origin", e.target.value)}
                        placeholder="City, Country"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="destination">Destination *</Label>
                      <Input
                        id="destination"
                        type="text"
                        value={formData.destination}
                        onChange={(e) => handleChange("destination", e.target.value)}
                        placeholder="City, Country"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="goodsType">Type of Goods</Label>
                    <Select value={formData.goodsType} onValueChange={(value) => handleChange("goodsType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select goods type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="textiles">Textiles</SelectItem>
                        <SelectItem value="food">Food & Beverages</SelectItem>
                        <SelectItem value="machinery">Machinery</SelectItem>
                        <SelectItem value="chemicals">Chemicals</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weight">Total Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="text"
                        value={formData.weight}
                        onChange={(e) => handleChange("weight", e.target.value)}
                        placeholder="e.g., 500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dimensions">Dimensions (L x W x H cm)</Label>
                      <Input
                        id="dimensions"
                        type="text"
                        value={formData.dimensions}
                        onChange={(e) => handleChange("dimensions", e.target.value)}
                        placeholder="e.g., 100 x 80 x 60"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
                    <Input
                      id="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => handleChange("pickupDate", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleChange("additionalInfo", e.target.value)}
                      placeholder="Any special requirements or additional details..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Quote Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">1.</span>
                  <span>Our team reviews your quote request</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">2.</span>
                  <span>We prepare a customized quote based on your requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">3.</span>
                  <span>You'll receive a detailed quote within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">4.</span>
                  <span>Our team is available to answer any questions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quote;
