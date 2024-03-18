import IPrototype from "./prototype";

export default class Product implements IPrototype {
    public productId: string;
    public selectedSize: string;
    public selectedColor: string;
    public quantity: number;
    constructor(productId: string, selectedSize: string, selectedColor: string, quantity: number) {
        this.productId = productId;
        this.selectedSize = selectedSize;
        this.selectedColor = selectedColor;
        this.quantity = quantity;
    }
    clone(): Product {
        return new Product(this.productId, this.selectedSize, this.selectedColor, this.quantity);
    }

}