const mongoose = require('mongoose')

const DishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    dishRating: {
        type: Number,
        required: true
    },
    dishIngredients: {
        type: String,
        required: true
    },
    dishInstructions: {
        type: String,
        required: true
    },
    dateDishCookedOn: {
        type: Date,
        default: Date.now,
        required: true,
    },
    dateDishAdded: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
      }
})

module.exports = mongoose.model('Dish', DishSchema)