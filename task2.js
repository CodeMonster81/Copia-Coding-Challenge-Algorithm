/*
Deep Equality

For this question we want to show the deep equality of two hashmaps. To simpify the problem, you can assume that each hash map always uses a string as a key and a map, number, or string as a value. For the purpose of this problem, you can assume that any equals operator for two hash maps is not enabled.

// some examples in python pseudo-code
>> equals({"key1" : "value", 
           "key2" : {"key3": 1}},
          {"key1" : "value", 
           "key2" : {"key3": 1}})
>> true
>> equals({"key1" : "value1", 
           "key2" : {"key3": 1},
           "key4" : "value2"},
          {"key1" : "value", 
           "key2" : {"key3": 1}})
>> false
Once this is complete, and if time permits, extend the problem to handle arrays.

// some examples in python pseudo-code
>> equals({"key1" : "value", 
           "key2" : [1, 2, 3]},
          {"key1" : "value", 
           "key2" : [1, 2, 3]})
>> true
>> equals({"key1" : "value1", 
           "key2" : [{"key3": 1}]},
          {"key1" : "value", 
           "key2" : [{"key3": 1}]})
>> true
>> equals({"key1" : "value1", 
           "key2" : [{"key3": 1}]},
          {"key1" : "value", 
           "key2" : [{"key3": 1}, 2]})
>> false
>> equals({"key1" : "value1", 
           "key2" : [{"key3": [1, 2]}]},
          {"key1" : "value", 
           "key2" : [{"key3": [1, 2]}]})
>> true
*/

/*
  Approach (Time Complexity: O(number of all keys in hashmap1), Spatial Complexity: O(number of all keys in hashmap1 + number of all keys in hashmap2)
  * Use recursive function to check all elements in hashmap
  * if an element type is hashmap then compare the equality in sub hash map
*/

function equals(map1, map2) {
  const keys1 = Object.keys(map1), keys2 = Object.keys(map2);
  let key;

  // Check if counts of keys are equal
  if (keys1.length !== keys2.length) return false;

  // Check if keys are same. If a key in map1 is missing in map2 then key array for map1 is different from map2.
  for (let index = 0; index < keys1.length; index ++) {
    key = keys1[index];  
    if (!map2[key]) return false;
  }

  // Walk through all elements in map1 and check if they are same as map2.
  for (let index = 0; index < keys1.length; index ++) {
    key = keys1[index];
    if (typeof map1[key] === typeof map2[key]) {
      if (typeof map1[key] === 'number' || typeof map2[key] === 'string') {
        if (map1[key] !== map2[key]) return false;
      }
      else {
        if (equals(map1[key], map2[key]) === false) //if element type is hashmap then check in sub hashmaps.
          return false;
      }
    } 

    else return false;  
  }

  return true;
}

function main() {
  console.log(
    equals({"key1" : "value", 
           "key2" : {"key3": 1}},
          {"key1" : "value", 
           "key2" : {"key3": 1}})
  ); // should be true
  console.log(
    equals({"key1" : "value1", 
           "key2" : {"key3": 1},
           "key4" : "value2"},
          {"key1" : "value", 
           "key2" : {"key3": 1}})
  ); // should be false

  console.log(
    equals({ },
          {"key1" : "value", 
           "key2" : {"key3": 1}})
  ); // should be false

  console.log(
    equals({ },
          { })
  ); // should be true

  console.log(
    equals({"key1" : "value", 
           "key2" : {"key3": 1}},
          {"key1" : 123, 
           "key2" : {"key3": 1}})
  ); // should be false
}

main();
