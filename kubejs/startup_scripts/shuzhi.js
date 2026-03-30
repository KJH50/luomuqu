ItemEvents.modification(event=>{
  event.modify('zenith:zenith',item=>{
  item.maxDamage=120
  })

      event.modify("ironchests:iron_dolly", item => {
        item.maxDamage = 0; 
    });
  
  })