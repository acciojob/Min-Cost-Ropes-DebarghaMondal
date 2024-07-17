function mincost(arr){ 
//write your code here
// return the min cost
  let minHeap = new PriorityQueue({ comparator: (a, b) => a - b });
    let totalCost = 0;

    // Step 1: Put all rope lengths in a min heap.
    for (let i = 0; i < arr.length; i++) {
        minHeap.queue(arr[i]);
    }

    // Step 2: Do the following while there is more than one rope in min heap.
    while (minHeap.length > 1) {
        // a. Extract the minimum and second minimum from min heap.
        let min1 = minHeap.dequeue();
        let min2 = minHeap.dequeue();

        // b. Add the extracted values and put the result back to min heap.
        let cost = min1 + min2;
        minHeap.queue(cost);

        // c. Maintain a variable for total cost and keep adding the small values to it.
        totalCost += cost;
    }

    // Step 3: The value of the total cost variable is the minimum cost to connect all ropes.
    return totalCost;
}

module.exports=mincost;
