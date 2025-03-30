import { Metadata } from "next";


export const siteBasics ={
  name:"Savanna Interiors",
  url:"https://savannadesigns.co.ke"
}

export const metadata: Metadata = {
  title: {
    absolute: `${siteBasics.name}  | Where Nature Meets Elegance`,
    default:`${siteBasics.name}  | Premium Interior Design in Kenya`,
    template: `%s | ${siteBasics.name}`,
},
  description: "Creating harmonious spaces inspired by Kenya's breathtaking landscapes. Premium interior design that celebrates natural beauty and sustainable practices.",
  keywords: ["interior design", "Kenya", "Nairobi", "sustainable design", "biophilic design", "African design", "commercial spaces", "residential design"],
  authors: [{ name: "Tigawanna" }],
  creator: "Tigawanna",
  publisher: "Tigawanna",
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  metadataBase: new URL(siteBasics.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteBasics.name}  | Where Nature Meets Elegance`,
    description: "Premium interior design inspired by Kenya's natural beauty, creating harmonious and functional spaces.",
    url: siteBasics.url,
    siteName:siteBasics.name,
    locale: "en_KE",
    type: "website",
    // images: [
    //   {
    //     url: "/images/og-image.jpg", // You'll need to add this image
    //     width: 1200,
    //     height: 630,
    //     alt: `${siteBasics.name}  - Interior Design in Kenya",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteBasics.name} | Premium Interior Design`,
    description: "Creating beautiful, sustainable interior spaces inspired by Kenya's natural landscapes.",
    //images: ["/images/twitter-image.jpg"], // You'll need to add this image
  },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  // },
  category: "Interior Design",
};
