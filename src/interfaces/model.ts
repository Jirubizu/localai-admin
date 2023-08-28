export interface Params {
    [key: string]: string;
}
export interface File {
    filename: string;
    sha256: string;
    uri: string;
}

export interface Gallery {
    url: string;
    name: string;
}

export interface Model {
    url: string;
    name: string;
    urls: string[];
    tags: string[];
    overrides: Params;
    files: File[];
    gallery: Gallery;
}