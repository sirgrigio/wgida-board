import { Stream } from "app/models/stream.model";
import { Config } from "app/models/config.model";
import { Algorithm } from "app/models/algorithm.model";

export class Simulation {
    config: Config;
    stream: Stream;
    van: Algorithm;
    sim: Algorithm;
    spl: Algorithm;
    per: Algorithm;
}
