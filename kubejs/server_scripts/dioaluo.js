LootJS.modifiers((event) => {
event
.addEntityLootModifier('legendary_monsters:posessed_paladin')    
.addLoot('celestial_core:treasure_fragment');

event
.addEntityLootModifier("legendary_monsters:ancient_guardian")    
.addLoot('celestial_core:treasure_fragment');

event
.addEntityLootModifier('legendary_monsters:cloud_golem')    
.addLoot('celestial_core:treasure_fragment');

event
.addEntityLootModifier('legendary_monsters:overgrown_colossus')    
.addLoot('celestial_core:treasure_fragment');

event
.addEntityLootModifier("goety:skull_lord")    
.addLoot('goety:cursed_paladin_helmet','goety:cursed_paladin_chestplate','goety:cursed_paladin_leggings','goety:cursed_paladin_boots');

event
.addEntityLootModifier("soulsweapons:chaos_monarch")    
.addLoot('minecraft:netherite_ingot');

event
.addEntityLootModifier("cataclysm:netherite_monstrosity")    
.addLoot('goety:shrouded_blueprint','fumo:cirno_item','19x minecraft:ancient_debris','celestial_artifacts:heart_of_revenge');

event
.addEntityLootModifier("mowziesmobs:frostmaw")    
.addLoot('4x minecraft:enchanted_golden_apple','celestial_artifacts:freeze_ring','soulsweapons:frostmourne');

event
.addEntityLootModifier("minecraft:villager") 
.addLoot('minecraft:emerald','minecraft:bread');

event
.addEntityLootModifier("minecraft:wandering_trader") 
.addLoot('4x minecraft:emerald','minecraft:golden_apple');

event
.addEntityLootModifier("iceandfire:troll") 
.addLoot('4x ice_and_fire_delight:troll_intestines');
});  