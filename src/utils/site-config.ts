export const siteConfig = {
    // Basic site info
    siteName: "Savannah Designs",
    siteDescription: "Modern interior design solutions for your space",
    siteUrl: "https://savannah-designs.com", // Replace with actual URL

    // Contact information
    contact: {
        email: "hello@savannah-designs.com",
        phone: "+1 (555) 123-4567",
        address: "123 Design Street, Savannah, GA 30301",
    },

    // Social media links
    social: {
        instagram: "https://instagram.com/savannahdesigns",
        facebook: "https://facebook.com/savannahdesigns",
        pinterest: "https://pinterest.com/savannahdesigns",
        linkedin: "https://linkedin.com/company/savannah-designs",
    },

    // Brand colors
    colors: {
        primary: "#4A5568",
        secondary: "#CBD5E0",
        accent: "#F6AD55",
        background: "#FFFFFF",
        text: "#1A202C",
    },

    // SEO defaults
    defaultSeo: {
        titleTemplate: "%s | Savannah Designs",
        defaultTitle: "Savannah Designs - Interior Design Solutions",
        robotsProps: {
            maxSnippet: -1,
            maxImagePreview: "large",
            maxVideoPreview: -1,
        },
    },

    // Navigation links
    mainNav: [
        { title: "Home", href: "/" },
        { title: "Services", href: "/services" },
        { title: "Portfolio", href: "/portfolio" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ],
} as const;

export type SiteConfig = typeof siteConfig;
