export interface BoardSubmission {
    approve: EliteProfile;
    comment: string;
    id: string;
    live: boolean;
    medal: string;
    monkey: any;
    obsolete: boolean;
    platform: any;
    profile: EliteProfile;
    record: number;
    region: any;
    report: any;
    submitted_at: any;
    tas: boolean;
    proof: string;
}

export interface RecentSubmission {
    all_position: number;
    position: number;
    id: string;
    proof: string;
    record: number;
    score: boolean;
    tas: boolean;
    level: EliteLevel;
    profile: EliteProfile;
}

export interface EliteLevel {
    category: string;
    name: string;
    timer_type: string;
    mode: EliteMode;
}

export interface EliteMode {
    game: EliteGameName;
}

export interface EliteGameName {
    name: string;
    abb: string;
}

export interface EliteProfile {
    country: string;
    id: number;
    username: string;
}

export interface EliteGame {
    abb: string;
    custom: boolean;
    download: string;
    live_preference: boolean;
    name: string;
    release_date: string;
    mode: EliteCategory[];
    creator: string; // null for all packs
    game_monkey: any;
    game_platform: any;
    game_region: any;
    game_rule: any[];
    profile: EliteUser[];
}

export interface EliteCategory {
    category: string;
    name: string;
    level: EliteChart[];
}

export interface EliteChart {
    category: string;
    chart_type: string;
    name: string;
    time: number;
    timer_type: string;
}

export interface EliteUser {
    id: number;
    username: string;
    country: string;
}
