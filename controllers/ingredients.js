//This conroller will have CRUD operations regarding the ingredients route:
const Dish = require('../models/Dish')

module.exports = {
    getIngredients: async (req,res)=>{
        const id = req.params.id;
        console.log(`req.params.id: ${req.params.id}`)
        console.log(req.user)
        try{
            const dishesItems = await Dish.find({userId:req.user.id})
            res.render('ingredients.ejs', {dishes: dishesItems, user: req.user, idDish: id})
        }catch(err){
            console.log(err)
        }
    },

    addIngredients: async (req, res)=>{
        const id = req.params.id;
        console.log(`DEBUG ${req.body.dishName}`)
        try{
            await Dish.updateOne(
                { _id: id},
                {
                    $push: { dishIngredients: req.body.dishIngredients}
                }),
                console.log(`${req.user.userName} - addIngredients Controller, added ingredient ${req.body.dishName}`)
                res.redirect(`/ingredients/${id}`)
        }catch(err){
            console.log(err)
        }
    },

    resetIngredients: async (req, res)=>{
        const id = req.params.id;
        console.log(`DEBUG ${req.body.dishName}`)
        try{
            await Dish.findByIdAndUpdate(
                id,
                {
                    dishIngredients: []
                }),
                console.log(`resetIngredients Controller, reset to ['']`)
                res.redirect(`/ingredients/${id}`)
        }catch(err){
            console.log(err)
        }
    },

    // WORK IN PROGRESS!
    removeIngredients: async (req, res)=>{
        const id = req.params.id;
        console.log(`DEBUG ${req.body.dishName}`)
        try{
            await Dish.updateOne(
                { _id: id},
                {
                    $pull: { dishIngredients: [`${req.body.dishIngredients}`]}
                }),
                console.log(`${req.user.userName} - addIngredients Controller, added ingredient ${req.body.dishName}`)
                res.redirect(`/ingredients/${id}`)
        }catch(err){
            console.log(err)
        }
    },
}