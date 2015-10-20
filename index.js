export function abs(val) {
  if (val <= 0) {
    return -val;
  }

  return val;
}

export function min(v1, v2) {
  if (v1 <= v2) {
    return v1;
  }

  return v2;
}

export function max(v1, v2) {
  if (v1 >= v2) {
    return v1;
  }

  return v2;
}
