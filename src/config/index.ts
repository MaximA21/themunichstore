export const PRODUCT_CATEGORIES = [
    {
        label: "Food",
        value: "food" as const,
        featured: [
            {
                name: "Editors picks",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ]
    },
    {
        label: "Souvenirs",
        value: "souvenirs" as const,
        featured: [
            {
                name: "Favorite Icon Picks",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ]
    },

]