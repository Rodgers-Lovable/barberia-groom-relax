import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { OperatingHours } from "@/components/OperatingHours";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_BOOKING_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
} from "@/config/env";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceCategory: "",
    specificService: "",
    provider: "",
    date: undefined as Date | undefined,
    time: "",
    addOns: [] as string[],
    notes: "",
  });

  const serviceCategories = {
    haircut: "HAIRCUT",
    nailcare: "NAIL CARE",
    massage: "MASSAGE",
    facial: "FACIAL",
    waxing: "WAXING",
    package: "Premium Packages",
  };

  const services = {
    haircut: [
      "Platinum Haircut - KES 1,500",
      "Platinum Fade - KES 2,000",
      "Royal Shave - KES 2,000",
      "Beard Trim - KES 1,000",
      "Beard Trim & Dye - KES 1,500",
      "Styling - KES 1,000",
      "Kids Cut - KES 1,000",
      "Hair Dye Black - KES 1,500",
      "Hair Dye Colored - KES 4,000",
      "Texturizing - KES 1,000",
      "Treatment - KES 1,000",
    ],
    nailcare: [
      "Platinum Footcare - KES 2,500",
      "Platinum Handcare - KES 1,500",
      "Platinum Nail Maintenance - KES 1,000",
      "Platinum Cut & File Feet - KES 1,000",
      "Pedicure Mask - KES 1,000",
      "Paraffin Wax - KES 1,000",
    ],
    massage: [
      "Platinum Hotstone Massage - KES 6,000",
      "Back Massage - KES 2,500",
      "Foot Massage - KES 1,000",
      "Head & Shoulder Massage - KES 1,000",
      "Hand Massage - KES 500",
      "Body Wrap/Mask - KES 4,000",
      "Steam Bath - KES 2,500",
      "Body Scrub - KES 3,000",
      "Platinum Swedish Massage - KES 4,500",
      "Platinum Deep Tissue Massage - KES 5,000",
      "Platinum Aromatherapy Massage - KES 5,500",
    ],
    facial: [
      "Steaming - KES 1,500",
      "Mask - KES 1,500",
      "Scrub - KES 1,500",
      "Platinum Hydrating Facial - KES 4,000",
      "Platinum Antiaging Facial - KES 4,500",
      "Mini Facial - KES 2,000",
    ],
    waxing: [
      "Armpit - KES 1,000",
      "Chest - KES 1,500",
      "Back - KES 1,500",
      "Leg Waxing - KES 1,500",
      "Bikini Waxing - KES 2,500",
      "Brazilian Waxing - KES 3,000",
    ],
    package: [
      "Groom & Relax - KES 5,500",
      "Executive Reset - KES 7,000",
      "Platinum Wellness - KES 10,500",
    ],
  };

  const providers = [
    "Marcus (Senior Barber)",
    "David (Master Barber)",
    "Sarah (Spa Therapist)",
    "Lisa (Massage Specialist)",
    "Any Available",
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ];

  const addOns = [
    "Scalp Massage (+15min)",
    "Beard Oil Treatment (+10min)",
    "Face Mask (+20min)",
    "Aromatherapy (+KES10)",
    "Hot Towel Treatment (+15min)",
  ];

  const handleSubmit = async () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.serviceCategory ||
      !formData.date
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        to_name: "Baberia Cuts Platinum",
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        service_category: formData.serviceCategory,
        specific_service: formData.specificService,
        preferred_provider: formData.provider || "Any Available",
        appointment_date: formData.date ? format(formData.date, "PPP") : "",
        appointment_time: formData.time,
        message_type: "booking",
        add_ons: formData.addOns.join(", ") || "None",
        notes: formData.notes || "None",
        message: `New booking request from ${formData.name}. Service: ${
          formData.specificService
        } on ${formData.date ? format(formData.date, "PPP") : ""} at ${
          formData.time
        }.`,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_BOOKING_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Show success animation
      const successElement = document.createElement('div');
      successElement.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 animate-fade-in-scale';
      successElement.innerHTML = `
        <div class="bg-background p-8 rounded-xl shadow-xl text-center animate-bounce-subtle">
          <div class="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-primary mb-2">Booking Sent!</h3>
          <p class="text-muted-foreground">We'll confirm within 2 hours.</p>
        </div>
      `;
      document.body.appendChild(successElement);
      
      setTimeout(() => {
        document.body.removeChild(successElement);
      }, 2000);

      toast.success(
        "Booking request submitted! We'll confirm your appointment within 2 hours."
      );
      onClose();

      // Reset form
      setStep(1);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceCategory: "",
        specificService: "",
        provider: "",
        date: undefined,
        time: "",
        addOns: [],
        notes: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(
        "Failed to submit booking request. Please try again or call us directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddOnToggle = (addOn: string) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOn)
        ? prev.addOns.filter((item) => item !== addOn)
        : [...prev.addOns, addOn],
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-primary">
            Book Your Appointment at Baberia Cuts Platinum
          </DialogTitle>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div
              className={`w-2 h-2 rounded-full ${
                step >= 1 ? "bg-accent" : "bg-muted"
              }`}
            />
            <span>Personal Info</span>
            <div
              className={`w-2 h-2 rounded-full ${
                step >= 2 ? "bg-accent" : "bg-muted"
              }`}
            />
            <span>Service Selection</span>
            <div
              className={`w-2 h-2 rounded-full ${
                step >= 3 ? "bg-accent" : "bg-muted"
              }`}
            />
            <span>Date & Time</span>
          </div>

          {/* Operating Hours in Booking Modal */}
          <div className="pt-4">
            <OperatingHours variant="compact" showLocation={false} />
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Full Name *</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="flex items-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Phone Number *</span>
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder="+254 123 456 789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email Address</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Service Category *</Label>
                <Select
                  value={formData.serviceCategory}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      serviceCategory: value,
                      specificService: "",
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose service category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(serviceCategories).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.serviceCategory && (
                <div className="space-y-2">
                  <Label>Specific Service *</Label>
                  <Select
                    value={formData.specificService}
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        specificService: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose specific service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services[
                        formData.serviceCategory as keyof typeof services
                      ]?.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label>Preferred Provider</Label>
                <Select
                  value={formData.provider}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, provider: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any available provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((provider) => (
                      <SelectItem key={provider} value={provider}>
                        {provider}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Add-ons</Label>
                <div className="grid grid-cols-1 gap-2">
                  {addOns.map((addOn) => (
                    <label
                      key={addOn}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.addOns.includes(addOn)}
                        onChange={() => handleAddOnToggle(addOn)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{addOn}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Preferred Date *</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? (
                        format(formData.date, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) =>
                        setFormData((prev) => ({ ...prev, date }))
                      }
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0
                      } // Disable past dates and Sundays
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Preferred Time *</span>
                </Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, time: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Special Requests</span>
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Any special requests or notes for your appointment..."
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Previous
            </Button>

            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)} className="btn-premium" disabled={isLoading}>
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="btn-premium" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Booking...
                  </>
                ) : (
                  "Book Appointment"
                )}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
