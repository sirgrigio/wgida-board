import { Stream } from "app/models/stream.model";
import { Config } from "app/models/config.model";
import { Algorithm } from "app/models/algorithm.model";
import { GlobalIceberg } from "app/models/global-iceberg.model";

export class Simulation {
    config: Config;
    stream: Stream;
    generated: GlobalIceberg[];
    van: Algorithm;
    sim: Algorithm;
    spl: Algorithm;
    per: Algorithm;
}
