---
title: "Marker Genes and Gene Prediction of Bacteria"
slug: "marker-genes-and-gene-prediction-of-bacteria"
date: "2020-11-10"
updated: "2022-04-29"
sourceUrl: "https://vijinimallawaarachchi.com/2020/11/10/marker-genes-and-gene-prediction-of-bacteria/"
featuredImage: "/blog-images/marker-genes-and-gene-prediction-of-bacteria/1_n0tf5ykkssljrj8aiu3k3a.jpeg"
categories: ["Bioinformatics", "Genomics", "Metagenomics"]
tags: ["Bioinformatics", "Gene prediction", "Genomics", "Metagenomics"]
---
<p>When we think of the word <strong>marker</strong>, the first thing that comes to our minds is something that is used to indicate a place. For example, it can be your current location on Google Maps or it can be the place where you planted some seeds in your garden. Similarly, in genomics studies, we can find <strong>marker genes</strong> in bacterial genomes. In this article, I will introduce you to marker genes used in metagenomics analysis, how they are used and walk you through an example of a commonly used gene prediction tool.</p>

<h3>What are Marker Genes/Genetic Markers?</h3>

<p>According to <a href="https://en.wikipedia.org/wiki/Genetic_marker" rel="noreferrer" target="_blank">Wikipedia</a>,</p>

<blockquote><p>A <strong>genetic marker</strong> is a <a href="https://en.wikipedia.org/wiki/Gene" rel="noreferrer" target="_blank">gene</a> or <a href="https://en.wikipedia.org/wiki/DNA_sequence" rel="noreferrer" target="_blank">DNA sequence</a> with a known location on a <a href="https://en.wikipedia.org/wiki/Chromosome" rel="noreferrer" target="_blank">chromosome</a> that can be used to identify individuals or&nbsp;<a href="https://en.wikipedia.org/wiki/Species" rel="noreferrer" target="_blank">species</a>.</p></blockquote>

<p>As a result of mutations and alterations within the genome, these genes can vary depending on their composition and location.</p>

<h3>What are Single-Copy Marker&nbsp;Genes?</h3>

<p>In bacterial cells, single-copy marker genes are expected to occur once. In other words, each bacterial cell contains only one copy of each of these single-copy marker genes. These genes are essential for the life-functions and can be found in the majority of the bacterial species.</p>

<p>Previous efforts have been made to identify marker genes that can resolve closely related organisms. Protein-coding marker genes which are rarely horizontally transferred and exist in single copies within genomes have been identified [1]. These include a set of 40 marker genes [2,3] and 107 marker genes [3].</p>

<h3>Usage of Marker&nbsp;Genes</h3>

<p>Marker genes are commonly used in taxonomic profiling of environmental samples to identify gene families. These genes are also used in phylogenetic inference to reconstruct the evolutionary history of organisms.</p>

<p>Recently, reference-free binning tools such as <a href="https://doi.org/10.1186/2049-2618-2-26" rel="noreferrer" target="_blank">MaxBin</a> and <a href="https://doi.org/10.1093/bioinformatics/btz253" rel="noreferrer" target="_blank">SolidBin</a> have used single-copy marker genes to identify the number of species in a given sample. Moreover, tools such as <a href="https://doi.org/10.1038/srep24175" rel="noreferrer" target="_blank">MyCC</a> use single-copy marker genes to refine resulting clusters.</p>

<h3>Gene Predictors</h3>

<p>Gene predictors can be used to extract marker genes. Some popular gene prediction tools include,</p>

<ol><li><a href="https://doi.org/10.1093/nar/27.23.4636" rel="noreferrer" target="_blank">Glimmer</a></li><li><a href="https://doi.org/10.1093/nar/gkl723" rel="noreferrer" target="_blank">MetaGene</a></li><li><a href="https://doi.org/10.1093/nar/26.4.1107" rel="noreferrer" target="_blank">GeneMark</a></li><li><a href="https://doi.org/10.1093/nar/gkq747" rel="noreferrer" target="_blank">FragGeneScan</a></li><li><a href="https://doi.org/10.1038/nmeth.2693" rel="noreferrer" target="_blank">fetchMG</a></li></ol>

<h3>Example Usage of FragGeneScan</h3>

<p>Let us see how we can use <a href="https://doi.org/10.1093/nar/gkq747" rel="noreferrer" target="_blank"><strong>FragGeneScan</strong></a> to predict genes. Firstly, you can download FragGeneScan from</p>

