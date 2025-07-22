import { Macro } from "./Macro";

export interface BroadcastDTO{
    status: string;
    time_started: string;
    macros_running: [Macro]
}
