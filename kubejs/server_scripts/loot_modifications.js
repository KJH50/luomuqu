LootJS.modifiers(event => {
    //主世界
    event.addLootTypeModifier(LootType.CHEST)
        .anyDimension("minecraft:overworld").randomChance(1).addLoot(
            LootEntry.of('slashblade:proudsoul_tiny', 1)
                .when(c => c.randomChance(0.125)),
            LootEntry.of('minecraft:copper_block', 1)
                .when(c => c.randomChance(0.355)),
            LootEntry.of('minecraft:copper_ingot', 1)
                .when(c => c.randomChance(0.355)),
            LootEntry.of('minecraft:gunpowder', 1)
                .when(c => c.randomChance(0.455)),
            LootEntry.of('minecraft:gunpowder', 1)
                .when(c => c.randomChance(0.455)),
            LootEntry.of('minecraft:gunpowder', 1)
                .when(c => c.randomChance(0.455)),
            LootEntry.of('minecraft:gunpowder', 1)
                .when(c => c.randomChance(0.455)),
            LootEntry.of('slashblade:proudsoul_tiny', 1)
                .when(c => c.randomChance(0.09)),
            LootEntry.of('slashblade:proudsoul_tiny', 1)
                .when(c => c.randomChance(0.08)),
            LootEntry.of('slashblade:proudsoul_tiny', 1)
                .when(c => c.randomChance(0.07)),
            LootEntry.of('slashblade:proudsoul_tiny', 1)
                .when(c => c.randomChance(0.05)),
            LootEntry.of('slashblade:proudsoul_tiny', 1)
                .when(c => c.randomChance(0.025)),
            LootEntry.of('slashblade:proudsoul', 1)
                .when(c => c.randomChance(0.33)),
            LootEntry.of('slashblade:proudsoul', 1)
                .when(c => c.randomChance(0.033)),
            LootEntry.of('slashblade:proudsoul', 1)
                .when(c => c.randomChance(0.02)),
            LootEntry.of('slashblade:proudsoul', 1)
                .when(c => c.randomChance(0.006)),
            LootEntry.of('slashblade:proudsoul', 1)
                .when(c => c.randomChance(0.005)),
            LootEntry.of('slashblade:proudsoul_ingot', 1)
                .when(c => c.randomChance(0.045))

        );

    //下界
    event.addLootTypeModifier(LootType.CHEST)
        .anyDimension("minecraft:the_nether").randomChance(1).addLoot(
            LootEntry.of('slashblade:proudsoul_ingot', 1)
                .when(c => c.randomChance(0.07)),
            LootEntry.of('slashblade:proudsoul_ingot', 1)
                .when(c => c.randomChance(0.115)),
            LootEntry.of('slashblade:proudsoul_sphere', 1)
                .when(c => c.randomChance(0.09))
        );
    //末地
    event.addLootTypeModifier(LootType.CHEST)
        .anyDimension("minecraft:the_end").randomChance(0.6).addLoot(
            LootEntry.of('slashblade:proudsoul_ingot', 1)
                .when(c => c.randomChance(0.07)),
            LootEntry.of('slashblade:proudsoul_ingot', 1)
                .when(c => c.randomChance(0.115)),
            LootEntry.of('slashblade:proudsoul_sphere', 1)
                .when(c => c.randomChance(0.125)),
            LootEntry.of('slashblade:proudsoul_sphere', 1)
                .when(c => c.randomChance(0.09)),
            LootEntry.of('slashblade:proudsoul_crystal', 1)
                .when(c => c.randomChance(0.07))
        );
});