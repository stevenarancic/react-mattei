import React from "react";
import Header from "../components/header";
import OurService from "../components/our-service-block";
import ReviewsBlock from "../components/reviews-block";
import ImageHistoryRow from "../components/image-history-row";
import Footer from "../components/footer";
import ProductsBlock from "../components/products-block";
import CompanyProvidersBlock from "../components/company-providers-block";
import { DeliveryBlock } from "../components/delivery-block";

export default function Home() {
    return (
        <div className="bg-light">
            <Header />
            <OurService />
            <ReviewsBlock />
            <ImageHistoryRow />
            <ProductsBlock />
            <CompanyProvidersBlock />
            <Footer />
        </div>
    );
}
