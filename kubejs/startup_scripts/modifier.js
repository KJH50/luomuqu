//🐟👉🎶比格斯内克，我要追随你一辈子
function gettranslationKey(item) {
    if (item.id != "slashblade:slashblade") { return }
    if (!item.nbt) { return }
    let bladeState = item.nbt.get("bladeState")
    if (!bladeState) { return }
    let translationKey = bladeState.get("translationKey")
    return translationKey
}//构造函数不用改
ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    let agito_rust = UUID.fromString("5d2295b1-e3f1-4cda-afc9-9aa067dec5bc")//uuid要改
    let AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")
    let slot = event.getSlotType()
    let EquipmentSlot = Java.loadClass("net.minecraft.world.entity.EquipmentSlot")
    let item = event.getItemStack()
    if (item.id === 'slashblade:slashblade' && slot == EquipmentSlot.MAINHAND) {
        let translationKey = gettranslationKey(item)
        if (translationKey && translationKey === "item.resonantisshelomoh.reverse_solomond") {//translationKey===写拔刀剑翻译键名
            event.addModifier(
                "minecraft:generic.max_health",
                new AttributeModifier(
                    agito_rust,//这是上面的uuid
                    "agito_rust_health_fix",//唯一修饰名，可以改
                    -0.95,
                    AttributeModifier.Operation.MULTIPLY_TOTAL
                )
            )
        }
    }
});//startup