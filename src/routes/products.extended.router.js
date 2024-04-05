import { Router } from "express";
import CustomRouter from "./custom/custom.router.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct
} from "../controllers/products.controller.js";
import { getProducts } from "../controllers/mocking.controller.js";

export default class ProductExtendRouter extends CustomRouter {
  init() {
    this.get('/:id', ["PUBLIC"], async (req, res) => {
      getProductById(req, res)
    });

    this.get('/', ["PUBLIC"], async (req, res) => {
      getAllProducts(req, res)
    });

    this.post('/', ["ADMIN"], async (req, res) => {
      createProduct(req, res)
    });

    this.put('/:id', ["ADMIN"], async (req, res) => {
      updateProduct(req, res)
    });

    this.delete('/:id', ["ADMIN"], async (req, res) => {
      deleteProduct(req, res)
    });

    //this.use('/mockingproducts', mockingRouter);

  }
}
const router = Router();

router.get('/mockingproducts', getProducts);