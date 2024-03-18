import Product from "./Product";

export default interface IPrototype {
    clone(): Product;
}