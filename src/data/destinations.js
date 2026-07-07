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
  { id: 'usa', name: 'United States', flag: '🇺🇸', continent: 'Americas', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80&fit=crop' },
  { id: 'france', name: 'France', flag: '🇫🇷', continent: 'Europe', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80&fit=crop' },
  { id: 'germany', name: 'Germany', flag: '🇩🇪', continent: 'Europe', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80&fit=crop' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹', continent: 'Europe', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80&fit=crop' },
  { id: 'spain', name: 'Spain', flag: '🇪🇸', continent: 'Europe', image: 'https://i.pinimg.com/736x/6f/90/a9/6f90a9cedec88ad7ad6ca7c8cabd6f40.jpg' },
  { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭', continent: 'Europe', image: 'https://i.pinimg.com/736x/ee/3f/56/ee3f56624692de8b9b80ff4da614834e.jpg' },
  { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱', continent: 'Europe', image: 'https://i.pinimg.com/1200x/87/f6/8e/87f68e62a228c7122bd7f01fb69406d9.jpg' },
  { id: 'belgium', name: 'Belgium', flag: '🇧🇪', continent: 'Europe', image: 'https://i.pinimg.com/1200x/2a/71/45/2a71453076107a913ecf078c7ae53cf7.jpg' },
  { id: 'austria', name: 'Austria', flag: '🇦🇹', continent: 'Europe', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80&fit=crop' },
  { id: 'portugal', name: 'Portugal', flag: '🇵🇹', continent: 'Europe', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80&fit=crop' },
  { id: 'greece', name: 'Greece', flag: '🇬🇷', continent: 'Europe', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80&fit=crop' },
  { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', continent: 'Oceania', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80&fit=crop' },
  { id: 'south-africa', name: 'South Africa', flag: '🇿🇦', continent: 'Africa', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80&fit=crop' },
  { id: 'kenya', name: 'Kenya', flag: '🇰🇪', continent: 'Africa', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80&fit=crop' },
  { id: 'egypt', name: 'Egypt', flag: '🇪🇬', continent: 'Africa', image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80&fit=crop' },
  { id: 'morocco', name: 'Morocco', flag: '🇲🇦', continent: 'Africa', image: 'https://images.unsplash.com/photo-1548018560-c7196548b93c?w=600&q=80&fit=crop' },
  { id: 'tanzania', name: 'Tanzania', flag: '🇹🇿', continent: 'Africa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80&fit=crop' },
  { id: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&q=80&fit=crop' },
  { id: 'qatar', name: 'Qatar', flag: '🇶🇦', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1614332625575-eba7b9b1f617?w=600&q=80&fit=crop' },
  { id: 'oman', name: 'Oman', flag: '🇴🇲', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1585136917228-d7add5e4b9cf?w=600&q=80&fit=crop' },
  { id: 'bahrain', name: 'Bahrain', flag: '🇧🇭', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1579466728086-7a5c1e71dd5d?w=600&q=80&fit=crop' },
  { id: 'kuwait', name: 'Kuwait', flag: '🇰🇼', continent: 'Middle East', image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=600&q=80&fit=crop' },
  { id: 'indonesia', name: 'Indonesia', flag: '🇮🇩', continent: 'Asia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80&fit=crop' },
  { id: 'philippines', name: 'Philippines', flag: '🇵🇭', continent: 'Asia', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80&fit=crop' },
  { id: 'sri-lanka', name: 'Sri Lanka', flag: '🇱🇰', continent: 'Asia', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80&fit=crop' },
  { id: 'nepal', name: 'Nepal', flag: '🇳🇵', continent: 'Asia', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80&fit=crop' },
  { id: 'bhutan', name: 'Bhutan', flag: '🇧🇹', continent: 'Asia', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80&fit=crop' },
  { id: 'maldives', name: 'Maldives', flag: '🇲🇻', continent: 'Asia', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80&fit=crop' },
  { id: 'mexico', name: 'Mexico', flag: '🇲🇽', continent: 'Americas', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80&fit=crop' },
  { id: 'brazil', name: 'Brazil', flag: '🇧🇷', continent: 'Americas', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80&fit=crop' },
  { id: 'argentina', name: 'Argentina', flag: '🇦🇷', continent: 'Americas', image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80&fit=crop' },
  { id: 'albania', name: 'Albania', flag: '🇦🇱', continent: 'Europe', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop' },
  { id: 'algeria', name: 'Algeria', flag: '🇩🇿', continent: 'Africa', image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80&fit=crop' },
  { id: 'andorra', name: 'Andorra', flag: '🇦🇩', continent: 'Europe', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80&fit=crop' },
  { id: 'angola', name: 'Angola', flag: '🇦🇴', continent: 'Africa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80&fit=crop' },
  { id: 'antigua-and-barbuda', name: 'Antigua and Barbuda', flag: '🇦🇬', continent: 'Americas', image: 'https://images.unsplash.com/photo-1548018560-c7196548b93c?w=600&q=80&fit=crop' },
  { id: 'armenia', name: 'Armenia', flag: '🇦🇲', continent: 'Asia', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80&fit=crop' },
  { id: 'azerbaijan', name: 'Azerbaijan', flag: '🇦🇿', continent: 'Asia', image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&q=80&fit=crop' },
  { id: 'bahamas', name: 'Bahamas', flag: '🇧🇸', continent: 'Americas', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80&fit=crop' },
  { id: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩', continent: 'Asia', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80&fit=crop' },
  { id: 'barbados', name: 'Barbados', flag: '🇧🇧', continent: 'Americas', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80&fit=crop' },
  { id: 'belarus', name: 'Belarus', flag: '🇧🇾', continent: 'Europe', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80&fit=crop' },
  { id: 'belize', name: 'Belize', flag: '🇧🇿', continent: 'Americas', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80&fit=crop' },
  { id: 'benin', name: 'Benin', flag: '🇧🇯', continent: 'Africa', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80&fit=crop' },
  { id: 'bolivia', name: 'Bolivia', flag: '🇧🇴', continent: 'Americas', image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80&fit=crop' },
  { id: 'bosnia-and-herzegovina', name: 'Bosnia and Herzegovina', flag: '🇧🇦', continent: 'Europe', image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600&q=80&fit=crop' },
  { id: 'botswana', name: 'Botswana', flag: '🇧🇼', continent: 'Africa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80&fit=crop' },
  { id: 'brunei', name: 'Brunei', flag: '🇧🇳', continent: 'Asia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80&fit=crop' },
  { id: 'bulgaria', name: 'Bulgaria', flag: '🇧🇬', continent: 'Europe', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80&fit=crop' },
  { id: 'burkina-faso', name: 'Burkina Faso', flag: '🇧🇫', continent: 'Africa', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80&fit=crop' },
  { id: 'burundi', name: 'Burundi', flag: '🇧🇮', continent: 'Africa', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80&fit=crop' },
  { id: 'cabo-verde', name: 'Cabo Verde', flag: '🇨🇻', continent: 'Africa', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80&fit=crop' },
  { id: 'cambodia', name: 'Cambodia', flag: '🇰🇭', continent: 'Asia', image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&q=80&fit=crop' },
  { id: 'cameroon', name: 'Cameroon', flag: '🇨🇲', continent: 'Africa', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80&fit=crop' },
  { id: 'central-african-republic', name: 'Central African Republic', flag: '🇨🇫', continent: 'Africa', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80&fit=crop' },
  { id: 'chad', name: 'Chad', flag: '🇹🇩', continent: 'Africa', image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80&fit=crop' },
  { id: 'chile', name: 'Chile', flag: '🇨🇱', continent: 'Americas', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80&fit=crop' },
  { id: 'colombia', name: 'Colombia', flag: '🇨🇴', continent: 'Americas', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80&fit=crop' },
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
  { id: 'mali', name: 'Mali', flag: '🇲🇱', continent: 'Africa', image: 'https://i.pinimg.com/736x/04/1a/b2/041ab2a9d50889c59c27ebda00296745.jpg' },
  { id: 'malta', name: 'Malta', flag: '🇲🇹', continent: 'Europe', image: 'https://picsum.photos/seed/malta/600/400' },
  { id: 'marshall-islands', name: 'Marshall Islands', flag: '🇲🇭', continent: 'Oceania', image: 'https://picsum.photos/seed/marshall-islands/600/400' },
  { id: 'mauritania', name: 'Mauritania', flag: '🇲🇷', continent: 'Africa', image: 'https://picsum.photos/seed/mauritania/600/400' },
  { id: 'mauritius', name: 'Mauritius', flag: '🇲🇺', continent: 'Africa', image: 'https://i.pinimg.com/1200x/26/8f/e3/268fe35530ecce3d274c02feb1276e0f.jpg' },
  { id: 'micronesia', name: 'Micronesia', flag: '🇫🇲', continent: 'Oceania', image: 'https://i.pinimg.com/736x/4c/d8/1f/4cd81fa4c175571b656d699151e54891.jpg' },
  { id: 'moldova', name: 'Moldova', flag: '🇲🇩', continent: 'Europe', image: 'https://i.pinimg.com/1200x/90/d4/4a/90d44a4b153605929381c96fb257e996.jpg' },
  { id: 'monaco', name: 'Monaco', flag: '🇲🇨', continent: 'Europe', image: 'https://i.pinimg.com/736x/8a/54/b4/8a54b4f374fbd3df9c348b5a5b77fa9b.jpg' },
  { id: 'mongolia', name: 'Mongolia', flag: '🇲🇳', continent: 'Asia', image: 'https://i.pinimg.com/736x/01/f4/7e/01f47efbb664bfea2501d8448d56c1e5.jpg' },
  { id: 'montenegro', name: 'Montenegro', flag: '🇲🇪', continent: 'Europe', image: 'https://i.pinimg.com/736x/f8/4c/ec/f84cec2bbf509dfb99d08121ef19776a.jpg' },
  { id: 'mozambique', name: 'Mozambique', flag: '🇲🇿', continent: 'Africa', image: 'https://i.pinimg.com/736x/5e/2e/3c/5e2e3cf1978adeaaac3d0d515b074df4.jpg' },
  { id: 'myanmar', name: 'Myanmar (formerly Burma)', flag: '🇲🇲', continent: 'Asia', image: 'https://i.pinimg.com/736x/a2/30/a5/a230a50f7194fc376a7e0d24b34bafc9.jpg' },
  { id: 'namibia', name: 'Namibia', flag: '🇳🇦', continent: 'Africa', image: 'https://i.pinimg.com/1200x/bd/f3/b3/bdf3b3fcfb08696ed2c47e6ca2877be9.jpg' },
  { id: 'nauru', name: 'Nauru', flag: '🇳🇷', continent: 'Oceania', image: 'https://i.pinimg.com/1200x/67/13/07/671307beca5754ef6aa577fec175db89.jpg' },
  { id: 'nicaragua', name: 'Nicaragua', flag: '🇳🇮', continent: 'Americas', image: 'https://i.pinimg.com/736x/a4/b5/2d/a4b52deb3d74463073827a70b8909029.jpg' },
  { id: 'niger', name: 'Niger', flag: '🇳🇪', continent: 'Africa', image: 'https://i.pinimg.com/736x/44/0d/d0/440dd04875e0b99dd0439c49149ab8b1.jpg' },
  { id: 'nigeria', name: 'Nigeria', flag: '🇳🇬', continent: 'Africa', image: 'https://i.pinimg.com/1200x/c5/c1/b5/c5c1b5deb39a7c5e6ce9e464aa1fa976.jpg' },
  { id: 'north-korea', name: 'North Korea', flag: '🇰🇵', continent: 'Asia', image: 'https://i.pinimg.com/736x/5f/dc/c5/5fdcc5d3bb1c61b6e7de0c57f109ede8.jpg' },
  { id: 'north-macedonia', name: 'North Macedonia', flag: '🇲🇰', continent: 'Europe', image: 'https://i.pinimg.com/736x/af/46/dc/af46dc46f533cefcf5ebf682328dfaa9.jpg' },
  { id: 'norway', name: 'Norway', flag: '🇳🇴', continent: 'Europe', image: 'https://i.pinimg.com/736x/91/2e/a4/912ea4518a17a5ad219c766c31261e7a.jpg' },
  { id: 'pakistan', name: 'Pakistan', flag: '🇵🇰', continent: 'Asia', image: 'https://i.pinimg.com/736x/0d/9a/bb/0d9abbed8b8bada9196db8a444e3923e.jpg' },
  { id: 'palau', name: 'Palau', flag: '🇵🇼', continent: 'Oceania', image: 'https://i.pinimg.com/1200x/d7/2a/37/d72a376fbe89b0f98714179985ca535c.jpg' },
  { id: 'palestine', name: 'Palestine State', flag: '🇵🇸', continent: 'Asia', image: 'https://picsum.photos/seed/palestine/600/400' },
  { id: 'panama', name: 'Panama', flag: '🇵🇦', continent: 'Americas', image: 'https://i.pinimg.com/736x/99/e0/cc/99e0ccd455408a5eaeec1478d69c5de2.jpg' },
  { id: 'papua-new-guinea', name: 'Papua New Guinea', flag: '🇵🇬', continent: 'Oceania', image: 'https://i.pinimg.com/736x/a7/06/b4/a706b4e037c78877fa07bed12478edce.jpg' },
  { id: 'paraguay', name: 'Paraguay', flag: '🇵🇾', continent: 'Americas', image: 'https://i.pinimg.com/736x/c7/22/7b/c7227bb7c4693550b718d29204d51aec.jpg' },
  { id: 'peru', name: 'Peru', flag: '🇵🇪', continent: 'Americas', image: 'https://i.pinimg.com/1200x/1c/50/5d/1c505d7c45e55e16dad8f0d7ca4f8d99.jpg' },
  { id: 'poland', name: 'Poland', flag: '🇵🇱', continent: 'Europe', image: 'https://i.pinimg.com/1200x/f0/57/c0/f057c05cddfb91736e045addbabc648f.jpg' },
  { id: 'romania', name: 'Romania', flag: '🇷🇴', continent: 'Europe', image: 'https://i.pinimg.com/736x/17/5d/00/175d0083cf43cbf6c19b7f5ab9f819c2.jpg' },
  { id: 'russia', name: 'Russia', flag: '🇷🇺', continent: 'Europe', image: 'https://i.pinimg.com/736x/79/2f/23/792f2376e87c4de2d9006204bbaaa3d8.jpg' },
  { id: 'rwanda', name: 'Rwanda', flag: '🇷🇼', continent: 'Africa', image: 'https://i.pinimg.com/736x/aa/c0/4c/aac04c789034e5993003ddc53818a06d.jpg' },
  { id: 'saint-kitts-and-nevis', name: 'Saint Kitts and Nevis', flag: '🇰🇳', continent: 'Americas', image: 'https://picsum.photos/seed/saint-kitts-and-nevis/600/400' },
  { id: 'saint-lucia', name: 'Saint Lucia', flag: '🇱🇨', continent: 'Americas', image: 'https://picsum.photos/seed/saint-lucia/600/400' },
  { id: 'saint-vincent-and-the-grenadines', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', continent: 'Americas', image: 'https://i.pinimg.com/736x/f6/19/80/f6198008cc3a03182b2688e44a0d95a5.jpg' },
  { id: 'samoa', name: 'Samoa', flag: '🇼🇸', continent: 'Oceania', image: 'https://i.pinimg.com/736x/47/76/7c/47767cca9daaf519d62bd2715a75a5a7.jpg' },
  { id: 'san-marino', name: 'San Marino', flag: '🇸🇲', continent: 'Europe', image: 'https://i.pinimg.com/736x/33/74/ac/3374ac2fe3861b0f89f8f2bed44891d0.jpg' },
  { id: 'sao-tome-and-principe', name: 'Sao Tome and Principe', flag: '🇸🇹', continent: 'Africa', image: 'https://i.pinimg.com/1200x/99/ad/83/99ad832002f9fb558e0bf588e2ff9554.jpg' },
  { id: 'senegal', name: 'Senegal', flag: '🇸🇳', continent: 'Africa', image: 'https://i.pinimg.com/1200x/c9/ba/5b/c9ba5be079ca5b8ff55c6d41b1dcfb4c.jpg' },
  { id: 'serbia', name: 'Serbia', flag: '🇷🇸', continent: 'Europe', image: 'https://i.pinimg.com/736x/53/1a/61/531a613350f1c8a86c621374cea3676f.jpg' },
  { id: 'seychelles', name: 'Seychelles', flag: '🇸🇨', continent: 'Africa', image: 'https://i.pinimg.com/1200x/d0/48/03/d04803f5229bb923a406afc56820c995.jpg' },
  { id: 'sierra-leone', name: 'Sierra Leone', flag: '🇸🇱', continent: 'Africa', image: 'https://i.pinimg.com/1200x/47/01/2e/47012e69e950770f746e98e8afa71866.jpg' },
  { id: 'slovakia', name: 'Slovakia', flag: '🇸🇰', continent: 'Europe', image: 'https://i.pinimg.com/736x/43/37/a2/4337a2ee6edb3867dcc61518d437bff3.jpg' },
  { id: 'slovenia', name: 'Slovenia', flag: '🇸🇮', continent: 'Europe', image: 'https://i.pinimg.com/1200x/52/98/05/5298058d95ba5861f386846db321c503.jpg' },
  { id: 'solomon-islands', name: 'Solomon Islands', flag: '🇸🇧', continent: 'Oceania', image: 'https://i.pinimg.com/736x/69/bd/3d/69bd3d159e26b7376dd6977badb70bdd.jpg' },
  { id: 'somalia', name: 'Somalia', flag: '🇸🇴', continent: 'Africa', image: 'https://i.pinimg.com/1200x/6f/45/d2/6f45d2cfe8a17b2f201d88dcd60786bc.jpg' },
  { id: 'south-sudan', name: 'South Sudan', flag: '🇸🇸', continent: 'Africa', image: 'https://i.pinimg.com/736x/9c/56/8e/9c568e89b179114850daba9ee4084799.jpg' },
  { id: 'sudan', name: 'Sudan', flag: '🇸🇩', continent: 'Africa', image: 'https://i.pinimg.com/736x/de/63/8c/de638c9180fac5c60d6e5176bbf63655.jpg' },
  { id: 'suriname', name: 'Suriname', flag: '🇸🇷', continent: 'Americas', image: 'https://i.pinimg.com/736x/61/8e/d4/618ed4b1d0750d52b303dc91de942924.jpg' },
  { id: 'sweden', name: 'Sweden', flag: '🇸🇪', continent: 'Europe', image: 'https://i.pinimg.com/1200x/90/ec/0c/90ec0c6fa909c570e91c4390f039d176.jpg' },
  { id: 'syria', name: 'Syria', flag: '🇸🇾', continent: 'Asia', image: 'https://i.pinimg.com/736x/c1/dd/f8/c1ddf8e7b70c56f925233ad4de3fc98b.jpg' },
  { id: 'tajikistan', name: 'Tajikistan', flag: '🇹🇯', continent: 'Asia', image: 'https://i.pinimg.com/736x/bf/16/9c/bf169c62cae23dc77a6b0303c9b976af.jpg' },
  { id: 'timor-leste', name: 'Timor-Leste', flag: '🇹🇱', continent: 'Asia', image: 'https://picsum.photos/seed/timor-leste/600/400' },
  { id: 'togo', name: 'Togo', flag: '🇹🇬', continent: 'Africa', image: 'https://i.pinimg.com/1200x/4c/d1/52/4cd152abaecdce459f061d783e75d500.jpg' },
  { id: 'tonga', name: 'Tonga', flag: '🇹🇴', continent: 'Oceania', image: 'https://i.pinimg.com/1200x/8a/01/6b/8a016b4453872c849f284a03ba874c0c.jpg' },
  { id: 'trinidad-and-tobago', name: 'Trinidad and Tobago', flag: '🇹🇹', continent: 'Americas', image: 'https://i.pinimg.com/736x/1f/a4/9c/1fa49ceb5400e22f196fa802a24c8082.jpg' },
  { id: 'tunisia', name: 'Tunisia', flag: '🇹🇳', continent: 'Africa', image: 'https://i.pinimg.com/1200x/68/a2/c3/68a2c38102b1aa333f33afb4a5f55027.jpg' },
  { id: 'turkmenistan', name: 'Turkmenistan', flag: '🇹🇲', continent: 'Asia', image: 'https://i.pinimg.com/1200x/a5/ff/4c/a5ff4c0e684aace2c4d70a2013a60f0d.jpg' },
  { id: 'tuvalu', name: 'Tuvalu', flag: '🇹🇻', continent: 'Oceania', image: 'https://i.pinimg.com/1200x/93/5b/67/935b6789004594a82e0916cb80b66d28.jpg' },
  { id: 'uganda', name: 'Uganda', flag: '🇺🇬', continent: 'Africa', image: 'https://i.pinimg.com/736x/4f/fc/84/4ffc84cb985a075626662bea126f5ec7.jpg' },
  { id: 'ukraine', name: 'Ukraine', flag: '🇺🇦', continent: 'Europe', image: 'https://i.pinimg.com/736x/ce/19/15/ce191575adee341c83d3dcb8f0fa290d.jpg' },
  { id: 'uruguay', name: 'Uruguay', flag: '🇺🇾', continent: 'Americas', image: 'https://i.pinimg.com/1200x/ec/53/b9/ec53b956794c7690bbb057d78b768f81.jpg' },
  { id: 'uzbekistan', name: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia', image: 'https://i.pinimg.com/736x/60/5c/21/605c21b40a4000c23373e116fd610984.jpg' },
  { id: 'vanuatu', name: 'Vanuatu', flag: '🇻🇺', continent: 'Oceania', image: 'https://i.pinimg.com/736x/5b/48/6d/5b486dc56fb5a6e8181878fddda889ac.jpg' },
  { id: 'venezuela', name: 'Venezuela', flag: '🇻🇪', continent: 'Americas', image: 'https://i.pinimg.com/736x/3e/9c/79/3e9c79b171c1580d1a175e266e1e4e04.jpg' },
  { id: 'yemen', name: 'Yemen', flag: '🇾🇪', continent: 'Asia', image: 'https://i.pinimg.com/736x/bc/84/da/bc84daae09ca5924cdfc51f6d5be0e10.jpg' },
  { id: 'zambia', name: 'Zambia', flag: '🇿🇲', continent: 'Africa', image: 'https://picsum.photos/seed/zambia/600/400' },
  { id: 'zimbabwe', name: 'Zimbabwe', flag: '🇿🇼', continent: 'Africa', image: 'https://i.pinimg.com/1200x/81/2e/83/812e8346602c1bdc22857369385bb005.jpg' },
  { id: 'comoros', name: 'Comoros', flag: '🇰🇲', continent: 'Africa', image: 'https://i.pinimg.com/1200x/8d/5d/9c/8d5d9c6a19e15ef8ed97dffcc0a7e20e.jpg' }
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
