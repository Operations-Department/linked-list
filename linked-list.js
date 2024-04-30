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

    getSize() {
        let size = 0;
        let current = this.head;

        while (current) {
            size++;
            current = current.next;
        }

        return `This list has ${size} nodes`; 
    }

    getHead() {
        return `The first node is ${this.head.value}`;
    }

    getTail() {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        return `The last node is ${current.value}`;
    }

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
}

const myList = new LinkedList();

myList.append(5);
myList.append(10);
myList.append(15);

myList.prepend(21);
myList.prepend(1);

console.log(myList.toString());
console.log(myList.getSize());
console.log(myList.getHead());
console.log(myList.getTail());