export const EMPTY_STRING_REGEXP = /^\s*$/

export function isInteger(value) {
  return isNumber(value) && value % 1 === 0;
};

export function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
};

export function isPromise(value) {
  return !!value && isFunction(value.then);
}

export function isHash(value) {
  return isObject(value) && !isArray(value) && !isFunction(value);
}

export function isEmpty(value) {
  let attr;

  // Null and undefined are empty
  if (!isDefined(value)) {
    return true;
  }

  // functions are non empty
  if (isFunction(value)) {
    return false;
  }

  // Whitespace only strings are empty
  if (isString(value)) {
    return EMPTY_STRING_REGEXP.test(value);
  }

  // For arrays we use the length property
  if (isArray(value)) {
    return value.length === 0;
  }

  // Dates have no attributes but aren't empty
  if (isDate(value)) {
    return false;
  }

  // If we find at least one property we consider it non empty
  if (isObject(value)) {
    for (attr in value) {
      return false;
    }
    return true;
  }

  return false;
}

export function isFunction(value) {
  return typeof value === 'function';
};

export function isJqueryElement(value) {
  return value && isString(value.jquery);
}

export function capitalize(str) {
  if (!isString(str)) {
    return str;
  }

  if (str.length === 0) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

export function isString(value) {
  return typeof value === 'string';
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isObject(value) {
  return value === Object(value);
}

export function isDate(value) {
  return value instanceof Date;
}

export function contains(obj, value) {
  if (!isDefined(obj)) {
    return false;
  }
  if (isArray(obj)) {
    return obj.indexOf(value) !== -1;
  }
  return value in obj;
}

export function isDefined(value) {
  return value !== null && value !== undefined;
}

export function unique(array) {
  if (!isArray(array)) {
    return array;
  }
  return array.filter(function(el, index, array) {
    return array.indexOf(el) == index;
  });
}

export function isArray(value) {
  return {}.toString.call(value) === '[object Array]';
}

export function warn(msg) {
  if (typeof console !== "undefined" && console.warn) {
    console.warn("[validate.js] " + msg);
  }
}

export function error(msg) {
  if (typeof console !== "undefined" && console.error) {
    console.error("[validate.js] " + msg);
  }
}

