import { Scissors, Hand, Heart, Sparkles, Zap } from "lucide-react";
import heroBarbershop from "@/assets/barber_area.jpeg";
import heroSpa from "@/assets/massage_oil.jpg";
import heroMassage from "@/assets/massage1.jpeg";
import heroFacial from "@/assets/hair_products.jpg";
import heroWaxing from "@/assets/massage.jpg";

// barbershop info
export const BRAND_NAME = "Baberia Cuts Platinum";
export const CONTACT_NUMBER = "+254779431913";
export const CONTACT_EMAIL = "info@baberiacuts.co.ke";
export const BOOKING_EMAIL = "booking@baberiacuts.co.ke";

// socials
export const BRAND_INSTAGRAM = "#";
export const BRAND_X = "#";
export const BRAND_FACEBOOK = "#";

// physical location
export const BUILDING = "Pension Towers";
export const STREET = "Loita";
export const LOCATION = "Nairobi, Kenya";

// developer info
export const DEVELOPER_WEBSITE = "https://mawirab.com";

export const serviceCategories = [
  {
    icon: Scissors,
    title: "HAIRCUT",
    description:
      "Premium haircuts and styling services with precision and artistry",
    image: heroBarbershop,
    href: "/services/haircut",
    features: [
      "Platinum Haircut",
      "Platinum Fade",
      "Royal Shave",
      "Beard Trim",
    ],
    services: [
      "Platinum Haircut - KES 1,500",
      "Platinum Fade - KES 2,000",
      "Royal Shave - KES 2,000",
    ],
    startingPrice: "KES 1,000",
  },
  {
    icon: Hand,
    title: "NAIL CARE",
    description: "Professional nail care and maintenance for hands and feet",
    image: heroSpa,
    href: "/services/nail-care",
    features: [
      "Platinum Footcare",
      "Platinum Handcare",
      "Pedicure Mask",
      "Paraffin Wax",
    ],
    services: [
      "Platinum Footcare - KES 2,500",
      "Platinum Handcare - KES 1,500",
      "Paraffin Wax - KES 1,000",
    ],
    startingPrice: "KES 1,000",
  },
  {
    icon: Heart,
    title: "MASSAGE",
    description:
      "Therapeutic and relaxation massage treatments for ultimate wellness",
    image: heroMassage,
    href: "/services/massage",
    features: [
      "Platinum Hotstone",
      "Swedish Massage",
      "Deep Tissue",
      "Aromatherapy",
    ],
    services: [
      "Platinum Hotstone - KES 6,000",
      "Swedish Massage - KES 4,500",
      "Deep Tissue - KES 5,000",
    ],
    startingPrice: "KES 500",
  },
  {
    icon: Sparkles,
    title: "FACIAL",
    description: "Advanced facial treatments for healthy, glowing skin",
    image: heroFacial,
    href: "/services/facial",
    features: ["Platinum Hydrating", "Anti-aging", "Mini Facial"],
    services: [
      "Platinum Hydrating - KES 4,000",
      "Anti-aging - KES 4,500",
      "Mini Facial - KES 2,000",
    ],
    startingPrice: "KES 1,500",
  },
  {
    icon: Zap,
    title: "WAXING",
    description: "Professional waxing services for smooth, hair-free skin",
    image: heroWaxing,
    href: "/services/waxing",
    features: ["Brazilian", "Chest", "Leg Waxing"],
    services: [
      "Brazilian - KES 3,000",
      "Chest - KES 1,500",
      "Leg Waxing - KES 1,500",
    ],
    startingPrice: "KES 1,000",
  },
];
