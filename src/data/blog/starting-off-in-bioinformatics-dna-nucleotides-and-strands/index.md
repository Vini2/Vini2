---
title: "Starting off in Bioinformatics — DNA Nucleotides and Strands"
slug: "starting-off-in-bioinformatics-dna-nucleotides-and-strands"
date: "2017-10-02"
updated: "2017-10-02"
sourceUrl: "https://vijinimallawaarachchi.com/2017/10/02/starting-off-in-bioinformatics%e2%80%8a-%e2%80%8adna-nucleotides-and-strands/"
featuredImage: "/blog-images/starting-off-in-bioinformatics-dna-nucleotides-and-strands/word-art1.png"
categories: ["Bioinformatics", "Computer Science", "Data Science", "Genomics"]
tags: ["Algorithms", "Bioinformatics", "Data Science", "DNA", "Nucleotides"]
---
<p id="e3cd">In my <a href="https://medium.com/towards-data-science/a-dummies-intro-to-bioinformatics-e8212ed7c09b" target="_blank" rel="noopener">first article</a> where I introduced bioinformatics, I have mentioned that we will be learning a lot about DNA, RNA and Protein sequences. Since I’m new to all these DNA/RNA jargon, I decided to learn about them first and then try out some coding problems. All the sequencing problems seem to have some words related to genetics. So first things first, let’s get started. 😊</p>
<p id="1fdd"><strong>Note:</strong> I assume you have a basic knowledge about chemistry, thereby assuming you know the meaning of terms such as <em>hydrogen bonds</em>, <em>phosphate groups</em>, <em>hydroxyl groups</em>, etc.</p>
<h2 id="81c0">What is DNA?</h2>
<p id="4ff0"><strong>DNA </strong>or <strong>deoxyribonucleic acid</strong>, is a molecule that carries the genetic code of all living organisms. DNA together with its freiend <strong>RNA</strong> or <strong>ribonucleic acid</strong>are known as <strong>nucleic acids</strong>. DNA is the structure where all the biological information of a living being is stored.</p>
<h2 id="3caf">What are Nucleotides?</h2>
<p id="b4ca">DNA is a long, chainlike molecule which has two strands twisted into a double helix. The two strands are made up of simpler molecules called <strong>nucleotides</strong>. Each nucleotide is composed of one of the four nitrogen-containing <strong>nucleobases</strong><em>,</em></p>
<ol>
<li id="00fd"><strong><em>cytosine</em></strong><em> (</em><strong><em>C</em></strong><em>)</em></li>
<li id="a21b"><strong><em>guanine</em></strong><em> (</em><strong><em>G</em></strong><em>)</em></li>
<li id="3f84"><strong><em>adenine</em></strong><em> (</em><strong><em>A</em></strong><em>)</em></li>
<li id="36e4"><strong><em>thymine</em></strong><em> (</em><strong><em>T</em></strong><em>)</em></li>
</ol>
<p id="c2f8">along with a sugar called <strong><em>deoxyribose</em></strong>, and a <a href="https://en.wikipedia.org/wiki/Phosphate" target="_blank" rel="nofollow noopener"><strong><em>phosphate</em></strong></a><strong><em> group</em></strong>.</p>
<figure id="3c6c">
<div>
<div><img src="../../blog-images/starting-off-in-bioinformatics-dna-nucleotides-and-strands/10434-0gekwxytygflyh_nm.png" /></div>
</div><figcaption><em>DNA chemical structure (<a href="https://en.wikipedia.org/wiki/Nucleobase" target="_blank" rel="nofollow noopener">https://en.wikipedia.org/wiki/Nucleobase</a>)</em></figcaption></figure>
<p id="3223">These nucleobases are connected to one another in a chainlike structure by forming covalent bonds between the sugar of one nucleobase and the phosphate of the next, resulting in an alternating <strong>sugar-phosphate backbone</strong>. You can refer the diagram given above to get a clear understanding.</p>
<h2 id="5652">Representing a DNA Strand</h2>
<p id="6776">A single DNA strand, formed by connecting nucleobases as discussed above, can be simply represented as given below. You can map this representation to the previous image. This will be one side of the molecule in the above image.</p>
<figure id="b222">
<div>
<div><img src="../../blog-images/starting-off-in-bioinformatics-dna-nucleotides-and-strands/91a1f-1awfktgn1isddhobl-rrjvq.png" /></div>
</div><figcaption><em>Chained nucleotides constituting a DNA strand (Wiley: Bioinformatics For Dummies, 2nd Edition)</em></figcaption></figure>
<p id="d9d7">You may notice that there is an unused <a href="https://en.wikipedia.org/wiki/Phosphoryl_group" target="_blank" rel="nofollow noopener"><strong>phosphoryl group</strong></a> at the left extreme (also called<strong><em> 5&#8242;-terminus</em></strong>) and an unused <a href="https://en.wikipedia.org/wiki/Hydroxy_group" target="_blank" rel="nofollow noopener"><strong>hydroxyl group</strong></a> at the right extreme (also called <strong><em>3&#8242;-terminus</em></strong>). A DNA sequence of a single strand is always defined as a series of its constituent nucleotides listed in order from the unused phosphoryl group to the unused hydroxyl group. Above DNA sequence can be represented as,</p>
<pre id="8281"><strong>TGACT</strong> = <strong>Thymine-Guanine-Adenine-Cytosine-Thymine</strong></pre>
<h2 id="1a7c">The two sides of a DNA Sequence</h2>
<p id="3b17">The nucleobases of the two separate strands are connected together, according to the base pairing rules; <strong>A with T</strong> and <strong>C with G</strong>, along with <a href="https://en.wikipedia.org/wiki/Hydrogen_bond" target="_blank" rel="nofollow noopener"><strong>hydrogen bonds</strong></a>. DNA molecule consists of two <strong>complementary strands</strong> as shown below. The direction of reading the nucleotides is marked as well.</p>
<figure id="a4d1">
<div>
<div><img src="../../blog-images/starting-off-in-bioinformatics-dna-nucleotides-and-strands/64f38-1edp-m8vhdkd-m8ilzi8oyq.jpeg" /></div>
</div><figcaption><em>The two complementary strands of a complete DNA molecule (Wiley: Bioinformatics For Dummies, 2nd Edition)</em></figcaption></figure>
<p id="41b0">Complementarity means that the two strands follow the base pairing rules. Thymine (T) on one strand is always facing an adenine (A) and vice versa; guanine (G) is always facing a cytosine (C) and vice versa. When you know the sequence of nucleotides of one DNA strand, you can automatically deduce the sequence on the other strand.</p>
<p id="e40f">The representations of the facing strands of the above DNA molecule will be,</p>
<pre id="6140"><strong>TGACT </strong>and <strong>AGTCA</strong></pre>
<h2 id="2a6e">Time for some practice</h2>
<p id="97b3">I came across this interesting programming platform named <a href="http://rosalind.info/problems/list-view/" target="_blank" rel="nofollow noopener"><strong>Rosalind</strong></a> where you can learn bioinformatics and programming by solving the available problems. I will go through two of the problems which are related to what I have discussed in this article and explain how I solved them. I will be using my own examples for explanation. You can try them out from the link given above.</p>
<h3 id="b634">Counting DNA Nucleotides</h3>
<p id="06ae">Given a DNA sequence can be considered as a string with the alphabet {“A”, “C”, “G”, “T”}. We can count the number of times each letter appears in the string.</p>
<p id="0232">Given below is my solution in Python.</p>
<style>.gist table { margin-bottom: 0; }</style>
<div id="gist74319353">
<div translate="no">
<div>
<div>
<div id="file-counting_dna_nucleotides-py">
<div itemprop="text"
     
      tabindex="0" role="region"
      aria-label="Counting_DNA_Nucleotides.py content, created by Vini2 on 06:12PM on August 11, 2017."
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
<td id="file-counting_dna_nucleotides-py-L1"></td>
<td id="file-counting_dna_nucleotides-py-LC1"># Read the file and get the DNA string</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L2"></td>
<td id="file-counting_dna_nucleotides-py-LC2">file = open(&#39;sample_dna.txt&#39;, &#39;r&#39;)</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L3"></td>
<td id="file-counting_dna_nucleotides-py-LC3">dna = file.read()</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L4"></td>
<td id="file-counting_dna_nucleotides-py-LC4">
</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L5"></td>
<td id="file-counting_dna_nucleotides-py-LC5"># Print the original DNA string</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L6"></td>
<td id="file-counting_dna_nucleotides-py-LC6">print &quot;DNA String: &quot;, dna</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L7"></td>
<td id="file-counting_dna_nucleotides-py-LC7">
</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L8"></td>
<td id="file-counting_dna_nucleotides-py-LC8"># Print the count of each letter</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L9"></td>
<td id="file-counting_dna_nucleotides-py-LC9">print &quot;Count of A: &quot;, dna.count(&quot;A&quot;)</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L10"></td>
<td id="file-counting_dna_nucleotides-py-LC10">print &quot;Count of C: &quot;, dna.count(&quot;C&quot;)</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L11"></td>
<td id="file-counting_dna_nucleotides-py-LC11">print &quot;Count of G: &quot;, dna.count(&quot;G&quot;)</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L12"></td>
<td id="file-counting_dna_nucleotides-py-LC12">print &quot;Count of T: &quot;, dna.count(&quot;T&quot;)</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L13"></td>
<td id="file-counting_dna_nucleotides-py-LC13">
</td>
</tr>
<tr>
<td id="file-counting_dna_nucleotides-py-L14"></td>
<td id="file-counting_dna_nucleotides-py-LC14"># End of program</td>
</tr>
</table>
</div></div>
</p></div>
</div></div>
<div>
        <a href="https://gist.github.com/Vini2/709b1045f729cd3a6bac4fe5f25eabc0/raw/fcac20bdb7179ef762731ca9873ce8ac917a382d/Counting_DNA_Nucleotides.py">view raw</a><br />
        <a href="https://gist.github.com/Vini2/709b1045f729cd3a6bac4fe5f25eabc0#file-counting_dna_nucleotides-py"><br />
          Counting_DNA_Nucleotides.py<br />
        </a><br />
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
</p></div>
</div>
<p id="950d">My <em>sample_dna.txt</em> file contains the following DNA string.</p>
<pre id="9dc2"><strong>GTAAACCCCTTTTCATTTAGACAGATCGACTCCTTATCCATTCTCAGAGATGTGTTGCTGGTCGCCG</strong></pre>
<p id="01d3">Given below is the output.</p>
<figure id="e8bb">
<div>
<div></div>
<div><img src="../../blog-images/starting-off-in-bioinformatics-dna-nucleotides-and-strands/6ca9e-1arn-1slqgvz7dlo9wwztfq.png" /></div>
</div><figcaption><em>Counting DNA Nucleotides output</em></figcaption></figure>
<p id="36a9">We can read the DNA string from a file and then use the <em>string count</em> method of Python to count how many times each letter has occurred. You can also iterate the string in a loop and maintain counts for each letter separately.</p>
<h3 id="bdac">Complementing a Strand of DNA</h3>
<p id="e848">Recall what we have learned about the <strong>complementary strands</strong> of a DNA molecule. This question is about finding the sequence of the other facing strand.</p>
<p id="9385">Given below is my solution in Python.</p>
<style>.gist table { margin-bottom: 0; }</style>
<div id="gist74321357">
<div translate="no">
<div>
<div>
<div id="file-complementing_a_strand_of_dna-py">
<div itemprop="text"
     
      tabindex="0" role="region"
      aria-label="Complementing_a_Strand_of_DNA.py content, created by Vini2 on 06:44PM on August 11, 2017."
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
<td id="file-complementing_a_strand_of_dna-py-L1"></td>
<td id="file-complementing_a_strand_of_dna-py-LC1"># Read the file and get the DNA string</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L2"></td>
<td id="file-complementing_a_strand_of_dna-py-LC2">file = open(&quot;sample_dna.txt&quot;, &quot;r&quot;)</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L3"></td>
<td id="file-complementing_a_strand_of_dna-py-LC3">dna = file.read()</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L4"></td>
<td id="file-complementing_a_strand_of_dna-py-LC4">
</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L5"></td>
<td id="file-complementing_a_strand_of_dna-py-LC5"># Print the original DNA string</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L6"></td>
<td id="file-complementing_a_strand_of_dna-py-LC6">print &quot;DNA String: &quot;, dna</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L7"></td>
<td id="file-complementing_a_strand_of_dna-py-LC7">
</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L8"></td>
<td id="file-complementing_a_strand_of_dna-py-LC8"># Create dictionary of complementing nucleobase pairs</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L9"></td>
<td id="file-complementing_a_strand_of_dna-py-LC9">comp_pairs = {&quot;A&quot; : &quot;T&quot;, &quot;T&quot; : &quot;A&quot;, &quot;G&quot; : &quot;C&quot;, &quot;C&quot; : &quot;G&quot;}</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L10"></td>
<td id="file-complementing_a_strand_of_dna-py-LC10">
</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L11"></td>
<td id="file-complementing_a_strand_of_dna-py-LC11">complementing_strand = &quot;&quot;</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L12"></td>
<td id="file-complementing_a_strand_of_dna-py-LC12">
</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L13"></td>
<td id="file-complementing_a_strand_of_dna-py-LC13"># Generate the complementing strand</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L14"></td>
<td id="file-complementing_a_strand_of_dna-py-LC14">for i in range (len(dna)-1, -1, -1):</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L15"></td>
<td id="file-complementing_a_strand_of_dna-py-LC15">    complementing_strand += comp_pairs[dna[i]]</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L16"></td>
<td id="file-complementing_a_strand_of_dna-py-LC16">
</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L17"></td>
<td id="file-complementing_a_strand_of_dna-py-LC17"># Print the complementing strand</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L18"></td>
<td id="file-complementing_a_strand_of_dna-py-LC18">print &quot;Complement: &quot;, complementing_strand</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L19"></td>
<td id="file-complementing_a_strand_of_dna-py-LC19">
</td>
</tr>
<tr>
<td id="file-complementing_a_strand_of_dna-py-L20"></td>
<td id="file-complementing_a_strand_of_dna-py-LC20"># End of program</td>
</tr>
</table>
</div></div>
</p></div>
</div></div>
<div>
        <a href="https://gist.github.com/Vini2/2b12d66b199a99ddb75d9d36bcee381a/raw/a5d3a936dc104ef86661691d1970c68a7d46ee4a/Complementing_a_Strand_of_DNA.py">view raw</a><br />
        <a href="https://gist.github.com/Vini2/2b12d66b199a99ddb75d9d36bcee381a#file-complementing_a_strand_of_dna-py"><br />
          Complementing_a_Strand_of_DNA.py<br />
        </a><br />
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
</p></div>
</div>
<p id="c92e">My <em>sample_dna.txt</em> file contains the following DNA string.</p>
<pre id="a166"><strong>AAAACCCGGTGTCTTATATCGAGTCATGCAATTTTGGG</strong></pre>
<p id="26b3">Given below is the output.</p>
<figure id="ae03">
<div>
<div></div>
<div><img src="../../blog-images/starting-off-in-bioinformatics-dna-nucleotides-and-strands/051b0-1pbqcqbtfx6fdn5hwty7elw.png" /></div>
</div><figcaption><em>Complementing a Strand of DNA output</em></figcaption></figure>
<p id="a517">In this solution I have iterated through the string in reverse and replaced A with T, T with A, G with C and C with G, to obtain the complementing DNA string.</p>
<h2 id="e57b">Final Thoughts</h2>
<p id="5c6b">DNA sequences and related data are stored in huge databases and are used in different fields such as Forensics, Genealogy and Medicine. These simple techniques will become the building blocks towards developing solutions for more complex problems.</p>
<p id="4bab">Hope you enjoyed reading this article and learned something useful.</p>
<p id="6880">Since I’m still very new to this field, I would like to hear your advice. 😇</p>
<p id="679a">Thanks for reading… 😃</p>
<hr />
<p>This post was originally posted by me in <a href="https://medium.com/towards-data-science/starting-off-in-bioinformatics-dna-nucleotides-and-strands-8c32515271a8" target="_blank" rel="noopener">Medium.com</a></p>
<hr />
<p>&nbsp;</p>
