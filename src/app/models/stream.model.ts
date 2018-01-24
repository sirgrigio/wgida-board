import { Distribution } from "app/models/distribution.model";

export class Stream {
    size: number;
    shift: number;
    filename: string;
    distributions: Distribution[];
}
