type SlideImage = {
    height: number;
    width: number;
    url: string;
};

interface SlidePropDetails {
    id: number;
    content: string[];
    name: string;
    image: SlideImage;
    date: string;
    location: string;
    price: string;
    is_online_event: boolean;
    online_event_link: string;
}

interface SlideDataProps {
    details: SlidePropDetails;
}
