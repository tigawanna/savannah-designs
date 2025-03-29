export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "Savanna Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=800&q=80",
    description: "A private residence inspired by the golden hues and open spaces of the Kenyan savanna."
  },
  {
    id: 2,
    title: "Forest Lodge",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
    description: "A boutique hotel nestled in the forest, featuring sustainable materials and biophilic design."
  },
  {
    id: 3,
    title: "Urban Oasis Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    description: "A corporate headquarters designed to boost productivity through natural elements and optimal flow."
  },
  {
    id: 4,
    title: "Lakeside Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=800&q=80",
    description: "A luxury home with panoramic views, blending contemporary design with traditional African influences."
  },
  {
    id: 5,
    title: "Mountain View Restaurant",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=80",
    description: "A dining space that frames the natural beauty of its surroundings, creating an immersive experience."
  },
  {
    id: 6,
    title: "Heritage Renovation",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    description: "Breathing new life into a historic building while preserving its cultural significance and character."
  }
];
