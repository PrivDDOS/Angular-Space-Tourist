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


export interface CrewJson {
    name: string;
    bio: string;
    role: string;
    images: {
        png: string;
        webp: string;
    };
}

export interface CrewModel {
    crew: CrewJson[]
}