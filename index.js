const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;

 return driver;
};

// this function should work the same as updateDriverWithKeyAndValue()
// but it should mutate the driver parameter passed in.
//
function deleteFromDriverByKey(driver, key){
  const newObj = Object.assign({}, driver);

  delete newObj[key];
  return newObj;
};
//this function should take in a driver object and a key.
// It should delete the key/value pair for the key that was passed in from the driver object.
// This should all not actually mutate the driver passed in.
//
function destructivelyDeleteFromDriverByKey(){

}
//this function should work the same as deleteFromDriverByKey()
// but it should mutate the driver passed in.
