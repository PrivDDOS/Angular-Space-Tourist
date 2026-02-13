export interface DesJson {
    name: string;
    description: string;
    distance: string;
    travel: string;
    images: {
        png: string;
        webp: string;
    };
}

export interface DestinationModel {
    destinations: DesJson[];
}
