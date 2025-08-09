// data/products.ts
export interface Product {
    id: number;
    title: string;
    subtitle?: string;
    price: string;
    oldPrice?: string | null;
    imgSrc: string;
    discount?: string | null;
    isNew?: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Syltherine",
        subtitle: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000",
        imgSrc: "/images/products/syltherine.png",
        discount: "-30%",
        isNew: false,
    },
    {
        id: 2,
        title: "Leviosa",
        subtitle: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: null,
        imgSrc: "/images/products/leviosa.png",
        discount: null,
        isNew: false,
    },
    {
        id: 3,
        title: "Lolito",
        subtitle: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        imgSrc: "/images/products/lolito.png",
        discount: "-50%",
        isNew: false,
    },
    {
        id: 4,
        title: "Respira",
        subtitle: "Outdoor bar table and stool",
        price: "Rp 500.000",
        oldPrice: null,
        imgSrc: "/images/products/respira.png",
        discount: null,
        isNew: true,
    },
    {
        id: 5,
        title: "Grifo",
        subtitle: "Night lamp",
        price: "Rp 1.500.000",
        oldPrice: null,
        imgSrc: "/images/products/grifo.png",
        discount: null,
        isNew: false,
    },
    {
        id: 6,
        title: "Muggo",
        subtitle: "Small mug",
        price: "Rp 150.000",
        oldPrice: null,
        imgSrc: "/images/products/muggo.png",
        discount: null,
        isNew: true,
    },
    {
        id: 7,
        title: "Pingky",
        subtitle: "Cute bed set",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000",
        imgSrc: "/images/products/pingky.png",
        discount: "-50%",
        isNew: false,
    },
    {
        id: 8,
        title: "Potty",
        subtitle: "Minimalist flower pot",
        price: "Rp 500.000",
        oldPrice: null,
        imgSrc: "/images/products/potty.png",
        discount: null,
        isNew: true,
    },
];
