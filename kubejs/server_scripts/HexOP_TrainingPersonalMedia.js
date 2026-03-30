// requires: hexoverpowered
{
    let RATIO_REGEN_TO_MAX =5e-3
    let RATIO_OVER_REGEN_TO_MAX = 0 // disabled passive exponential gen
    let RATIO_CAST_TO_MAX = 5e-3
    let RATIO_CAST_TO_REGEN =5e-3
    let RATIO_HURT_TO_MAX = 1000
    let KEY_TRAINING = 'hexop_training'

    /**
     * @param {Internal.ServerPlayer} player
     * @returns {{max?:number; regen?:number}}
     */
    let getTrainingMap = (/**@type {Internal.ServerPlayer}*/ player) => {
        let pdata = player.getPersistentData()
        if (!pdata.training_media?.put) {
            pdata.training_media = {}
        }
        return pdata.training_media
    }

    /**
     * @param {Internal.ServerPlayer} player
     */
    let refreshPersonalMana = player => {
        let map = getTrainingMap(player)
        if (map.max) player.modifyAttribute(HexOPAttributes.PERSONAL_MEDIA_MAX, KEY_TRAINING, map.max, 'addition')
        if (map.regen) player.modifyAttribute(HexOPAttributes.PERSONAL_MEDIA_REGEN, KEY_TRAINING, map.regen, 'addition')
    }

    let modifyTraining = (player, max, regen) => {
        let map = getTrainingMap(player)
        if (max) map.max = (map.max || 0) + max
        if (regen) map.regen = (map.regen || 0) + regen
        refreshPersonalMana(player)
    }

    // 首先清除所有已有事件
    PersonalManaEvents.resetAll()

    // 回复媒质提升最大值
    PersonalManaEvents.AddOnInsert(e => {
        modifyTraining(e.player, e.actual * RATIO_REGEN_TO_MAX + e.dropped * RATIO_OVER_REGEN_TO_MAX, 0)
    })

    // 消耗媒质提升媒质回复
    PersonalManaEvents.AddOnExtract(e => {
        modifyTraining(e.player, e.actual * RATIO_CAST_TO_MAX, e.actual * RATIO_CAST_TO_REGEN)
    })

    // 超量施法受伤提升最大值
    EntityEvents.hurt(e => {
        let { player, source } = e
        if (player && source.getType() == 'hexcasting.overcast') {
            modifyTraining(player, RATIO_HURT_TO_MAX * Math.min(e.damage, player.maxHealth / 2), 0)
        }
    })

    // 玩家登入与重生时刷新个人媒质条更改
    PlayerEvents.respawned(e => refreshPersonalMana(e.player))
    PlayerEvents.loggedIn(e => refreshPersonalMana(e.player))
}
