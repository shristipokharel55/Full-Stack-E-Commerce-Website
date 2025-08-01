// Import product service that contains the business logic
import productServices from "../services/productServices.js";

// Controller to create a new product
const createProduct = async (req, res) => {

    try {

        if(!req.file){
            throw new Error("Image is required");
        }

        const {productName, description, display, ram, gen, rom, brand, use, price, stock, featured, isActive, rating, processor} = req.body;

        

        const productInfo = await productServices.createProduct(req.body)
        res.send (productInfo);

        

        const filePath = req.file.path; // Get the file path from the uploaded file
        const fileName = req.file.filename; // Get the file name from the uploaded file


        const product = req.body; // Get product data from request body

        product.imageUrl = filePath; // Add file path to product data
        product.imageName = fileName; // Add file name to product data

        // Check if product data is provided
        if (!product) {
            return res.status(400).send("Product required");
        }

        // Check if price field is provided
        if (!product.price) {
            return res.status(400).send("price is required");
        }

        // Call service to create the product
        const data = await productServices.createProduct(product);

        // Return success response with created product data
        res.status(200).json({
            message: "product created successful",
            data
        });
    } catch (error) {
        console.log(error.message);
        res.status(501).send(error.message);
    }
};

// Controller to fetch all products (supports query params for filtering/pagination)
const getAllProduct = async (req, res) => {
    try {
        console.log(req.query); // Log query params for debugging

        // Call service to get all products based on query
        const data = await productServices.getAllProduct(req.query);

        // Return success response with all products
        res.status(200).json({
            message: "All product fetched",
            data
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Error occured to fetch all the product");
    }
};

// Controller to fetch a single product by its ID
const getProductById = async (req, res) => {
    try {
        // Check if ID is provided
        if (!req.params.id) {
            return new Error('Id is required');
        }

        const id = req.params.id;

        // Call service to fetch product by ID
        const data = await productServices.getProductById(id);

        // Return success response with the product data
        res.status(200).json({
            message: "product fetch successful",
            data
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send("error occured to get product");
    }
};

// Controller to delete a product by its ID
const deleteProductById = async (req, res) => {
    try {
        // Check if ID is provided
        if (!req.params.id) {
            return new Error('Id is required');
        }

        const id = req.params.id;

        // Call service to delete product by ID
        const data = await productServices.deleteProductById(id);

        // Return success response
        res.status(200).json({
            message: "product delete successful"
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send("error occured to delete product");
    }
};

// Controller to update a product by its ID
const updateProduct = async (req, res) => {
    try {

        if(!req.file){
            throw new Error("Image is required");
        }
        console.log(req.file);

        if(req.file){
            const newFilePath = req.file.path; // Get the file path from the uploaded file
            const newFileName = req.file.filename; // Get the file name from the uploaded file
            req.body.newImageName = newFileName; // Add file name to product data
            req.body.newImagePath = newFilePath; // Add file path to product data
        }

        const id = req.params.id;       // Get product ID from URL params
        const product = req.body;       // Get updated product data from request body

        // Call service to update product
        const data = await productServices.updateProduct(product, id);

        // Return success response with updated product
        res.status(200).json({
            message: "Product update successful",
            data
        });
    } catch (error) {
        console.log(error.message);
        res.send(400).json({
            message: "error occured",
            error: error.message
        });
    }
};

// Export all controller functions for use in routes
export {
    createProduct, deleteProductById, getAllProduct,
    getProductById, updateProduct
};

