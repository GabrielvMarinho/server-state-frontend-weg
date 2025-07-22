import { Macro } from "./Macro";

export interface BroadcastDTO{
    status: string;
    macros_running: [Macro]
}
