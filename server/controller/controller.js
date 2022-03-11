const model = require('../models/model.js');


function create_Categories(req,res){
    const Create = new model.Categories({
        type: "Savings",
        color: "black",
    })
    Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error while creating Categories${err}`})
    });
}

module.exports = {
    create_Categories
}