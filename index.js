//define recipes Object
var recipes = {}

//write function that takes object, key, val args and returns obj clone not orig obj
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}

//write function that takes object, key, val args and returns destructively modified object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
