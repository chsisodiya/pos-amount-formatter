module.exports = function posAmountFormatter(amount, number){
  if(number !== "back") {
    return (parseFloat(amount)*10 + parseFloat(number)/100).toFixed(2);
  } else {
    return (parseFloat(amount.slice(0, -1))/10).toFixed(2);
  }
}
