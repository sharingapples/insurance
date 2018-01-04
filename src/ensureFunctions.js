function split(requirements) {
  if (Array.isArray(requirements)) {
    return [
      requirements,
      requirements.map(r => `${r} is not available`),
    ];
  }

  const keys = Object.keys(requirements);
  return [
    keys,
    keys.map(k => requirements[k]),
  ];
}

export default function ensureFunction(object, requirements, message) {
  if (typeof object !== 'object') {
    throw new Error(`${message}::Invalid object`);
  }

  const [names, messages] = split(requirements);

  names.forEach((n, idx) => {
    if (typeof object[n] !== 'function') {
      throw new Error(`${message}::${messages[idx]}`);
    }
  });
}
