class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //adds new node to end
    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
    }

    //adds new node to front
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;

        } else {
            let replacedHead = this.head;
            this.head = newNode;
            newNode.next = replacedHead;
        }
    }

    //returns node count
    getSize() {
        let size = 0;
        let current = this.head;

        while (current) {
            size++;
            current = current.next;
        }

        return `This list has ${size} nodes`; 
    }

    //returns first node
    getHead() {
        return `The first node is ${this.head.value}`;
    }

    //returns last node
    getTail() {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        return `The last node is ${current.value}`;
    }

    //returns node at given index
    getIndex(n) {
        if (typeof n !== 'number' || n < 0) return 'enter a number zero or higher';
        if (!this.head) return 'the list is empty';

        let current = this.head;

        for (let i = 0; current && i < n; i++) {
            current = current.next
        }

        if (current === null) return this.getSize() + ` starting from 0, index ${n} doesn't exist`;
        return `the value at index ${n} is ${current.value}`;
    }

    //removes last node
    pop() {
        if (!this.head) return "The list is empty.";

        let current = this.head;
        let previous = null;
    
        while (current.next) {
            previous = current;
            current = current.next;
        }
    
        let removedNode = current;
        if (!previous) this.head = null; //there is only one node in the list
        previous.next = null;

        return `Removed node with value ${removedNode.value}. The list is now: ${this.toString()}`;
    }

    //returns if true if passed in value if in the list
    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }

        return false;
    }

    //returns the index of the node containing value, or null if not found.
    find(value) {
        if (!this.head) return

        let current = this.head;
        let count = 0;

        while (current) {
            if (value === current.value) return `${value} found at index ${count}`;
            current = current.next;
            count++
        }

        return `Error 404: ${value} not found`;
    }


    //returns all nodes in order
    toString() {
        let wholeList = '';
        let current = this.head;

        while (current) {
            wholeList += `(${current.value}) -> `;
            current = current.next;
        }

        wholeList += `null`;
        return wholeList.trim();
    }

    //inserts a new node with the provided value at the given index.
    insert(value, index) {
        if (!this.head) return
        if (index < 0 || typeof index !== 'number') return `Enter a number 0 or higher`;

        const newNode = new Node(value);
        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        if (currentIndex !== index) return 'Cannot insert node here, out of bounds';

        if (previous) {
            previous.next = newNode;
            newNode.next = current;
        } else {  
            //insert at head position
            this.prepend(value);
        }
    }

    //removes the node at the given index. 
    removeAt(index) {
        if (!this.head) return 
        if (index < 0 || typeof index !== 'number') return 'Enter a number greater than or equal to 0';
        
        let current = this.head;
        let previous = null
        let counter = 0;

        while (current && counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        if (counter !== index) return `Error: index ${index} not found`;
        if (previous) previous.next = current.next; //remove node by setting its' previous node's pointer to the next node over

        if (!previous) this.head = current.next //remove head
        if (!current.next) previous.next = null; //remove last
    }
}

const myList = new LinkedList();

myList.append(5);
myList.append(10);
myList.append(15);
myList.append(25);

myList.prepend(21);
myList.prepend(1);



console.log(myList.toString());
console.log(myList.getSize());

console.log(myList.pop());

console.log(myList.getSize());
console.log(myList.getHead());
console.log(myList.getTail());
console.log(myList.getIndex(2));
console.log(myList.contains(15));
console.log(myList.find(15));
console.log(myList.insert(75, 3));
console.log(myList.removeAt(5));

console.log(myList.toString());