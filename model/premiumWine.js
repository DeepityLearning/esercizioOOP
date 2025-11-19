class PremiumWine extends Wine {
    constructor(name, producer, yob, quantity, alcohol, type, color, vite, location, certification){
        super (name, producer, yob, quantity, alcohol, type, color, vite, location)
        this.certification = certification;
    }
}