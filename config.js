/**
 * NIZAR SBAIK — RESTAURANT CONFIGURATION FILE
 * 
 * NOTE FOR THE OWNER / WEBMASTER:
 * In accordance with the project brief:
 * - Telephone, WhatsApp, and Opening Hours are intentionally left unset until confirmed.
 * - Sample prices are marked for owner review before publication.
 * - Reservation backend URL is left blank until your backend or webhook is connected.
 * 
 * You can easily update all values below before deploying to production.
 */

const RESTAURANT_CONFIG = {
  // Brand identity
  brandName: "Nizar Sbaik",
  brandNameArabic: "نزار سبائك",
  brandTagline: "Luxury Syrian Restaurant • Hay Al Dakhla, Agadir",
  
  // Confirmed Location
  location: {
    neighborhood: "Hay Al Dakhla",
    city: "Agadir",
    country: "Morocco",
    countryArabic: "المغرب",
    // Note: Exact street address and coordinates are left unset until confirmed by owner.
    exactAddress: null, // e.g. "Avenue Al Mouqaouama, Hay Al Dakhla, Agadir"
    // General Hay Al Dakhla, Agadir Google Maps query link:
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Hay+Al+Dakhla+Agadir+Morocco",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13764.576822896572!2d-9.563060599999999!3d30.410656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6f1207e11f1%3A0x7d013f9f9b5c3b5!2sDakhla%2C%20Agadir%2080000%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
  },

  // Contact Information (Intentionally unset per brief — update with real numbers)
  contact: {
    // Phone number for calls:
    phone: null, // Set e.g. "+212 5 28 XX XX XX" when confirmed
    
    // WhatsApp number (international format without + or spaces, e.g. "212600000000"):
    whatsappNumber: null, // Set e.g. "2126XXXXXXXX" when confirmed
    
    // Official Email address:
    email: null, // Set e.g. "contact@nizarsbaik.ma" when confirmed
    
    // Social media links:
    instagram: null, // e.g. "https://instagram.com/nizarsbaik"
    facebook: null,  // e.g. "https://facebook.com/nizarsbaik"
    tiktok: null
  },

  // Opening Hours (Intentionally unset per brief — update when confirmed)
  openingHours: {
    isConfirmed: false,
    lunchHours: null,   // e.g. "12:00 – 16:00"
    dinnerHours: null,  // e.g. "19:00 – 00:00"
    daysOpen: null,     // e.g. "Tuesday – Sunday (Closed Mondays)"
    displayNotice: "Opening hours will be published upon official confirmation"
  },

  // Currency and Pricing Review
  pricing: {
    currencyCode: "MAD",
    currencySymbol: "MAD",
    currencySymbolArabic: "د.م.",
    samplePricesActive: true,
    samplePricesNotice: "Sample prices shown in Moroccan Dirhams (MAD) for owner review prior to official launch."
  },

  // Reservation System Settings
  reservations: {
    // Leave backendEndpoint as null for GitHub Pages / static hosting (routes directly to WhatsApp).
    // To connect a free automated email service on GitHub Pages, paste your Formspree or webhook URL here:
    // e.g. "https://formspree.io/f/your_form_id"
    backendEndpoint: null,

    // Enable WhatsApp direct booking option alongside backend booking:
    enableWhatsAppDirectBooking: true,

    // Max guests allowed in normal online reservation:
    maxGuests: 25,

    // Advance booking limit in days:
    advanceBookingDays: 60,

    // Time slots available:
    availableTimeSlots: [
      "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
      "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"
    ]
  }
};

// Export for ES6 modules and window global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RESTAURANT_CONFIG;
}
