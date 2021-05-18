//  单例模式

class Singleton {
    private static instance: Singleton = null;
    constructor() { }
    public static getInstance(): Singleton {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
Singleton.getInstance();