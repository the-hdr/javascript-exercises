const removeFromArray = function (inputArray, ... illegalEntities)
{
    let resultArray = [];
    let n = inputArray.length;

    for (let i = 0; i < n; ++i)
    {
        let isIllegal = false;
        for (const illegalEntity of illegalEntities)
        {
            if (illegalEntity === inputArray[i])
            {
                isIllegal = true;
                break;
            }
        }
        if (isIllegal == false)
        {
            resultArray.push (inputArray[i]);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;