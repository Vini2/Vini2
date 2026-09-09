---
title: "Introduction to Genetic Algorithms"
slug: "introduction-to-genetic-algorithms"
date: "2017-06-02"
updated: "2019-08-28"
sourceUrl: "https://vijinimallawaarachchi.com/2017/06/02/introduction-to-genetic-algorithms/"
featuredImage: "/blog-images/introduction-to-genetic-algorithms/ga-cover.png"
categories: ["Algorithms", "Machine Learning"]
tags: ["Algorithms", "Machine Learning", "Optimization"]
---
<p>A <strong>genetic algorithm</strong> is a search heuristic that is inspired by Charles Darwin’s theory of natural evolution. This algorithm reflects the process of natural selection where the fittest individuals are selected for reproduction in order to produce offspring of the next generation.</p>
<h2><strong>Notion of Natural Selection</strong></h2>
<p>The process of natural selection starts with the selection of fittest individuals from a population. They produce offspring which inherit the characteristics of the parents and will be added to the next generation. If parents have better fitness, their offspring will be better than parents and have a better chance at surviving. This process keeps on iterating and at the end, a generation with the fittest individuals will be found.</p>
<p>This notion can be applied for a search problem. We consider a set of solutions for a problem and select the set of best ones out of them.</p>
<p>Five phases are considered in a genetic algorithm.</p>
<ol>
<li>Initial population</li>
<li>Fitness function</li>
<li>Selection</li>
<li>Crossover</li>
<li>Mutation</li>
</ol>
<h2><strong>Initial Population</strong></h2>
<p>The process begins with a set of individuals which is called a <strong>Population</strong>. Each individual is a solution to the problem you want to solve.</p>
<p>An individual is characterized by a set of parameters (variables) known as <strong>Genes</strong>. Genes are joined into a string to form a <strong>Chromosome</strong> (solution).</p>
<p>In a genetic algorithm, the set of genes of an individual is represented using a string, in terms of an alphabet. Usually, binary values are used (string of 1s and 0s).</p>
<p><img src="../../blog-images/introduction-to-genetic-algorithms/ga1.png" alt="GA1"   /></p>
<h2><strong>Fitness Function</strong></h2>
<p>The <strong>fitness function</strong> determines how fit an individual is (the ability of an individual to compete with other individuals). It gives a <strong>fitness score</strong> to each individual. The probability that an individual will be selected for reproduction is based on its fitness score.</p>
<h2><strong>Selection</strong></h2>
<p>The idea of <strong>selection</strong> phase is to select the fittest individuals and let them pass their genes to the next generation.</p>
<p>Two pairs of individuals (<strong>parents</strong>) are selected based on their fitness scores. Individuals with high fitness have more chance to be selected for reproduction.</p>
<h2><strong>Crossover</strong></h2>
<p><strong>Crossover</strong> is the most significant phase in a genetic algorithm. For each pair of parents to be mated, a <strong>crossover point</strong> is chosen at random from within the genes.</p>
<p>For example, consider the crossover point to be 3 as shown below.</p>
<p><img src="../../blog-images/introduction-to-genetic-algorithms/ga2.png" alt="GA2"   /></p>
<p><strong>Offspring</strong> are created by exchanging the genes of parents among themselves until the crossover point is reached.</p>
<p><img src="../../blog-images/introduction-to-genetic-algorithms/ga3.png" alt="GA3"   /></p>
<p>The new offspring are added to the population.</p>
<p><img src="../../blog-images/introduction-to-genetic-algorithms/ga4.png" alt="GA4"   /></p>
<h2><strong>Mutation</strong></h2>
<p>In certain new offspring formed, some of their genes can be subjected to a <strong>mutation</strong> with a low random probability. This implies that some of the bits in the bit string can be flipped.</p>
<p><img src="../../blog-images/introduction-to-genetic-algorithms/ga5.png" alt="GA5"   /></p>
<p>Mutation occurs to maintain diversity within the population and prevent premature convergence.</p>
<h2>Termination</h2>
<p>The algorithm terminates if the population has converged (does not produce offspring which are significantly different from the previous generation). Then it is said that the genetic algorithm has provided a set of solutions to our problem.</p>
<h2>Psuedocode</h2>
<blockquote><p>START</p>
<p>Generate the initial population</p>
<p>Compute fitness</p>
<p>REPEAT</p>
<p>Selection</p>
<p>Crossover</p>
<p>Mutation</p>
<p>Compute fitness</p>
<p>UNTIL population has converged</p>
<p>STOP</p></blockquote>
<h2>References</h2>
<p>Introduction to Genetic Algorithms &#8211; <a href="https://www.youtube.com/watch?v=zwYV11a__HQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=zwYV11a__HQ</a></p>
<p>Genetic Algorithm &#8211; explained in 4 minutes &#8211; <a href="https://www.youtube.com/watch?v=Y-XMh-iw07w" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=Y-XMh-iw07w</a></p>
<p>An Introduction to Genetic Algorithms by Melanie Mitchell &#8211; <a href="https://pdfs.semanticscholar.org/e0fd/bda2b7ebab03f798f9d33847050d012df9cc.pdf" target="_blank" rel="noopener">https://pdfs.semanticscholar.org/e0fd/bda2b7ebab03f798f9d33847050d012df9cc.pdf</a></p>
