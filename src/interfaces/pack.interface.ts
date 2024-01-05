export interface Pack {
    name: string;
    fullname: string;
    srcname: string;
    creator: string;
    download: string;
    video: string;
    image: string;
    ilsheet: string;
    srcpage: string;
    description: string;
    sheetid: string;
    release: string;
    stagecount: StageCount;
    pracModCompatible: PracmodCompatible;
    gameId: string;
    elite: string;
}

export interface StageCount {
    [key: string]: number;
}

export interface PackAlias {
    alias: string;
    real: string;
}

// export interface Pack {
//     // name
//     name: string;
//     // abbrName: string;

//     // credits
//     // organizers: string[];
//     creators: string[];

//     // links
//     // download: string;
//     // video: string,
//     // image: string,
//     // records: string,

//     // metadata
//     // description: string;
//     // gameId: string;
//     // pracmod: PracmodCompatible;
// }

export enum PracmodCompatible {
    YES = 0, // is compatible with 1.0.1
    NO = 1, // is not compatible and does not have it built-in
    BUILT_IN = 2, // has an older version of the mod built-in to the iso
    UNKNOWN = 3,
}
