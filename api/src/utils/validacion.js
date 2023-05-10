const isUUID = (str) => {
  const uuidRegex =
    /^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89aAbB][a-f\d]{3}-[a-f\d]{12}$/i
  return uuidRegex.test(str)
}

export { isUUID }
