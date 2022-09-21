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
        try{
            await Dish.findByIdAndUpdate(id,
                {
                    $push: { "dishIngredients": req.body.dishIngredients}
                }),
                console.log(`${req.user.userName} - addIngredients Controller.`)
                res.redirect('/dishes')
        }catch(err){
            console.log(err)
        }
    },
}