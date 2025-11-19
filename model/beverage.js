class Beverage {
    constructor(name, producer, yob, quantity, alcohol){
        this.name = name;
        this.producer = producer;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;
    }

    toString(){
        return "Name: " + this.name + "\n" +
               "Producer: " + this.producer + "\n" +
               "Year of bottling: " + this.yob +
               "Quantity: " + this.quantity + "\n" +
               "Alcohol percentage: " + this.alcohol;
    }
}