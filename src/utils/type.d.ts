type ClusterDetailType = {
    content: ClusterContentType[];
    date: string;
    location: string;
    name: string;
    price: string;
    id: string;
    image: ClusterImageType;
};

type ClusterContentType = {
    Description: string;
    Judging_criteria: string;
    Rules: string;
    Contact: string;
};

type ClusterImageType = {
    url: string;
    width: number;
    height: number;
};

type ClusterName = {
    id: string;
    name: string;
};
