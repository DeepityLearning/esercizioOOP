class Wine extends Beer {
    constructor(name, producer, yob, quantity, alcohol, type, color, vite, location){
        super(name, producer, yob, quantity, alcohol, type, color);
        this.vite = vite;
        this.location = location;
    }
}