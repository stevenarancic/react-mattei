import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import OurService from "./components/our-service";
import ReviewsBlock from "./components/reviews-block";

export default function App() {
    return (
        <div className="bg-light">
            <Header />
            <OurService />
            <ReviewsBlock />
        </div>
    );
}
