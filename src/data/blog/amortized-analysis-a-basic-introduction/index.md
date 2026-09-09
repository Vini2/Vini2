---
title: "Amortized Analysis – A basic introduction"
slug: "amortized-analysis-a-basic-introduction"
date: "2017-05-06"
updated: "2020-02-28"
sourceUrl: "https://vijinimallawaarachchi.com/2017/05/06/amortized-analysis-a-basic-introduction/"
featuredImage: "/blog-images/amortized-analysis-a-basic-introduction/capture31.png"
categories: ["Algorithm Analysis", "Algorithms", "Data Structures"]
tags: ["Algorithms", "Amortized Analysis", "Data Structures"]
---
<h2>What is Amortized Analysis?</h2>
<p>In amortized analysis, we average the time needed to perform a sequence of data structure operations. By this method, we can show that the average cost of an operation is small, even if we have a single operation within the sequence which might be expensive. Amortized analysis guarantees the average performance of each operation in the worst case.</p>
<p>There are three common techniques used in amortized analysis, which are,</p>
<ol>
<li>Aggregate analysis</li>
<li>Accounting method</li>
<li>Potential method</li>
</ol>
<h2>Aggregate Analysis</h2>
<p>In this method we consider a sequence of n operations and take the worst case time as T(n) in total. Now the average cost, or <strong>amortized cost</strong>, per operation will be T(n)/n.</p>
<p>Note: This amortized cost applies for each operation, even when there are several types of operations within the sequence of operations.</p>
<h3>Example</h3>
<p>Let’s consider a stack with operations Push, Pop and Multipop.</p>
<ul>
<li><strong>Push(S, x)</strong> – Push object x to stack S. Takes O(1) time.</li>
<li><strong>Pop(S)</strong> – Pop (remove) the element on top of the stack and return it. Takes O(1) time.</li>
<li><strong>Multipop(S, k)</strong> – Remove the k top objects of the stack S, popping the entire stack if the stack contains fewer than k elements. If the stack contains s elements, then the running time will be min(k, s).</li>
</ul>
<blockquote><p><strong>Multipop(S, k)</strong></p>
<p>while not Stack-Empty(S) and k&gt;0</p>
<p>Pop(S)</p>
<p>k = k – 1</p></blockquote>
<p>Now consider a sequence of n Push, Pop and Multipop operations on an initially empty stack.</p>
<p>Worst case cost of Multipop operation in the sequence will be O(n) as there at most n elements in the stack. The worst case time for any stack operation will be O(n). Hence a sequence of n operations with order O(n) will take O(n<sup>2</sup>) time. This is not a tight bound.</p>
<p>Using aggregate analysis we can obtain a better upper bound considering the sequence of operations. We can say that the sequence of n Push, Pop and Multipop operations can cost at most O(n). This is because we can call Pop function (including the Pop calls in Multipop) for each element at most once, as we push them on to the stack.</p>
<p>The average cost of an operation is O(n)/n = O(1)</p>
<p>In aggregate analysis, the amortized cost of each operation is the average cost. Hence, the three stack operations have an amortized cost of O(1).</p>
<h2>Accounting Method</h2>
<p>In this method we assign different charges for operations. Some operations charge more or less than their actual cost. The amount we charge an operation is called the <strong>amortized cost</strong>. When the amortized cost of an operation exceeds its actual cost, the difference is assigned to the specific objects in the data structure as <strong>credit</strong>. Credits can pay for operations which have amortized cost less than the actual cost.</p>
<h3>Example</h3>
<p>Let the cost of the i<sup>th</sup> operation be c<sub>i</sub> and its amortized cost be ĉ<sub>i</sub>. Then for all the n operations in the sequence, the following should hold.</p>
<p><img src="../../blog-images/amortized-analysis-a-basic-introduction/capture1.png" alt="Capture1"   /></p>
<p>The sum of amortized costs should be greater than or equal to the sum of actual costs. Total amortized cost is an upper bound for the total actual cost.</p>
<p>Let’s consider the same stack example as before. The actual costs of the operations are as follows. The stack contains s elements.</p>
<ul>
<li>Push = 1</li>
<li>Pop = 1</li>
<li>Multipop(S, k) = min(k, s)</li>
</ul>
<p>Let’s assign the amortized costs for each of these operations as follows.</p>
<ul>
<li>Push = 2</li>
<li>Pop = 0</li>
<li>Multipop(S, k) = 0</li>
</ul>
<p>When we push an element to the stack, we use 1 unit to pay for the actual cost and are left with credit of 1 unit. This credit is left with the pushed element. This credit serves as payment for the cost of popping it from the stack. When we pop an element, we charge the operation nothing and pay the actual cost from the credit stored in that element. The same can be applied for the Multipop function.</p>
<p>When we perform n operations, the total amortized cost will be O(n).</p>
<h2>Potential Method</h2>
<p>Instead of storing the extra cost as credit, the potential method represents the extra cost as potential energy or just potential.</p>
<p>We perform n operations, starting with an initial data structure D<sub>0</sub>. Let c<sub>i</sub> be the cost of the i<sup>th</sup> operation and D<sub>i</sub> be the data structure that results after performing the i<sup>th</sup> operation to the data structure D<sub>i-1</sub>.</p>
<p>A potential function ɸ maps D<sub>i</sub> to a real number ɸ(D<sub>i</sub>), known as the potential of D<sub>i</sub>. ɸ is defined such that it hold the following two properties.</p>
<ul>
<li>ɸ(D<sub>0</sub>) = 0</li>
<li>ɸ(D<sub>i</sub>) &gt;= 0</li>
</ul>
<p>The amortized cost ĉ<sub>i</sub> of the i<sup>th</sup> operation with respect to the potential function ɸ is defined as,</p>
<blockquote><p>ĉ<sub>i</sub> = Actual cost + Change in potential</p>
<p>ĉ<sub>i</sub> = c<sub>i</sub> + ɸ(D<sub>i</sub>) &#8211; ɸ(D<sub>i-1</sub>)</p></blockquote>
<p>Total amortized cost over the n operations will be,</p>
<p><img src="../../blog-images/amortized-analysis-a-basic-introduction/capture2.png" alt="Capture2"   /></p>
<h3>Example</h3>
<p>Let’s get back to the stack example. We can define potential function ɸ as the number of objects in the stack. For the initially empty stack D<sub>0</sub> we have ɸ(D<sub>0</sub>) = 0. The number of objects in the stack cannot be a negative value. Hence, ɸ(D<sub>i</sub>) &gt;= 0.</p>
<p>Now let’s compute the amortized cost for each operation. Consider the i<sup>th</sup> operation is performed on a stack with s elements.</p>
<p>For a Push operation with actual cost as 1,</p>
<blockquote><p>ĉ<sub>i</sub> = c<sub>i</sub> + ɸ(D<sub>i</sub>) &#8211; ɸ(D<sub>i-1</sub>)</p>
<p>ĉ<sub>i</sub> = 1 + (s+1) &#8211; s = 2</p></blockquote>
<p>For a Pop operation with actual cost as 1,</p>
<blockquote><p>ĉ<sub>i</sub> = c<sub>i</sub> + ɸ(D<sub>i</sub>) &#8211; ɸ(D<sub>i-1</sub>)</p>
<p>ĉ<sub>i</sub> = 1 + (s-1) &#8211; s = 0</p></blockquote>
<p>For a Multipop(S, k) operation with actual cost as k’ = min(k, s)</p>
<blockquote><p>ĉ<sub>i</sub> = c<sub>i</sub> + ɸ(D<sub>i</sub>) &#8211; ɸ(D<sub>i-1</sub>)</p>
<p>ĉ<sub>i</sub> = k’ + (s-k’) &#8211; s = 0</p></blockquote>
<p>The amortized cost for each of the three operations is O(1) and the total amortized cost for a sequence of n operations is O(n).</p>
<p>&nbsp;</p>
<h2>References</h2>
<ol>
<li id="a49b">Introduction to Algorithms (Third Edition) by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Livest and Clifford Stein</li>
</ol>
