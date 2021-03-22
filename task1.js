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
  
}

function main() {
  console.log(sync([1, 2, 3], [1, 3, 4])); // should be [2,4]
  console.log(sync([1, 9], [1])); // should be [9]
  console.log(sync([1, 2, 3], [1, 2, 3])); // should be []
}

main();
