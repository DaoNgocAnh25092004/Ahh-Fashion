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
    const [hoverProduct, setHoverProduct] = useState(null);
    return (
        <div className={cx('products-collection')}>
            <h1 className={cx('products-title')}>DOUBLE TEE COLLECTION</h1>
            <div className={cx('products-grid')}>
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className={cx('product-item')}
                                onMouseEnter={() => setHoverProduct(product.id)}
                                onMouseLeave={() => setHoverProduct(null)}>
                                <div className={cx('product-img-container')}>
                                    {/* <Image className={cx('product-img ') + (hoverProduct === product.id ? 'hidden' : 'visible')}
                                        src={hoverProduct === product.id ? product.hoverImage : product.defaultImage}
                                        alt={product.name} /> */}

                                    <Image className={cx('product-img', { 'hidden': hoverProduct === product.id })}
                                        src={product.defaultImage}
                                        alt={product.name} />
                                    <Image className={cx('product-img', { 'visible': hoverProduct === product.id })}
                                        src={product.hoverImage}
                                        alt={product.name} />

                                    {product.discount && <div className={cx('product-discount')}>{product.discount}</div>}
                                    {!product.inStock && <div className={cx('product-stock')}>{product.inStock ? null : 'Hết Hàng'}</div>}
                                </div>
                                <div className={cx('product-detail')}>
                                    <div className={cx('product-name')}>{product.name}</div>
                                    <div className={cx('product-price')}>
                                        <div className={cx('sale-price')}>{product.salePrice}</div>
                                        <div className={cx('origin-price')}>{product.originalPrice}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={cx('view-more')}>
                <Button primary >Xem Thêm</Button>
            </div>
        </div>
    )

}

export default Home;
