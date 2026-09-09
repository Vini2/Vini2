---
title: "Metagenomics — Who is there and what are they doing?"
slug: "metagenomics-who-is-there-and-what-are-they-doing"
date: "2020-03-29"
updated: "2022-04-29"
sourceUrl: "https://vijinimallawaarachchi.com/2020/03/29/metagenomics-who-is-there-and-what-are-they-doing/"
featuredImage: "/blog-images/metagenomics-who-is-there-and-what-are-they-doing/1_4nwpvc2kvyseelytux34qw.jpeg"
categories: ["Bioinformatics", "Genomics", "Metagenomics"]
tags: ["Bioinformatics", "Genomics", "Metagenomics"]
---
<p id="5f2e">Did you know that your body houses about 100 trillion bacteria? Estimates show that a human has approximately a pound or two of bacteria living in his/her gut (stomach) [1] (Now don’t go and drink all the antibiotics you know, to kill those bacteria. In fact, these bacteria play an important role in our metabolism and immune system). The same goes for the backyard of your house. There can be many species of bacteria living in the soil and they help to enrich the soil (e.g.:&nbsp;<em>nitrifying bacteria</em>&nbsp;produce nitrates which are essential for plants). These microscopic communities have very diverse ecosystems and studying their composition and behaviour can provide us with valuable insights. In this article, I will provide a basic introduction to&nbsp;<strong>metagenomics</strong>, which is the study of genetic material obtained from microbial communities.</p>

<h2 id="5e34">What is Metagenomics?</h2>

<blockquote><p>Metagenomics is the application of modern genomic techniques to the study of communities of microbial organisms directly in their natural environments, bypassing the need for isolation and lab cultivation of individual species [2].</p></blockquote>

<p id="b68f">Different communities of microorganisms can be found in soil, sea, mud, forests, space and even in the human body. Microorganisms that can be found in these environments can include bacteria, viruses/phages, microbial eukaryotes (e.g.: yeast) and worms (e.g.: helminths and nematodes).</p>

<h2 id="421e">Why Metagenomics?</h2>

<p id="34ea">Now you must be wondering how can we study these tiny organisms which we cannot even see. The old school way to study them would be to obtain samples, plate them in Petri dishes, see if anything grows, isolate the culture, and <a rel="noreferrer" href="https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f" target="_blank">sequence</a>. However, the majority of the bacterial species cannot be cultured using this traditional way. So in metagenomics, what we do is obtain samples from the microbial communities directly and <a rel="noreferrer" href="https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f" target="_blank">sequence</a> them [3].</p>

<p id="a9aa">Metagenomics helps in the discovery of novel natural products, antibiotics and enzymes with new functions in many areas such as medicine, agriculture, energy, food and nutrition, etc.</p>

<h2 id="b5cc">Two Main Questions in Metagenomics</h2>

<p id="9941">Every metagenomics study comes across two main questions [4];</p>

<ol><li><strong><em>Who is there?</em></strong></li><li><strong><em>What are they doing</em></strong>?</li></ol>

<p id="c72c">When we consider the question “<em>who is there</em>”, we want to identify what species of micro-organisms are present in the sample. The question “<em>what are they doing</em>” implies that we have to determine their functions and behaviours.</p>

<h2 id="bac8">Shotgun vs. Targeted Metagenomics</h2>

<p id="add7">Once you have obtained samples from the environment, you have to prepare libraries so that it becomes easy to analyse. The two current methods of creating your libraries for analysis are</p>

<ol><li><strong>Targeted metagenomics</strong>: targeting a specific region of a genome (e.g.: 16S rRNA and 18S rRNA) that is shared across multiple organisms and samples. It provides more precise data with more depth but it may result in unequal amplification for certain targeted regions.</li><li><strong>Shotgun metagenomics</strong>: can <a rel="noreferrer" href="https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f" target="_blank">sequence</a> everything in your sample. It is perfect for all organisms. It provides greater resolution to genetic content (especially <a rel="noreferrer" href="https://towardsdatascience.com/starting-off-in-bioinformatics-dna-nucleotides-and-strands-8c32515271a8" target="_blank">DNA</a>) but will result in very complex datasets.</li></ol>

<h2 id="6701">Shotgun Metagenomics Analysis</h2>

<p id="1c78">There are three main approaches when dealing with metagenomic datasets [4] as shown in Figure 1.</p>

<ol><li><strong>Marker gene analysis</strong>: sequences are compared with databases of taxonomically or phylogenetically informative sequences called <strong>marker genes</strong>, compare their similarity and taxonomically annotate the sequences. The most frequently used marker genes are ribosomal <a rel="noreferrer" href="https://towardsdatascience.com/starting-off-in-bioinformatics-rna-transcription-and-translation-aaa7a91db031" target="_blank">RNA</a> (ribonucleic acid) genes that have a single copy and are common to microbial genomes.</li><li><strong>Binning</strong>: clusters sequences into similar groups corresponding to taxonomic groups such as species, genus or higher levels.</li><li><strong>Assembly</strong>: put all the small sequences together in your sample to form much longer sequences representing genomes. Check out <a rel="noreferrer" href="https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f" target="_blank">my previous article</a> to get a basic idea about sequencing and assembly. A more detailed article will be published in future.</li></ol>

