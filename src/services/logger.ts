import { RegistryService } from "./registry";

export class LoggerService {

    public static log (...params: any): void {
        if (RegistryService.getItem("logging") === false) return;
        console.log(...params);
    }

}
