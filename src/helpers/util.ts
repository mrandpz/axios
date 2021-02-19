const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Data]';
}

export function isObject(val: any): val is Record<string, unknown> {
  return val !== null && typeof val === 'object';
}

export function isPlainObject(val: any): val is Record<string, unknown> {
  return toString.call(val) === '[object Object]';
}
