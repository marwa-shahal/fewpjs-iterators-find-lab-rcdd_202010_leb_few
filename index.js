const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  if (!!record.find( rec => rec.result === "W"))
  {return record.year}
  return undefined;
  
}
