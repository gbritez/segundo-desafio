import { Request, Response } from "express"
import Product from "../../models/product.model"
export class ProductsViewController {
    constructor() { }

    GetAll = async (req: Request, res: Response) => {
        try {
            const { limit, order, query } = req.params
            const products = Product.paginate()
        } catch (error) {

        }
    }

    GetById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const products = Product.findById(id)
        } catch (error) {

        }
    }
}