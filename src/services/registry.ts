export class RegistryService {

    private static database: any = {};

    public static setItem (key: string, value: any): void {
        RegistryService.database[key] = value;
    }

    public static hasItem (key: string): boolean {
        return Object.prototype.hasOwnProperty.call(RegistryService.database, key);
    }

    public static toggleItem (key: string): void {
        if (!RegistryService.hasItem(key)) return;
        const value = RegistryService.database[key];
        if (value !== false && value !== true) return;
        RegistryService.database[key] = !(value);
    }

    public static getItem (key: string): any {
        if (!RegistryService.hasItem(key)) return null;
        return RegistryService.database[key];
    }

}
