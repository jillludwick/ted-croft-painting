import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide more details about your project")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const whyChooseUsItems = [
  "25+ Years of Proven Experience",
  "Fully Licensed & Insured",
  "Premium Quality Materials",
  "100% Satisfaction Guarantee",
  "Free Color Consultations",
  "Competitive Pricing"
];

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      message: ""
    }
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (_, variables) => {
      setSubmittedName(variables.name.split(" ")[0]);
      setSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactForm.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-body text-4xl md:text-5xl font-light tracking-wide text-primary mb-6" data-testid="contact-title">
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed" data-testid="contact-subtitle">
            Let's Talk About Your Next Project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="bg-green-100 rounded-full p-4 mb-5">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thanks, {submittedName}! We got it.
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-sm">
                    Your estimate request has been received. We'll review your project details and get back to you within <strong>24–48 hours</strong>.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    A confirmation has been sent to your email. If you need to reach us sooner, call <a href="tel:4028123445" className="text-red-600 font-medium">(402) 812-3445</a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-gray-400 underline hover:text-gray-600"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
              <>
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-primary mb-2" data-testid="contact-form-title">
                  Request a Free Estimate
                </h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm font-semibold">
                    🎯 Limited Time: Save up to $500 on projects over $2,000
                  </p>
                </div>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            {...field} 
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(402) 812-3445" 
                              {...field} 
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your@email.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-project-type">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="interior">Interior Painting</SelectItem>
                            <SelectItem value="exterior">Exterior Painting</SelectItem>
                            <SelectItem value="cabinets">Cabinet Refinishing</SelectItem>
                            <SelectItem value="commercial">Commercial Project</SelectItem>
                            <SelectItem value="consultation">Color Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your painting project..."
                            className="resize-none"
                            rows={4}
                            {...field} 
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold urgency-pulse"
                    disabled={submitContactForm.isPending}
                    data-testid="button-submit">
                    {submitContactForm.isPending ? "Sending..." : "🎯 Get My Free Estimate + Discount"}
                  </Button>
                  <p className="text-center text-xs text-gray-600 mt-2">
                    ⚡ Most estimates provided within 24 hours
                  </p>
                </form>
              </Form>
              </>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold text-primary mb-6" data-testid="contact-info-title">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start" data-testid="contact-phone">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-semibold text-primary">Phone</p>
                      <p className="text-neutral-medium">(402) 812-3445</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-email">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-neutral-medium">tjcroft@hotmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-location">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-semibold text-primary">Service Area</p>
                      <p className="text-neutral-medium">Omaha Metropolitan Area<br />& Surrounding Communities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-hours">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-semibold text-primary">Business Hours</p>
                      <p className="text-neutral-medium">
                        Monday - Friday: 7:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-primary text-primary-foreground shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6" data-testid="why-choose-us-title">
                  Why Choose Ted Croft Painting LLC?
                </h3>
                <ul className="space-y-4">
                  {whyChooseUsItems.map((item, index) => (
                    <li key={index} className="flex items-center" data-testid={`why-choose-item-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary-foreground mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
