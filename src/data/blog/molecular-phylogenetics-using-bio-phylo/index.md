---
title: "Molecular Phylogenetics using Bio.Phylo"
slug: "molecular-phylogenetics-using-bio-phylo"
date: "2018-03-24"
updated: "2020-02-28"
sourceUrl: "https://vijinimallawaarachchi.com/2018/03/24/molecular-phylogenetics-using-bio-phylo/"
featuredImage: "/blog-images/molecular-phylogenetics-using-bio-phylo/phylogeny-1.png"
categories: ["Algorithms", "Bioinformatics", "Computer Science", "Data Science", "Genomics"]
tags: ["Bioinformatics", "Biopython", "Phylogenetic Trees", "Phylogenetics"]
---
<p id="683e">Have you ever wondered how life formed from the primordial soup and evolved to the different life forms which can be seen at present? How did different species evolved from their ancestors and what relationships do they have with each other? The answers to these questions can be answered through the study of <strong>phylogenetics</strong>.</p>
<p id="cdf3">This article will walk you through the following topics.</p>
<ol>
<li id="d2ac">What is Phylogenetics?</li>
<li id="1a0c">Phylogenetic Trees</li>
<li id="43b1">Algorithms used for Phylogenetic Inference</li>
<li id="d738">Sample Practice Task with Code</li>
</ol>
<h2 id="60e1">What is Phylogenetics?</h2>
<p id="b894">According to Wikipedia,</p>
<blockquote id="d3ba"><p><strong>Phylogenetics</strong> is the study of the evolutionary history and relationships among individuals or groups of organisms.</p></blockquote>
<p id="6c72">The relationships among organisms are discovered through <strong>phylogenetic inference methods</strong> where heritable traits, such as DNA sequences or morphologies can be observed under a certain model of evolution. The result of these analyses is a <strong>phylogeny</strong> (also known as a <strong>phylogenetic tree</strong>). It is a diagram depicting a hypothesis about the history of the evolutionary relationships of a group of organisms or a family of genes.</p>
<p id="67f8"><strong>Molecular phylogenetics </strong>is a branch of phylogenetics that analyses how certain molecules, mainly DNA sequences and proteins have changed over time, to determine evolutionary relationships of a group of organisms or a family of genes.</p>
<h2 id="f6bf">Phylogenetic Trees</h2>
<p id="e3d9">Phylogenetic trees represent evolutionary relationships between organisms or genes. The pattern of branching in a phylogenetic tree reflects how species or other groups have evolved from a series of common ancestors. An example of a phylogenetic tree is the <a href="https://www.evogeneao.com/learn/tree-of-life" target="_blank" rel="noopener nofollow"><strong>Tree of Life</strong></a> which denotes how various species of organisms have evolved since the birth of Earth.</p>
<p id="becb">In a phylogenetic tree, the <strong>species</strong> or <strong>groups</strong> of interest are found at the tips of lines known as <strong>branches</strong>. The points where branches are divided are called <strong>branch points</strong>.</p>
<p><img src="../../blog-images/molecular-phylogenetics-using-bio-phylo/6a7912e4f113f2e0dde68a8292aa06170e1cff00.png" alt="6a7912e4f113f2e0dde68a8292aa06170e1cff00"   />Image Source: <a href="https://www.khanacademy.org/science/biology/her/tree-of-life/a/phylogenetic-trees" target="_blank" rel="noopener nofollow">Khan Academy</a></p>
<p>Two species are <strong>more related</strong> if they have a more recent <strong>common ancestor </strong>and <strong>less related</strong> if they have a less recent common ancestor.</p>
<p><img src="../../blog-images/molecular-phylogenetics-using-bio-phylo/aa95c701ebf845d93fed8362da63cbcc8439fb31.png" alt="aa95c701ebf845d93fed8362da63cbcc8439fb31"   />Image Source: <a href="https://www.khanacademy.org/science/biology/her/tree-of-life/a/phylogenetic-trees" target="_blank" rel="noopener nofollow">Khan Academy</a></p>
<p>Given below is a phylogenetic tree for primates based on their genetic data. Gorillas and Orangutans have diverged earlier than other primate groups. The <em>Homo</em> lineage (humans) has moved along one path where as the <em>Pan</em> lineage has moved along another path. Later on, the <em>Pan</em> lineage has divided, yielding Chimpanzees and Bonobos.</p>
<p><img src="../../blog-images/molecular-phylogenetics-using-bio-phylo/screen-shot-2018-03-24-at-12-21-00-am.png" alt="Screen Shot 2018-03-24 at 12.21.00 AM"   />Phylogenetic tree for primates based on their genetic data</p>
<h2 id="5e8e">Algorithms used for Phylogenetic Inference</h2>
<p id="994d">There are three main categories of algorithms that are used for phylogenetic inference from any type of biological data. They are,</p>
<ol>
<li id="9832">Distance-based methods</li>
<li id="20c0">Maximum Parsimony (MP) methods</li>
<li id="baa6">Probabilistic methods</li>
</ol>
<h3 id="c740">1. Distance-based Methods</h3>
<p id="d297">Distance-based methods compute an <strong>evolutionary distance</strong>, which is the number of changes that have occurred for two species considered to diverge from a common ancestor. However, these methods face problems with accuracy when it comes to dealing with large volumes of data which have very distant relationships.</p>
<h3 id="cbd9"><strong>2. Maximum Parsimony (MP) methods</strong></h3>
<p id="be35">MP methods infer a tree that minimises the total number of changes, known as <strong>mutations</strong>, required to explain the data. Under the maximum parsimony criterion, the shortest possible tree that explains the data is considered as the best tree. This best tree is known as the <strong>most-parsimonious tree</strong>. Heuristic search is performed to quickly generate the most-parsimonious tree. Since this methods considers the shortest possible tree as the best tree, actual evolutionary changes that have occurred may be underestimated.</p>
<h3 id="bfce">3. Probabilistic methods</h3>
<p id="ee3b">Probabilistic methods, such as <strong>Maximum Likelihood (ML)</strong> and <strong>Bayesian inference</strong><em>, </em>attempt to find a tree that maximises the conditional or posterior probability of observing the data. Phylogenetic studies at present, widely utilise Bayesian frameworks due to the possibility of accounting for the phylogenetic uncertainty, availability of efficient algorithms and their implementation as various computer programs.</p>
<h2 id="88f0">Bio.Phylo — Time to Practice</h2>
<p id="6bdd">Since we have a basic idea about phylogenetic trees, it is time to try out some coding. I have introduced a set of Python tools named <strong>Biopython</strong> in one of my <a href="https://towardsdatascience.com/pairwise-sequence-alignment-using-biopython-d1a9d0ba861f" target="_blank" rel="noopener nofollow">previous articles</a>, which can be used to analyse biological data. If you haven’t gone through it make sure to check it out as well.</p>
<p id="eaac">I will be using the <strong>Bio.Phylo</strong> module which provides classes, functions and I/O support for working with phylogenetic trees. You can go through the <a href="http://biopython.org/wiki/Phylo" target="_blank" rel="nofollow noopener">official documentation</a> to get more details about this module.</p>
<h3 id="d724">Task — Construct the phylogenetic tree for the given DNA sequences</h3>
<p id="8150">Consider you are provided five DNA sequences with their labels in the beginning of each line. You can find these sequences in a file named as <a href="https://github.com/biopython/biopython/blob/master/Tests/TreeConstruction/msa.phy" target="_blank" rel="noopener nofollow"><em>msa.phy</em></a> in the <a href="https://github.com/biopython/biopython/tree/master/Tests/TreeConstruction" target="_blank" rel="noopener nofollow">official biopython test material for tree construction</a>. The sequences considered are given below.</p>
<ol>
<li id="324c">Alpha <strong>AACGTGGCCACAT</strong></li>
<li id="6fac">Beta <strong>AAGGTCGCCACAC</strong></li>
<li id="2d68">Gamma <strong>CAGTTCGCCACAA</strong></li>
<li id="c75f">Delta <strong>GAGATTTCCGCCT</strong></li>
<li id="9605">Epsilon <strong>GAGATCTCCGCCC</strong></li>
</ol>
<p id="59e4">We are given the task of constructing the phylogenetic tree to represent these sequences based on distance-based phylogenetic inference methods.</p>
<p id="262c">Currently, Bio.Phylo module has two types of tree constructors: <code>DistanceTreeConstructor</code> and <code>ParsimonyTreeConstructor</code>. We will be using <code><strong>DistanceTreeConstructor</strong></code> for this task.</p>
<p id="f8d7">Furthermore, the <code>DistanceTreeConstructor</code> supports two heuristic algorithms: <code>UPGMA</code> (Unweighted Pair Group Method with Arithmetic Mean) and <code>NJ</code> (Neighbor Joining). We will be using the <code><strong>UPGMA</strong></code> algorithm. You can read more about the UPGMA algorithm from this <a href="https://www.pellegrini.mcdb.ucla.edu/wp-content/uploads/sites/21/2017/07/week-3c-Phylogenetic_Tree_ConstructionMai-copy.pdf" target="_blank" rel="noopener nofollow">link</a>.</p>
<h3 id="be15">Solution</h3>
<p id="91c9">Firstly, make sure you have downloaded the <em>msa.phy</em> file which contains the input sequences and include it in your current working directory.</p>
<p id="c122">Given below is the python code to create the phylogenetic tree for the given DNA sequences. Note how we have used <strong>Bio.Phylo</strong> module and its functionality.</p>
<style>.gist table { margin-bottom: 0; }</style>
<div id="gist88582569">
<div translate="no">
<div>
<div>
<div id="file-treeconstructiondistancebased-py">
<div itemprop="text"
     
      tabindex="0" role="region"
      aria-label="TreeConstructionDistanceBased.py content, created by Vini2 on 08:00PM on March 23, 2018."
    ></p>
