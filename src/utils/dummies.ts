import { Testimonial } from "./types/custom.types";

export const posts = [
  {
    id: 7,
    name: "Ifeanyi Ubah",
    role: "Petroleum Engineering, UNIBEN",
    time: "4 days ago",
    content:
      "Interning at NNPC Port Harcourt. The safety drills are intense but super important. Respect for the industry 👷‍♂️",
    likes: 22,
    comments: 7,
    views: 170,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 8,
    name: "Fatima Suleiman",
    role: "Statistics, ABU Zaria",
    time: "4 days ago",
    content:
      "Feeling left out 😔. Most of my friends already got placements but I’m still struggling to find one. This process is draining.",
    likes: 12,
    comments: 15,
    views: 140,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 9,
    name: "Michael Johnson",
    role: "Computer Engineering, UI",
    time: "5 days ago",
    content:
      "My SIWES supervisor barely pays attention to us. We just sit around most days doing nothing. Not what I expected 😤",
    likes: 8,
    comments: 30,
    views: 200,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 10,
    name: "Grace Akintola",
    role: "Business Admin, UNILORIN",
    time: "6 days ago",
    content:
      "Started my internship at a fintech startup today! The team is super welcoming and I already feel like I’m contributing 🙌",
    likes: 60,
    comments: 18,
    views: 500,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 11,
    name: "David Nwosu",
    role: "Electrical Engineering, UNILAG",
    time: "6 days ago",
    content:
      "They promised us exposure during SIWES but all we’ve been doing is carrying files from one office to another 😒",
    likes: 5,
    comments: 12,
    views: 95,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 12,
    name: "Zainab Lawal",
    role: "Mass Communication, LASU",
    time: "1 week ago",
    content:
      "Got to help draft my first press release during internship today 📝. Honestly feels like what we studied is paying off!",
    likes: 44,
    comments: 9,
    views: 260,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 13,
    name: "Oluwatobi Adebayo",
    role: "Computer Science, FUTMINNA",
    time: "1 week ago",
    content:
      "Not impressed. The company I was posted to doesn’t even have proper internet. How are we supposed to learn anything in 2025 like this? 🤦‍♂️",
    likes: 3,
    comments: 22,
    views: 120,
    avatar: "/api/placeholder/40/40",
  },
];

export const categories = [
  { label: "All", color: "bg-blue-500 text-white" },
  { label: "Success stories(3)", color: "bg-[#1ED8604D] text-black" },
  { label: "Questions(2)", color: "bg-[#F59E0B4D] text-black" },
  { label: "Resource(20)", color: "bg-black text-white" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adebayo Olumide",
    course: "Computer Science",
    university: "University of Lagos",
    avatar: "/avatar.png",
    rating: 5,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 2,
    name: "Isreal Ajayi",
    course: "Microbiology",
    university: "University of Ilorin",
    avatar: "/avatar.png",
    rating: 3,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 3,
    name: "Samuel Alapomeji",
    course: "Computer Science",
    university: "Lagos State University",
    avatar: "/avatar.png",
    rating: 3,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 4,
    name: "Oloko Muqaffa",
    course: "Computer Science",
    university: "Olabisi Onabanjo University",
    avatar: "/avatar.png",
    rating: 5,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 5,
    name: "Precious Akande",
    course: "Computer Science",
    university: "Obafemi Awolowo University",
    avatar: "/avatar.png",
    rating: 5,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
];