<figure><img width="1400" height="501" src="../../blog-images/metagenomics-who-is-there-and-what-are-they-doing/1_6z8luxbrlgrencomzxlrsw-1.png" alt="" /><figcaption>Fig 1. Methods used for shotgun metagenomics analysis</figcaption></figure>

<h2 id="45d7">Targeted Metagenomics</h2>

<p id="81f3">In order to perform targeted metagenomics, the genetic material from samples is extracted and the genes of interest are PCR amplified based on regions of interest [5]. The most commonly used gene for this purpose is the <strong>16S ribosomal RNA </strong>gene. This gene is called the “<strong>universal phylogenetic marker</strong>”. It is present in all living microorganisms and contains a single copy.</p>

<figure><img width="1400" height="155" src="../../blog-images/metagenomics-who-is-there-and-what-are-they-doing/1_eca7owv3dm3jlbvy85u_lw-1.png" alt="" /><figcaption>Fig 2. The basic workflow of 16S rRNA analysis</figcaption></figure>

<p id="e6d1">Let’s consider the basic workflow of 16S rRNA gene-based analysis (Figure 2) of the human skin [6]. Firstly, samples are collected and the DNA is extracted. Next, PCR amplification is done for bacterial 16S rRNA genes and the amplified samples are sequenced. Finally, the resulting data is processed and analysed using various tools. We can determine operational taxonomic units (OTUs), aspects of community structure and functional roles of microbial communities.</p>

<p id="ecfd">Two famous 16S rRNA analysis pipelines include&nbsp;<a href="https://qiime2.org/" rel="noreferrer" target="_blank"><strong>QIIME</strong></a>&nbsp;and&nbsp;<a href="https://www.mothur.org/" rel="noreferrer" target="_blank"><strong>Mothur</strong></a>.</p>

<h2 id="79c1">Final Thoughts</h2>

<p id="558a">Currently, I’m doing research related to metagenomics. The articles I have read and what I have done so far inspired me to write this article. Metagenomics is a fairly new area and considered as a hot topic these days. I have found metagenomics to be very fascinating, full of research problems and new things to discover. For those of you who are interested in pursuing higher studies in the fields of bioinformatics and computational genomics, I hope you found my article as a useful stepping point.</p>

<p id="25eb">Thank you for reading. I would like to hear your ideas about this emerging field.</p>

<p id="258e">Cheers!</p>

<h2 id="a3d7">References</h2>

<p id="3fe7">[1] 6 Surprising Facts About the Microbes Living in Your Gut (<a href="https://www.healthline.com/health-news/strange-six-things-you-didnt-know-about-your-gut-microbes-090713#1" rel="noreferrer" target="_blank">https://www.healthline.com/health-news/strange-six-things-you-didnt-know-about-your-gut-microbes-090713#1</a>)</p>

<p id="62d3">[2] Kevin Chen and Lior Pachter. Bioinformatics for Whole-Genome Shotgun Sequencing of Microbial Communities in&nbsp;<em>PLOS Computational Biology</em>. Vol. 1 2005.</p>

<p id="d2e5">[3] D.R. Garza and B.E. Dutilh. From cultured to uncultured genome sequences: metagenomics and modeling microbial ecosystems in&nbsp;<em>Cellular and Molecular Life Sciences&nbsp;</em>(2015) 72: 4287</p>

<p id="f248">[4] Thomas J. Sharpton. An introduction to the analysis of shotgun metagenomic data.&nbsp;<em>Frontiers in Plant Science&nbsp;</em>16 June 2014</p>

<p id="eb08">[5] Metagenomics — an overview | ScienceDirect Topics (<a href="https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/metagenomics" rel="noreferrer" target="_blank">https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/metagenomics</a>)</p>

<p id="b813">[6] J.H. Jo, E.A. Kennedy and H.H. Kong. Research Techniques Made Simple: Bacterial 16S Ribosomal RNA Gene Sequencing in Cutaneous Research. <em>Journal of Investigative Dermatology </em>Volume 136, Issue 3, March 2016, Pages e23-e27</p>

<hr />

<p><em>This article was originally published in <a rel="noreferrer" href="https://medium.com/computational-biology" target="_blank">The Computational Biology Magazine on Medium</a>.</em></p>

<p>Cover image by <a rel="noreferrer" href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=106583" target="_blank">Gerd Altmann</a> from <a rel="noreferrer" href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=106583" target="_blank">Pixabay</a></p>

<p>You can find the original article at <a href="https://medium.com/computational-biology/metagenomics-who-is-there-and-what-are-they-doing-9ea71f03eeee" target="_blank" rel="noreferrer">https://medium.com/computational-biology/metagenomics-who-is-there-and-what-are-they-doing-9ea71f03eeee</a></p>