<div>
<p>  <template></p>
<div>
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg><br />
    <span><br />
      This file contains hidden or bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.<br />
      <a href="https://github.co/hiddenchars" target="_blank">Learn more about bidirectional Unicode characters</a><br />
    </span></p>
<div>        <a href="{{ revealButtonHref }}">    Show hidden characters<br />
</a>
</div>
</div>
<p></template><br />
<template><br />
  <span aria-label="This line has hidden Unicode characters"><br />
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg><br />
</span></template></p>
<table data-hpc data-paste-markdown-skip>
<tr>
<td id="file-treeconstructiondistancebased-py-L1"></td>
<td id="file-treeconstructiondistancebased-py-LC1"># Import modules</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L2"></td>
<td id="file-treeconstructiondistancebased-py-LC2">from Bio import Phylo</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L3"></td>
<td id="file-treeconstructiondistancebased-py-LC3">from Bio.Phylo.TreeConstruction import DistanceCalculator</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L4"></td>
<td id="file-treeconstructiondistancebased-py-LC4">from Bio.Phylo.TreeConstruction import DistanceTreeConstructor</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L5"></td>
<td id="file-treeconstructiondistancebased-py-LC5">from Bio import AlignIO</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L6"></td>
<td id="file-treeconstructiondistancebased-py-LC6">
</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L7"></td>
<td id="file-treeconstructiondistancebased-py-LC7"># Read the sequences and align</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L8"></td>
<td id="file-treeconstructiondistancebased-py-LC8">aln = AlignIO.read(&#39;msa.phy&#39;, &#39;phylip&#39;)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L9"></td>
<td id="file-treeconstructiondistancebased-py-LC9">
</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L10"></td>
<td id="file-treeconstructiondistancebased-py-LC10"># Print the alignment</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L11"></td>
<td id="file-treeconstructiondistancebased-py-LC11">print aln</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L12"></td>
<td id="file-treeconstructiondistancebased-py-LC12">
</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L13"></td>
<td id="file-treeconstructiondistancebased-py-LC13"># Calculate the distance matrix</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L14"></td>
<td id="file-treeconstructiondistancebased-py-LC14">calculator = DistanceCalculator(&#39;identity&#39;)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L15"></td>
<td id="file-treeconstructiondistancebased-py-LC15">dm = calculator.get_distance(aln)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L16"></td>
<td id="file-treeconstructiondistancebased-py-LC16">
</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L17"></td>
<td id="file-treeconstructiondistancebased-py-LC17"># Print the distance Matrix</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L18"></td>
<td id="file-treeconstructiondistancebased-py-LC18">print(&#39;\nDistance Matrix\n===================&#39;)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L19"></td>
<td id="file-treeconstructiondistancebased-py-LC19">print(dm)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L20"></td>
<td id="file-treeconstructiondistancebased-py-LC20">
</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L21"></td>
<td id="file-treeconstructiondistancebased-py-LC21"># Construct the phylogenetic tree using UPGMA algorithm</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L22"></td>
<td id="file-treeconstructiondistancebased-py-LC22">constructor = DistanceTreeConstructor()</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L23"></td>
<td id="file-treeconstructiondistancebased-py-LC23">tree = constructor.upgma(dm)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L24"></td>
<td id="file-treeconstructiondistancebased-py-LC24">
</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L25"></td>
<td id="file-treeconstructiondistancebased-py-LC25"># Draw the phylogenetic tree</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L26"></td>
<td id="file-treeconstructiondistancebased-py-LC26">Phylo.draw(tree)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L27"></td>
<td id="file-treeconstructiondistancebased-py-LC27">
</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L28"></td>
<td id="file-treeconstructiondistancebased-py-LC28"># Print the phylogenetic tree in the terminal</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L29"></td>
<td id="file-treeconstructiondistancebased-py-LC29">print(&#39;\nPhylogenetic Tree\n===================&#39;)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L30"></td>
<td id="file-treeconstructiondistancebased-py-LC30">Phylo.draw_ascii(tree)</td>
</tr>
<tr>
<td id="file-treeconstructiondistancebased-py-L31"></td>
<td id="file-treeconstructiondistancebased-py-LC31">
</td>
</tr>
</table>
</div></div>
</p></div>
</div></div>
<div>
        <a href="https://gist.github.com/Vini2/0723caa046c6b8e1d745a623f2695abb/raw/75e21c845d640adc9050606e9824257c7398591b/TreeConstructionDistanceBased.py">view raw</a><br />
        <a href="https://gist.github.com/Vini2/0723caa046c6b8e1d745a623f2695abb#file-treeconstructiondistancebased-py"><br />
          TreeConstructionDistanceBased.py<br />
        </a><br />
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
</p></div>
</div>
<p>By running the code, we can get the phylogenetic tree as a graphical visualisation as well as get it printed in the terminal as shown below.</p>
<p><img src="../../blog-images/molecular-phylogenetics-using-bio-phylo/screen-shot-2018-03-24-at-1-34-59-am.png" alt="Screen Shot 2018-03-24 at 1.34.59 AM"   />Graphical visualisation of the phylogenetic tree using UPGMA</p>
<p><img src="../../blog-images/molecular-phylogenetics-using-bio-phylo/screen-shot-2018-03-24-at-1-35-09-am.png" alt="Screen Shot 2018-03-24 at 1.35.09 AM"   />The phylogenetic tree using UPGMA printed in the terminal at the end</p>
<p>If you use NJ algorithm instead of UPGMA algorithm, the resulting tree will be changed as shown below.</p>
<p><img src="../../blog-images/molecular-phylogenetics-using-bio-phylo/screen-shot-2018-03-24-at-1-53-53-am.png" alt="Screen Shot 2018-03-24 at 1.53.53 AM"   />Graphical visualisation of the phylogenetic tree using NJ</p>
<p><img src="../../blog-images/molecular-phylogenetics-using-bio-phylo/screen-shot-2018-03-24-at-1-54-01-am.png" alt="Screen Shot 2018-03-24 at 1.54.01 AM"   />The phylogenetic tree using NJ printed in the terminal at the end</p>
<p id="6749">Hope you enjoyed reading this article and learned useful and interesting things about molecular genetics and how to use Biopython to construct phylogenetic trees from a given set of sequences. I would love to hear your thoughts and ideas.</p>
<p id="cca2">Thanks for reading… 😊</p>
<hr />
<p>Originally posted in Medium.com at <a href="https://towardsdatascience.com/molecular-phylogenetics-using-bio-phylo-57ce27492ee9?source=friends_link&amp;sk=555e3480677906f526764cd5ead6608c" target="_blank" rel="noopener">Towards Data Science</a></p>