<ul><li>SourceForge: <a href="https://sourceforge.net/projects/fraggenescan/files/latest/download" rel="noreferrer" target="_blank">https://sourceforge.net/projects/fraggenescan/files/latest/download</a></li><li>GitHub: <a href="https://github.com/gaberoo/FragGeneScan" rel="noreferrer" target="_blank">https://github.com/gaberoo/FragGeneScan</a></li></ul>

<p>You can follow the instructions provided in the README file to compile and run FragGeneScan.</p>

<p>You can see the following parameters and options of FragGeneScan.</p>

<figure><img width="1400" height="263" src="../../blog-images/marker-genes-and-gene-prediction-of-bacteria/1_yf12akb9z8qp3r4ngnq-fg.png" alt="" /></figure>

<p>If you have a complete genomic sequence, you can run FragGeneScan to predict its genes as follows.</p>

<pre><code>./run_FragGeneScan.pl -genome=&lt;sequence_file&gt; -out=&lt;output_file&gt;  -complete=1  -train=complete -thread=&lt;num&gt;</code></pre>

<p>If you have a set of assembled contigs, you can run FragGeneScan to predict its genes as follows.</p>

<pre><code>./run_FragGeneScan.pl -genome=&lt;contigs_file&gt; -out=&lt;output_file&gt;  -complete=0  -train=complete -thread=&lt;num&gt;</code></pre>

<p>FragGeneScan generates four files with their contents as follows.</p>

<ol><li><code>&lt;output_file&gt;.out</code>: coordinates of putative genes</li><li><code>&lt;output_file&gt;.fnn</code>: nucleotide sequences corresponding to the putative genes in <code>&lt;output_file&gt;.out</code></li><li><code>&lt;output_file&gt;.faa</code>: amino acid sequences corresponding to the putative genes in <code>&lt;output_file&gt;.out</code></li><li><code>&lt;output_file&gt;.gff</code>: gene prediction results</li></ol>

<p>Once you have obtained these files, you can use the <code>&lt;output_file&gt;.faa</code> file along with <a href="http://hmmer.org/" rel="noreferrer" target="_blank">HMMER</a> to determine the single-copy marker genes in the sequences.</p>

<h3>Final Thoughts</h3>

<p>Marker genes have become a very powerful aspect in bioinformatics research which has allowed researchers to gain insights into the taxonomic information and evolutionary history of bacterial and archaeal species. The field of metagenomics benefits immensely from studies based on marker genes.</p>

<p>I hope you found this article useful. Feel free to try out the tools mentioned in this article and play around with examples.</p>

<p>Cheers, and stay safe!</p>

<h3>References</h3>

<p>[1] Microbial abundance, activity and population genomic profiling with mOTUs2 (<a href="https://motu-tool.org/fetchMG.html" rel="noreferrer" target="_blank">https://motu-tool.org/fetchMG.html</a>)</p>

<p>[2] Ciccarelli et al. (2006) Toward Automatic Reconstruction of a Highly Resolved Tree of Life, <em>SCIENCE </em>03: 1283–1287</p>

<p>[3] Wu D, Jospin G, Eisen JA (2013) Systematic Identification of Gene Families for Use as “Markers” for Phylogenetic and Phylogeny-Driven Ecological Studies of Bacteria and Archaea and Their Major Subgroups. PLoS ONE 8(10): e77033. <a rel="noreferrer" href="https://doi.org/10.1371/journal.pone.0077033" target="_blank">https://doi.org/10.1371/journal.pone.0077033</a></p>

<hr />

<p><em>This article was originally published in&nbsp;<a rel="noreferrer" href="https://medium.com/computational-biology" target="_blank">The Computational Biology Magazine on Medium</a>.</em></p>

<p><em>Cover image by&nbsp;<a rel="noreferrer" href="https://pixabay.com/users/mahmoud-ahmed-16261757/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5299471" target="_blank">Mahmoud Ahmed</a> from&nbsp;<a rel="noreferrer" href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5299471" target="_blank">Pixabay</a></em></p>

<p><em>You can find the original article at&nbsp;<a href="https://medium.com/computational-biology/marker-genes-and-gene-prediction-of-bacteria-5fa4cb7802f3" target="_blank" rel="noreferrer">https://medium.com/computational-biology/marker-genes-and-gene-prediction-of-bacteria-5fa4cb7802f3</a></em></p>
