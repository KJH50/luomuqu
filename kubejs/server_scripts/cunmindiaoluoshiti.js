LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mugging_villagers_mod:homeless_villager")    
        .addLoot("butcher:villager_corpse_item");
        
        event
        .addEntityLootModifier("minecraft:ender_dragon")    
        .addLoot("butcher:enderdragoncorpse","8x irons_spellbooks:dragonskin");
    
        event
        .addEntityLootModifier("minecraft:pillager")    
        .randomChance(0.9) // 30% 概率
        .addLoot('minecraft:gunpowder','minecraft:copper_ingot')
        .randomChance(0.3) // 30% 概率
        .addLoot('minecraft:gunpowder','minecraft:copper_ingot','minecraft:gunpowder');

        event
        .addEntityLootModifier("minecraft:wither_skeleton")    
        .addLoot('iceandfire:witherbone');

        event
        .addEntityLootModifier("minecraft:goat")    
        .addLoot('minecraft:mutton','minecraft:mutton');

        event
        .addEntityLootModifier("alexsmobs:rhinoceros")    
        .addLoot('alexsdelight:raw_bison','alexsdelight:raw_bison','alexsdelight:raw_bison','alexsdelight:raw_bison','alexsdelight:raw_bison');

        event
        .addEntityLootModifier("minecraft:skeleton")    
        .addLoot('minecraft:arrow','minecraft:arrow');

        event
        .addEntityLootModifier("minecraft:vindicator")    
        .randomChance(0.6) // 30% 概率
        .addLoot('minecraft:iron_ingot');

        event
        .addEntityLootModifier("alexsmobs:grizzly_bear")    
        .addLoot('butcher:rawbearmeat')
        .randomChance(0.6) // 30% 概率
        .addLoot('butcher:rawbearmeat','butcher:rawbearmeat');

        event
        .addEntityLootModifier("minecraft:zombie")   
        .randomChance(0.3) // 30% 概率 
        .addLoot('minecraft:iron_nugget','minecraft:iron_ingot')
        .randomChance(0.5) // 30% 概率 
        .addLoot('alexsmobs:maggot');

        event
        .addEntityLootModifier("mugging_villagers_mod:lil_ill")    
        .addLoot('mugging_villagers_mod:gun');

        event
        .addEntityLootModifier("mugging_villagers_mod:wandering_gangster")    
        .addLoot('mugging_villagers_mod:gun');

        event
        .addEntityLootModifier("alexscaves:forsaken")    
        .addLoot('tarotcards:the_devil');

        event
        .addEntityLootModifier("alexscaves:luxtructosaurus")    
        .addLoot('tarotcards:the_tower');

        event
        .addEntityLootModifier("soulsweapons:night_shade")    
        .addLoot('tarotcards:the_moon');

        event
        .addEntityLootModifier('cataclysm:the_leviathan')    
        .addLoot('tarotcards:the_world');

        event
        .addEntityLootModifier('irons_spellbooks:necromancer')  
        .randomChance(0.7) // 30% 概率   
        .addLoot('goety:ectoplasm','irons_spellbooks:common_ink')
        .randomChance(0.3) // 30% 概率   
        .addLoot('irons_spellbooks:uncommon_ink');

        event
        .addEntityLootModifier('goety:wraith')  
        .randomChance(0.6) // 30% 概率   
        .addLoot('2x irons_spellbooks:arcane_essence','irons_spellbooks:common_ink')
        .randomChance(0.3) // 30% 概率   
        .addLoot('irons_spellbooks:uncommon_ink','irons_spellbooks:arcane_essence');

        event
        .addEntityLootModifier('goety:wraith_servant')  
        .randomChance(0.6) // 30% 概率   
        .addLoot('2x irons_spellbooks:arcane_essence','irons_spellbooks:common_ink')
        .randomChance(0.4) // 30% 概率   
        .addLoot('irons_spellbooks:uncommon_ink','irons_spellbooks:arcane_essence');

        event
        .addEntityLootModifier('goety:warlock')  
        .randomChance(0.6) // 30% 概率   
        .addLoot('2x irons_spellbooks:arcane_essence','goety:ectoplasm')
        .randomChance(0.5) // 30% 概率   
        .addLoot('irons_spellbooks:common_ink');

        event
        .addEntityLootModifier('touhou_little_maid:fairy')  
        .randomChance(0.6) // 30% 概率   
        .addLoot('irons_spellbooks:arcane_essence')
        .randomChance(0.2) // 30% 概率   
        .addLoot('farmersdelight:dumplings');

        event
        .addEntityLootModifier('touhou_little_maid:fairy')  
        .randomChance(0.7) // 30% 概率   
        .addLoot('irons_spellbooks:arcane_essence','minecraft:lapis_lazuli')
        .randomChance(0.2) // 30% 概率   
        .addLoot('farmersdelight:dumplings');

        event
        .addEntityLootModifier('goety:reaper')  
        .randomChance(0.7) // 30% 概率   
        .addLoot('minecraft:experience_bottle')
        .randomChance(0.7) // 30% 概率   
        .addLoot('irons_spellbooks:common_ink');

        event
        .addEntityLootModifier('goety:heretic')  
        .randomChance(0.9) // 30% 概率   
        .addLoot('irons_spellbooks:cinder_essence')
        .randomChance(0.4) // 30% 概率   
        .addLoot('minecraft:emerald');

        event
        .addEntityLootModifier("minecraft:enderman")    
        .randomChance(0.1) // 30% 概率
        .addLoot('celestial_core:treasure_fragment');

        event
        .addEntityLootModifier("minecraft:rabbit") 
        .addLoot('minecraft:rabbit_foot');

        event
        .addEntityLootModifier("legendary_monsters:frostbitten_golem")    
        .addLoot('ramcompat:frost_robe')
        .addLoot('irons_spellbooks:permafrost_shard');

        event
        .addEntityLootModifier("minecraft:witch")    
        .randomChance(0.03) // 30% 概率
        .addLoot('goety:witch_robe');

        event
        .addEntityLootModifier("iceandfire:hydra")    
        .addLoot('ice_and_fire_delight:hydra_meat');

        event
        .addEntityLootModifier("minecraft:warden")    
        .addLoot('minecraft:echo_shard');

        event
        .addEntityLootModifier("minecraft:chicken")    
        .addLoot('minecraft:egg');
    });               