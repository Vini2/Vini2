---
title: "Software Tools for Reference-free Binning of Metagenomes"
slug: "software-tools-for-reference-free-binning-of-metagenomes"
date: "2020-05-01"
updated: "2022-04-29"
sourceUrl: "https://vijinimallawaarachchi.com/2020/05/01/software-tools-for-reference-free-binning-of-metagenomes/"
featuredImage: "/blog-images/software-tools-for-reference-free-binning-of-metagenomes/1_hnnc9r25veaurffny2mjdw.jpeg"
categories: ["Binning", "Bioinformatics", "Data Science", "Genomics", "Metagenomics"]
tags: ["Binning", "Bioinformatics", "Data Science", "Metagenomics"]
---
<p>We know that there are trillions of microbes in the environment surrounding us, even in our bodies. These microscopic communities have very diverse ecosystems and by studying their composition and behaviour we can learn a lot about them. If you have come across my previous article <a href="https://vijinimallawaarachchi.com/2020/03/29/metagenomics-who-is-there-and-what-are-they-doing/" target="_blank" rel="noreferrer">Metagenomics — Who is there and what are they doing?</a> then you know that binning is an important step in metagenomics analysis.<a href="https://medium.com/computational-biology/metagenomics-who-is-there-and-what-are-they-doing-9ea71f03eeee"></a></p>

<h3>What is Metagenomics Binning?</h3>

<p>Metagenomics binning is the process where we cluster sequences into similar groups corresponding to taxonomic groups such as species, genus or higher levels. We can consider two main categories of metagenomics binning approaches. They are <strong>reference-based</strong> binning and <strong>reference-free</strong> binning. Reference-based binning methods align sequences to databases of reference genomes and determines the taxonomic group to which the sequence belongs to. Reference-free binning methods make use of sequence information, without any prior knowledge and group sequences into unlabelled bins.</p>

<p>In this article, we will be focusing on reference-free binning methods. These methods can be divided into 3 categories. They are</p>

<ol><li>Composition-based binning</li><li>Abundance-based binning</li><li>Composition and abundance-based binning</li></ol>

<h3>Composition-based Binning&nbsp;Tools</h3>

<p>These tools make use of the compositional information of the sequences. The compositional information is generally represented by <strong>oligonucleotide composition</strong>. An <strong>oligonucleotide</strong> is considered to be a contiguous string of a small number of nucleotides. In computational terms, we define oligonucleotides as <strong><em>k-mers </em></strong>(words of size <em>k</em>). The oligonucleotide composition is considered to be conserved within microbial species and varies between species. Sequences are represented as oligonucleotide frequency vectors and different machine learning approaches can be applied to these vectors to group together similar sequences.</p>

<p>Example tools include:</p>

<ul><li><a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-5-163" rel="noreferrer" target="_blank">TETRA</a></li><li><a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-11-544" rel="noreferrer" target="_blank">SCIMM</a></li></ul>

<p>You can read the following articles to read about more analyses I have carried out using composition-based binning techniques.</p>

<ol><li><a href="https://towardsdatascience.com/composition-based-clustering-of-metagenomic-sequences-4e0b7e01c463"><strong>Composition-based Clustering of Metagenomic Sequences</strong><br></a><a href="https://towardsdatascience.com/composition-based-clustering-of-metagenomic-sequences-4e0b7e01c463"></a></li><li><a href="https://towardsdatascience.com/how-similar-is-covid-19-to-previously-discovered-coronaviruses-c3d9f25840f7"><strong>How similar is COVID-19 to previously discovered Coronaviruses</strong></a><br><a href="https://towardsdatascience.com/how-similar-is-covid-19-to-previously-discovered-coronaviruses-c3d9f25840f7"></a></li></ol>

<h3>Abundance-based Binning</h3>

<p>Different species can be present at different abundances in a metagenomics sample. Some species can have a low abundance and some can have a high abundance. The coverage of sequences in a metagenomics sample can represent the abundance of underlying species to which the sequences belong to. Abundance-based binning tools make use of this coverage information to identify sequences of similar abundance.</p>

<p>Example tools include,</p>

<ul><li><a href="https://www.liebertpub.com/doi/10.1089/cmb.2010.0245" rel="noreferrer" target="_blank">AbundanceBin</a></li><li><a href="https://www.nature.com/articles/nbt.2939" rel="noreferrer" target="_blank">Canopy</a></li></ul>

<h3>Composition and Abundance-based Binning</h3>

<p>Sometimes there can be species having similar nucleotide composition and hence sequences originating from those species cannot be well-distinguished using composition-based binning tools. In such cases, the abundance of the underlying species can be made use of to separate the sequences. Hence, composition and abundance-based binning methods have been introduced.</p>

<p>Example tools include,</p>

<ul><li><a href="https://microbiomejournal.biomedcentral.com/articles/10.1186/2049-2618-2-26" rel="noreferrer" target="_blank">MaxBin</a></li><li><a href="https://www.frontiersin.org/articles/10.3389/fmicb.2012.00410/full" rel="noreferrer" target="_blank">MetaWatt</a></li><li><a href="https://academic.oup.com/bioinformatics/article-abstract/35/21/4229/5448864?redirectedFrom=fulltext" rel="noreferrer" target="_blank">SolidBin</a></li><li><a href="https://doi.org/10.1093/bioinformatics/btaa441" rel="noreferrer" target="_blank">MetaBCC-LR</a></li></ul>

<h3>Other Approaches</h3>

<p>Apart from the above three methods, the research community has proposed new tools which make use of additional information. Some of them are,</p>

<ul><li><a href="https://academic.oup.com/bioinformatics/article/34/24/4172/5045915" rel="noreferrer" target="_blank">BMC3C</a>: makes use of codon information</li><li><a href="https://academic.oup.com/bioinformatics/article/33/6/791/2525584" rel="noreferrer" target="_blank">COCACOLA</a>: make use of linkage information from paired-end reads</li><li><a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-017-1835-1" rel="noreferrer" target="_blank">d2S Bin</a>: refines binning results by adjusting sequences based on their dissimilarity</li><li><a href="https://doi.org/10.1093/bioinformatics/btaa180" rel="noreferrer" target="_blank">GraphBin</a>: refines binning results using the connection information of the contigs in the assembly graph (which I have authored)</li></ul>

<p>Hope you found this article useful, especially for beginners in the field of bioinformatics of metagenomics. Feel free to try out these tools and see how they perform. I have provided research articles relevant to them. Most of the articles have links to their software so you can download and try them out.</p>

<p>Thank you for reading!</p>

<p>Cheers.</p>

<hr />

<p><em>This article was originally published in <a rel="noreferrer" href="https://medium.com/computational-biology" target="_blank">The Computational Biology Magazine on Medium</a>.</em></p>

<p><em>Cover image by <a rel="noreferrer" href="https://pixabay.com/users/markusspiske-670330/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1808082" target="_blank">Markus Spiske</a> from <a rel="noreferrer" href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1808082" target="_blank">Pixabay</a></em></p>

<p><em>You can find the original article at <a href="https://medium.com/computational-biology/software-tools-for-reference-free-binning-of-metagenomes-f2d26b27eef2">https://medium.com/computational-biology/software-tools-for-reference-free-binning-of-metagenomes-f2d26b27eef2</a></em></p>
