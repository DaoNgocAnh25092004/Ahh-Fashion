import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Image from "~/components/Image";
import image3 from '~/assets/images/img3.jpg';
import image4 from '~/assets/images/img4.jpg';
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles)
const products = [
    {
        id: 1,
        name: 'Outerty Club Tee / Connoli Cream',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '177.000₫',
        originalPrice: '380.000₫',
        discount: '-53%',
        inStock: true
    },
    {
        id: 2,
        name: 'Outerty Billiard Club Tee / Black',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '177.000₫',
        originalPrice: '380.000₫',
        discount: null,
        inStock: false
    },
    {
        id: 3,
        name: 'Outerty Self Love Tee / Cream',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '193.000₫',
        originalPrice: '380.000₫',
        discount: '-49%',
        inStock: true
    },
    {
        id: 4,
        name: 'Outerty Self Love Tee / Black',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '193.000₫',
        originalPrice: '380.000₫',
        discount: '-49%',
        inStock: true
    },
    {
        id: 5,
        name: 'Outerty Bunnies / Red',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '187.000₫',
        originalPrice: '380.000₫',
        discount: '-51%',
        inStock: true
    },
    {
        id: 6,
        name: 'Outerty Bunnies Tee / Black',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '187.000₫',
        originalPrice: '380.000₫',
        discount: '-51%',
        inStock: true
    },
    {
        id: 7,
        name: 'Outerty Bunnies Tee / Cream',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '187.000₫',
        originalPrice: '380.000₫',
        discount: '-51%',
        inStock: true
    },
    {
        id: 8,
        name: 'Outerty Rhythm Tee / Pastel Pink',
        defaultImage: image4,
        hoverImage: image3,
        salePrice: '183.000₫',
        originalPrice: '380.000₫',
        discount: '-52%',
        inStock: true
    }
];
function Home() {
    return <div>Home</div>;
}

export default Home;
