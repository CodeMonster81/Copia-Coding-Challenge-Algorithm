/*
Sync Question

For this question we want you to synchronize two lists. Each list contains only integers. The goal of the problem is to return the list of integers which are not contained in both lists.

// some examples in python pseudo-code
>> sync([1, 2, 3], [1, 3, 4])
>> [2, 4]
>> sync([1, 9], [1])
>> [9]
>> sync([1, 2, 3], [1, 2, 3])
>> []
*/

/*
 Good Approach (Time Complexity: O(nlog(n)), Spatial Complexity: O(n)
  * Sort 2 lists
  * And then start at the beginning of boths lists and walk through them, comparing the first elements to see which ones are missing in the other list.
     
 Other approach (Time Complexity: O(n^2), Spatial Complexity: O(n^2))
 * Walk thorugh all elements in list1 and get elements missing in list2
 * Walk through all elements in list2 and get elements missing in list1
*/

function sync(list1, list2) {
  const res = [];
  
  // Sort lists
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);

  let index1 = 0, index2 = 0;
  while (index1 < list1.length) { // Walk through all elements in list1
    // Elements in list2 that are greater than a list1[index1 - 1] and less than a list1[index1] is an element in a result array.
    while (list1[index1] > list2[index2] && index2 < list2.length) { 
      res.push(list2[index2]);
      index2 ++;
    }

    // Currently a list2[index2] is the least element that is equal to or greater than a list1[index1]. So if a list1[index1] is not equal to a list2[index2], a list1[index1] is an element in a result array.
    if (list1[index1] === list2[index2]) index2 ++;
    else res.push(list1[index1]);

    index1 ++;
  }

  // Walk through all elements in list2 that are greater than the greatest element in the list1.
  while (index2 < list2.length) {
    res.push(list2[index2]);
    index2 ++;
  }

  return res;
}

function main() {
  // Code lines for testing
  console.log(sync([1, 2, 3], [1, 3, 4])); // should be [2,4]
  console.log(sync([1, 9], [1])); // should be [9]
  console.log(sync([1], [1, 9])); // should be [9]
  console.log(sync([1, 2, 3], [1, 2, 3])); // should be []
  console.log(sync([], [1, 2, 3])); // should be [1, 2, 3]
  console.log(sync([1, 2, 3], [])); // should be [1, 2, 3]
  console.log(sync([], [])); // should be []
}

main();
