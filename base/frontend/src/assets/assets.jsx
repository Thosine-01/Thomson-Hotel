import hero_img from '../assets/images/Hero_image.jpg'
import hero_about_img from '../assets/images/hero_about.jpg'  
import hero_room_img from '../assets/images/room_image.jpg'      
import about_1 from '../assets/images/Site1.jpg'
import about_2 from '../assets/images/site2.jpg'
import standard from '../assets/images/Standard.jpg'
import deluxe from '../assets/images/deluxe.jpg'
import executive from '../assets/images/exclusive.jpg'
import room_service from '../assets/images/icons8-room-service-80.png'
import fitness from '../assets/images/icons8-fitness-80.png'
import protect from '../assets/images/icons8-protect-80.png'
import buffet from '../assets/images/icons8-buffet-breakfast-80.png'
import red_carpet from '../assets/images/icons8-red-carpet-80.png'
import spa from '../assets/images/icons8-spa-80.png'
import { BedDouble } from 'lucide-react'
import { BedSingle } from 'lucide-react';
import { Bath } from 'lucide-react';
import { Users } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import guest_img from '../assets/images/guest.jpg'

import { ShieldUser } from 'lucide-react';


export const assets = {
    hero_img,
    hero_about_img,
    hero_room_img,
    guest_img,
    about_1,
    about_2,
    standard,
    deluxe,
    executive,
    room_service,
    fitness,
    protect,
    buffet,
    red_carpet,
    spa
}

export const rooomType = {
            id: 1,
        name: "Tom_Son Standard Room",
        description: "A spacious room with a king-sized bed and a beautiful view.",
        price: 100.00,
        image: assets.standard,
        feature: [
            "King-sized bed",
            "Ocean view",
            "Free Wi-Fi"
        ]
}

export const roomType = [
    {
        id: 1,
        name: "Standard Room",
        description: "A spacious room with a king-sized bed and a beautiful view.",
        price: 100.00,
        image: assets.standard,
        feature: [
            "King-sized bed",
            "Ocean view",
            "Free Wi-Fi"
        ]
    },
    {
        id: 2,
        name: "Deluxe Suite",
        description: "A luxurious suite with a separate living area and premium amenities.",
        price: 150.00,
        image: assets.deluxe,
        feature: [
            "Separate living area",
            "Ocean view",
            "Free Wi-Fi",
            "Mini bar"
        ]
    },
    {
        id: 3,
        name: "Executive Suite",
        description: "A luxurious suite with a separate living area and premium amenities.",
        price: 200.00,
        image: assets.executive,
        feature: [
            "Separate living area",
            "Ocean view",
            "Free Wi-Fi",
            "Mini bar"
        ]
    }
]

export const Rooms_type_Card = [
    {
        id: 1,
        name: "Standard Room",
        description: "A luxurious suite with a separate living area and premium amenities.",
        price: 200.00,
        image: assets.standard,
        feature: [
            {
                id: 1, name: "2 Persons", icon: <Users />
            },
            {
                id: 2, name: "1 single bed", icon: <BedSingle />
            },
            {
                id: 3, name: "1 bath", icon: <Bath />
            }
        ]
    },
    {
        id: 2,
        name: "deluxe Room",
        description: "A luxurious suite with a separate living area and premium amenities.",
        price: 200.00,
        image: assets.deluxe,
        feature: [
            {
                id: 1, name: "2 Persons", icon: <Users />
            },
            {
                id: 2, name: "1 single bed", icon: <BedDouble />
            },
            {
                id: 3, name: "1 bath", icon: <Bath />
            }
        ]
    },
    {
        id: 3,
        name: "executive Room",
        description: "A luxurious suite with a separate living area and premium amenities.",
        price: 200.00,
        image: assets.executive,
        feature: [
            {
                id: 1, name: "2 Persons", icon: <Users />
            },
            {
                id: 2, name: "1 single bed", icon: <BedDouble />
            },
            {
                id: 3, name: "1 bath", icon: <Bath />
            },
            {
                id: 4, name: "Room Service", icon: <HandPlatter />
            }
        ]
    }
]

export const services = [
    {
        id: 1,
        name: "Room Service",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi placeat animi optio, excepturi veritatis porro natus eum nemo autem!",
        image: assets.room_service
    },
    {
        id: 2,
        name: "Security",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi placeat animi optio, excepturi veritatis porro natus eum nemo autem!",
        image: assets.protect
    },
    {
        id: 3,
        name: "Buffet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi placeat animi optio, excepturi veritatis porro natus eum nemo autem!",
        image: assets.buffet
    },
    {
        id: 4,
        name: "Event Center",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi placeat animi optio, excepturi veritatis porro natus eum nemo autem!",
        image: assets.red_carpet
    },
    {
        id: 5,
        name: "Spa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi placeat animi optio, excepturi veritatis porro natus eum nemo autem!",
        image: assets.spa
    },
    {
        id: 6,
        name: "Gym & Fitness",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi placeat animi optio, excepturi veritatis porro natus eum nemo autem!",
        image: assets.fitness
    }
]

export const testimonials = [
  {
    name: "mindcycle001",
    username: "@mindcycle001",
    category: "Customer Support",
    review: "Simply amazing support... TOP Seller in terms of support... Thanks a lot... I will keep buying your products... amazing work... bug free... thanks a lot...",
    rating: 5,
  },
  {
    name: "The4",
    username: "@The4",
    category: "Design Quality",
    review: "The product is of good quality and easy to use, We are also the author on Envato and our requirement is very high, Affordable and excellent work...",
    rating: 5,
  },
  {
    name: "wimm-x",
    username: "@wimm-x",
    category: "Design Quality",
    review: "The configuration of the contact form was problematic, but the support of the Rainbow team helped a lot. That convinced me! Thanks!",
    rating: 5,
  },
  {
    name: "invariantusername",
    username: "@invariantusername",
    category: "Customizability",
    review: "Finally a theme that's actually coded PRACTICALLY and CLEARLY by a normal developer. Are you used to normal react development? Then this..",
    rating: 5,
  }
];