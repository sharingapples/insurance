export default function ensureFunction(object, name, message) {
  if (typeof object !== 'object') {
    throw new Error(`${message}::Invalid source object`);
  }

  const fn = object[name];
  if (typeof fn !== 'function') {
    throw new Error(`${message}::${name} is not a function`);
  }

  return fn;
}