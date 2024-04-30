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
myList.append(21);

console.log(myList.toString());