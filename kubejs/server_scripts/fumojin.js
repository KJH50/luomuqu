ServerEvents.recipes(event => {
    event.shaped('minecraft:totem_of_undying',[
['minecraft:amethyst_shard','minecraft:amethyst_shard','minecraft:amethyst_shard'],
['minecraft:amethyst_shard','minecraft:enchanted_golden_apple','minecraft:amethyst_shard'],
['minecraft:amethyst_shard','minecraft:amethyst_shard','minecraft:amethyst_shard'],
    ])
 

        event.shaped('iceandfire:ghost_chest',[
    [,'minecraft:bone',],
    ['minecraft:bone','minecraft:chest','minecraft:bone'],
    [,'minecraft:bone',],
        ])

        event.replaceInput({output:'broomsmod:wooden_broom'},'minecraft:blaze_rod' , 'iceandfire:dragonbone')

        event.replaceInput({output:'cataclysm:the_incinerator'},'minecraft:netherite_sword' , 'iceandfire:dragonsteel_fire_sword')

        event.replaceInput({output:'waystones:warp_stone'},'minecraft:amethyst_shard' , 'minecraft:dirt')
        event.replaceInput({output:'waystones:warp_stone'},'minecraft:ender_pearl','minecraft:cobblestone')
        event.replaceInput({output:"waystones:warp_stone"},"minecraft:emerald","minecraft:emerald")
        event.replaceInput({output:"waystones:waystone"},"minecraft:stone_bricks","minecraft:cobblestone")

        event.replaceInput({mod:'waystones'},'minecraft:obsidian','minecraft:cobblestone')

        event.replaceInput({output:'explorerscompass:explorerscompass'},'minecraft:cracked_stone_bricks','minecraft:cobblestone')
        event.replaceInput({output:'explorerscompass:explorerscompass'},'minecraft:cobweb','minecraft:cobblestone')
    
        event.replaceInput({mod:'mowziesmobs'},'mowziesmobs:naga_fang','iceandfire:hydra_fang')

        event.replaceInput({mod:'celestial_artifacts'},'celestial_artifacts:life_etching','iceandfire:siren_tear')

        event.replaceInput({output:'meetyourfight:fossil_bait'},'minecraft:spider_eye','minecraft:kelp')

        event.replaceInput({output:'meetyourfight:dusk_key'},'minecraft:blackstone','iceandfire:deathworm_egg_giant')

        event.replaceInput({output:'sw_wukong:monkey_king_template'},'minecraft:enchanted_golden_apple','1x sw_wukong:monkey_king_template')

        event.replaceInput({output:'elainabroom:elaina_broom'},'minecraft:purple_wool','minecraft:dragon_head')
        event.replaceInput({output:'elainabroom:elaina_broom'},'minecraft:stick','broomsmod:wooden_broom')

        event.replaceInput({mod:'celestial_artifacts'},'celestial_artifacts:end_etching','iceandfire:lightning_dragon_heart')

        event.replaceInput({mod:'celestial_artifacts'},'celestial_artifacts:desire_etching','iceandfire:fire_dragon_heart')

        event.replaceInput({mod:'celestial_artifacts'},'celestial_artifacts:origin_etching','iceandfire:ice_dragon_heart') 

        event.replaceInput({output:'celestial_artifacts:titan_scabbard'},'celestial_core:light_fragment','cataclysm:sandstorm_in_a_bottle')
        
        event.replaceInput({mod:'sw_wukong'},'minecraft:netherite_helmet','sw_wukong:iron_wukong_helmet')
        event.replaceInput({mod:'sw_wukong'},'minecraft:netherite_chestplate','sw_wukong:iron_wukong_chestplate')
        event.replaceInput({mod:'sw_wukong'},'minecraft:netherite_leggings','sw_wukong:iron_wukong_leggings')
        event.replaceInput({mod:'sw_wukong'},'minecraft:netherite_boots','sw_wukong:iron_wukong_boots')
        event.replaceInput({mod:'sw_wukong'},'minecraft:netherite_sword','sw_wukong:iron_wukong_staff')

        event.replaceInput({output:'iceandfire:graveyard_soil'},'iceandfire:ectoplasm','goety:ectoplasm')

        event.replaceInput({output:'dreadsteel:dreadsteel_ingot'},'iceandfire:dread_shard','soulsweapons:soul_ingot')

        event.replaceInput({output:'spawnermod:spawner_key'},'minecraft:spawner','goety:cursed_infuser')

        event.replaceInput({output:'disenchanting:disenchanter'},'minecraft:anvil','soulsweapons:essence_of_eventide')

        event.replaceInput({output:'celestial_artifacts:greedy_heart'},'celestial_core:heart_fragment','tarotcards:the_hierophant')

        event.replaceInput({output:'celestial_artifacts:greedy_heart'},'minecraft:gold_block','cataclysm:cursium_ingot')

        event.replaceInput({output:'celestial_artifacts:ender_protector'},'celestial_core:shulker_scrap','minecraft:cake')

        event.replaceInput({output:'celestial_artifacts:sacrificial_object'},'celestial_artifacts:truth_etching','iceandfire:ice_dragon_heart')

        event.replaceInput({output:'celestial_artifacts:sacrificial_object'},'celestial_core:light_fragment','iceandfire:lightning_dragon_heart')

        event.replaceInput({output:'goety:dark_anvil'},'goety:dark_metal_block','goety:dark_ingot')

        event.replaceInput({output:'touhou_little_maid_spell:spell_enhancement_core'},'minecraft:ender_eye','cataclysm:essence_of_the_storm')

        event.replaceInput({output:'touhou_little_maid_spell:bleeding_heart'},'minecraft:heart_of_the_sea','irons_spellbooks:legendary_ink')

        event.replaceInput({output:'touhou_little_maid_spell:flow_core'},'minecraft:heart_of_the_sea','irons_spellbooks:legendary_ink')

        event.replaceInput({output:'butcher:bucketofsalt'},'butcher:saltwater_bucket','minecraft:lava_bucket')

        event.replaceInput({output:'touhou_little_maid_spell:spring_ring'},'minecraft:blaze_powder','soulsweapons:draugr')

        event.replaceInput({output:'touhou_little_maid_spell:quick_chant_ring'},'minecraft:ender_pearl','alexsmobs:void_worm_eye')

        event.replaceInput({output:'irons_spellbooks:druidic_spell_book'},'minecraft:spore_blossom','legendary_monsters:nature_crystal')
        event.replaceInput({output:'irons_spellbooks:druidic_spell_book'},'minecraft:honey_bottle','minecraft:oak_sapling')
        event.replaceInput({output:'irons_spellbooks:druidic_spell_book'},'minecraft:amethyst_cluster','minecraft:birch_sapling')
        event.replaceInput({output:'irons_spellbooks:druidic_spell_book'},'minecraft:glow_ink_sac','minecraft:poppy')

        event.replaceInput({output:'iceandfire:ghost_sword'},'iceandfire:dragonbone_sword','minecraft:iron_sword')

        event.replaceInput({output:'irons_spellbooks:arcane_anvil'},'minecraft:polished_deepslate','minecraft:coal_block')
    })