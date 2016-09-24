'use strict'
const recipes = require('./recipes')

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function getMenu() {
  const allRecipesIds = Object.keys(recipes)
  const randomIndex = getRandom(0, allRecipesIds.length)
  const recipesIds = allRecipesIds.slice(randomIndex, randomIndex + 21)
  return recipesIds.map(id => recipes[id])
}

function getRecipe(id) {
  return recipes[id]
}

function groceryList() {
  const recipes = getMenu()
  const ingredients = recipes.reduce((acc, r) => {
    return acc.concat(r.ingredients)
  }, [])
  return Array.from(new Set(ingredients))
}


module.exports = {
  getMenu,
  getRecipe,
  groceryList
}
