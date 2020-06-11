class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                console.log('data:',data, '          node data:',node.data);
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if(current.left === null && current.right === null) {
                console.log(data,' not in the binary search tree');
                return;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if ( current === null) {
                return null;
            }
        }
    }
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            } 
            if (data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = function(node, data) {
            console.log('node:',node,'    data:',data);
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                if (node.left === null && node.right === null) {
                    return null;
                }
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }
                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const bST = new BinarySearchTree();

bST.add(4);
bST.add(6);
bST.add(2);
bST.add(1);
bST.add(6);
bST.add(8);
bST.add(45);
bST.add(2);
bST.add(8);
bST.find(44);
bST.remove(2);
console.log(bST);

