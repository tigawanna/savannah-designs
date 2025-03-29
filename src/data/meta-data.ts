import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:"Savanna Designs | Premium Interior Design in Kenya",
    template: "%s | Savanna Designs",
},
  description: "Creating harmonious spaces inspired by Kenya's breathtaking landscapes. Premium interior design that celebrates natural beauty and sustainable practices.",
  keywords: ["interior design", "Kenya", "Nairobi", "sustainable design", "biophilic design", "African design", "commercial spaces", "residential design"],
  authors: [{ name: "Savanna Designs" }],
  creator: "Savanna Designs",
  publisher: "Savanna Designs",
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  metadataBase: new URL("https://savannadesigns.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Savanna Designs | Where Nature Meets Elegance",
    description: "Premium interior design inspired by Kenya's natural beauty, creating harmonious and functional spaces.",
    url: "https://savannadesigns.co.ke",
    siteName: "Savanna Designs",
    locale: "en_KE",
    type: "website",
    // images: [
    //   {
    //     url: "/images/og-image.jpg", // You'll need to add this image
    //     width: 1200,
    //     height: 630,
    //     alt: "Savanna Designs - Interior Design in Kenya",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savanna Designs | Premium Interior Design",
    description: "Creating beautiful, sustainable interior spaces inspired by Kenya's natural landscapes.",
    //images: ["/images/twitter-image.jpg"], // You'll need to add this image
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  category: "Interior Design",
};
