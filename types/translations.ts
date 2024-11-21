export interface Translations {
  common: {
    home: string;
    about: string;
    contact: string;
    login: string;
    signup: string;
    search: string;
    settings: string;
    profile: string;
    logout: string;
  };
  hero: {
    title: string;
    description: string;
    downloadIOS: string;
    downloadAndroid: string;
    features: {
      userManagement: string;
      analytics: string;
      research: string;
      surveys: string;
      collaboration: string;
    };
    getStarted: string;
    learnMore: string;
    trusted: string;
  };
  navigation: {
    home: string;
    features: string;
    pricing: string;
    contact: string;
  };
  // Add more sections as needed
  [key: string]: any;
}
