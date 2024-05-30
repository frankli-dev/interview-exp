# Interview questions

## 1. What is a memory leak?

In general, a memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in a way that memory which is no longer needed is not released. A memory leak may also happen when an object is stored in memory but cannot be accessed by the running code.

In node.js, memory leak is an orphan block of memory on the Heap that is no longer used by your app because it has not been released by the garbage collector. It's a useless block of memory. These blocks can grow over time and lead to your app crashing because it runs out of memory

## 2. What is a pull request?

A pull request – also referred to as a merge request – is an event that takes place in software development when a contributor/developer is ready to begin the process of merging new code changes with the main project repository.

Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch

## 3. What is a race condition?

A race condition is a type of programming error that can occur when multiple processes or threads are accessing the same shared resource. Only happens on multi thread. Node.js is a single threaded but a race condition can happen because it is still concurrent.

## 4. How to avoid brittle tests?

Write test cases as many as possible, avoid hardcoded values, etc

## 5. What is different between composition vs inheritence?

Inheritance brings out IS-A relation. Composition brings out HAS-A relation

## 6. What should a senior Node.js backend developer know?

Technical: Near-mastery with Vanilla JavaScript, Universal libraries, Client-side concepts, Server-side concepts, Database options, Version control, Automation, Devops,

Soft: Networked, Mentor, Open to new ideas, Communication, Understanding

## 7. What do you check if the user/frontend dev report about the slow request that was not slow?

The database is too slow, what to do?
External requests are too slow, what to do?
The backend code is too slow, what to do?

## 8. What is a foreign key?

A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table

## 9. Write a javascript function to remove duplications in a string array
```
function removeDuplicates(arr) {
    // Create a new Set from the array to remove duplicates
    let uniqueSet = new Set(arr);
    // Convert the Set back to an array
    let uniqueArray = [...uniqueSet];
    return uniqueArray;
}

// Example usage
let stringArray = [
    "0x96b0C913AaAA3cd6267E44f55957A05C785Eb07b",
    "0xcd22783846868f5824905854b567ebff5785b60c",
    "0x6e07Debc3443aA4d7C534F6bE27f76f0c104F676"
];
let uniqueStringArray = removeDuplicates(stringArray);
console.log(uniqueStringArray);
```
