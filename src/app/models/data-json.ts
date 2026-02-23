/* Models for DESTINATION component */
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

/* Models for CREW component */

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

/* Models for TECHNOLOGY component */

export interface TechJson {
    name: string;
    description: string;
    images: {
        portrait: string;
        landscape: string
    }
}

export interface TechModel {
    technology: TechJson[]
}