---
title: "B Trees – All you need to know about deleting keys"
slug: "b-trees-all-you-need-to-know-about-deleting-keys"
date: "2017-05-05"
updated: "2017-06-03"
sourceUrl: "https://vijinimallawaarachchi.com/2017/05/05/b-trees-all-you-need-to-know-about-deleting-keys/"
featuredImage: "/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree22.png"
categories: ["Algorithms", "Data Structures"]
tags: ["Algorithms", "Data Structures", "Tech"]
---
B tree is a self-balancing search tree (the tree adjusts itself so that all the leaves are at the same depth) and contains multiple nodes which keep data in sorted order. Each node has 2 or more children, known as the **branching factor** and consists of multiple keys.

Following are the 5 properties of a B tree.

1. Every node x has the following:

- n – Number of keys
- keyi – The keys stored in ascending order
- leaf – Whether x is a leaf or not

1. Every node x has x.n + 1 children
2. The keys x.keyi separate the ranges of keys stored in each sub-tree
3. All the leaves have the same depth, which is the tree height
4. Nodes have lower and upper bounds on the number of keys that can be stored. We consider t>=2, called **minimum degree** (or **branching factor**) of the B tree.

- The root must have at least one key.
- Every other node must have at least (t-1) keys and at most (2t-1) keys. Hence, every node will have at least t children and at most 2t children. We say the node is full if it has (2t-1) keys.

So now we have an idea what B trees are, I will go on and explain the delete operation, which is more complicated than insertion. When deleting, you have to make sure that the 5 B tree properties are preserved. We consider 3 cases in deletion of B trees and we are going to delete the key k.

## **Case 1**

If k is in node x which is a leaf and x.n>=t, you can straightaway delete k from x.

Let’s delete D from the B tree at the beginning.

![B tree delete case 1 - 1](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-1-1.png)

![B tree delete case 1 - 2](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-1-2.png)

## **Case 2**

If k is in a node x which is a leaf and x.n == t-1

![B tree delete case 2 - general](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2-general.png)

### Case 2a:

> Find the immediate sibling y of x, the extreme key m of y, the parent p of x and the parent key l of k
>
> If y.n >= t:
>
> Move l of x into x
>
> Move m of y to parent p
>
> Delete k from x

Let’s delete F from the B tree at the beginning.

![B tree delete Case 2a - 1](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2a-1.png)

![B tree delete Case 2a - 2](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2a-2.png)

![B tree delete Case 2a - 3](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2a-3.png)

### Case 2b:

> Find the immediate sibling y of x, the extreme key m of y, the parent p of x and the parent key l of k
>
> If y.n == (t-1):
>
> Merge x and y
>
> Move down l to the new node as the median key
>
> Delete k from the new node

Let’s delete B from the B tree at the beginning.

![B tree delete Case 2b - 1](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2b-1.png)

![B tree delete Case 2b - 2.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2b-2.png)

![B tree delete Case 2b - 3.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2b-3.png)

## **Case 3**

If k is in node x and x is an internal node (not a leaf)

![B tree delete case 3 - general.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3-general.png)

### Case 3a:

> Find the child node y that precedes k (the node which is on the left side of k)
>
> If y.n >= t:
>
> Find the key k’ in y which is the predecessor of k
>
> Delete k’ recursively. (Here k’ can be another internal node as well. So we have to delete it in the same way as well)
>
> Replace k with k’ in x

Let’s delete M from the B tree at the beginning.

![B tree delete Case 3a - 1.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3a-1.png)

![B tree delete Case 3a - 2.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3a-2.png)

### Case 3b:

> Find the child node y that precedes k
>
> If y.n
> Find the child node z that follows k (the node which is on the right side of k)
>
> If z.n >= t:
>
> Find k’’ in z which is the successor of k
>
> Delete k’’ recursively
>
> Replace k with k’’ in x

Let’s delete G from the B tree at the beginning.

![B tree delete Case 3b - 1.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3b-1.png)

![B tree delete Case 3b - 2.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3b-2.png)

### Case 3c:

> Find the child node y that precedes k and the child node z that follows k
>
> If y.n == (t-1) && z.n == (t-1):
>
> Merge k and z to y
>
> Free memory of node z
>
> Recursively delete k from y

Let’s delete C from the B tree at the beginning.

![B tree delete Case 3c - 1](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3c-1.png)

![B tree delete Case 3c - 2.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3c-2.png)

![B tree delete Case 3c - 3.png](/blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3c-3.png)

Hope you all got an idea on how to delete keys from a B tree… 🙂

### References

1. Introduction to Algorithms (Third Edition) by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Livest andClifford Stein
2. B Tree – deleting a key – YouTube — [https://www.youtube.com/watch?v=fKubKYzwDl0](https://www.youtube.com/watch?v=fKubKYzwDl0)
