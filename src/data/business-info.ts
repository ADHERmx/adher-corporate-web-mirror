/**
 * Centralized business information for Acabados Adher S.A. de C.V.
 * Single source of truth for all company data used across the site
 */

export const BUSINESS_INFO = {
  // Company Identity
  legalName: "Acabados Adher S.A. de C.V.",
  brandName: "Acabados Adher",
  tagline: "Pioneros en pintura electrostática desde 1978",
  established: 1978,
  yearsOfExperience: new Date().getFullYear() - 1978,

  // Industry
  industry: "Pintura Electrostática",
  industryEN: "Electrostatic Powder Coating",
  certification: "ISO 9001:2008",

  // Contact Information
  contact: {
    phones: {
      main: "(81) 8351 0648",
      secondary: "(81) 8351 4881",
      mainInternational: "+52 81 8351 0648",
      secondaryInternational: "+52 81 8351 4881",
    },
    whatsapp: {
      number: "+52 81 1910 3216",
      numberDisplay: "+52 (81) 1910 3216",
      link: "https://wa.me/528119103216",
    },
    emails: {
      sales: "ventas@adher.com.mx",
      info: "info@adher.com.mx",
      general: "adher@webtelmex.net.mx",
    },
    website: {
      url: "https://www.adher.com.mx",
      displayUrl: "www.adher.com.mx",
    },
  },

  // Physical Locations
  locations: {
    mainOffice: {
      name: "Oficinas Generales",
      street: "Amado Nervo 2910 Norte",
      neighborhood: "Col. Bella Vista",
      city: "Monterrey",
      state: "Nuevo León",
      stateCode: "NL",
      postalCode: "64410",
      country: "México",
      countryCode: "MX",
      geoRegion: "MX-NLE", // ISO 3166-2 code
      coordinates: {
        latitude: 25.7232,
        longitude: -100.3103,
      },
    },
    plant: {
      name: "Planta",
      street: "Amado Nervo 2902 Norte",
      neighborhood: "Col. Bella Vista",
      city: "Monterrey",
      state: "Nuevo León",
      stateCode: "NL",
      postalCode: "64410",
      country: "México",
      countryCode: "MX",
    },
  },

  // Business Hours
  businessHours: {
    weekdays: {
      days: "Lunes a Viernes",
      daysEN: "Monday to Friday",
      opens: "07:00",
      closes: "18:00",
      display: "7:00 - 18:00",
      openingHoursSpecification: {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    },
    saturday: {
      days: "Sábado",
      daysEN: "Saturday",
      opens: "08:00",
      closes: "14:00",
      display: "8:00 - 14:00",
      openingHoursSpecification: {
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    },
    sunday: {
      days: "Domingo",
      daysEN: "Sunday",
      closed: true,
      display: "Cerrado",
    },
  },

  // Services
  services: [
    {
      id: "powder-coating",
      name: "Pintura en Polvo",
      nameEN: "Powder Coating",
      description: "Aplicación profesional de pintura electrostática en polvo",
    },
    {
      id: "shot-blast",
      name: "Granallado/Shot Blast",
      nameEN: "Shot Blasting",
      description: "Preparación de superficies mediante granallado",
    },
    {
      id: "specialized-packaging",
      name: "Empaque Especializado",
      nameEN: "Specialized Packaging",
      description: "Soluciones de empaque personalizadas",
    },
    {
      id: "just-in-time",
      name: "Just In Time",
      nameEN: "Just In Time",
      description: "Entregas 24/7 según necesidades del cliente",
    },
    {
      id: "quality-assurance",
      name: "Aseguramiento de Calidad",
      nameEN: "Quality Assurance",
      description: "Control de calidad certificado ISO 9001:2008",
    },
    {
      id: "preventive-maintenance",
      name: "Mantenimiento Preventivo",
      nameEN: "Preventive Maintenance",
      description: "Programas de mantenimiento preventivo",
    },
    {
      id: "pyrolysis",
      name: "Quemado de Piezas",
      nameEN: "Pyrolysis Oven Cleaning",
      description: "Limpieza de piezas mediante horno de pirólisis",
    },
  ],

  // Mission & Vision
  mission: "Proporcionar a nuestros clientes el mejor servicio con la seguridad de que cuentan con un proveedor confiable que se preocupa por mantener los recursos humanos, materiales y técnicos necesarios que nos permiten ser competitivos.",
  vision: "Ser la empresa líder en la aplicación de pintura electrostática, con el reconocimiento de nuestros clientes y el compromiso de mantener la calidad y el cuidado del medio ambiente.",

  // Social Media (add when available)
  social: {
    facebook: undefined,
    twitter: undefined,
    linkedin: undefined,
    instagram: undefined,
    youtube: undefined,
  },
} as const;

// Helper functions for formatted addresses
export const getFullAddress = (location: keyof typeof BUSINESS_INFO.locations) => {
  const loc = BUSINESS_INFO.locations[location];
  return `${loc.street}, ${loc.neighborhood}, ${loc.city}, ${loc.stateCode} ${loc.postalCode}, ${loc.country}`;
};

export const getSchemaAddress = (location: keyof typeof BUSINESS_INFO.locations) => {
  const loc = BUSINESS_INFO.locations[location];
  return {
    "@type": "PostalAddress",
    streetAddress: loc.street,
    addressLocality: loc.city,
    addressRegion: loc.stateCode,
    postalCode: loc.postalCode,
    addressCountry: loc.countryCode,
  };
};

export const getAllPhones = () => [
  BUSINESS_INFO.contact.phones.main,
  BUSINESS_INFO.contact.phones.secondary,
];

export const getOpeningHours = () => [
  BUSINESS_INFO.businessHours.weekdays.openingHoursSpecification,
  BUSINESS_INFO.businessHours.saturday.openingHoursSpecification,
];
