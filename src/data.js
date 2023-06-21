import productOne from "./assets/images/image-product-1.jpg";
import productTwo from "./assets/images/image-product-2.jpg";
import productThree from "./assets/images/image-product-3.jpg";
import productFour from "./assets/images/image-product-4.jpg";
import productOneThumbnail from "./assets/images/image-product-1-thumbnail.jpg";
import productTwoThumbnail from "./assets/images/image-product-2-thumbnail.jpg";
import productThreeThumbnail from "./assets/images/image-product-3-thumbnail.jpg";
import productFourThumbnail from "./assets/images/image-product-4-thumbnail.jpg";
export const navLinks = [
    { id: 1, text: "Collections", url: "/collections" },
    { id: 2, text: "Men", url: "/men" },
    { id: 3, text: "Women", url: "/women" },
    { id: 4, text: "About", url: "/about" },
    { id: 5, text: "Contact", url: "/contact" },
];

export const products = [
    {
        id: 0,
        product: productOne,
        thumbnail: productOneThumbnail,
        name: "product one",
    },
    {
        id: 1,
        product: productTwo,
        thumbnail: productTwoThumbnail,
        name: "product two",
    },
    {
        id: 2,
        product: productThree,
        thumbnail: productThreeThumbnail,
        name: "product three",
    },
    {
        id: 3,
        product: productFour,
        thumbnail: productFourThumbnail,
        name: "product four",
    },
];

export const product = {
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    fullPrice: 250,
    finalPrice: 125,
    discount: 50,
};
