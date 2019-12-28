// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const driver[key] = 'value';
  return driver;
}

function deleteFromDriverByKey(driver, key) {

}
