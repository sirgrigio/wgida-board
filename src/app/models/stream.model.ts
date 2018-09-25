import { Distribution } from 'app/models/distribution.model';

export class Stream {
    type: string;
    size: number;
    shift: number;
    filename: string;
    distributions: Distribution[];
}
