import { Communication } from 'app/models/communication.model';
import { GlobalIceberg } from 'app/models/global-iceberg.model';

export class Algorithm {
    name: string;
    precision: number;
    recall: number;
    communication: Communication;
    detected: GlobalIceberg[];
}
