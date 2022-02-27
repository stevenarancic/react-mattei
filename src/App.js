import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import OurService from "./components/our-service-block";
import ReviewsBlock from "./components/reviews-block";
import ImageHistoryRow from "./components/image-history-row";
import Footer from "./components/footer";
import ProductsBlock from "./components/products-block";

export default function App() {
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
