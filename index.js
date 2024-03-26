const hq=42
function distanceFromHqInBlocks(distanceinb) {
  if(distanceinb < hq){
    let block= hq-distanceinb
    return block
  }else{
    let block= distanceinb-hq
    return block
  } 
}
function distanceFromHqInFeet(distanceinf) {
  return distanceFromHqInBlocks(distanceinf) * 264; 
  }
  
function distanceTravelledInFeet(start, destination) {
  if(start > destination){
      let distance = start - destination 
      let dFeet = distance * 264
          return dFeet
      }
      let distance = destination - start
      let dFeet = distance * 264
      return dFeet
      
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else if (distance > 2500) {
      return 'cannot travel that far'; 
    }
  }


  
  

  

