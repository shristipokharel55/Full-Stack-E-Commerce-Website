import Product from "../models/Product.js";


const createProduct = async(data)=>{
    return await Product.create(data);
}

const getAllProduct = async(query = {}) =>{

    const filters = {};
    if (query.brand) filters.brand = {$in:query.brand.split(',')}
    if (query.uses) filters.use = {$in:query.uses.split(',')}

    if(query.ram) {filters.ram={$in:query.ram.split(',').map(n=>parseInt(n))}}
    if(query.rom) {filters.rom={$in:query.rom.split(',').map(r=>parseInt(r))}}
    if(query.gen) {filters.gen={$in:query.gen.split(',').map(g=>parseInt(g))}}
    if(query.product) {filters.productName={$regex:query.product, $options:"i"}}  //kunai pani name alik lamo xa ani kunai aauta word le khojna lai use hunxa regex
    console.log(filters)

    const sort = JSON.parse(query.sort || {"":1}) 

    console.log(sort)
    // console.log(query.brand.split(','))
    // console.log(query.ram.split(',').map(n=>parseInt(n)))
    // return filters

    return await Product.find(filters).sort(sort)  //filter gareko brand ra ram anusar aathawa kei khoje anusar
}

const getProductById = async(id)=>{
    return await Product.findById(id)
}

const deleteProductById = async (id)=>{
    const product = await Product.findOne({_id:id})
    imageName = product.imageName;
    const cloudinaryImg = await cloudinary.uploader.destroy(imageName);
    console.log(cloudinaryImg)
    // if (imageName) {
    //     await cloudinary.uploader.destroy(imageName); // Delete image from Cloudinary
    // }
    return await Product.findByIdAndDelete(id);
}

const updateProduct = async(data, id)=>{
    const product = await Product.findById({_id:id});
    
    if (data.imageName) {
        const oldImageName = product.imageName; // Store old image name for deletion    
        await cloudinary.uploader.destroy(oldImageName); // Delete old image from Cloudinary

        data.imageName = data.newImageName; // Update image name in the product data
    }
    return await Product.findByIdAndUpdate(id, data, {new:true});
}

export default {createProduct, getAllProduct, getProductById, deleteProductById, updateProduct}