// 判断参数是否是其中之一
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

// value, validList
export function valueOneOf(value, validList) {
  if (value && value.length > 0) {
    for (const i of value) {
      for (const k in i) {
        const label = validList.join(",");
        if (label.indexOf(k) > -1) {
          return true;
        }
      }
    }
    return false;
  }
}
