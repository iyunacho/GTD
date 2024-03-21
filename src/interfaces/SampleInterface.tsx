export interface SampleInterface {
    id: Date; // id = new Date;
    title: string;
    completed?: boolean;
    project?: string;
    tags?: string[];
    startDate?: Date;
    endDate?: Date;
    flag?: boolean;
}