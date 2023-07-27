class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      //if value < node.value go left
      if (value < node.value) {
        //If no left child append new node
        if (!node.left) {
          node.left = newNode;
          //Else search left child
        } else {
          searchTree(node.left);
        }
      }
      //if value > node.value got right
      else if (value > node.value) {
        //If no right child append new node
        if (!node.right) {
          node.right = newNode;
          //Else search right child
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currNode = this.root;

    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.value;
  }

  max() {
    let currNode = this.root;

    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.value;
  }

  contains(value) {
    let currNode = this.root;

    while (currNode) {
      //console.log("Contains");
      if (value === currNode.value) {
        return true;
      }
      if (value < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }

  //Depth first search - looks branch by branch

  //inorder
  //left, root, right
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      //If left child exists go left
      if (node.left) traverse(node.left);

      //capture root node value
      result.push(node.value);

      //If right child exists go right
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  //preorder
  //root, left,right
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      //capture root node value
      result.push(node.value);

      //If left child exists go left
      if (node.left) traverse(node.left);

      //If right child exists go right
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  //postorder
  //left, right, node
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      //If left child exists go left
      if (node.left) traverse(node.left);

      //If right child exists go right
      if (node.right) traverse(node.right);

      //capture root node value
      result.push(node.value);
    };

    traverse(this.root);

    return result;
  }

  //Breath first search- looks level by level

  //Use a queue
  bfsSerach() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currNode = queue.shift();
      result.push(currNode.value);

      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }

    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst);
console.log(bst.size());

console.log(bst.min());

console.log(bst.max());

console.log(bst.contains(2));

console.log(bst.contains(9));

//dfs in order
console.log(bst.dfsInOrder());

//dfs preorder
console.log(bst.dfsPreOrder());

//dfs postOrder
console.log(bst.dfsPostOrder());

//bfs
console.log(bst.bfsSerach());
