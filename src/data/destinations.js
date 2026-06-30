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
  { id: 'japan', name: 'Japan', flag: '🇯🇵', continent: 'Asia', image: 'https://loremflickr.com/600/400/japan,landscape/all?lock=1' },
  { id: 'china', name: 'China', flag: '🇨🇳', continent: 'Asia', image: 'https://loremflickr.com/600/400/china,landscape/all?lock=2' },
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬', continent: 'Asia', image: 'https://loremflickr.com/600/400/singapore,landscape/all?lock=3' },
  { id: 'thailand', name: 'Thailand', flag: '🇹🇭', continent: 'Asia', image: 'https://loremflickr.com/600/400/thailand,landscape/all?lock=4' },
  { id: 'dubai', name: 'United Arab Emirates', flag: '🇦🇪', continent: 'Middle East', image: 'https://loremflickr.com/600/400/dubai,landscape/all?lock=5' },
  { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', continent: 'Asia', image: 'https://loremflickr.com/600/400/malaysia,landscape/all?lock=6' },
  { id: 'south-korea', name: 'South Korea', flag: '🇰🇷', continent: 'Asia', image: 'https://loremflickr.com/600/400/south-korea,landscape/all?lock=7' },
  { id: 'vietnam', name: 'Vietnam', flag: '🇻🇳', continent: 'Asia', image: 'https://loremflickr.com/600/400/vietnam,landscape/all?lock=8' },
  { id: 'turkey', name: 'Turkey', flag: '🇹🇷', continent: 'Europe', image: 'https://loremflickr.com/600/400/turkey,landscape/all?lock=9' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', continent: 'Europe', image: 'https://loremflickr.com/600/400/uk,landscape/all?lock=10' },
  { id: 'australia', name: 'Australia', flag: '🇦🇺', continent: 'Oceania', image: 'https://loremflickr.com/600/400/australia,landscape/all?lock=11' },
  { id: 'canada', name: 'Canada', flag: '🇨🇦', continent: 'Americas', image: 'https://loremflickr.com/600/400/canada,landscape/all?lock=12' },
  { id: 'usa', name: 'United States', flag: '🇺🇸', continent: 'Americas', image: 'https://loremflickr.com/600/400/usa,landscape/all?lock=13' },
  { id: 'france', name: 'France', flag: '🇫🇷', continent: 'Europe', image: 'https://loremflickr.com/600/400/france,landscape/all?lock=14' },
  { id: 'germany', name: 'Germany', flag: '🇩🇪', continent: 'Europe', image: 'https://loremflickr.com/600/400/germany,landscape/all?lock=15' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹', continent: 'Europe', image: 'https://loremflickr.com/600/400/italy,landscape/all?lock=16' },
  { id: 'spain', name: 'Spain', flag: '🇪🇸', continent: 'Europe', image: 'https://loremflickr.com/600/400/spain,landscape/all?lock=17' },
  { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭', continent: 'Europe', image: 'https://loremflickr.com/600/400/switzerland,landscape/all?lock=18' },
  { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱', continent: 'Europe', image: 'https://loremflickr.com/600/400/netherlands,landscape/all?lock=19' },
  { id: 'belgium', name: 'Belgium', flag: '🇧🇪', continent: 'Europe', image: 'https://loremflickr.com/600/400/belgium,landscape/all?lock=20' },
  { id: 'austria', name: 'Austria', flag: '🇦🇹', continent: 'Europe', image: 'https://loremflickr.com/600/400/austria,landscape/all?lock=21' },
  { id: 'portugal', name: 'Portugal', flag: '🇵🇹', continent: 'Europe', image: 'https://loremflickr.com/600/400/portugal,landscape/all?lock=22' },
  { id: 'greece', name: 'Greece', flag: '🇬🇷', continent: 'Europe', image: 'https://loremflickr.com/600/400/greece,landscape/all?lock=23' },
  { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', continent: 'Oceania', image: 'https://loremflickr.com/600/400/new-zealand,landscape/all?lock=24' },
  { id: 'south-africa', name: 'South Africa', flag: '🇿🇦', continent: 'Africa', image: 'https://loremflickr.com/600/400/south-africa,landscape/all?lock=25' },
  { id: 'kenya', name: 'Kenya', flag: '🇰🇪', continent: 'Africa', image: 'https://loremflickr.com/600/400/kenya,landscape/all?lock=26' },
  { id: 'egypt', name: 'Egypt', flag: '🇪🇬', continent: 'Africa', image: 'https://loremflickr.com/600/400/egypt,landscape/all?lock=27' },
  { id: 'morocco', name: 'Morocco', flag: '🇲🇦', continent: 'Africa', image: 'https://loremflickr.com/600/400/morocco,landscape/all?lock=28' },
  { id: 'tanzania', name: 'Tanzania', flag: '🇹🇿', continent: 'Africa', image: 'https://loremflickr.com/600/400/tanzania,landscape/all?lock=29' },
  { id: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', continent: 'Middle East', image: 'https://loremflickr.com/600/400/saudi-arabia,landscape/all?lock=30' },
  { id: 'qatar', name: 'Qatar', flag: '🇶🇦', continent: 'Middle East', image: 'https://loremflickr.com/600/400/qatar,landscape/all?lock=31' },
  { id: 'oman', name: 'Oman', flag: '🇴🇲', continent: 'Middle East', image: 'https://loremflickr.com/600/400/oman,landscape/all?lock=32' },
  { id: 'bahrain', name: 'Bahrain', flag: '🇧🇭', continent: 'Middle East', image: 'https://loremflickr.com/600/400/bahrain,landscape/all?lock=33' },
  { id: 'kuwait', name: 'Kuwait', flag: '🇰🇼', continent: 'Middle East', image: 'https://loremflickr.com/600/400/kuwait,landscape/all?lock=34' },
  { id: 'indonesia', name: 'Indonesia', flag: '🇮🇩', continent: 'Asia', image: 'https://loremflickr.com/600/400/indonesia,landscape/all?lock=35' },
  { id: 'philippines', name: 'Philippines', flag: '🇵🇭', continent: 'Asia', image: 'https://loremflickr.com/600/400/philippines,landscape/all?lock=36' },
  { id: 'sri-lanka', name: 'Sri Lanka', flag: '🇱🇰', continent: 'Asia', image: 'https://loremflickr.com/600/400/sri-lanka,landscape/all?lock=37' },
  { id: 'nepal', name: 'Nepal', flag: '🇳🇵', continent: 'Asia', image: 'https://loremflickr.com/600/400/nepal,landscape/all?lock=38' },
  { id: 'bhutan', name: 'Bhutan', flag: '🇧🇹', continent: 'Asia', image: 'https://loremflickr.com/600/400/bhutan,landscape/all?lock=39' },
  { id: 'maldives', name: 'Maldives', flag: '🇲🇻', continent: 'Asia', image: 'https://loremflickr.com/600/400/maldives,landscape/all?lock=40' },
  { id: 'mexico', name: 'Mexico', flag: '🇲🇽', continent: 'Americas', image: 'https://loremflickr.com/600/400/mexico,landscape/all?lock=41' },
  { id: 'brazil', name: 'Brazil', flag: '🇧🇷', continent: 'Americas', image: 'https://loremflickr.com/600/400/brazil,landscape/all?lock=42' },
  { id: 'argentina', name: 'Argentina', flag: '🇦🇷', continent: 'Americas', image: 'https://loremflickr.com/600/400/argentina,landscape/all?lock=43' },
  { id: 'albania', name: 'Albania', flag: '🇦🇱', continent: 'Europe', image: 'https://loremflickr.com/600/400/albania,landscape/all?lock=44' },
  { id: 'algeria', name: 'Algeria', flag: '🇩🇿', continent: 'Africa', image: 'https://loremflickr.com/600/400/algeria,landscape/all?lock=45' },
  { id: 'andorra', name: 'Andorra', flag: '🇦🇩', continent: 'Europe', image: 'https://loremflickr.com/600/400/andorra,landscape/all?lock=46' },
  { id: 'angola', name: 'Angola', flag: '🇦🇴', continent: 'Africa', image: 'https://loremflickr.com/600/400/angola,landscape/all?lock=47' },
  { id: 'antigua-and-barbuda', name: 'Antigua and Barbuda', flag: '🇦🇬', continent: 'Americas', image: 'https://loremflickr.com/600/400/antigua-and-barbuda,landscape/all?lock=48' },
  { id: 'armenia', name: 'Armenia', flag: '🇦🇲', continent: 'Asia', image: 'https://loremflickr.com/600/400/armenia,landscape/all?lock=49' },
  { id: 'azerbaijan', name: 'Azerbaijan', flag: '🇦🇿', continent: 'Asia', image: 'https://loremflickr.com/600/400/azerbaijan,landscape/all?lock=50' },
  { id: 'bahamas', name: 'Bahamas', flag: '🇧🇸', continent: 'Americas', image: 'https://loremflickr.com/600/400/bahamas,landscape/all?lock=51' },
  { id: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩', continent: 'Asia', image: 'https://loremflickr.com/600/400/bangladesh,landscape/all?lock=52' },
  { id: 'barbados', name: 'Barbados', flag: '🇧🇧', continent: 'Americas', image: 'https://loremflickr.com/600/400/barbados,landscape/all?lock=53' },
  { id: 'belarus', name: 'Belarus', flag: '🇧🇾', continent: 'Europe', image: 'https://loremflickr.com/600/400/belarus,landscape/all?lock=54' },
  { id: 'belize', name: 'Belize', flag: '🇧🇿', continent: 'Americas', image: 'https://loremflickr.com/600/400/belize,landscape/all?lock=55' },
  { id: 'benin', name: 'Benin', flag: '🇧🇯', continent: 'Africa', image: 'https://loremflickr.com/600/400/benin,landscape/all?lock=56' },
  { id: 'bolivia', name: 'Bolivia', flag: '🇧🇴', continent: 'Americas', image: 'https://loremflickr.com/600/400/bolivia,landscape/all?lock=57' },
  { id: 'bosnia-and-herzegovina', name: 'Bosnia and Herzegovina', flag: '🇧🇦', continent: 'Europe', image: 'https://loremflickr.com/600/400/bosnia-and-herzegovina,landscape/all?lock=58' },
  { id: 'botswana', name: 'Botswana', flag: '🇧🇼', continent: 'Africa', image: 'https://loremflickr.com/600/400/botswana,landscape/all?lock=59' },
  { id: 'brunei', name: 'Brunei', flag: '🇧🇳', continent: 'Asia', image: 'https://loremflickr.com/600/400/brunei,landscape/all?lock=60' },
  { id: 'bulgaria', name: 'Bulgaria', flag: '🇧🇬', continent: 'Europe', image: 'https://loremflickr.com/600/400/bulgaria,landscape/all?lock=61' },
  { id: 'burkina-faso', name: 'Burkina Faso', flag: '🇧🇫', continent: 'Africa', image: 'https://loremflickr.com/600/400/burkina-faso,landscape/all?lock=62' },
  { id: 'burundi', name: 'Burundi', flag: '🇧🇮', continent: 'Africa', image: 'https://loremflickr.com/600/400/burundi,landscape/all?lock=63' },
  { id: 'cabo-verde', name: 'Cabo Verde', flag: '🇨🇻', continent: 'Africa', image: 'https://loremflickr.com/600/400/cabo-verde,landscape/all?lock=64' },
  { id: 'cambodia', name: 'Cambodia', flag: '🇰🇭', continent: 'Asia', image: 'https://loremflickr.com/600/400/cambodia,landscape/all?lock=65' },
  { id: 'cameroon', name: 'Cameroon', flag: '🇨🇲', continent: 'Africa', image: 'https://loremflickr.com/600/400/cameroon,landscape/all?lock=66' },
  { id: 'central-african-republic', name: 'Central African Republic', flag: '🇨🇫', continent: 'Africa', image: 'https://loremflickr.com/600/400/central-african-republic,landscape/all?lock=67' },
  { id: 'chad', name: 'Chad', flag: '🇹🇩', continent: 'Africa', image: 'https://loremflickr.com/600/400/chad,landscape/all?lock=68' },
  { id: 'chile', name: 'Chile', flag: '🇨🇱', continent: 'Americas', image: 'https://loremflickr.com/600/400/chile,landscape/all?lock=69' },
  { id: 'colombia', name: 'Colombia', flag: '🇨🇴', continent: 'Americas', image: 'https://loremflickr.com/600/400/colombia,landscape/all?lock=70' },
  { id: 'congo-brazzaville', name: 'Congo (Congo-Brazzaville)', flag: '🇨🇬', continent: 'Africa', image: 'https://loremflickr.com/600/400/congo-brazzaville,landscape/all?lock=71' },
  { id: 'costa-rica', name: 'Costa Rica', flag: '🇨🇷', continent: 'Americas', image: 'https://loremflickr.com/600/400/costa-rica,landscape/all?lock=72' },
  { id: 'cote-divoire', name: "Côte d'Ivoire", flag: '🇨🇮', continent: 'Africa', image: 'https://loremflickr.com/600/400/cote-divoire,landscape/all?lock=73' },
  { id: 'croatia', name: 'Croatia', flag: '🇭🇷', continent: 'Europe', image: 'https://loremflickr.com/600/400/croatia,landscape/all?lock=74' },
  { id: 'cuba', name: 'Cuba', flag: '🇨🇺', continent: 'Americas', image: 'https://loremflickr.com/600/400/cuba,landscape/all?lock=75' },
  { id: 'cyprus', name: 'Cyprus', flag: '🇨🇾', continent: 'Europe', image: 'https://loremflickr.com/600/400/cyprus,landscape/all?lock=76' },
  { id: 'czechia', name: 'Czechia (Czech Republic)', flag: '🇨🇿', continent: 'Europe', image: 'https://loremflickr.com/600/400/czechia,landscape/all?lock=77' },
  { id: 'democratic-republic-of-the-congo', name: 'Democratic Republic of the Congo', flag: '🇨🇩', continent: 'Africa', image: 'https://loremflickr.com/600/400/democratic-republic-of-the-congo,landscape/all?lock=78' },
  { id: 'denmark', name: 'Denmark', flag: '🇩🇰', continent: 'Europe', image: 'https://loremflickr.com/600/400/denmark,landscape/all?lock=79' },
  { id: 'djibouti', name: 'Djibouti', flag: '🇩🇯', continent: 'Africa', image: 'https://loremflickr.com/600/400/djibouti,landscape/all?lock=80' },
  { id: 'dominica', name: 'Dominica', flag: '🇩🇲', continent: 'Americas', image: 'https://loremflickr.com/600/400/dominica,landscape/all?lock=81' },
  { id: 'dominican-republic', name: 'Dominican Republic', flag: '🇩🇴', continent: 'Americas', image: 'https://loremflickr.com/600/400/dominican-republic,landscape/all?lock=82' },
  { id: 'ecuador', name: 'Ecuador', flag: '🇪🇨', continent: 'Americas', image: 'https://loremflickr.com/600/400/ecuador,landscape/all?lock=83' },
  { id: 'el-salvador', name: 'El Salvador', flag: '🇸🇻', continent: 'Americas', image: 'https://loremflickr.com/600/400/el-salvador,landscape/all?lock=84' },
  { id: 'equatorial-guinea', name: 'Equatorial Guinea', flag: '🇬🇶', continent: 'Africa', image: 'https://loremflickr.com/600/400/equatorial-guinea,landscape/all?lock=85' },
  { id: 'eritrea', name: 'Eritrea', flag: '🇪🇷', continent: 'Africa', image: 'https://loremflickr.com/600/400/eritrea,landscape/all?lock=86' },
  { id: 'estonia', name: 'Estonia', flag: '🇪🇪', continent: 'Europe', image: 'https://loremflickr.com/600/400/estonia,landscape/all?lock=87' },
  { id: 'eswatini', name: 'Eswatini (fmr. Swaziland)', flag: '🇸🇿', continent: 'Africa', image: 'https://loremflickr.com/600/400/eswatini,landscape/all?lock=88' },
  { id: 'ethiopia', name: 'Ethiopia', flag: '🇪🇹', continent: 'Africa', image: 'https://loremflickr.com/600/400/ethiopia,landscape/all?lock=89' },
  { id: 'fiji', name: 'Fiji', flag: '🇫🇯', continent: 'Oceania', image: 'https://loremflickr.com/600/400/fiji,landscape/all?lock=90' },
  { id: 'finland', name: 'Finland', flag: '🇫🇮', continent: 'Europe', image: 'https://loremflickr.com/600/400/finland,landscape/all?lock=91' },
  { id: 'gabon', name: 'Gabon', flag: '🇬🇦', continent: 'Africa', image: 'https://loremflickr.com/600/400/gabon,landscape/all?lock=92' },
  { id: 'gambia', name: 'Gambia', flag: '🇬🇲', continent: 'Africa', image: 'https://loremflickr.com/600/400/gambia,landscape/all?lock=93' },
  { id: 'georgia', name: 'Georgia', flag: '🇬🇪', continent: 'Asia', image: 'https://loremflickr.com/600/400/georgia,landscape/all?lock=94' },
  { id: 'ghana', name: 'Ghana', flag: '🇬🇭', continent: 'Africa', image: 'https://loremflickr.com/600/400/ghana,landscape/all?lock=95' },
  { id: 'grenada', name: 'Grenada', flag: '🇬🇩', continent: 'Americas', image: 'https://loremflickr.com/600/400/grenada,landscape/all?lock=96' },
  { id: 'guatemala', name: 'Guatemala', flag: '🇬🇹', continent: 'Americas', image: 'https://loremflickr.com/600/400/guatemala,landscape/all?lock=97' },
  { id: 'guinea', name: 'Guinea', flag: '🇬🇳', continent: 'Africa', image: 'https://loremflickr.com/600/400/guinea,landscape/all?lock=98' },
  { id: 'guinea-bissau', name: 'Guinea-Bissau', flag: '🇬🇼', continent: 'Africa', image: 'https://loremflickr.com/600/400/guinea-bissau,landscape/all?lock=99' },
  { id: 'guyana', name: 'Guyana', flag: '🇬🇾', continent: 'Americas', image: 'https://loremflickr.com/600/400/guyana,landscape/all?lock=100' },
  { id: 'haiti', name: 'Haiti', flag: '🇭🇹', continent: 'Americas', image: 'https://loremflickr.com/600/400/haiti,landscape/all?lock=101' },
  { id: 'holy-see', name: 'Holy See', flag: '🇻🇦', continent: 'Europe', image: 'https://loremflickr.com/600/400/holy-see,landscape/all?lock=102' },
  { id: 'honduras', name: 'Honduras', flag: '🇭🇳', continent: 'Americas', image: 'https://loremflickr.com/600/400/honduras,landscape/all?lock=103' },
  { id: 'hungary', name: 'Hungary', flag: '🇭🇺', continent: 'Europe', image: 'https://loremflickr.com/600/400/hungary,landscape/all?lock=104' },
  { id: 'iceland', name: 'Iceland', flag: '🇮🇸', continent: 'Europe', image: 'https://loremflickr.com/600/400/iceland,landscape/all?lock=105' },
  { id: 'india', name: 'India', flag: '🇮🇳', continent: 'Asia', image: 'https://loremflickr.com/600/400/india,landscape/all?lock=106' },
  { id: 'iran', name: 'Iran', flag: '🇮🇷', continent: 'Asia', image: 'https://loremflickr.com/600/400/iran,landscape/all?lock=107' },
  { id: 'iraq', name: 'Iraq', flag: '🇮🇶', continent: 'Asia', image: 'https://loremflickr.com/600/400/iraq,landscape/all?lock=108' },
  { id: 'ireland', name: 'Ireland', flag: '🇮🇪', continent: 'Europe', image: 'https://loremflickr.com/600/400/ireland,landscape/all?lock=109' },
  { id: 'israel', name: 'Israel', flag: '🇮🇱', continent: 'Asia', image: 'https://loremflickr.com/600/400/israel,landscape/all?lock=110' },
  { id: 'jamaica', name: 'Jamaica', flag: '🇯🇲', continent: 'Americas', image: 'https://loremflickr.com/600/400/jamaica,landscape/all?lock=111' },
  { id: 'jordan', name: 'Jordan', flag: '🇯🇴', continent: 'Asia', image: 'https://loremflickr.com/600/400/jordan,landscape/all?lock=112' },
  { id: 'kazakhstan', name: 'Kazakhstan', flag: '🇰🇿', continent: 'Asia', image: 'https://loremflickr.com/600/400/kazakhstan,landscape/all?lock=113' },
  { id: 'kiribati', name: 'Kiribati', flag: '🇰🇮', continent: 'Oceania', image: 'https://loremflickr.com/600/400/kiribati,landscape/all?lock=114' },
  { id: 'kyrgyzstan', name: 'Kyrgyzstan', flag: '🇰🇬', continent: 'Asia', image: 'https://loremflickr.com/600/400/kyrgyzstan,landscape/all?lock=115' },
  { id: 'laos', name: 'Laos', flag: '🇱🇦', continent: 'Asia', image: 'https://loremflickr.com/600/400/laos,landscape/all?lock=116' },
  { id: 'latvia', name: 'Latvia', flag: '🇱🇻', continent: 'Europe', image: 'https://loremflickr.com/600/400/latvia,landscape/all?lock=117' },
  { id: 'lebanon', name: 'Lebanon', flag: '🇱🇧', continent: 'Asia', image: 'https://loremflickr.com/600/400/lebanon,landscape/all?lock=118' },
  { id: 'lesotho', name: 'Lesotho', flag: '🇱🇸', continent: 'Africa', image: 'https://loremflickr.com/600/400/lesotho,landscape/all?lock=119' },
  { id: 'liberia', name: 'Liberia', flag: '🇱🇷', continent: 'Africa', image: 'https://loremflickr.com/600/400/liberia,landscape/all?lock=120' },
  { id: 'libya', name: 'Libya', flag: '🇱🇾', continent: 'Africa', image: 'https://loremflickr.com/600/400/libya,landscape/all?lock=121' },
  { id: 'liechtenstein', name: 'Liechtenstein', flag: '🇱🇮', continent: 'Europe', image: 'https://loremflickr.com/600/400/liechtenstein,landscape/all?lock=122' },
  { id: 'lithuania', name: 'Lithuania', flag: '🇱🇹', continent: 'Europe', image: 'https://loremflickr.com/600/400/lithuania,landscape/all?lock=123' },
  { id: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺', continent: 'Europe', image: 'https://loremflickr.com/600/400/luxembourg,landscape/all?lock=124' },
  { id: 'madagascar', name: 'Madagascar', flag: '🇲🇬', continent: 'Africa', image: 'https://loremflickr.com/600/400/madagascar,landscape/all?lock=125' },
  { id: 'malawi', name: 'Malawi', flag: '🇲🇼', continent: 'Africa', image: 'https://loremflickr.com/600/400/malawi,landscape/all?lock=126' },
  { id: 'mali', name: 'Mali', flag: '🇲🇱', continent: 'Africa', image: 'https://loremflickr.com/600/400/mali,landscape/all?lock=127' },
  { id: 'malta', name: 'Malta', flag: '🇲🇹', continent: 'Europe', image: 'https://loremflickr.com/600/400/malta,landscape/all?lock=128' },
  { id: 'marshall-islands', name: 'Marshall Islands', flag: '🇲🇭', continent: 'Oceania', image: 'https://loremflickr.com/600/400/marshall-islands,landscape/all?lock=129' },
  { id: 'mauritania', name: 'Mauritania', flag: '🇲🇷', continent: 'Africa', image: 'https://loremflickr.com/600/400/mauritania,landscape/all?lock=130' },
  { id: 'mauritius', name: 'Mauritius', flag: '🇲🇺', continent: 'Africa', image: 'https://loremflickr.com/600/400/mauritius,landscape/all?lock=131' },
  { id: 'micronesia', name: 'Micronesia', flag: '🇫🇲', continent: 'Oceania', image: 'https://loremflickr.com/600/400/micronesia,landscape/all?lock=132' },
  { id: 'moldova', name: 'Moldova', flag: '🇲🇩', continent: 'Europe', image: 'https://loremflickr.com/600/400/moldova,landscape/all?lock=133' },
  { id: 'monaco', name: 'Monaco', flag: '🇲🇨', continent: 'Europe', image: 'https://loremflickr.com/600/400/monaco,landscape/all?lock=134' },
  { id: 'mongolia', name: 'Mongolia', flag: '🇲🇳', continent: 'Asia', image: 'https://loremflickr.com/600/400/mongolia,landscape/all?lock=135' },
  { id: 'montenegro', name: 'Montenegro', flag: '🇲🇪', continent: 'Europe', image: 'https://loremflickr.com/600/400/montenegro,landscape/all?lock=136' },
  { id: 'mozambique', name: 'Mozambique', flag: '🇲🇿', continent: 'Africa', image: 'https://loremflickr.com/600/400/mozambique,landscape/all?lock=137' },
  { id: 'myanmar', name: 'Myanmar (formerly Burma)', flag: '🇲🇲', continent: 'Asia', image: 'https://loremflickr.com/600/400/myanmar,landscape/all?lock=138' },
  { id: 'namibia', name: 'Namibia', flag: '🇳🇦', continent: 'Africa', image: 'https://loremflickr.com/600/400/namibia,landscape/all?lock=139' },
  { id: 'nauru', name: 'Nauru', flag: '🇳🇷', continent: 'Oceania', image: 'https://loremflickr.com/600/400/nauru,landscape/all?lock=140' },
  { id: 'nicaragua', name: 'Nicaragua', flag: '🇳🇮', continent: 'Americas', image: 'https://loremflickr.com/600/400/nicaragua,landscape/all?lock=141' },
  { id: 'niger', name: 'Niger', flag: '🇳🇪', continent: 'Africa', image: 'https://loremflickr.com/600/400/niger,landscape/all?lock=142' },
  { id: 'nigeria', name: 'Nigeria', flag: '🇳🇬', continent: 'Africa', image: 'https://loremflickr.com/600/400/nigeria,landscape/all?lock=143' },
  { id: 'north-korea', name: 'North Korea', flag: '🇰🇵', continent: 'Asia', image: 'https://loremflickr.com/600/400/north-korea,landscape/all?lock=144' },
  { id: 'north-macedonia', name: 'North Macedonia', flag: '🇲🇰', continent: 'Europe', image: 'https://loremflickr.com/600/400/north-macedonia,landscape/all?lock=145' },
  { id: 'norway', name: 'Norway', flag: '🇳🇴', continent: 'Europe', image: 'https://loremflickr.com/600/400/norway,landscape/all?lock=146' },
  { id: 'pakistan', name: 'Pakistan', flag: '🇵🇰', continent: 'Asia', image: 'https://loremflickr.com/600/400/pakistan,landscape/all?lock=147' },
  { id: 'palau', name: 'Palau', flag: '🇵🇼', continent: 'Oceania', image: 'https://loremflickr.com/600/400/palau,landscape/all?lock=148' },
  { id: 'palestine', name: 'Palestine State', flag: '🇵🇸', continent: 'Asia', image: 'https://loremflickr.com/600/400/palestine,landscape/all?lock=149' },
  { id: 'panama', name: 'Panama', flag: '🇵🇦', continent: 'Americas', image: 'https://loremflickr.com/600/400/panama,landscape/all?lock=150' },
  { id: 'papua-new-guinea', name: 'Papua New Guinea', flag: '🇵🇬', continent: 'Oceania', image: 'https://loremflickr.com/600/400/papua-new-guinea,landscape/all?lock=151' },
  { id: 'paraguay', name: 'Paraguay', flag: '🇵🇾', continent: 'Americas', image: 'https://loremflickr.com/600/400/paraguay,landscape/all?lock=152' },
  { id: 'peru', name: 'Peru', flag: '🇵🇪', continent: 'Americas', image: 'https://loremflickr.com/600/400/peru,landscape/all?lock=153' },
  { id: 'poland', name: 'Poland', flag: '🇵🇱', continent: 'Europe', image: 'https://loremflickr.com/600/400/poland,landscape/all?lock=154' },
  { id: 'romania', name: 'Romania', flag: '🇷🇴', continent: 'Europe', image: 'https://loremflickr.com/600/400/romania,landscape/all?lock=155' },
  { id: 'russia', name: 'Russia', flag: '🇷🇺', continent: 'Europe', image: 'https://loremflickr.com/600/400/russia,landscape/all?lock=156' },
  { id: 'rwanda', name: 'Rwanda', flag: '🇷🇼', continent: 'Africa', image: 'https://loremflickr.com/600/400/rwanda,landscape/all?lock=157' },
  { id: 'saint-kitts-and-nevis', name: 'Saint Kitts and Nevis', flag: '🇰🇳', continent: 'Americas', image: 'https://loremflickr.com/600/400/saint-kitts-and-nevis,landscape/all?lock=158' },
  { id: 'saint-lucia', name: 'Saint Lucia', flag: '🇱🇨', continent: 'Americas', image: 'https://loremflickr.com/600/400/saint-lucia,landscape/all?lock=159' },
  { id: 'saint-vincent-and-the-grenadines', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', continent: 'Americas', image: 'https://loremflickr.com/600/400/saint-vincent-and-the-grenadines,landscape/all?lock=160' },
  { id: 'samoa', name: 'Samoa', flag: '🇼🇸', continent: 'Oceania', image: 'https://loremflickr.com/600/400/samoa,landscape/all?lock=161' },
  { id: 'san-marino', name: 'San Marino', flag: '🇸🇲', continent: 'Europe', image: 'https://loremflickr.com/600/400/san-marino,landscape/all?lock=162' },
  { id: 'sao-tome-and-principe', name: 'Sao Tome and Principe', flag: '🇸🇹', continent: 'Africa', image: 'https://loremflickr.com/600/400/sao-tome-and-principe,landscape/all?lock=163' },
  { id: 'senegal', name: 'Senegal', flag: '🇸🇳', continent: 'Africa', image: 'https://loremflickr.com/600/400/senegal,landscape/all?lock=164' },
  { id: 'serbia', name: 'Serbia', flag: '🇷🇸', continent: 'Europe', image: 'https://loremflickr.com/600/400/serbia,landscape/all?lock=165' },
  { id: 'seychelles', name: 'Seychelles', flag: '🇸🇨', continent: 'Africa', image: 'https://loremflickr.com/600/400/seychelles,landscape/all?lock=166' },
  { id: 'sierra-leone', name: 'Sierra Leone', flag: '🇸🇱', continent: 'Africa', image: 'https://loremflickr.com/600/400/sierra-leone,landscape/all?lock=167' },
  { id: 'slovakia', name: 'Slovakia', flag: '🇸🇰', continent: 'Europe', image: 'https://loremflickr.com/600/400/slovakia,landscape/all?lock=168' },
  { id: 'slovenia', name: 'Slovenia', flag: '🇸🇮', continent: 'Europe', image: 'https://loremflickr.com/600/400/slovenia,landscape/all?lock=169' },
  { id: 'solomon-islands', name: 'Solomon Islands', flag: '🇸🇧', continent: 'Oceania', image: 'https://loremflickr.com/600/400/solomon-islands,landscape/all?lock=170' },
  { id: 'somalia', name: 'Somalia', flag: '🇸🇴', continent: 'Africa', image: 'https://loremflickr.com/600/400/somalia,landscape/all?lock=171' },
  { id: 'south-sudan', name: 'South Sudan', flag: '🇸🇸', continent: 'Africa', image: 'https://loremflickr.com/600/400/south-sudan,landscape/all?lock=172' },
  { id: 'sudan', name: 'Sudan', flag: '🇸🇩', continent: 'Africa', image: 'https://loremflickr.com/600/400/sudan,landscape/all?lock=173' },
  { id: 'suriname', name: 'Suriname', flag: '🇸🇷', continent: 'Americas', image: 'https://loremflickr.com/600/400/suriname,landscape/all?lock=174' },
  { id: 'sweden', name: 'Sweden', flag: '🇸🇪', continent: 'Europe', image: 'https://loremflickr.com/600/400/sweden,landscape/all?lock=175' },
  { id: 'syria', name: 'Syria', flag: '🇸🇾', continent: 'Asia', image: 'https://loremflickr.com/600/400/syria,landscape/all?lock=176' },
  { id: 'tajikistan', name: 'Tajikistan', flag: '🇹🇯', continent: 'Asia', image: 'https://loremflickr.com/600/400/tajikistan,landscape/all?lock=177' },
  { id: 'timor-leste', name: 'Timor-Leste', flag: '🇹🇱', continent: 'Asia', image: 'https://loremflickr.com/600/400/timor-leste,landscape/all?lock=178' },
  { id: 'togo', name: 'Togo', flag: '🇹🇬', continent: 'Africa', image: 'https://loremflickr.com/600/400/togo,landscape/all?lock=179' },
  { id: 'tonga', name: 'Tonga', flag: '🇹🇴', continent: 'Oceania', image: 'https://loremflickr.com/600/400/tonga,landscape/all?lock=180' },
  { id: 'trinidad-and-tobago', name: 'Trinidad and Tobago', flag: '🇹🇹', continent: 'Americas', image: 'https://loremflickr.com/600/400/trinidad-and-tobago,landscape/all?lock=181' },
  { id: 'tunisia', name: 'Tunisia', flag: '🇹🇳', continent: 'Africa', image: 'https://loremflickr.com/600/400/tunisia,landscape/all?lock=182' },
  { id: 'turkmenistan', name: 'Turkmenistan', flag: '🇹🇲', continent: 'Asia', image: 'https://loremflickr.com/600/400/turkmenistan,landscape/all?lock=183' },
  { id: 'tuvalu', name: 'Tuvalu', flag: '🇹🇻', continent: 'Oceania', image: 'https://loremflickr.com/600/400/tuvalu,landscape/all?lock=184' },
  { id: 'uganda', name: 'Uganda', flag: '🇺🇬', continent: 'Africa', image: 'https://loremflickr.com/600/400/uganda,landscape/all?lock=185' },
  { id: 'ukraine', name: 'Ukraine', flag: '🇺🇦', continent: 'Europe', image: 'https://loremflickr.com/600/400/ukraine,landscape/all?lock=186' },
  { id: 'uruguay', name: 'Uruguay', flag: '🇺🇾', continent: 'Americas', image: 'https://loremflickr.com/600/400/uruguay,landscape/all?lock=187' },
  { id: 'uzbekistan', name: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia', image: 'https://loremflickr.com/600/400/uzbekistan,landscape/all?lock=188' },
  { id: 'vanuatu', name: 'Vanuatu', flag: '🇻🇺', continent: 'Oceania', image: 'https://loremflickr.com/600/400/vanuatu,landscape/all?lock=189' },
  { id: 'venezuela', name: 'Venezuela', flag: '🇻🇪', continent: 'Americas', image: 'https://loremflickr.com/600/400/venezuela,landscape/all?lock=190' },
  { id: 'yemen', name: 'Yemen', flag: '🇾🇪', continent: 'Asia', image: 'https://loremflickr.com/600/400/yemen,landscape/all?lock=191' },
  { id: 'zambia', name: 'Zambia', flag: '🇿🇲', continent: 'Africa', image: 'https://loremflickr.com/600/400/zambia,landscape/all?lock=192' },
  { id: 'zimbabwe', name: 'Zimbabwe', flag: '🇿🇼', continent: 'Africa', image: 'https://loremflickr.com/600/400/zimbabwe,landscape/all?lock=193' },
  { id: 'comoros', name: 'Comoros', flag: '🇰🇲', continent: 'Africa', image: 'https://loremflickr.com/600/400/comoros,landscape/all?lock=194' }
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
