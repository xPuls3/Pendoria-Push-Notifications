export default class NotificationService {

    private static hasPermission (): Promise<boolean> {

        return new Promise(function (resolve) {

            if (!("Notification" in window)) return resolve(false);
            if (window.Notification.permission === "granted") return resolve(true);

            window.Notification.requestPermission().then(function (permission: NotificationPermission) {
                return resolve((permission === "granted"));
            });

        });

    }

    public static async notify (title: string, text: string): Promise<void> {

        const hasPermission = await NotificationService.hasPermission();
        if (hasPermission === false) return;

        const popup = new window.Notification(title, {
            icon: "/images/favicon.ico",
            body: text,
        });

        popup.onclick = function () {
            window.focus();
        };

    }

}
