const filterService = require('./../services/filter.service');

let filterPrice = async (req, res) => {
    try {
        // console.log(req.params.id);
        let cateId = req.params.id;
        let range = req.body.range;
        let products = await filterService.filterPrice(cateId, range);

        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    filterPrice
}
