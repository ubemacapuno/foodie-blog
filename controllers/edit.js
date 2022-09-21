//This conroller will have CRUD operations regarding the "edit" route (get, post, put, delete, etc.)
const Dish = require('../models/Dish')

module.exports = {
    getEdit: async (req,res)=>{
        const id = req.params.id;
        console.log(`req.params.id: ${req.params.id}`)
        console.log(req.user)
        try{
            const dishesItems = await Dish.find({userId:req.user.id})
            res.render('edit.ejs', {dishes: dishesItems, user: req.user, idDish: id})
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
    },

    updateTask: (req, res) => {
        const id = req.params.id;
        Dish.findByIdAndUpdate(//mongoose method
            id,
            {
                dishName: req.body.dishName,
                dishRating: req.body.dishRating,
                dishIngredients: req.body.dishIngredients,
                dishInstructions: req.body.dishInstructions,
                dateDishCookedOn: req.body.dateDishCookedOn,
                dishCuisine: req.body.dishCuisine,
                dishNotes: req.body.dishNotes,
                userId: req.user.id,
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/edit");
            })
        }
}