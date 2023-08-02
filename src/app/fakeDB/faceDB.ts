import { Observable, delay, of } from "rxjs";
import ProductCard from "../models/productCard.model";
import homePageSlide from "../models/homePageSlide.model";

class FakeDB {
    constructor() {

    }
    public GetProductCardInfos(): Observable<ProductCard[]> {
        return of(
            [
                new ProductCard(1,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 1.png", false, false, null, null),
                new ProductCard(2,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 2.png", false, true, 30, 3000000),
                new ProductCard(3,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 3.png", true, false, null, null),
                new ProductCard(4,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 4.png", false, false, null, null),
                new ProductCard(5,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 9.png", false, false, null, null),
                new ProductCard(6,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 6.png", false, false, null, null),
                new ProductCard(7,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 7.png", false, false, null, null),
                new ProductCard(8,"Syltherine", "Stylish cafe chair", 2500000, "/assets/images/fakeDBImages/image 8.png", false, false, null, null),
            ]
        ).pipe(delay(1000));
    }
    public GetTotalResultsNumber(): Observable<number>{
        return of(
            129
        )
        .pipe(
            delay(1000)
        )
    }
    public GetHomePageSlides(): Observable<homePageSlide[]> {
        return of(
            [
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    }),
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    }),
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    }),
                new homePageSlide(
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/Rectangle 25.png',
                        link: undefined
                    },
                    {
                        imageUrl: '/assets/images/fakeDBImages/homeSlider/S Rectangle 24.png',
                        roomType: 'Bed Room',
                        title: 'Inner Peace',
                        link: undefined,
                    })

            ]
        ).pipe(delay(1000))
    }
}


export const fakeDB: FakeDB = new FakeDB();
