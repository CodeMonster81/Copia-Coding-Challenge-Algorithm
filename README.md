# Copia-Coding-Challenge(Algorithm)

## How to run the code

Use node command to run the code in the terminal. Before that please make sure to have node.js installed(v14.13.0 or later) on the development machine.

```bash
//For the first task
node task1 
// For the second task
node task2
```

## Extra
There are some comments in the code to show approaches for the tasks.

## Tasks
**Sync Question**

For this question we want you to synchronize two lists. Each list contains only integers. The goal of the problem is to return the list of integers which are not contained in both lists.

```
// some examples in python pseudo-code
>> sync([1, 2, 3], [1, 3, 4])
>> [2, 4]
>> sync([1, 9], [1])
>> [9]
>> sync([1, 2, 3], [1, 2, 3])
>> []
```

Consider the trade-offs between time complexity and spatial complexity in different solutions, explain why you made the decision you did, as well as any other solutions you might have chosen.

**Deep Equality**

For this question we want to show the deep equality of two hashmaps. To simpify the problem, you can assume that each hash map always uses a string as a key and a map, number, or string as a value. For the purpose of this problem, you can assume that any equals operator for two hash maps is not enabled.

```
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
```

Once this is complete, and if time permits, extend the problem to handle arrays.

```
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
```
