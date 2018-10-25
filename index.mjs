export function polishPlurals(singularNominativ, pluralNominativ, pluralGenitive, value) {
  const partial = value => _polishPlurals(singularNominativ, pluralNominativ, pluralGenitive, value);

  if (typeof value !== "undefined") {
    return partial(value);
  }
  else {
    return partial;
  }
}

function _polishPlurals(singularNominativ, pluralNominativ, pluralGenitive, value) {
  value = Math.abs(value);

  if (value === 1) {
      return singularNominativ;
  } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
      return pluralNominativ;
  } else {
      return pluralGenitive;
  }
}
