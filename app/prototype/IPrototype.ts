import Product from "./product";

export default interface IPrototype {
    clone(): Product;
}