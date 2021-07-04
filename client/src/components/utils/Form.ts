export const checkInputsOnEmpty = <values>(inputs: values) => {
  for (const [, value] of Object.entries(inputs)) {
    if (!value.trim().length) {
      return true;
    }
  }
  return false;
};
