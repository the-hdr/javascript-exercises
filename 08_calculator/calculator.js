const add = function (a, b)
{
  if ('number' !== typeof a || 'number' !== typeof b)
  {
    return 'ERROR';
  }
	return a + b;
};

const subtract = function (a, b)
{
  if ('number' !== typeof a || 'number' !== typeof b)
  {
    return 'ERROR';
  }
  return a - b;
};

const sum = function (a)
{
	if (false === Array.isArray (a))
  {
    return 'ERROR';
  }
  
  let r = 0;
  for (const element of a)
  {
    if ('number' !== typeof element)
    {
      return 'ERROR';
    }
    r += element;
  }
  return r;
};

const multiply = function (inputList)
{
  if (Array.isArray (inputList) == false)
  {
    return 'ERROR';
  }
  
  let r = 1;
  for (const element of inputList)
  {
    if ('number' !== typeof element)
    {
      return 'ERROR';
    }
    else
    {
      r *= element;
    }
  }
  return r;
};

const power = function (a, b)
{
	if ('number' !== typeof a || 'number' !== typeof b)
  {
    return 'ERROR';
  }

  let r = 1;
  for (let i = 1; i <= b; ++i)
  {
     r *= a;
  }
  return r;
};

const factorial = function(n)
{
	if ('number' !== typeof n)
  {
    return 'ERROR';
  }

  if (n < 0)
  {
    return 'ERROR';
  }

  let n_factorial = 1;
  for (let i = 1; i <= n; ++i)
  {
    n_factorial *= i;
  }
  return n_factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
