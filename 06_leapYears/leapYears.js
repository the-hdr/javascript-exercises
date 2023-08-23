const leapYears = function (y)
{
    if ('number' !== typeof (y) || y < 0)
    {
        return 'ERROR';
    }
    return ((y % 400 == 0) || (y % 100 != 0) && (y % 4 == 0));
};

// Do not edit below this line
module.exports = leapYears;
