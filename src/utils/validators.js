export const requiredField = (value) => (value ? undefined : "At least one character is needed")

export const maxValue = (max) => (value) =>
  value.length < max ? undefined : `Should be less than ${max} symbols`

export const composeValidators =
  (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      )
