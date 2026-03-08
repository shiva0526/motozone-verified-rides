export interface Bike {
  id: number;
  slug: string;
  brand: string;
  model: string;
  year: number;
  type: string;
  price: number;
  condition: 'Excellent' | 'Good' | 'Fair';
  city: string;
  certified: boolean;
  image: string;
  mileage: string;
  engine: string;
  power: string;
  description: string;
  gallery: string[];
}

export const bikes: Bike[] = [
  {
    id: 1, slug: 'royal-enfield-classic-350', brand: 'Royal Enfield', model: 'Classic 350', year: 2022, type: 'Cruiser', price: 145000, condition: 'Excellent', city: 'Mumbai', certified: true,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=450&fit=crop',
    mileage: '12,400 km', engine: '349cc Single', power: '20.2 bhp',
    description: 'A well-maintained Royal Enfield Classic 350 in Signals edition colorway. Single owner, all service records available. Recently serviced with new chain and sprocket.',
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 2, slug: 'ktm-duke-390', brand: 'KTM', model: 'Duke 390', year: 2023, type: 'Street', price: 215000, condition: 'Excellent', city: 'Delhi', certified: true,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=450&fit=crop',
    mileage: '5,200 km', engine: '373cc Single', power: '43.5 bhp',
    description: 'Nearly new KTM Duke 390 with just 5,200 km on the odometer. Quickshifter+, ride-by-wire, LED headlamps. Still under manufacturer warranty.',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 3, slug: 'honda-cb500x', brand: 'Honda', model: 'CB500X', year: 2021, type: 'Adventure', price: 320000, condition: 'Good', city: 'Bangalore', certified: true,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=450&fit=crop',
    mileage: '22,800 km', engine: '471cc Parallel Twin', power: '47.5 bhp',
    description: 'Honda CB500X adventure tourer perfect for both city commutes and weekend getaways. Comes with crash guard, engine guard, and touring windscreen.',
    gallery: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 4, slug: 'yamaha-mt15', brand: 'Yamaha', model: 'MT-15 V2', year: 2023, type: 'Street', price: 135000, condition: 'Excellent', city: 'Pune', certified: false,
    image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&h=450&fit=crop',
    mileage: '3,100 km', engine: '155cc Single', power: '18.4 bhp',
    description: 'Yamaha MT-15 V2 in Metallic Black. Barely used, like-new condition. VVA engine with excellent fuel efficiency. Perfect first bike or daily commuter.',
    gallery: [
      'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 5, slug: 'bajaj-dominar-400', brand: 'Bajaj', model: 'Dominar 400', year: 2022, type: 'Sport Touring', price: 165000, condition: 'Good', city: 'Chennai', certified: true,
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&h=450&fit=crop',
    mileage: '18,600 km', engine: '373cc Single', power: '39.4 bhp',
    description: 'Bajaj Dominar 400 with dual-channel ABS, USD forks, and full LED lighting. A great sport tourer with comfortable ergonomics for long rides.',
    gallery: [
      'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 6, slug: 'triumph-street-twin', brand: 'Triumph', model: 'Street Twin', year: 2021, type: 'Cruiser', price: 520000, condition: 'Excellent', city: 'Hyderabad', certified: true,
    image: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=600&h=450&fit=crop',
    mileage: '9,800 km', engine: '900cc Parallel Twin', power: '65 bhp',
    description: 'Triumph Street Twin in stunning Jet Black. Ride-by-wire throttle, torque-assist clutch, ABS. A premium modern classic with low mileage.',
    gallery: [
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 7, slug: 'kawasaki-ninja-300', brand: 'Kawasaki', model: 'Ninja 300', year: 2022, type: 'Sport', price: 245000, condition: 'Good', city: 'Mumbai', certified: true,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=450&fit=crop',
    mileage: '14,200 km', engine: '296cc Parallel Twin', power: '39 bhp',
    description: 'Kawasaki Ninja 300 in KRT edition livery. Excellent entry-level sportbike with smooth twin-cylinder engine. Well maintained with recent tyre change.',
    gallery: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop',
    ],
  },
  {
    id: 8, slug: 'hero-xpulse-200', brand: 'Hero', model: 'XPulse 200 4V', year: 2023, type: 'Adventure', price: 125000, condition: 'Excellent', city: 'Delhi', certified: false,
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=450&fit=crop',
    mileage: '7,500 km', engine: '199cc Single', power: '19.1 bhp',
    description: 'Hero XPulse 200 4V — the affordable adventure machine. Long travel suspension, 21-inch front wheel, digital console with turn-by-turn navigation.',
    gallery: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&h=600&fit=crop',
    ],
  },
];

export const formatPrice = (price: number) =>
  '₹ ' + price.toLocaleString('en-IN');

export const conditionColor: Record<string, string> = {
  Excellent: 'bg-success/20 text-success',
  Good: 'bg-accent/20 text-accent',
  Fair: 'bg-orange-500/20 text-orange-400',
};

export const brands = [...new Set(bikes.map(b => b.brand))];
export const types = [...new Set(bikes.map(b => b.type))];
export const cities = [...new Set(bikes.map(b => b.city))];
