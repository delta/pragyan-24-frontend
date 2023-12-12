import axios from 'axios';
import { CMS_URL } from '@/config/config';

export const getClusterDetails = async (id: number) => {
    const res = await axios.get(
        `${CMS_URL}/api/clusters/${id}?populate[Cluster_Details][populate][Events][populate]=*`,
    );
    let detail = res.data.data;
    const details: ClusterDetailType[] = [];
    detail = detail.attributes.Cluster_Details;
    const events = detail.Events;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    events.forEach((content: any) => {
        details.push({
            content: [
                content.Description,
                content.Judging_criteria,
                content.Rules,
                content.Contact,
            ],
            date: content.date,
            location: content.location,
            name: content.name,
            price: content.price_money,
            id: content.id,
            image: content.Image.data?.attributes,
        });
    });
    return details;
};

export const getGallery = async () => {
    const res = await axios.get(`${CMS_URL}/api/galleries?populate=*`);
    const detailArray = res.data.data;
    const details: GalleryType[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detailArray.forEach((data: any) => {
        const detail = data.attributes.gallery;
        const dummy = detail.data[0].attributes;
        details.push({
            url: dummy.url,
            width: dummy.width,
            height: dummy.height,
            eventId: data.attributes.Event_ID,
            eventName: data.attributes.Event_Name,
        });
    });
    return details;
};

export const getClusterNames = async () => {
    const res = await axios.get(`${CMS_URL}/api/clusters?populate=*`);
    const detailArray = res.data.data;
    const details: ClusterName[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detailArray.forEach((data: any) => {
        const detail = data.attributes.Cluster_Details;
        details.push({ name: detail.Cluster_Name, id: data.id });
    });

    return details;
};
