import { LoggerService } from "./services/logger";
import NotificationService from "./services/notification";
import * as Utility from "./utility";

declare const window: any;

export class Application {

    public static title: string = "Pendoria Push Notifications";
    public static version: string = "0.1.0-alpha";

    public static initialize (): void {

        LoggerService.log(`Initializing ${Application.title} v${Application.version}`);

        window.socket.on("message", Application.onChatMessage);

    }

    private static async onChatMessage (...args: any): Promise<void> {

        let channel = args[1];

        const message = args[0];
        const id = args[3];

        if (await document.hasFocus()) return;
        if (Number(id) === 0) return;
        if (channel === "/global") return;

        if (channel.startsWith("guild/")) channel = "/guild";
        if (channel.startsWith("/")) channel = Utility.capitalizeString(message);

        const element = window.document.createElement("div");
        element.innerHTML = message;

        channel = `Pendoria: ${channel}`;
        const text = element.textContent;

        NotificationService.notify(channel, text).then(() => {
            // TODO: Something?
        });

    }

}
