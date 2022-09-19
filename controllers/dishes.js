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
            await Dishes.create({dishes: req.body.dishesItem, userId: req.user.id})
            console.log('Dishhas been added!')
            res.redirect('/dishes')
        }catch(err){
            console.log(err)
        }
    }
}
