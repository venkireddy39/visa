import japanImg from '../assets/images/japan.png';
import chinaImg from '../assets/images/china.png';
import dubaiImg from '../assets/images/dubai.png';
import singaporeImg from '../assets/images/singapore.png';
import thailandImg from '../assets/images/thailand.png';
import malaysiaImg from '../assets/images/malaysia.png';
import southKoreaImg from '../assets/images/south-korea.png';
import vietnamImg from '../assets/images/vietnam.png';
import turkeyImg from '../assets/images/turkey.png';
import ukImg from '../assets/images/uk.png';
import australiaImg from '../assets/images/australia.png';
import canadaImg from '../assets/images/canada.png';

export const destinations = [
  {
    id: 'japan',
    name: 'Japan',
    image: japanImg,
    processingTime: '5-7 Business Days',
    startingPrice: 4999,
    currency: '₹',
    flag: '🇯🇵',
    description: 'Explore the land of the rising sun with seamless visa processing.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed application form',
      'Passport-size photographs',
      'Financial proof (bank statements)',
      'Travel itinerary',
      'Hotel reservations',
      'Return flight tickets'
    ],
    successRate: 97,
    popular: true
  },
  {
    id: 'china',
    name: 'China',
    image: chinaImg,
    processingTime: '4-6 Business Days',
    startingPrice: 5999,
    currency: '₹',
    flag: '🇨🇳',
    description: 'Discover ancient wonders and modern marvels with hassle-free visa assistance.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed visa application form',
      'Recent passport-size photos',
      'Invitation letter (for business)',
      'Bank statements (3 months)',
      'Travel insurance',
      'Flight itinerary'
    ],
    successRate: 95,
    popular: true
  },
  {
    id: 'singapore',
    name: 'Singapore',
    image: singaporeImg,
    processingTime: '3-5 Business Days',
    startingPrice: 2999,
    currency: '₹',
    flag: '🇸🇬',
    description: 'Visit the garden city with quick and reliable visa processing.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed Form 14A',
      'Recent color photographs',
      'Cover letter',
      'Bank statements (3 months)',
      'Flight itinerary',
      'Hotel reservations'
    ],
    successRate: 96,
    popular: true
  },
  {
    id: 'thailand',
    name: 'Thailand',
    image: thailandImg,
    processingTime: '2-4 Business Days',
    startingPrice: 1999,
    currency: '₹',
    flag: '🇹🇭',
    description: 'Enjoy tropical paradise with the fastest visa processing available.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed application form',
      'Passport-size photographs',
      'Bank statements (3 months)',
      'Flight confirmation',
      'Hotel booking'
    ],
    successRate: 98,
    popular: true
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    image: dubaiImg,
    processingTime: '3-5 Business Days',
    startingPrice: 3499,
    currency: '₹',
    flag: '🇦🇪',
    description: 'Experience luxury and adventure in the jewel of the Middle East.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Passport-size photographs',
      'Confirmed return tickets',
      'Hotel booking confirmation',
      'Bank statements (3 months)',
      'Travel insurance'
    ],
    successRate: 99,
    popular: true
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    image: malaysiaImg,
    processingTime: '3-5 Business Days',
    startingPrice: 2499,
    currency: '₹',
    flag: '🇲🇾',
    description: 'Explore diverse culture and natural beauty with easy visa assistance.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed application form',
      'Passport-size photographs',
      'Financial proof',
      'Flight itinerary',
      'Accommodation proof',
      'Travel insurance'
    ],
    successRate: 97,
    popular: true
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    image: southKoreaImg,
    processingTime: '5-7 Business Days',
    startingPrice: 4499,
    currency: '₹',
    flag: '🇰🇷',
    description: 'Discover K-culture, ancient temples, and futuristic cityscapes.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed application form',
      'Passport-size photographs',
      'Bank statements (3 months)',
      'Travel itinerary',
      'Hotel reservations',
      'Return flight tickets'
    ],
    successRate: 96,
    popular: true
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    image: vietnamImg,
    processingTime: '3-5 Business Days',
    startingPrice: 2299,
    currency: '₹',
    flag: '🇻🇳',
    description: 'Experience breathtaking landscapes from Ha Long Bay to vibrant Saigon.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed application form',
      'Passport-size photographs',
      'Bank statements (3 months)',
      'Flight itinerary',
      'Hotel booking'
    ],
    successRate: 98,
    popular: true
  },
  {
    id: 'turkey',
    name: 'Turkey',
    image: turkeyImg,
    processingTime: '3-5 Business Days',
    startingPrice: 3999,
    currency: '₹',
    flag: '🇹🇷',
    description: 'Where East meets West — explore Istanbul, Cappadocia, and beyond.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed e-Visa application',
      'Passport-size photographs',
      'Bank statements (3 months)',
      'Travel insurance',
      'Hotel reservations'
    ],
    successRate: 97,
    popular: true
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    image: ukImg,
    processingTime: '10-15 Business Days',
    startingPrice: 8999,
    currency: '₹',
    flag: '🇬🇧',
    description: 'Visit London, Edinburgh, and the historic British countryside.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed online application',
      'Biometric appointment',
      'Bank statements (6 months)',
      'Travel itinerary',
      'Accommodation proof',
      'TB test certificate'
    ],
    successRate: 93,
    popular: true
  },
  {
    id: 'australia',
    name: 'Australia',
    image: australiaImg,
    processingTime: '15-20 Business Days',
    startingPrice: 9499,
    currency: '₹',
    flag: '🇦🇺',
    description: 'Explore the Great Barrier Reef, Sydney Opera House, and Outback.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed online application',
      'Bank statements (6 months)',
      'Health examination',
      'Character certificate',
      'Travel insurance',
      'Return flight tickets'
    ],
    successRate: 92,
    popular: true
  },
  {
    id: 'canada',
    name: 'Canada',
    image: canadaImg,
    processingTime: '15-25 Business Days',
    startingPrice: 8499,
    currency: '₹',
    flag: '🇨🇦',
    description: 'Experience Niagara Falls, Rocky Mountains, and multicultural cities.',
    visaTypes: ['Tourist', 'Business'],
    requirements: [
      'Valid passport (6+ months validity)',
      'Completed online application',
      'Biometric appointment',
      'Bank statements (6 months)',
      'Travel itinerary',
      'Accommodation proof',
      'Proof of ties to home country'
    ],
    successRate: 91,
    popular: true
  }
];

