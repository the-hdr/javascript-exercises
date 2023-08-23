const sumAll = function (start, end)
{
    if ('number' !== typeof start || 'number' !== typeof end)
    {
        return "ERROR";
    }

    if (start > end)
    {
        let t = start;
        start = end;
        end = t;
    }

    if (start < 0)
    {
        return "ERROR";
    }

    let result = 0;
    for (let currentNumber = start; currentNumber <= end; ++currentNumber)
    {
        result += currentNumber;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
