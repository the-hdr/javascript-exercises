const repeatString = function(originalString, iterationTimes)
{
    if (iterationTimes < 0)
    {
        return "ERROR";
    }

    let resultString = "";
    for (let i = 0; i < iterationTimes; ++i)
    {
        resultString += originalString;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;