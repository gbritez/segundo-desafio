import { Request, Response } from "express"
import Product from "../../models/product.model"
export class ProductsViewController {
    constructor() { }

    GetAll = async (req: Request, res: Response) => {
        const { limit = 10, sort, page = 1, ...query } = req.params as { limit?: number; sort?: string; page?: number };
        let sortOptions = {}
        if (sort) {
            if (sort === 'asc') {
                sortOptions = { price: 1 };
            } else if (sort === 'desc') {
                sortOptions = { price: -1 };
            }
        }
        try {
            const products = await Product.paginate(query, { page, limit, sort: sortOptions, lean: true })
            console.log(products)
            res.render('home', { products })
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