export const allCountries = [
  { id: 'japan', name: 'Japan', flag: '🇯🇵', continent: 'Asia', image: japanImg },
  { id: 'china', name: 'China', flag: '🇨🇳', continent: 'Asia', image: chinaImg },
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬', continent: 'Asia', image: singaporeImg },
  { id: 'thailand', name: 'Thailand', flag: '🇹🇭', continent: 'Asia', image: thailandImg },
  { id: 'dubai', name: 'United Arab Emirates', flag: '🇦🇪', continent: 'Middle East', image: dubaiImg },
  { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', continent: 'Asia', image: malaysiaImg },
  { id: 'south-korea', name: 'South Korea', flag: '🇰🇷', continent: 'Asia', image: southKoreaImg },
  { id: 'vietnam', name: 'Vietnam', flag: '🇻🇳', continent: 'Asia', image: vietnamImg },
  { id: 'turkey', name: 'Turkey', flag: '🇹🇷', continent: 'Europe', image: turkeyImg },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', continent: 'Europe', image: ukImg },
  { id: 'australia', name: 'Australia', flag: '🇦🇺', continent: 'Oceania', image: australiaImg },
  { id: 'canada', name: 'Canada', flag: '🇨🇦', continent: 'Americas', image: canadaImg },
  { id: 'usa', name: 'United States', flag: '🇺🇸', continent: 'Americas', image: 'https://www.attractionsofamerica.com/images/all_travel/20210128082756_beautiful-cities-us-madison.jpg' },
  { id: 'france', name: 'France', flag: '🇫🇷', continent: 'Europe', image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Mont-Saint-Michel_vu_du_ciel.jpg' },
  { id: 'germany', name: 'Germany', flag: '🇩🇪', continent: 'Europe', image: 'https://images.alphacoders.com/681/681211.jpg' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹', continent: 'Europe', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg' },
  { id: 'spain', name: 'Spain', flag: '🇪🇸', continent: 'Europe', image: 'https://s.yimg.com/fz/api/res/1.2/mXFZ6Gi.1zzr3TQYFbEBUg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/d4/7a/f5/d47af545dd3f22a6d015efc973b5a286.jpg' },
  { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭', continent: 'Europe', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Matterhorn_and_Gornergratbahn.jpg' },
  { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱', continent: 'Europe', image: 'https://picsum.photos/seed/netherlands/600/400' },
  { id: 'belgium', name: 'Belgium', flag: '🇧🇪', continent: 'Europe', image: 'https://picsum.photos/seed/belgium/600/400' },
  { id: 'austria', name: 'Austria', flag: '🇦🇹', continent: 'Europe', image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Belvedere_Vienna_June_2006_010.jpg' },
  { id: 'portugal', name: 'Portugal', flag: '🇵🇹', continent: 'Europe', image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Lisbon_%2836211706583%29.jpg' },
  { id: 'greece', name: 'Greece', flag: '🇬🇷', continent: 'Europe', image: 'https://picsum.photos/seed/greece/600/400' },
  { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', continent: 'Oceania', image: 'https://picsum.photos/seed/new-zealand/600/400' },
  { id: 'south-africa', name: 'South Africa', flag: '🇿🇦', continent: 'Africa', image: 'https://picsum.photos/seed/south-africa/600/400' },
  { id: 'kenya', name: 'Kenya', flag: '🇰🇪', continent: 'Africa', image: 'https://picsum.photos/seed/kenya/600/400' },
  { id: 'egypt', name: 'Egypt', flag: '🇪🇬', continent: 'Africa', image: 'https://picsum.photos/seed/egypt/600/400' },
  { id: 'morocco', name: 'Morocco', flag: '🇲🇦', continent: 'Africa', image: 'https://picsum.photos/seed/morocco/600/400' },
  { id: 'tanzania', name: 'Tanzania', flag: '🇹🇿', continent: 'Africa', image: 'https://tse3.mm.bing.net/th/id/OIP.dTV5Vi784rgvRmpBYBkWgwHaE8?pid=Api&P=0&h=180' },
  { id: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', continent: 'Middle East', image: 'https://picsum.photos/seed/saudi-arabia/600/400' },
  { id: 'qatar', name: 'Qatar', flag: '🇶🇦', continent: 'Middle East', image: 'https://picsum.photos/seed/qatar/600/400' },
  { id: 'oman', name: 'Oman', flag: '🇴🇲', continent: 'Middle East', image: 'https://picsum.photos/seed/oman/600/400' },
  { id: 'bahrain', name: 'Bahrain', flag: '🇧🇭', continent: 'Middle East', image: 'https://picsum.photos/seed/bahrain/600/400' },
  { id: 'kuwait', name: 'Kuwait', flag: '🇰🇼', continent: 'Middle East', image: 'https://picsum.photos/seed/kuwait/600/400' },
  { id: 'indonesia', name: 'Indonesia', flag: '🇮🇩', continent: 'Asia', image: 'https://sp.yimg.com/ib/th/id/OIP.v-5bsGpBAvRdHc-4bvzrbgHaE3?pid=Api&w=148&h=148&c=7&dpr=2&rs=1' },
  { id: 'philippines', name: 'Philippines', flag: '🇵🇭', continent: 'Asia', image: 'https://picsum.photos/seed/philippines/600/400' },
  { id: 'sri-lanka', name: 'Sri Lanka', flag: '🇱🇰', continent: 'Asia', image: 'https://picsum.photos/seed/sri-lanka/600/400' },
  { id: 'nepal', name: 'Nepal', flag: '🇳🇵', continent: 'Asia', image: 'https://picsum.photos/seed/nepal/600/400' },
  { id: 'bhutan', name: 'Bhutan', flag: '🇧🇹', continent: 'Asia', image: 'https://picsum.photos/seed/bhutan/600/400' },
  { id: 'maldives', name: 'Maldives', flag: '🇲🇻', continent: 'Asia', image: 'https://picsum.photos/seed/maldives/600/400' },
  { id: 'mexico', name: 'Mexico', flag: '🇲🇽', continent: 'Americas', image: 'https://picsum.photos/seed/mexico/600/400' },
  { id: 'brazil', name: 'Brazil', flag: '🇧🇷', continent: 'Americas', image: 'https://picsum.photos/seed/brazil/600/400' },
  { id: 'argentina', name: 'Argentina', flag: '🇦🇷', continent: 'Americas', image: 'https://picsum.photos/seed/argentina/600/400' },
  { id: 'albania', name: 'Albania', flag: '🇦🇱', continent: 'Europe', image: 'https://picsum.photos/seed/albania/600/400' },
  { id: 'algeria', name: 'Algeria', flag: '🇩🇿', continent: 'Africa', image: 'https://picsum.photos/seed/algeria/600/400' },
  { id: 'andorra', name: 'Andorra', flag: '🇦🇩', continent: 'Europe', image: 'https://picsum.photos/seed/andorra/600/400' },
  { id: 'angola', name: 'Angola', flag: '🇦🇴', continent: 'Africa', image: 'https://picsum.photos/seed/angola/600/400' },
  { id: 'antigua-and-barbuda', name: 'Antigua and Barbuda', flag: '🇦🇬', continent: 'Americas', image: 'https://picsum.photos/seed/antigua-and-barbuda/600/400' },
  { id: 'armenia', name: 'Armenia', flag: '🇦🇲', continent: 'Asia', image: 'https://picsum.photos/seed/armenia/600/400' },
  { id: 'azerbaijan', name: 'Azerbaijan', flag: '🇦🇿', continent: 'Asia', image: 'https://picsum.photos/seed/azerbaijan/600/400' },
  { id: 'bahamas', name: 'Bahamas', flag: '🇧🇸', continent: 'Americas', image: 'https://picsum.photos/seed/bahamas/600/400' },
  { id: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩', continent: 'Asia', image: 'https://picsum.photos/seed/bangladesh/600/400' },
  { id: 'barbados', name: 'Barbados', flag: '🇧🇧', continent: 'Americas', image: 'https://picsum.photos/seed/barbados/600/400' },
  { id: 'belarus', name: 'Belarus', flag: '🇧🇾', continent: 'Europe', image: 'https://picsum.photos/seed/belarus/600/400' },
  { id: 'belize', name: 'Belize', flag: '🇧🇿', continent: 'Americas', image: 'https://picsum.photos/seed/belize/600/400' },
  { id: 'benin', name: 'Benin', flag: '🇧🇯', continent: 'Africa', image: 'https://picsum.photos/seed/benin/600/400' },
  { id: 'bolivia', name: 'Bolivia', flag: '🇧🇴', continent: 'Americas', image: 'https://picsum.photos/seed/bolivia/600/400' },
  { id: 'bosnia-and-herzegovina', name: 'Bosnia and Herzegovina', flag: '🇧🇦', continent: 'Europe', image: 'https://picsum.photos/seed/bosnia-and-herzegovina/600/400' },
  { id: 'botswana', name: 'Botswana', flag: '🇧🇼', continent: 'Africa', image: 'https://picsum.photos/seed/botswana/600/400' },
  { id: 'brunei', name: 'Brunei', flag: '🇧🇳', continent: 'Asia', image: 'https://picsum.photos/seed/brunei/600/400' },
  { id: 'bulgaria', name: 'Bulgaria', flag: '🇧🇬', continent: 'Europe', image: 'https://picsum.photos/seed/bulgaria/600/400' },
  { id: 'burkina-faso', name: 'Burkina Faso', flag: '🇧🇫', continent: 'Africa', image: 'https://picsum.photos/seed/burkina-faso/600/400' },
  { id: 'burundi', name: 'Burundi', flag: '🇧🇮', continent: 'Africa', image: 'https://picsum.photos/seed/burundi/600/400' },
  { id: 'cabo-verde', name: 'Cabo Verde', flag: '🇨🇻', continent: 'Africa', image: 'https://picsum.photos/seed/cabo-verde/600/400' },
  { id: 'cambodia', name: 'Cambodia', flag: '🇰🇭', continent: 'Asia', image: 'https://picsum.photos/seed/cambodia/600/400' },
  { id: 'cameroon', name: 'Cameroon', flag: '🇨🇲', continent: 'Africa', image: 'https://picsum.photos/seed/cameroon/600/400' },
  { id: 'central-african-republic', name: 'Central African Republic', flag: '🇨🇫', continent: 'Africa', image: 'https://picsum.photos/seed/central-african-republic/600/400' },
  { id: 'chad', name: 'Chad', flag: '🇹🇩', continent: 'Africa', image: 'https://picsum.photos/seed/chad/600/400' },
  { id: 'chile', name: 'Chile', flag: '🇨🇱', continent: 'Americas', image: 'https://picsum.photos/seed/chile/600/400' },
  { id: 'colombia', name: 'Colombia', flag: '🇨🇴', continent: 'Americas', image: 'https://picsum.photos/seed/colombia/600/400' },
  { id: 'congo-brazzaville', name: 'Congo (Congo-Brazzaville)', flag: '🇨🇬', continent: 'Africa', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop' },
  { id: 'costa-rica', name: 'Costa Rica', flag: '🇨🇷', continent: 'Americas', image: 'https://picsum.photos/seed/costa-rica/600/400' },
  { id: 'cote-divoire', name: "Côte d'Ivoire", flag: '🇨🇮', continent: 'Africa', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop' },
  { id: 'croatia', name: 'Croatia', flag: '🇭🇷', continent: 'Europe', image: 'https://picsum.photos/seed/croatia/600/400' },
  { id: 'cuba', name: 'Cuba', flag: '🇨🇺', continent: 'Americas', image: 'https://picsum.photos/seed/cuba/600/400' },
  { id: 'cyprus', name: 'Cyprus', flag: '🇨🇾', continent: 'Europe', image: 'https://picsum.photos/seed/cyprus/600/400' },
  { id: 'czechia', name: 'Czechia (Czech Republic)', flag: '🇨🇿', continent: 'Europe', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop' },
  { id: 'democratic-republic-of-the-congo', name: 'Democratic Republic of the Congo', flag: '🇨🇩', continent: 'Africa', image: 'https://picsum.photos/seed/democratic-republic-of-the-congo/600/400' },
  { id: 'denmark', name: 'Denmark', flag: '🇩🇰', continent: 'Europe', image: 'https://picsum.photos/seed/denmark/600/400' },
  { id: 'djibouti', name: 'Djibouti', flag: '🇩🇯', continent: 'Africa', image: 'https://picsum.photos/seed/djibouti/600/400' },
  { id: 'dominica', name: 'Dominica', flag: '🇩🇲', continent: 'Americas', image: 'https://picsum.photos/seed/dominica/600/400' },
  { id: 'dominican-republic', name: 'Dominican Republic', flag: '🇩🇴', continent: 'Americas', image: 'https://picsum.photos/seed/dominican-republic/600/400' },
  { id: 'ecuador', name: 'Ecuador', flag: '🇪🇨', continent: 'Americas', image: 'https://picsum.photos/seed/ecuador/600/400' },
  { id: 'el-salvador', name: 'El Salvador', flag: '🇸🇻', continent: 'Americas', image: 'https://picsum.photos/seed/el-salvador/600/400' },
  { id: 'equatorial-guinea', name: 'Equatorial Guinea', flag: '🇬🇶', continent: 'Africa', image: 'https://picsum.photos/seed/equatorial-guinea/600/400' },
  { id: 'eritrea', name: 'Eritrea', flag: '🇪🇷', continent: 'Africa', image: 'https://picsum.photos/seed/eritrea/600/400' },
  { id: 'estonia', name: 'Estonia', flag: '🇪🇪', continent: 'Europe', image: 'https://picsum.photos/seed/estonia/600/400' },
  { id: 'eswatini', name: 'Eswatini (fmr. Swaziland)', flag: '🇸🇿', continent: 'Africa', image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=600&auto=format&fit=crop' },
  { id: 'ethiopia', name: 'Ethiopia', flag: '🇪🇹', continent: 'Africa', image: 'https://picsum.photos/seed/ethiopia/600/400' },
  { id: 'fiji', name: 'Fiji', flag: '🇫🇯', continent: 'Oceania', image: 'https://picsum.photos/seed/fiji/600/400' },
  { id: 'finland', name: 'Finland', flag: '🇫🇮', continent: 'Europe', image: 'https://picsum.photos/seed/finland/600/400' },
  { id: 'gabon', name: 'Gabon', flag: '🇬🇦', continent: 'Africa', image: 'https://picsum.photos/seed/gabon/600/400' },
  { id: 'gambia', name: 'Gambia', flag: '🇬🇲', continent: 'Africa', image: 'https://picsum.photos/seed/gambia/600/400' },
  { id: 'georgia', name: 'Georgia', flag: '🇬🇪', continent: 'Asia', image: 'https://picsum.photos/seed/georgia/600/400' },
  { id: 'ghana', name: 'Ghana', flag: '🇬🇭', continent: 'Africa', image: 'https://picsum.photos/seed/ghana/600/400' },
  { id: 'grenada', name: 'Grenada', flag: '🇬🇩', continent: 'Americas', image: 'https://picsum.photos/seed/grenada/600/400' },
  { id: 'guatemala', name: 'Guatemala', flag: '🇬🇹', continent: 'Americas', image: 'https://picsum.photos/seed/guatemala/600/400' },
  { id: 'guinea', name: 'Guinea', flag: '🇬🇳', continent: 'Africa', image: 'https://picsum.photos/seed/guinea/600/400' },
  { id: 'guinea-bissau', name: 'Guinea-Bissau', flag: '🇬🇼', continent: 'Africa', image: 'https://picsum.photos/seed/guinea-bissau/600/400' },
  { id: 'guyana', name: 'Guyana', flag: '🇬🇾', continent: 'Americas', image: 'https://picsum.photos/seed/guyana/600/400' },
  { id: 'haiti', name: 'Haiti', flag: '🇭🇹', continent: 'Americas', image: 'https://picsum.photos/seed/haiti/600/400' },
  { id: 'holy-see', name: 'Holy See', flag: '🇻🇦', continent: 'Europe', image: 'https://picsum.photos/seed/holy-see/600/400' },
  { id: 'honduras', name: 'Honduras', flag: '🇭🇳', continent: 'Americas', image: 'https://picsum.photos/seed/honduras/600/400' },
  { id: 'hungary', name: 'Hungary', flag: '🇭🇺', continent: 'Europe', image: 'https://picsum.photos/seed/hungary/600/400' },
  { id: 'iceland', name: 'Iceland', flag: '🇮🇸', continent: 'Europe', image: 'https://picsum.photos/seed/iceland/600/400' },
  { id: 'india', name: 'India', flag: '🇮🇳', continent: 'Asia', image: 'https://picsum.photos/seed/india/600/400' },
  { id: 'iran', name: 'Iran', flag: '🇮🇷', continent: 'Asia', image: 'https://picsum.photos/seed/iran/600/400' },
  { id: 'iraq', name: 'Iraq', flag: '🇮🇶', continent: 'Asia', image: 'https://picsum.photos/seed/iraq/600/400' },
  { id: 'ireland', name: 'Ireland', flag: '🇮🇪', continent: 'Europe', image: 'https://picsum.photos/seed/ireland/600/400' },
  { id: 'israel', name: 'Israel', flag: '🇮🇱', continent: 'Asia', image: 'https://picsum.photos/seed/israel/600/400' },
  { id: 'jamaica', name: 'Jamaica', flag: '🇯🇲', continent: 'Americas', image: 'https://picsum.photos/seed/jamaica/600/400' },
  { id: 'jordan', name: 'Jordan', flag: '🇯🇴', continent: 'Asia', image: 'https://picsum.photos/seed/jordan/600/400' },
  { id: 'kazakhstan', name: 'Kazakhstan', flag: '🇰🇿', continent: 'Asia', image: 'https://picsum.photos/seed/kazakhstan/600/400' },
  { id: 'kiribati', name: 'Kiribati', flag: '🇰🇮', continent: 'Oceania', image: 'https://picsum.photos/seed/kiribati/600/400' },
  { id: 'kyrgyzstan', name: 'Kyrgyzstan', flag: '🇰🇬', continent: 'Asia', image: 'https://picsum.photos/seed/kyrgyzstan/600/400' },
  { id: 'laos', name: 'Laos', flag: '🇱🇦', continent: 'Asia', image: 'https://picsum.photos/seed/laos/600/400' },
  { id: 'latvia', name: 'Latvia', flag: '🇱🇻', continent: 'Europe', image: 'https://picsum.photos/seed/latvia/600/400' },
  { id: 'lebanon', name: 'Lebanon', flag: '🇱🇧', continent: 'Asia', image: 'https://picsum.photos/seed/lebanon/600/400' },
  { id: 'lesotho', name: 'Lesotho', flag: '🇱🇸', continent: 'Africa', image: 'https://picsum.photos/seed/lesotho/600/400' },
  { id: 'liberia', name: 'Liberia', flag: '🇱🇷', continent: 'Africa', image: 'https://picsum.photos/seed/liberia/600/400' },
  { id: 'libya', name: 'Libya', flag: '🇱🇾', continent: 'Africa', image: 'https://picsum.photos/seed/libya/600/400' },
  { id: 'liechtenstein', name: 'Liechtenstein', flag: '🇱🇮', continent: 'Europe', image: 'https://picsum.photos/seed/liechtenstein/600/400' },
  { id: 'lithuania', name: 'Lithuania', flag: '🇱🇹', continent: 'Europe', image: 'https://picsum.photos/seed/lithuania/600/400' },
  { id: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺', continent: 'Europe', image: 'https://picsum.photos/seed/luxembourg/600/400' },
  { id: 'madagascar', name: 'Madagascar', flag: '🇲🇬', continent: 'Africa', image: 'https://picsum.photos/seed/madagascar/600/400' },
  { id: 'malawi', name: 'Malawi', flag: '🇲🇼', continent: 'Africa', image: 'https://picsum.photos/seed/malawi/600/400' },
  { id: 'mali', name: 'Mali', flag: '🇲🇱', continent: 'Africa', image: 'https://picsum.photos/seed/mali/600/400' },
  { id: 'malta', name: 'Malta', flag: '🇲🇹', continent: 'Europe', image: 'https://picsum.photos/seed/malta/600/400' },
  { id: 'marshall-islands', name: 'Marshall Islands', flag: '🇲🇭', continent: 'Oceania', image: 'https://picsum.photos/seed/marshall-islands/600/400' },
  { id: 'mauritania', name: 'Mauritania', flag: '🇲🇷', continent: 'Africa', image: 'https://picsum.photos/seed/mauritania/600/400' },
  { id: 'mauritius', name: 'Mauritius', flag: '🇲🇺', continent: 'Africa', image: 'https://picsum.photos/seed/mauritius/600/400' },
  { id: 'micronesia', name: 'Micronesia', flag: '🇫🇲', continent: 'Oceania', image: 'https://picsum.photos/seed/micronesia/600/400' },
  { id: 'moldova', name: 'Moldova', flag: '🇲🇩', continent: 'Europe', image: 'https://picsum.photos/seed/moldova/600/400' },
  { id: 'monaco', name: 'Monaco', flag: '🇲🇨', continent: 'Europe', image: 'https://picsum.photos/seed/monaco/600/400' },
  { id: 'mongolia', name: 'Mongolia', flag: '🇲🇳', continent: 'Asia', image: 'https://picsum.photos/seed/mongolia/600/400' },
  { id: 'montenegro', name: 'Montenegro', flag: '🇲🇪', continent: 'Europe', image: 'https://picsum.photos/seed/montenegro/600/400' },
  { id: 'mozambique', name: 'Mozambique', flag: '🇲🇿', continent: 'Africa', image: 'https://picsum.photos/seed/mozambique/600/400' },
  { id: 'myanmar', name: 'Myanmar (formerly Burma)', flag: '🇲🇲', continent: 'Asia', image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=600&auto=format&fit=crop' },
  { id: 'namibia', name: 'Namibia', flag: '🇳🇦', continent: 'Africa', image: 'https://picsum.photos/seed/namibia/600/400' },
  { id: 'nauru', name: 'Nauru', flag: '🇳🇷', continent: 'Oceania', image: 'https://picsum.photos/seed/nauru/600/400' },
  { id: 'nicaragua', name: 'Nicaragua', flag: '🇳🇮', continent: 'Americas', image: 'https://picsum.photos/seed/nicaragua/600/400' },
  { id: 'niger', name: 'Niger', flag: '🇳🇪', continent: 'Africa', image: 'https://picsum.photos/seed/niger/600/400' },
  { id: 'nigeria', name: 'Nigeria', flag: '🇳🇬', continent: 'Africa', image: 'https://picsum.photos/seed/nigeria/600/400' },
  { id: 'north-korea', name: 'North Korea', flag: '🇰🇵', continent: 'Asia', image: 'https://picsum.photos/seed/north-korea/600/400' },
  { id: 'north-macedonia', name: 'North Macedonia', flag: '🇲🇰', continent: 'Europe', image: 'https://picsum.photos/seed/north-macedonia/600/400' },
  { id: 'norway', name: 'Norway', flag: '🇳🇴', continent: 'Europe', image: 'https://picsum.photos/seed/norway/600/400' },
  { id: 'pakistan', name: 'Pakistan', flag: '🇵🇰', continent: 'Asia', image: 'https://picsum.photos/seed/pakistan/600/400' },
  { id: 'palau', name: 'Palau', flag: '🇵🇼', continent: 'Oceania', image: 'https://picsum.photos/seed/palau/600/400' },
  { id: 'palestine', name: 'Palestine State', flag: '🇵🇸', continent: 'Asia', image: 'https://picsum.photos/seed/palestine/600/400' },
  { id: 'panama', name: 'Panama', flag: '🇵🇦', continent: 'Americas', image: 'https://picsum.photos/seed/panama/600/400' },
  { id: 'papua-new-guinea', name: 'Papua New Guinea', flag: '🇵🇬', continent: 'Oceania', image: 'https://picsum.photos/seed/papua-new-guinea/600/400' },
  { id: 'paraguay', name: 'Paraguay', flag: '🇵🇾', continent: 'Americas', image: 'https://picsum.photos/seed/paraguay/600/400' },
  { id: 'peru', name: 'Peru', flag: '🇵🇪', continent: 'Americas', image: 'https://picsum.photos/seed/peru/600/400' },
  { id: 'poland', name: 'Poland', flag: '🇵🇱', continent: 'Europe', image: 'https://picsum.photos/seed/poland/600/400' },
  { id: 'romania', name: 'Romania', flag: '🇷🇴', continent: 'Europe', image: 'https://picsum.photos/seed/romania/600/400' },
  { id: 'russia', name: 'Russia', flag: '🇷🇺', continent: 'Europe', image: 'https://picsum.photos/seed/russia/600/400' },
  { id: 'rwanda', name: 'Rwanda', flag: '🇷🇼', continent: 'Africa', image: 'https://picsum.photos/seed/rwanda/600/400' },
  { id: 'saint-kitts-and-nevis', name: 'Saint Kitts and Nevis', flag: '🇰🇳', continent: 'Americas', image: 'https://picsum.photos/seed/saint-kitts-and-nevis/600/400' },
  { id: 'saint-lucia', name: 'Saint Lucia', flag: '🇱🇨', continent: 'Americas', image: 'https://picsum.photos/seed/saint-lucia/600/400' },
  { id: 'saint-vincent-and-the-grenadines', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', continent: 'Americas', image: 'https://picsum.photos/seed/saint-vincent-and-the-grenadines/600/400' },
  { id: 'samoa', name: 'Samoa', flag: '🇼🇸', continent: 'Oceania', image: 'https://picsum.photos/seed/samoa/600/400' },
  { id: 'san-marino', name: 'San Marino', flag: '🇸🇲', continent: 'Europe', image: 'https://picsum.photos/seed/san-marino/600/400' },
  { id: 'sao-tome-and-principe', name: 'Sao Tome and Principe', flag: '🇸🇹', continent: 'Africa', image: 'https://picsum.photos/seed/sao-tome-and-principe/600/400' },
  { id: 'senegal', name: 'Senegal', flag: '🇸🇳', continent: 'Africa', image: 'https://picsum.photos/seed/senegal/600/400' },
  { id: 'serbia', name: 'Serbia', flag: '🇷🇸', continent: 'Europe', image: 'https://picsum.photos/seed/serbia/600/400' },
  { id: 'seychelles', name: 'Seychelles', flag: '🇸🇨', continent: 'Africa', image: 'https://picsum.photos/seed/seychelles/600/400' },
  { id: 'sierra-leone', name: 'Sierra Leone', flag: '🇸🇱', continent: 'Africa', image: 'https://picsum.photos/seed/sierra-leone/600/400' },
  { id: 'slovakia', name: 'Slovakia', flag: '🇸🇰', continent: 'Europe', image: 'https://picsum.photos/seed/slovakia/600/400' },
  { id: 'slovenia', name: 'Slovenia', flag: '🇸🇮', continent: 'Europe', image: 'https://picsum.photos/seed/slovenia/600/400' },
  { id: 'solomon-islands', name: 'Solomon Islands', flag: '🇸🇧', continent: 'Oceania', image: 'https://picsum.photos/seed/solomon-islands/600/400' },
  { id: 'somalia', name: 'Somalia', flag: '🇸🇴', continent: 'Africa', image: 'https://picsum.photos/seed/somalia/600/400' },
  { id: 'south-sudan', name: 'South Sudan', flag: '🇸🇸', continent: 'Africa', image: 'https://picsum.photos/seed/south-sudan/600/400' },
  { id: 'sudan', name: 'Sudan', flag: '🇸🇩', continent: 'Africa', image: 'https://picsum.photos/seed/sudan/600/400' },
  { id: 'suriname', name: 'Suriname', flag: '🇸🇷', continent: 'Americas', image: 'https://picsum.photos/seed/suriname/600/400' },
  { id: 'sweden', name: 'Sweden', flag: '🇸🇪', continent: 'Europe', image: 'https://picsum.photos/seed/sweden/600/400' },
  { id: 'syria', name: 'Syria', flag: '🇸🇾', continent: 'Asia', image: 'https://picsum.photos/seed/syria/600/400' },
  { id: 'tajikistan', name: 'Tajikistan', flag: '🇹🇯', continent: 'Asia', image: 'https://picsum.photos/seed/tajikistan/600/400' },
  { id: 'timor-leste', name: 'Timor-Leste', flag: '🇹🇱', continent: 'Asia', image: 'https://picsum.photos/seed/timor-leste/600/400' },
  { id: 'togo', name: 'Togo', flag: '🇹🇬', continent: 'Africa', image: 'https://picsum.photos/seed/togo/600/400' },
  { id: 'tonga', name: 'Tonga', flag: '🇹🇴', continent: 'Oceania', image: 'https://picsum.photos/seed/tonga/600/400' },
  { id: 'trinidad-and-tobago', name: 'Trinidad and Tobago', flag: '🇹🇹', continent: 'Americas', image: 'https://picsum.photos/seed/trinidad-and-tobago/600/400' },
  { id: 'tunisia', name: 'Tunisia', flag: '🇹🇳', continent: 'Africa', image: 'https://picsum.photos/seed/tunisia/600/400' },
  { id: 'turkmenistan', name: 'Turkmenistan', flag: '🇹🇲', continent: 'Asia', image: 'https://picsum.photos/seed/turkmenistan/600/400' },
  { id: 'tuvalu', name: 'Tuvalu', flag: '🇹🇻', continent: 'Oceania', image: 'https://picsum.photos/seed/tuvalu/600/400' },
  { id: 'uganda', name: 'Uganda', flag: '🇺🇬', continent: 'Africa', image: 'https://picsum.photos/seed/uganda/600/400' },
  { id: 'ukraine', name: 'Ukraine', flag: '🇺🇦', continent: 'Europe', image: 'https://picsum.photos/seed/ukraine/600/400' },
  { id: 'uruguay', name: 'Uruguay', flag: '🇺🇾', continent: 'Americas', image: 'https://picsum.photos/seed/uruguay/600/400' },
  { id: 'uzbekistan', name: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia', image: 'https://picsum.photos/seed/uzbekistan/600/400' },
  { id: 'vanuatu', name: 'Vanuatu', flag: '🇻🇺', continent: 'Oceania', image: 'https://picsum.photos/seed/vanuatu/600/400' },
  { id: 'venezuela', name: 'Venezuela', flag: '🇻🇪', continent: 'Americas', image: 'https://picsum.photos/seed/venezuela/600/400' },
  { id: 'yemen', name: 'Yemen', flag: '🇾🇪', continent: 'Asia', image: 'https://picsum.photos/seed/yemen/600/400' },
  { id: 'zambia', name: 'Zambia', flag: '🇿🇲', continent: 'Africa', image: 'https://picsum.photos/seed/zambia/600/400' },
  { id: 'zimbabwe', name: 'Zimbabwe', flag: '🇿🇼', continent: 'Africa', image: 'https://picsum.photos/seed/zimbabwe/600/400' },
  { id: 'comoros', name: 'Comoros', flag: '🇰🇲', continent: 'Africa', image: 'https://picsum.photos/seed/comoros/600/400' }
];

export const visaCategories = [
  {
    id: 'tourist',
    title: 'Tourist Visa',
    icon: '✈️',
    description: 'For leisure travel, sightseeing, and vacation purposes.',
    features: ['Short-term stay', 'No work permitted', 'Quick processing', 'Multiple entry options']
  },
  {
    id: 'business',
    title: 'Business Visa',
    icon: '💼',
    description: 'For business meetings, conferences, and professional activities.',
    features: ['Business activities allowed', 'Conference attendance', 'Client meetings', 'Extended validity']
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Got my Japan tourist visa in just 5 days! The team handled everything professionally. Highly recommended for hassle-free visa processing.',
    avatar: 'RS',
    country: 'Japan Visa'
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Delhi, India',
    rating: 5,
    text: 'Applied for a Singapore business visa through Holidays Navigator and the process was incredibly smooth. Their expert guidance made all the difference.',
    avatar: 'PP',
    country: 'Singapore Visa'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    location: 'Bangalore, India',
    rating: 5,
    text: 'Dubai visa processed within 3 days. The online tracking system kept me updated at every step. Excellent service and very affordable pricing.',
    avatar: 'AK',
    country: 'Dubai Visa'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Hyderabad, India',
    rating: 4,
    text: 'Thailand visa was processed quickly. The document checklist they provided was very helpful and saved me a lot of time and confusion.',
    avatar: 'SR',
    country: 'Thailand Visa'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Chandigarh, India',
    rating: 5,
    text: 'Best visa service I\'ve ever used! Got my China business visa approved on the first attempt. Their consultants really know what they\'re doing.',
    avatar: 'VS',
    country: 'China Visa'
  },
  {
    id: 6,
    name: 'Ananya Desai',
    location: 'Pune, India',
    rating: 5,
    text: 'Malaysia student visa was processed effortlessly. The team was responsive 24/7 and answered all my queries patiently. Truly world-class service.',
    avatar: 'AD',
    country: 'Malaysia Visa'
  }
];

export const faqData = [
  {
    question: 'How long does the visa processing take?',
    answer: 'Processing times vary by country and visa type. Tourist visas typically take 3-7 business days, while work and student visas may take 2-4 weeks. We also offer express processing for urgent requirements at an additional fee.'
  },
  {
    question: 'What documents do I need for a visa application?',
    answer: 'Common documents include a valid passport (with 6+ months validity), passport-size photographs, completed application form, bank statements, travel itinerary, hotel bookings, and return flight tickets. Specific requirements vary by country and visa type.'
  },
  {
    question: 'Can I track my visa application status?',
    answer: 'Yes! We provide a real-time application tracking system. Once your application is submitted, you\'ll receive a unique tracking ID that you can use to monitor the status of your visa application 24/7 through our website or mobile app.'
  },
  {
    question: 'What is your visa approval success rate?',
    answer: 'We maintain an industry-leading 98% visa approval success rate. Our expert consultants thoroughly review every application before submission to ensure all requirements are met and documentation is complete.'
  },
  {
    question: 'Do you offer refunds if my visa is rejected?',
    answer: 'We offer a partial refund policy for visa rejections. Our service fee is non-refundable, but the government/embassy fees will be refunded as per the respective embassy\'s refund policy. We also offer free re-application assistance.'
  },
  {
    question: 'Can I apply for a visa for my family members?',
    answer: 'Absolutely! We offer family visa packages where you can apply for multiple family members simultaneously. This often comes with discounted pricing and streamlined processing for the entire family.'
  },
  {
    question: 'Is my personal information secure?',
    answer: 'Yes, we take data security very seriously. All personal information is encrypted using 256-bit SSL encryption and stored securely. We are fully compliant with data protection regulations and never share your information with third parties.'
  },
  {
    question: 'Do you provide visa consultation services?',
    answer: 'Yes, we offer free initial consultation where our visa experts assess your eligibility and guide you through the entire process. We also offer premium consultation for complex cases like business immigration and student visas.'
  }
];

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Select Destination',
    description: 'Choose your destination country and visa type from our comprehensive list of 100+ countries.',
    icon: '🌍'
  },
  {
    step: 2,
    title: 'Fill Application',
    description: 'Complete the online application form with your personal and travel details. Our smart form guides you through every step.',
    icon: '📝'
  },
  {
    step: 3,
    title: 'Upload Documents',
    description: 'Upload required documents securely. Our AI-powered system checks for completeness and accuracy.',
    icon: '📎'
  },
  {
    step: 4,
    title: 'Make Payment',
    description: 'Pay securely through our encrypted payment gateway. We accept all major cards and payment methods.',
    icon: '💳'
  },
  {
    step: 5,
    title: 'Receive Visa',
    description: 'Track your application in real-time and receive your approved visa directly in your inbox.',
    icon: '✅'
  }
];

export const whyChooseUs = [
  {
    title: 'Fast Processing',
    description: 'Get your visa processed in record time with our expedited processing options.',
    icon: '⚡'
  },
  {
    title: 'Secure Documentation',
    description: '256-bit SSL encrypted document handling ensures your data stays protected.',
    icon: '🔒'
  },
  {
    title: 'Expert Consultants',
    description: 'Our certified visa experts provide personalized guidance for every application.',
    icon: '👨‍💼'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. Clear, upfront pricing with detailed cost breakdown.',
    icon: '💎'
  },
  {
    title: 'High Approval Rate',
    description: '98% success rate backed by thorough application review and expert preparation.',
    icon: '📊'
  },
  {
    title: 'Dedicated Support',
    description: '24/7 customer support via phone, email, and WhatsApp for all your queries.',
    icon: '🎯'
  }
];
