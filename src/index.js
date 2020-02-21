module.exports = function toReadable (number) {
    let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let hundred = ' hundred';
    let result = '';
    let numStr = number.toString();

    if (number == 0) {
        return 'zero';
    }
    
    if ( numStr.length == 3 ) 
    {
      result  = ones[parseInt( numStr.charAt(0))] + hundred;
      number = number % 100;
      numStr = number.toString();
    }
   
   if ( number < 20 )  
    {
      result += ones[number] ;
    }
   else 
    {  
      result += tens[parseInt( numStr.charAt(0))];
      result += ones[parseInt( numStr.charAt(1))];  
    }
   
    return result.trim();
}
