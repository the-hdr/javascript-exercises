const reverseString = function(inputString)
{
    let resultString = "";
    let n = inputString.length;

    for (let i = n - 1; i >= 0; --i)
    {
        resultString += inputString[i];
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;
