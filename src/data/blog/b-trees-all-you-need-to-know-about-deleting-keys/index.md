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
<p>B tree is a self-balancing search tree (the tree adjusts itself so that all the leaves are at the same depth) and contains multiple nodes which keep data in sorted order. Each node has 2 or more children, known as the <strong>branching factor</strong> and consists of multiple keys.</p>
<p>Following are the 5 properties of a B tree.</p>
<ol>
<li>Every node x has the following:</li>
</ol>
<ul>
<li>n – Number of keys</li>
<li>key<sub>i</sub> – The keys stored in ascending order</li>
<li>leaf – Whether x is a leaf or not</li>
</ul>
<ol start="2">
<li>Every node x has x.n + 1 children</li>
<li>The keys x.key<sub>i</sub> separate the ranges of keys stored in each sub-tree</li>
<li>All the leaves have the same depth, which is the tree height</li>
<li>Nodes have lower and upper bounds on the number of keys that can be stored. We consider t&gt;=2, called <strong>minimum degree</strong> (or <strong>branching factor</strong>) of the B tree.</li>
</ol>
<ul>
<li>The root must have at least one key.</li>
<li>Every other node must have at least (t-1) keys and at most (2t-1) keys. Hence, every node will have at least t children and at most 2t children. We say the node is full if it has (2t-1) keys.</li>
</ul>
<p>So now we have an idea what B trees are, I will go on and explain the delete operation, which is more complicated than insertion. When deleting, you have to make sure that the 5 B tree properties are preserved. We consider 3 cases in deletion of B trees and we are going to delete the key k.</p>
<h2><strong>Case 1</strong></h2>
<p>If k is in node x which is a leaf and x.n&gt;=t, you can straightaway delete k from x.</p>
<p>Let’s delete D from the B tree at the beginning.</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-1-1.png" alt="B tree delete case 1 - 1"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-1-2.png" alt="B tree delete case 1 - 2"   /></p>
<h2><strong>Case 2</strong></h2>
<p>If k is in a node x which is a leaf and x.n == t-1</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2-general.png" alt="B tree delete case 2 - general"   /></p>
<h3>Case 2a:</h3>
<blockquote><p>Find the immediate sibling y of x, the extreme key m of y, the parent p of x and the parent key l of k</p>
<p>If y.n &gt;= t:</p>
<p>Move l of x into x</p>
<p>Move m of y to parent p</p>
<p>Delete k from x</p></blockquote>
<p>Let’s delete F from the B tree at the beginning.</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2a-1.png" alt="B tree delete Case 2a - 1"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2a-2.png" alt="B tree delete Case 2a - 2"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2a-3.png" alt="B tree delete Case 2a - 3"   /></p>
<h3>Case 2b:</h3>
<blockquote><p>Find the immediate sibling y of x, the extreme key m of y, the parent p of x and the parent key l of k</p>
<p>If y.n == (t-1):</p>
<p>Merge x and y</p>
<p>Move down l to the new node as the median key</p>
<p>Delete k from the new node</p></blockquote>
<p>Let’s delete B from the B tree at the beginning.</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2b-1.png" alt="B tree delete Case 2b - 1"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2b-2.png" alt="B tree delete Case 2b - 2.png"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-2b-3.png" alt="B tree delete Case 2b - 3.png"   /></p>
<h2><strong>Case 3</strong></h2>
<p>If k is in node x and x is an internal node (not a leaf)</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3-general.png" alt="B tree delete case 3 - general.png"   /></p>
<h3>Case 3a:</h3>
<blockquote><p>Find the child node y that precedes k (the node which is on the left side of k)</p>
<p>If y.n &gt;= t:</p>
<p>Find the key k’ in y which is the predecessor of k</p>
<p>Delete k’ recursively. (Here k’ can be another internal node as well. So we have to delete it in the same way as well)</p>
<p>Replace k with k’ in x</p></blockquote>
<p>Let’s delete M from the B tree at the beginning.</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3a-1.png" alt="B tree delete Case 3a - 1.png"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3a-2.png" alt="B tree delete Case 3a - 2.png"   /></p>
<h3>Case 3b:</h3>
<blockquote><p>Find the child node y that precedes k</p>
<p>If y.n &lt; t (or y.n == (t-1)):</p>
<p>Find the child node z that follows k (the node which is on the right side of k)</p>
<p>If z.n &gt;= t:</p>
<p>Find k’’ in z which is the successor of k</p>
<p>Delete k’’ recursively</p>
<p>Replace k with k’’ in x</p></blockquote>
<p>Let’s delete G from the B tree at the beginning.</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3b-1.png" alt="B tree delete Case 3b - 1.png"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3b-2.png" alt="B tree delete Case 3b - 2.png"   /></p>
<h3>Case 3c:</h3>
<blockquote><p>Find the child node y that precedes k and the child node z that follows k</p>
<p>If y.n == (t-1) &amp;&amp; z.n == (t-1):</p>
<p>Merge k and z to y</p>
<p>Free memory of node z</p>
<p>Recursively delete k from y</p></blockquote>
<p>Let’s delete C from the B tree at the beginning.</p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3c-1.png" alt="B tree delete Case 3c - 1"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3c-2.png" alt="B tree delete Case 3c - 2.png"   /></p>
<p><img src="../../blog-images/b-trees-all-you-need-to-know-about-deleting-keys/b-tree-delete-case-3c-3.png" alt="B tree delete Case 3c - 3.png"   /></p>
<p id="fa2d">Hope you all got an idea on how to delete keys from a B tree… 🙂</p>
<h3 id="8117">References</h3>
<ol>
<li id="a49b">Introduction to Algorithms (Third Edition) by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Livest andClifford Stein</li>
<li id="bdca">B Tree &#8211; deleting a key &#8211; YouTube — <a href="https://www.youtube.com/watch?v=fKubKYzwDl0" target="_blank" rel="nofollow noopener noreferrer">https://www.youtube.com/watch?v=fKubKYzwDl0</a></li>
</ol>
