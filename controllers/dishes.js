const Dish = require('../models/Dish')

module.exports = {
    getDishes: async (req,res)=>{
        console.log(req.user)
        try{
            const dishesItems = await Dish.find({userId:req.user.id})
            const dishesTotal = await Dish.countDocuments({userId:req.user.id})
            res.render('dishes.ejs', {dishes: dishesItems, total: dishesTotal, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

    createDishes: async (req, res)=>{
        try{
            await Dish.create(
                {
                    dishName: req.body.dishName,
                    dishRating: req.body.dishRating,
                    dishIngredients: req.body.dishIngredients,
                    dishInstructions: req.body.dishInstructions,
                    dateDishCookedOn: req.body.dateDishCookedOn,
                    dishCuisine: req.body.dishCuisine,
                    dishNotes: req.body.dishNotes,
                    userId: req.user.id,
                })
            console.log(`${req.user.userName} - Dish has been added!`)
            res.redirect('/dishes')
        }catch(err){
            console.log(err)
        }
    },

    deleteDish: async (req, res)=>{
        console.log("You have reached controller for deleteDish")
        console.log(req.body.dishIdFromJSFile)
        try{
            await Dish.findOneAndDelete({_id:req.body.dishIdFromJSFile})
            console.log('Deleted Dish')
            res.json('Deleted Dish')
        }catch(err){
            console.log(err)
        }
    }
} 
