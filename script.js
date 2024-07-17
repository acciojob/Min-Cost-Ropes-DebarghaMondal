function mincost(arr) {
    // Edge case
    if (arr.length === 0) return 0;

    // Min-heap setup using array
    let minHeap = [];
    for (let length of arr) {
        // Insert each rope length into min-heap
        minHeap.push(length);
    }

    // Build the heap
    buildMinHeap(minHeap);

    let totalCost = 0;

    // While there is more than one rope left in the heap
    while (minHeap.length > 1) {
        // Extract the two smallest ropes
        let first = extractMin(minHeap);
        let second = extractMin(minHeap);

        // Calculate the cost to merge these two ropes
        let cost = first + second;
        totalCost += cost;

        // Insert the merged rope length back into the min-heap
        insert(minHeap, cost);
    }

    return totalCost;
}

// Helper functions for heap operations

function buildMinHeap(arr) {
    // Perform heapify from the middle of the array to the start
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        minHeapify(arr, i);
    }
}

function minHeapify(arr, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (left < arr.length && arr[left] < arr[smallest]) {
        smallest = left;
    }
    if (right < arr.length && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== index) {
        // Swap elements at index and smallest
        [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
        // Recursively heapify the affected sub-tree
        minHeapify(arr, smallest);
    }
}

function extractMin(arr) {
    // Extract the root (minimum element) from min-heap
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr.pop();

    let min = arr[0];
    arr[0] = arr.pop();
    minHeapify(arr, 0);
    return min;
}

function insert(arr, value) {
    // Insert a new value into the min-heap
    arr.push(value);
    let index = arr.length - 1;
    let parent = Math.floor((index - 1) / 2);

    // Bubble up the inserted element to maintain heap property
    while (index > 0 && arr[parent] > arr[index]) {
        [arr[parent], arr[index]] = [arr[index], arr[parent]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
    }
}

module.exports = mincost;
