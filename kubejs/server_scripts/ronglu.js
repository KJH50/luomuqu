ServerEvents.recipes(event => {
    event.smelting('minecraft:wither_skeleton_skull', 'minecraft:skeleton_skull',50,20*60)
 
    event.blasting('minecraft:wither_skeleton_skull', 'minecraft:skeleton_skull',50,20*60)

    event.smelting('fumo:tan_cirno_item', 'fumo:cirno_item')

    event.smelting('alexsmobs:novelty_hat', 'artifacts:novelty_drinking_hat')

    event.smelting('artifacts:novelty_drinking_hat', 'alexsmobs:novelty_hat')

    event.smelting('8x farmersdelight:wheat_dough', 'alexscaves:dough_block')

})
