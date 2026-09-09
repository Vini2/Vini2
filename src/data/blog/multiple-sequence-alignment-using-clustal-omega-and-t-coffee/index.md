---
title: "Multiple Sequence Alignment using Clustal Omega and T-Coffee"
slug: "multiple-sequence-alignment-using-clustal-omega-and-t-coffee"
date: "2018-03-24"
updated: "2020-02-28"
sourceUrl: "https://vijinimallawaarachchi.com/2018/03/24/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/"
featuredImage: "/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/1cpnlejxfw3j2oau9kv9oyg.png"
categories: ["Algorithms", "Bioinformatics", "Computer Science", "Data Science", "Genomics"]
tags: ["Bioinformatics", "Data Science", "MSA", "Sequence Alignment"]
---
<div>
<p id="4adf">Have you wondered how scientists identify regions of similarity in three or more biological sequences? As described in my <a href="https://medium.com/towards-data-science/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f" target="_blank" rel="noopener">previous article</a>, <strong>Sequence alignment</strong> is a method of arranging sequences of DNA, RNA, or protein to identify regions of similarity. In my latest article on bioinformatics, I have discussed about <a href="https://medium.com/towards-data-science/pairwise-sequence-alignment-using-biopython-d1a9d0ba861f" target="_blank" rel="noopener"><strong>pairwise sequence alignment</strong></a>. Make sure to check them out as well. Multiple sequence alignment is quite similar to pairwise sequence alignment, but it uses three or more sequences instead of only two sequences.</p>
<p></p>
<p id="f8c7">In this article, I will be walking you through <strong>multiple sequence alignment</strong>. Furthermore, we will be trying out some examples with <strong>Clustal Omega</strong> and <strong>T-Coffee</strong> whicle checking out some coding examples with <strong>Biopython</strong>.</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/1d0ab-1cpnlejxfw3j2oau9kv9oyg.png" /></p>
<p><em>Figure 1: Results from T-Coffee</em></p>
<h2 id="9f83">What is Multiple Sequence Alignment?</h2>
<p id="bca5">In <strong>multiple sequence alignment (MSA) </strong>we try to align <strong><em>three or more related sequences</em></strong> so as to achieve maximal matching between them. The goal of <strong>MSA</strong> is to arrange a set of sequences in such a way that as many characters from each sequence are matched according to some scoring function.</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/0e783-0bkaomvm5ln1kllao.png" /></p>
<p><em>Figure 2: Image Source: <a href="https://openi.nlm.nih.gov/detailedresult.php?img=PMC2921379_1756-0500-3-199-1&amp;req=4" target="_blank" rel="nofollow noopener noopener">https://openi.nlm.nih.gov/detailedresult.php?img=PMC2921379_1756-0500-3-199-1&amp;req=4</a></em></p>
<h2 id="4839">Scoring</h2>
<p id="a4db">The scoring process of <strong>MSA</strong> is based on the sum of the scores of all possible pairs of sequences in the multiple alignment according to some scoring matrix. You can refer my <a href="https://medium.com/towards-data-science/pairwise-sequence-alignment-using-biopython-d1a9d0ba861f" target="_blank" rel="noopener">previous article</a> to learn about the different scoring matrices and how to match them.</p>
<blockquote id="c469"><p>Score of multiple alignment = ∑ score(A, B)</p></blockquote>
<p id="ac1a">where score(A, B) = pair-wise alignment score of A, B.</p>
<h3 id="02f6">Example</h3>
<pre id="fbc8">Sequence 1:    <strong>G   K   N</strong>
Sequence 2:    <strong>T   R   N</strong>
Sequence 3:    <strong>S   H   E</strong>
Sum of pairs: <strong>-1 + 1 + 6 = 6</strong></pre>
<p id="8031">Sum of 2nd Col = score (K, R) + score (R, H) + score (K, H) = 2+0+-1 = 1</p>
<p id="96dc">The goal of <strong>MSA</strong> is to achieve the <strong>maximum Sum of Pairs</strong>.</p>
<h2 id="2639">Types of Multiple Sequence Alignment</h2>
<p id="4a62">Aligning three or more sequences can be difficult and are almost always time-consuming to align manually. Hence computational algorithms are used to produce and analyze these alignments. Most <strong>MSA</strong> algorithms use <a href="https://en.wikipedia.org/wiki/Dynamic_programming" target="_blank" rel="noopener">dynamic programming</a> and <a title="Heuristic" href="https://en.wikipedia.org/wiki/Heuristic" target="_blank" rel="noopener">heuristic</a> methods.</p>
<p id="450f">Given below are <strong>MSA</strong> techniques which use heuristic methods.</p>
<ol>
<li id="57f6">Progressive Alignment Construction</li>
<li id="5773">Iterative Alignment Construction</li>
<li id="f7f6">Block-base Alignment</li>
</ol>
<p id="6da6">These methods can find solutions among all possible solutions, but they do NOT guarantee that the best solution will be found. Hence they are considered as approximations but we can easily find a solution close to the actual one within a short time.</p>
<h3 id="4653"><strong>Progressive Alignment Construction</strong></h3>
<p id="3544">This method, also known as the <strong>hierarchical</strong> or <strong>tree method</strong>, was developed by <strong>Paulien Hogeweg</strong> and <strong>Ben Hesper</strong> in 1984. It builds up a final <strong>MSA</strong> by combining pairwise alignments beginning with the most similar pair and progressing to the most distantly related pair.</p>
<p id="83ae">Two of the popular progressive alignment methods used at present are,</p>
<ol>
<li id="09ce"><a href="http://www.ebi.ac.uk/Tools/msa/clustalo/" target="_blank" rel="noopener"><strong>Clustal Omega</strong></a></li>
<li id="8483"><a href="http://tcoffee.crg.cat/apps/tcoffee/index.html" target="_blank" rel="noopener"><strong>T-Coffee</strong></a></li>
</ol>
<h3 id="ea3f"><strong>Iterative Alignment Construction</strong></h3>
<p id="5003">This method consists of a set of methods to produce <strong>MSAs</strong> while reducing the errors inherent in progressive methods. They work similarly to progressive methods, but repeatedly realign the initial sequences as well as add new sequences to the growing <strong>MSA</strong>.</p>
<p id="e9cd">The software package <a href="http://www.genome.jp/tools/prrn/" target="_blank" rel="nofollow noopener noopener noopener"><strong>PRRN/PRRP</strong></a> is based on a <a title="Hill-climbing algorithm" href="https://en.wikipedia.org/wiki/Hill-climbing_algorithm" target="_blank" rel="noopener">hill-climbing algorithm</a> to optimize its <strong>MSA</strong> alignment score.</p>
<h3 id="9167">Block-base Alignment</h3>
<p id="037d">This method divides the sequences into blocks and tries to identify blocks of un-gapped alignments shared by many sequences.</p>
<p id="495e"><a href="https://www.ncbi.nlm.nih.gov/pubmed/10222408" target="_blank" rel="noopener"><strong>DIALIGN2</strong></a> is a popular block-base alignment approach .</p>
<h2 id="08f6">Time to Practice</h2>
<p id="a9cf">The time you have been waiting for has arrived. It is time to try out some tools and examples. I will be using <a href="http://www.ebi.ac.uk/Tools/msa/clustalo/" target="_blank" rel="noopener"><strong>Clustal Omega</strong></a> and <a href="http://tcoffee.crg.cat/" target="_blank" rel="noopener"><strong>T-Coffee</strong></a> to show you a few examples of MSA. You can try out these tools online.</p>
<h3 id="c9cd">Clustal Omega</h3>
<p id="8102">Go to <a href="http://www.ebi.ac.uk/Tools/msa/clustalo/" target="_blank" rel="nofollow noopener">http://www.ebi.ac.uk/Tools/msa/clustalo/</a>.</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/984f6-1btz6gnh_768javtcqze7gq.png" /><em>Figure 3: Clustal Omega</em></p>
<p>You will get a page to select the type of data (Protein, DNA or RNA), enter the sequences (or upload a file of a supported format) and set the output format.</p>
<p>I will be using the following 10 genome sequences (DNA) of <strong>Acanthaster planci</strong> (commonly known as <a href="https://en.wikipedia.org/wiki/Crown-of-thorns_starfish" target="_blank" rel="noopener"><strong>Crown-of-thorns starfish</strong></a>) for this demonstration. You can download the complete genome for an organism from <a href="https://www.ncbi.nlm.nih.gov/guide/howto/dwn-genome/" target="_blank" rel="noopener"><em>here</em></a>, in .fsa format.</p>
<blockquote><p>An FSA file (.fsa) is a fragment analysis data file created by DNA sequencers and analyzers.</p></blockquote>
</div>
<p>&nbsp;</p>
<style>.gist table { margin-bottom: 0; }</style>
<div id="gist79785016">
<div translate="no">
<div>
<div>
<div id="file-acanthaster_planci_gnomon-fsa">
<div itemprop="text"
     
      tabindex="0" role="region"
      aria-label="Acanthaster_planci_Gnomon.fsa content, created by Vini2 on 12:49PM on September 22, 2017."
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
<td id="file-acanthaster_planci_gnomon-fsa-L1"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC1">&gt;gnl|GNOMON|17969.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1752, whole genome shotgun sequence (NW_019093106.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L2"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC2">AAGCAAAAAGCAGAGAAGGAGAAACCAGGTTTCCTTAGTAGGATCCACCAGGCATTCAGCTTTGAAGAGG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L3"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC3">AACAGTCCAGGGATGATGAGCAGGATAGTCAAGACAGCGAGTCCGAGGATGGGAGTATTGACGAAGACCC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L4"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC4">TGAGGGCAATGAAAACACGGTGGATCCAATCGACTGTTTGAGTGCCCCACGTGCTGTTGTCACCAAAGAA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L5"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC5">GAGCTCATCACTGAGGAG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L6"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC6">&gt;gnl|GNOMON|70594930.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1731, whole genome shotgun sequence (NW_019093085.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L7"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC7">CAAGAACAGTGGATGAAGAAAACAGCAGGCGATAGCAGCGTGGTTGGCGCCTTGCCCCTGGGCTCATCTT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L8"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC8">CTAGCATCACTGCCCTGATACGCGAAAGCAGCGTGGTTGGTCCCTTCCTGTGGGCTCATCTTCTGGCATC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L9"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC9">ACTGCCCTGATAATGTAAGGCGGTAGCAGCGAGGTTGGTCCCCTGCCTGTGGGCTCATCTTCTGGAATCA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L10"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC10">CCACCCT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L11"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC11">&gt;gnl|GNOMON|18113.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1727, whole genome shotgun sequence (NW_019093081.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L12"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC12">ATGGATTTCTACCAAGACATACAAAACTGCCAAACGTACGAAGCGCTCAACTTGCTTCTCGAAACCATTG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L13"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC13">TACTCAGCGAAGATGAGAGGGCGTACGCTTTTCATAGACTGTGCGAACTGGCTCTGATTCAGGAGGCCGG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L14"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC14">TGACGGTCCGGGGGATGAAGAGGAACGAATGGACCCGACTGAAGACGGCGCACCGCACCAGCGAGGGTAC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L15"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC15">GGGCACGACAACGATGATCCGTGGGCAGAATTTGAGGAGGATGATCCAGAGGACGAGGGGACGGAAGAGC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L16"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC16">TACCGGAGGAGGAAGACGAGGAGAACCAGCCACCGAGGAAAAGGATTCGCGTGGAGAGACCGCAAGATTA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L17"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC17">TTACAATATTGTAGACGTTAATGAAAA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L18"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC18">&gt;gnl|GNOMON|130719778.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1726, whole genome shotgun sequence (NW_019093080.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L19"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC19">CCTGAGTTACAACTCCTTCTGTGCCCTTCCGCCATGGAGTTAACTTCCACGCACCTACTATAATCAGCAC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L20"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC20">GAAACGCAAGACCATAGCTTAATACTTACAGGGAAGTGGATGATCGTGCTG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L21"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC21">&gt;gnl|GNOMON|65528162.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1702, whole genome shotgun sequence (NW_019093056.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L22"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC22">TATATGCAAACAGTCCACAGACCAGCACCAACTGGCCCTCTGTGATACCTGCAAGAAGCACTACCATCTG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L23"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC23">GGCTGTCTGGACCCACCACTGAGCCGAATGCCTAAGAAGACTGCTTTCAGCGGATGGCAGTGCTCTGAGT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L24"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC24">GCGTCTCATCTTCCAGTGATACCTCCATGGCTGAGACTGTAGAAGGCGAGGAAGGGGATGAGGCAGGCAG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L25"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC25">GCGTAAGCGACGAGTCATCCGAGAACCCAATAAATTCACCCCTCCCGTGGACGGCAAAGGCGGTCAGAA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L26"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC26">&gt;gnl|GNOMON|85684402.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1690, whole genome shotgun sequence (NW_019093044.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L27"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC27">GGAAACTGTTGAAATGGTCCCCACCAGCCTAGCTCTTCTTCTTTCGCTGTTTGGAAGGGAACCTCTTTCA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L28"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC28">CAAGGCAGATAGGGAAATATTTTCATTTCCAAGAGAGAGGTAGTCAGTGAGGATCCATCATCACCACGAG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L29"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC29">AGGGTTACAATGATAACAGCCCAGATGAAGACATAGAAAATCCACTGGTGACAGGACAAAACCCAACTGT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L30"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC30">CTACAAAATT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L31"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC31">&gt;gnl|GNOMON|65753714.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1685, whole genome shotgun sequence (NW_019093039.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L32"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC32">GTACCTATACCCACTAAACCAGTCAAATGCTTTGCAGGAGATTCCATCTCTGAAATGGAGACGATTCTGC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L33"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC33">AGAATGCTGTGACCTAGCTGCTGGCATCAGATACTGCATTCAGATCCAACAAGACTGGTATTCTTGTAAG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L34"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC34">ATGGGAACTACTACTACGTTGAGAACCTACCAGTCTGTCAGCCAGCCAACCAGGAACTTTACCATCCCCC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L35"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC35">AGCCACCTTGTCAGC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L36"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC36">&gt;gnl|GNOMON|22673.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1684, whole genome shotgun sequence (NW_019093038.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L37"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC37">TGGGGAGCTTTGCAGGAACAAGCTTTTAGGACGCTGAAAGCGCGACTGGAATCACAACCGATCTTGAATC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L38"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC38">TTCCCGATCCGGAGAAACCGTATATCTTAGCCACAGATGCCTCAGATGTAGGAATAGGGGCGGTGCTCAT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L39"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC39">GCAAGAGCATGAAGGTGTGAACCATCCGATCAGCTATGCCAGCCGAAAGTTGCTGCCACCATCTCGCCTC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L40"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC40">TATAACAAGGGCTTCGATGAGCAGCTCATCGGCAAGACAACAAGCCACAGGTCAAATGCCATAAGAGCGT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L41"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC41">ACAAGAGAACCAGCGAGGACGAGAAGCAAGCTGTCAGCGTGGCTTTGTACGGAGAGTTACAGCAGG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L42"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC42">&gt;gnl|GNOMON|11409.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1657, whole genome shotgun sequence (NW_019093011.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L43"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC43">AAATTCAATAAAACAATTTTTCTAAAAGAAGGCTATTCAGTGAAAATGGCTTTGTGGTGTGATTACCTAT</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L44"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC44">GCATAGAATGTGCTCGAGATGAAGACCTGGAGAGTCTACCCAGCCACGAGGAAGAGCTTCAAGATGTTGG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L45"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC45">GCAGCAACAGCAGCAAATGGATAACACACACATTGACCTTGTCACCCCAGAGCTGAGTGCCGAGGAAAAG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L46"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC46">GAATCCATGCCCATGCCTCCGAGACTGTCTCACAAGAAGTCCCTCAAGAAGAAAAGTCCATCGGCTGAGC</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L47"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC47">ACAGCAGAAAAAGTGGCAGGAAGCTGGATTACCAGAGCTCTAACCAAG</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L48"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC48">&gt;gnl|GNOMON|22945.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1640, whole genome shotgun sequence (NW_019092994.1)</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L49"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC49">ATCTGCGCCCGCGGCGGCTGCACGCGGCCTCGCGGCCGGCGCTTCGACGTGCACCGGGGCGGCCCTCCTA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L50"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC50">CTCGTTGGGGCGCACCACCCGGGCGGCGGTCCCACTCTTTCTCTGCCCCGACGGCCGGGTGTGGGCGGCA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L51"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC51">CGCTCAGCGCCGTCCATTTTCAGGGCTAGTTGATTCGGCAGGCTCCATCTATCCTGAGGGAAACTTCGGA</td>
</tr>
<tr>
<td id="file-acanthaster_planci_gnomon-fsa-L52"></td>
<td id="file-acanthaster_planci_gnomon-fsa-LC52">GGGAACCAGCTACTAGACGGTTCGAATAGTCTTTCGCCCCTATACCCAAGTCGGTTTGCAG</td>
</tr>
</table>
</div></div>
</p></div>
</div></div>
<div>
        <a href="https://gist.github.com/Vini2/1773489085fedd64e51e8b6acfc85780/raw/5594c286db8db464467f0a61c4b06c511f2e5ede/Acanthaster_planci_Gnomon.fsa">view raw</a><br />
        <a href="https://gist.github.com/Vini2/1773489085fedd64e51e8b6acfc85780#file-acanthaster_planci_gnomon-fsa"><br />
          Acanthaster_planci_Gnomon.fsa<br />
        </a><br />
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
</p></div>
</div>
<p><em>10 sequences from the genome of <strong>Acanthaster planci</strong> (commonly known as <strong>Crown-of-thorns starfish</strong>)</em></p>
<div>
<p id="6d4e">After entering the sequences and selecting the parameters, you can submit your job. The results of the job can be viewed as follows. You can check the results for this example from <a href="http://www.ebi.ac.uk/Tools/services/web/toolresult.ebi?jobId=clustalo-I20170922-134518-0538-73689021-p2m" target="_blank" rel="noopener"><em>here</em></a>.</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/071c6-1usoicksuuyhvhfdl67hpsa.png" /><em>Figure 4: Results of the job on Clustal Omega</em></p>
<p>You can download the results as an alignment file with the .aln extension by clicking on the <strong>Download Alignment File</strong> button.</p>
</div>
<div>
<h3 id="1d6e">T-Coffee</h3>
<p id="3724">Go to <a href="http://tcoffee.crg.cat/apps/tcoffee/index.html" target="_blank" rel="nofollow noopener">http://tcoffee.crg.cat/apps/tcoffee/index.html</a>.</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/3e136-1aooksdlragwvsefm2wtntg.png" /><em>Figure 5: T-Coffee</em></p>
<p>For this demonstration, I have selected <em>Combine popular aligners (M-Coffee) </em>under <strong>DNA </strong>section. Then you will get a page to enter the sequences (or upload a file of supported format).</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/42196-1cl3zby0m6rzzmo2f_xuqeg.png" /><em>Figure 6: M-Coffee input page</em></p>
<p>I will be using the same file I used to demonstrate <strong>Clustal Omega</strong>. After entering the sequences, you can submit your job. The results of the job can be viewed as follows. You can check the results for this example from <a href="http://tcoffee.crg.cat/apps/tcoffee/result?rid=3666c6c4" target="_blank" rel="noopener"><em>here</em></a>.</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/bfecb-18lfp2vmpxgottkc22mfxgw.png" /><em>Figure 7: Results for the job on T-Coffee</em></p>
</div>
<div>
<h3 id="1d69">Biopython Wrappers for Clustal Omega and T-Coffee</h3>
<p id="2def"><a href="http://biopython.org/" target="_blank" rel="noopener"><strong>Biopython</strong></a>, which I had introduced in my <a href="https://medium.com/towards-data-science/pairwise-sequence-alignment-using-biopython-d1a9d0ba861f" target="_blank" rel="noopener">previous article</a>, consists of command line wrappers for <strong>Clustal Omega</strong>, <strong>T-Coffee</strong> and many other tools such as <strong>ClustalW</strong> and <strong>DIALIGN</strong>. You can check out all the wrappers and sample code from <a href="http://biopython.org/DIST/docs/api/Bio.Align-module.html" target="_blank" rel="noopener"><em>here</em></a>. I will show how to use the <strong>Clustal Omega</strong> wrapper in the next example.</p>
<p id="92c1">To run the <em>Clustal Omega wrapper</em>, first you should download its precompiled binaries. You can download them from <a href="http://www.clustal.org/omega/" target="_blank" rel="noopener"><em>here</em></a>. A binary file will be downloaded. You can make it an executable using the command given below. The name of the binary file may vary according to the binary file version you have downloaded. In my machine it was downloaded as <strong>clustal-omega-1.2.3-macosx</strong>.</p>
<pre id="d43b"><strong>chmod 777 clustal-omega-1.2.3-macosx</strong></pre>
<p id="41a1">I will be using the same <strong>.fsa</strong> file used before, for this example as well.</p>
<p id="e0ca">The following code uses the Clustal Omega wrapper to develop <strong>MSA</strong> for the given input .fsa file. It will be easy if you have the .fsa file, .py file and the executable binary in the same location.</p>
<style>.gist table { margin-bottom: 0; }</style>
<div id="gist79790715">
<div translate="no">
<div>
<div>
<div id="file-clustalomegawrappertest-py">
<div itemprop="text"
     
      tabindex="0" role="region"
      aria-label="ClustalOmegaWrapperTest.py content, created by Vini2 on 02:09PM on September 22, 2017."
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
<td id="file-clustalomegawrappertest-py-L1"></td>
<td id="file-clustalomegawrappertest-py-LC1"># Import Clustal Omega wrapper</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L2"></td>
<td id="file-clustalomegawrappertest-py-LC2">from Bio.Align.Applications import ClustalOmegaCommandline</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L3"></td>
<td id="file-clustalomegawrappertest-py-LC3">
</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L4"></td>
<td id="file-clustalomegawrappertest-py-LC4"># Define input file</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L5"></td>
<td id="file-clustalomegawrappertest-py-LC5">in_file = &quot;/Users/vijinimallawaarachchi/Documents/Python/Acanthaster_planci_Gnomon.fsa&quot;</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L6"></td>
<td id="file-clustalomegawrappertest-py-LC6">
</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L7"></td>
<td id="file-clustalomegawrappertest-py-LC7"># Define output file</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L8"></td>
<td id="file-clustalomegawrappertest-py-LC8">out_file = &quot;aligned.fasta&quot;</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L9"></td>
<td id="file-clustalomegawrappertest-py-LC9">
</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L10"></td>
<td id="file-clustalomegawrappertest-py-LC10"># Get the command for Clustal Omega</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L11"></td>
<td id="file-clustalomegawrappertest-py-LC11">clustalomega_cline = ClustalOmegaCommandline(infile=in_file, outfile=out_file, verbose=True, auto=True)</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L12"></td>
<td id="file-clustalomegawrappertest-py-LC12">
</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L13"></td>
<td id="file-clustalomegawrappertest-py-LC13"># Print the executable command</td>
</tr>
<tr>
<td id="file-clustalomegawrappertest-py-L14"></td>
<td id="file-clustalomegawrappertest-py-LC14">print(clustalomega_cline)</td>
</tr>
</table>
</div></div>
</p></div>
</div></div>
<div>
        <a href="https://gist.github.com/Vini2/91f120834639a2954f76d923d372bd12/raw/9332d5ba643ae51e6d4394216088c783590a7e2c/ClustalOmegaWrapperTest.py">view raw</a><br />
        <a href="https://gist.github.com/Vini2/91f120834639a2954f76d923d372bd12#file-clustalomegawrappertest-py"><br />
          ClustalOmegaWrapperTest.py<br />
        </a><br />
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
</p></div>
</div>
<section>
<div>
<div>
<p id="8a62">After running this python code you will get a command as output. The path may change according to where you put your files.</p>
<pre id="5173"><strong>clustalo -i /Users/vijinimallawaarachchi/Documents/Python/Acanthaster_planci_Gnomon.fsa -o aligned.fasta — auto -v
</strong></pre>
<figure id="5198"><figcaption><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/2e312-19mfsmujbmdbvqu7ibeqjqg.png" /></figcaption></figure>
<p><em>Figure 8: Output command</em></p>
<p id="9d5f">Now execute the downloaded binary file with the shown command as follows. Make sure to replace <strong>clustalo</strong> by <strong>./clustal-omega-1.2.3-macosx</strong></p>
<pre id="280c"><strong>./clustal-omega-1.2.3-macosx -i /Users/vijinimallawaarachchi/Documents/Python/Acanthaster_planci_Gnomon.fsa -o aligned.fasta --auto -v</strong></pre>
<p id="be2a">You will get the following results saying that progressive alignment has been done.</p>
<p><img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/15e14-1da7el-5lcxazkdlgqf8k1w.png" /></p>
<p><em>Figure 9: Final result</em></p>
<p id="ef62">Now you can see that a file named as <strong>aligned.fasta</strong> has been formed in the same location as your files are. Once you open it, you can see the alignments in FASTA format.</p>
<blockquote id="bc30"><p><strong>FASTA format</strong> is a text-based format for representing either nucleotide sequences or peptide sequences, in which nucleotides or amino acids are represented using single-letter codes. The format also allows for sequence names and comments to precede the sequences. The format originates from the <a title="FASTA" href="https://en.wikipedia.org/wiki/FASTA" target="_blank" rel="noopener">FASTA</a> software package, but has now become a standard in the field of bioinformatics.</p></blockquote>
<figure id="4494">
<div>
<div> <img src="../../blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/940ac-1tdeycfxksswbgr30pxekdq.png" /><em>Figure 10: Output file in FASTA format</em></div>
</div>
</figure>
</div>
</div>
</section>
<section>
<div></div>
<div>
<div>
<p>&nbsp;</p>
<p id="2873">Hope you enjoyed reading this article and learned something useful and interesting.</p>
<p id="6880">Since I’m still very new to this field, I would like to hear your advice. 😊</p>
<p id="679a">Thanks for reading… 😃</p>
</div>
</div>
</section>
</div>
<div></div>
<hr />
<p>Originally posted in <a href="https://towardsdatascience.com/multiple-sequence-alignment-using-clustal-omega-and-t-coffee-3cc662b1ea82?source=friends_link&amp;sk=bacdd8d7cf10931720a68440484c4edd" target="_blank" rel="noopener">Towards Data Science</a></p>
