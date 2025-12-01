import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Truck, Plane, CheckCircle2, MapPin } from "lucide-react";
import { toast } from "sonner";

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }

    // Simulate API loading
    toast.loading("Searching for your shipment...", { id: "tracking-search" });

    // Simulate API delay
    setTimeout(() => {
      toast.dismiss("tracking-search");

      // Generate realistic mock data based on tracking number
      const mockData = {
      trackingNumber: trackingNumber,
      status: "In Transit",
      currentLocation: "Los Angeles, CA",
      destination: "New York, NY",
      estimatedDelivery: "Dec 5, 2025",
      history: [
        {
          status: "Delivered",
          location: "New York, NY",
          date: "Dec 5, 2025 - 2:30 PM",
          completed: false,
        },
        {
          status: "Out for Delivery",
          location: "New York Distribution Center",
          date: "Dec 5, 2025 - 8:00 AM",
          completed: false,
        },
        {
          status: "In Transit",
          location: "Los Angeles, CA",
          date: "Dec 3, 2025 - 3:15 PM",
          completed: true,
        },
        {
          status: "Departed Facility",
          location: "Shanghai, China",
          date: "Dec 1, 2025 - 11:00 AM",
          completed: true,
        },
        {
          status: "Package Received",
          location: "Shanghai Warehouse",
          date: "Nov 28, 2025 - 9:30 AM",
          completed: true,
        },
      ],
      };

      setTrackingResult(mockData);
      toast.success("Shipment found! Showing tracking details.", {
        duration: 3000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Track Your Shipment</h1>
            <p className="text-lg text-muted-foreground">
              Enter your tracking number to get real-time updates
            </p>
          </div>

          {/* Tracking Input */}
          <Card className="mb-8 animate-slide-up">
            <CardContent className="p-6">
              <form onSubmit={handleTrack} className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., GS123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  <Search className="mr-2 h-5 w-5" />
                  Track
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {trackingResult && (
            <div className="space-y-6 animate-fade-in">
              {/* Status Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipment Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                      <p className="font-semibold">{trackingResult.trackingNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <p className="font-semibold text-primary">{trackingResult.status}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Current Location</p>
                      <p className="font-semibold flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        {trackingResult.currentLocation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                      <p className="font-semibold">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingResult.history.map((item: any, index: number) => (
                      <div key={index} className="flex gap-4">
                        {/* Icon */}
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              item.completed
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {item.completed ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <Package className="h-5 w-5" />
                            )}
                          </div>
                          {index < trackingResult.history.length - 1 && (
                            <div
                              className={`w-0.5 h-16 ${
                                item.completed ? "bg-primary" : "bg-muted"
                              }`}
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <h3
                            className={`font-semibold mb-1 ${
                              item.completed ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {item.status}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">{item.location}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Section */}
          {!trackingResult && (
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  If you're having trouble tracking your shipment, please contact our customer service team.
                </p>
                <Button variant="outline">Contact Support</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackShipment;
