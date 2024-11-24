import { useState } from "react";
import { Shield, Lock, Database, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setEmail("");
    setMessage("");
  };

  const stats = [
    { icon: Shield, value: "99.9%", label: "Uptime Security" },
    { icon: Lock, value: "24/7", label: "Monitoring" },
    { icon: Database, value: "100+", label: "Clients Protected" },
    { icon: Bug, value: "0", label: "Security Breaches" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Secure Your Digital Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade cybersecurity solutions for businesses of all sizes
          </p>
          <Button className="glow text-lg px-8 py-6">Get Protected Now</Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-secondary/80 backdrop-blur-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-12 h-12 mb-4 text-primary mx-auto" />
                <div className="text-4xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Comprehensive Security Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-secondary/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Threat Detection
              </h3>
              <p className="text-muted-foreground">
                Advanced AI-powered systems to detect and prevent security threats
                in real-time.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Data Protection
              </h3>
              <p className="text-muted-foreground">
                Enterprise-grade encryption and secure data storage solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary/80 backdrop-blur-sm"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-secondary/80 backdrop-blur-sm"
                  required
                />
              </div>
              <Button type="submit" className="w-full glow">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p>© 2024 CyberSecurity Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;