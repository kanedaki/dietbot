'use strict'
const api = require('./index')

console.log('Menu', api.getMenu())
console.log('Recipe', api.getRecipe('www_bbc_co_uk_food_recipes_10minutepizza_87314'))
console.log('List', api.groceryList())
