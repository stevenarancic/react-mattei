import React from "react";
import Header from "./header";
import OurService from "./our-service-block";
import ReviewsBlock from "./reviews-block";
import ImageHistoryRow from "./image-history-row";
import Footer from "./footer";
import ProductsBlock from "./products-block";

export default function Home() {
    return (
        <div className="bg-light">
            <Header />
            <OurService />
            <ReviewsBlock />
            <ImageHistoryRow />
            <ProductsBlock />
            <Footer />
        </div>
    );
}
