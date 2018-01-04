# Code Insurance
Insurance policy for your methods and values within an object

# API
## ensureFunction(object, method, message)
Ensures that the given object consists of the named method. Throws an error otherwise

```javascript
const t = 'Hello World';
// Valid check returns the function
const fn = ensureFunction(t, 'toLowerCase', 'toLowerCase is required for string');

// Invalid values throws an error
const err = ensureFunction(t, 'unavailableFn', 'unavailableFn is required for string');
```

## ensureValue(object, name, message)
Ensures that the given object consists of the named value. Throws an error otherwise.

```javascript
const t = { vvv: 'Hello World' };
const v = ensureValue(t, 'vvv', 'vvv is required in the object'); // Sets value
const vv = ensureValue(t, 'vv', 'vv is required in the object'); // Throws
```

## ensureFunctions(object, methods, message)
Ensures that the given object consists of all the named methods. Throws an error otherwise.
The named methods could be an array of names or an object with key being the name of the
method and value the error message to throw if not found.
```javascript
ensureFunctions(obj, ['hello', 'world'], 'Object requires methods');
ensureFunctions(obj, {
  hello: 'hello method is required',
  world: 'world method is required',
}, 'obj requires methods');
```

## ensureValues(object, values, message)
Ensures that the given object consists of all the named values. Throws an error otherwise.
The named values could be an array of names or an object with key being the name of the 
property and value the error message to throw if not found.
```javascript
ensureValues(obj, ['v1', 'v2'], 'Object should define values');
ensureValues(obj, {
  'v1': 'v1 is required',
  'v2': 'v2 is required',
}, 'Object should define values');

