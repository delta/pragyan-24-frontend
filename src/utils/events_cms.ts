/* eslint-disable */
import axios from 'axios';
import { CMS_URL } from '@/config/config';

export const getClusterDetails = async (id: number) => {
    let res = await axios.get(
        `${CMS_URL}/api/clusters/${id}?populate[Cluster_Details][populate][Events][populate]=*`,
    );
    let detail = res.data.data;
    //@ts-ignore
    let details: any = [];
    detail = detail.attributes.Cluster_Details;
    let events = detail.Events;
    //@ts-ignore
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

export const getClusterNames = async () => {
    let res = await axios.get(`${CMS_URL}/api/clusters?populate=*`);
    let detailArray = res.data.data;
    //@ts-ignore
    let details: any = [];
    // eslint-disable @typescript-eslint/ban-ts-comment
    //@ts-ignore
    detailArray.forEach((data: any) => {
        let detail = data.attributes.Cluster_Details;
        details.push({ name: detail.Cluster_Name, id: data.id });
    });

    return details;
};

export const getGallery = async () => {
    let res = await axios.get(`${CMS_URL}/api/galleries?populate=*`);
    let detailArray = res.data.data;
    //@ts-ignore
    let details: any = [];
    // eslint-disable @typescript-eslint/ban-ts-comment
    //@ts-ignore
    detailArray.forEach((data: any) => {
        let detail = data.attributes.gallery;
        let dummy = detail.data[0].attributes;
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
