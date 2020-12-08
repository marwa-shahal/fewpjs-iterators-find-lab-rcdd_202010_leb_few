const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let R = record.find( rec => rec.result === "W");
  if (R)
  {return record.year}
  else {return undefined}
  
}
