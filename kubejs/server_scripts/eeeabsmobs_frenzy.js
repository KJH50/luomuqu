// 检查玩家背包变化时遍历狂乱药水并修改NBT为力量效果（仅非创造模式）
PlayerEvents.inventoryChanged(event => {
    const player = event.player
    
    // 检查玩家是否为创造模式，如果是则跳过处理
    if (player.isCreative()) {
        return
    }
    
    // 遍历玩家背包中的所有物品
    player.inventory.allItems.forEach(item => {
        // 检测普通狂乱药水
        if (item.id === 'minecraft:potion' && 
            item.nbt && 
            item.nbt.toString().includes('eeeabsmobs:frenzy')) {
            
            console.info(`发现狂乱药水，修改NBT为力量2效果 (玩家: ${player.name})`)
            
            // 直接修改物品的NBT为力量2药水
            item.nbt = {
                Potion: "minecraft:strong_strength"
            }
        }
        
        // 检测喷溅型狂乱药水
        if (item.id === 'minecraft:splash_potion' && 
            item.nbt && 
            item.nbt.toString().includes('eeeabsmobs:frenzy')) {
            
            console.info(`发现喷溅型狂乱药水，修改NBT为喷溅型力量2效果 (玩家: ${player.name})`)
            
            // 直接修改物品的NBT为喷溅型力量2药水
            item.nbt = {
                Potion: "minecraft:strong_strength"
            }
        }
        
        // 检测滞留型狂乱药水
        if (item.id === 'minecraft:lingering_potion' && 
            item.nbt && 
            item.nbt.toString().includes('eeeabsmobs:frenzy')) {
            
            console.info(`发现滞留型狂乱药水，修改NBT为滞留型力量2效果 (玩家: ${player.name})`)
            
            // 直接修改物品的NBT为滞留型力量2药水
            item.nbt = {
                Potion: "minecraft:strong_strength"
            }
        }
        
        // 检测狂乱药箭
        if (item.id === 'minecraft:tipped_arrow' && 
            item.nbt && 
            item.nbt.toString().includes('eeeabsmobs:frenzy')) {
            
            console.info(`发现狂乱药箭，修改NBT为力量2药箭 (玩家: ${player.name})`)
            
            // 直接修改物品的NBT为力量2药箭
            item.nbt = {
                Potion: "minecraft:strong_strength"
            }
        }
    })
})