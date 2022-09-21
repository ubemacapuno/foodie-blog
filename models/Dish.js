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
        type: Array,
        required: false,
        // default: []
    },
    dishInstructions: {
        type: String,
        required: false,
        default: ""
    },
    dateDishCookedOn: {
        type: Date,
        default: Date,
        required: true,
    },
    dishCuisine: {
        type: String,
        required: false,
    },
    dateDishAdded: {
        type: Date,
        default: Date.now
    },
    dishNotes: {
        type: String,
        required: false,
        default: ""
    },
    userId: {
        type: String,
        required: true
      }
})

module.exports = mongoose.model('Dish', DishSchema)