import { Message } from 'app/models/message.model';

export class Communication {
    identify: Message;
    freq_req: Message;
    freq_rep: Message;
    verify: Message;
    active_gi: Message;
}
