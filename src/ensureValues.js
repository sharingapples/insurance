function split(values) {
  if (Array.isArray(values)) {
    return [
      values,
      values.map(v => `${v} is not available`),
    ];
  }

  const keys = Object.keys(values);
  return [
    keys,
    keys.map(k => values[k]),
  ];
}

export default function ensureValue(object, values, message) {
  if (typeof object !== 'object') {
    throw new Error(`${message}::Invalid source object`);
  }

  const [names, messages] = split(values);
  names.forEach((n, idx) => {
    if (object[n] === undefined) {
      throw new Error(`${message}::${messages[idx]}`);
    }
  });
}
