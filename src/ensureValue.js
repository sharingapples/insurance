export default function ensureValue(object, name, message) {
  if (typeof object !== 'object') {
    throw new Error(`${message}::Invalid source object`);
  }

  const v = object[name];
  if (v === undefined) {
    throw new Error(`${message}::${name} is not defined`);
  }

  return v;
}
