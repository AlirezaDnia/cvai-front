export interface PersonalInfo {
    first_name: string;
    last_name: string;
    email: string;
    summary: string;
}

export interface Experience {
    role: string;
    company: string;
    highlights: string[];
}

export interface ResumeData {
    personal_info: PersonalInfo;
    experience: Experience[];
    skills: string[];
    education: any[];
    projects: any[];
    languages: any[];
}

export interface Resume {
    id: number;
    title: string;
    slug: string;
    template_id: string;
    ai_optimized: boolean;
    data: ResumeData;
}

export interface OptimizeResponse {
    message: string;
    resume: Resume;
}
