//define recipes Object
var recipes = {}

//write function that takes object, key, val args and returns object with original and new key/val pairs
/*function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}*/

//same as above but return obj clone not orig obj
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
