const slugify = require('slugify');
const categoryModel = require('./../models/category.model');

/**
 * Store new one category into database
 * @param {json} dataCategory 
 */
let addNewCategory = async (dataCategory) => {
    let category = await categoryModel.findByName(dataCategory.c_name);

    if (category) {
       return { message: 'CATEGORY_EXISTS' };
    }

    dataCategory = {
        ...dataCategory,
        c_slug: slugify(dataCategory.c_name)
    }

    let addNewCate = await categoryModel.addNewCategory(dataCategory);

    return { message: 'SUCCESS', data: addNewCate };
}

/**
 * Get all category
 */
let getAllCategory = async () => {
    let allCate = await categoryModel.getAllCategory();

    return { message: 'SUCCESS', data: allCate };
}

/**
 * Get category by id
 * @param {string} id 
 */
let getByIdCategory = async (id) => {
    let cate = await categoryModel.getByIdCategory(id);

    if (!cate) {
        return { message:'CATEGORY_NOT_FOUND' };
    }

    return { message: 'SUCCESS', data: cate };
}

/**
 * Update category
 * @param {string} id 
 * @param {json} itemCate 
 */
let updateCategory = async (id, itemCate) => {
    let cate = await categoryModel.getByIdCategory(id);

    if (!cate) {
        return { message: 'CATEGORY_NOT_FOUND' };
    }

    let updateCate = await categoryModel.updateCategory(id, itemCate);

    return { message: 'SUCCESS' };
}

/**
 * Delete category by id
 * @param {string} id 
 */
let deleteByIdCategory = async (id) => {
    let cate = await categoryModel.deleteByIdCategory(id);

    if (!cate) {
        return { message: 'CATEGORY_NOT_FOUND' };
    }
    
    return { message: 'SUCCESS' };
}

module.exports = {
    addNewCategory,
    getAllCategory,
    getByIdCategory,
    deleteByIdCategory,
    updateCategory
}