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
We know that there are trillions of microbes in the environment surrounding us, even in our bodies. These microscopic communities have very diverse ecosystems and by studying their composition and behaviour we can learn a lot about them. If you have come across my previous article [Metagenomics — Who is there and what are they doing?](https://vijinimallawaarachchi.com/2020/03/29/metagenomics-who-is-there-and-what-are-they-doing/) then you know that binning is an important step in metagenomics analysis.[https://medium.com/computational-biology/metagenomics-who-is-there-and-what-are-they-doing-9ea71f03eeee](https://medium.com/computational-biology/metagenomics-who-is-there-and-what-are-they-doing-9ea71f03eeee)

### What is Metagenomics Binning?

Metagenomics binning is the process where we cluster sequences into similar groups corresponding to taxonomic groups such as species, genus or higher levels. We can consider two main categories of metagenomics binning approaches. They are **reference-based** binning and **reference-free** binning. Reference-based binning methods align sequences to databases of reference genomes and determines the taxonomic group to which the sequence belongs to. Reference-free binning methods make use of sequence information, without any prior knowledge and group sequences into unlabelled bins.

In this article, we will be focusing on reference-free binning methods. These methods can be divided into 3 categories. They are

1. Composition-based binning
2. Abundance-based binning
3. Composition and abundance-based binning

### Composition-based Binning Tools

These tools make use of the compositional information of the sequences. The compositional information is generally represented by **oligonucleotide composition**. An **oligonucleotide** is considered to be a contiguous string of a small number of nucleotides. In computational terms, we define oligonucleotides as **_k-mers_**(words of size _k_). The oligonucleotide composition is considered to be conserved within microbial species and varies between species. Sequences are represented as oligonucleotide frequency vectors and different machine learning approaches can be applied to these vectors to group together similar sequences.

Example tools include:

- [TETRA](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-5-163)
- [SCIMM](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-11-544)

You can read the following articles to read about more analyses I have carried out using composition-based binning techniques.

1. [**Composition-based Clustering of Metagenomic Sequences**](https://towardsdatascience.com/composition-based-clustering-of-metagenomic-sequences-4e0b7e01c463)[https://towardsdatascience.com/composition-based-clustering-of-metagenomic-sequences-4e0b7e01c463](https://towardsdatascience.com/composition-based-clustering-of-metagenomic-sequences-4e0b7e01c463)
2. [**How similar is COVID-19 to previously discovered Coronaviruses**](https://towardsdatascience.com/how-similar-is-covid-19-to-previously-discovered-coronaviruses-c3d9f25840f7)
[https://towardsdatascience.com/how-similar-is-covid-19-to-previously-discovered-coronaviruses-c3d9f25840f7](https://towardsdatascience.com/how-similar-is-covid-19-to-previously-discovered-coronaviruses-c3d9f25840f7)

### Abundance-based Binning

Different species can be present at different abundances in a metagenomics sample. Some species can have a low abundance and some can have a high abundance. The coverage of sequences in a metagenomics sample can represent the abundance of underlying species to which the sequences belong to. Abundance-based binning tools make use of this coverage information to identify sequences of similar abundance.

Example tools include,

- [AbundanceBin](https://www.liebertpub.com/doi/10.1089/cmb.2010.0245)
- [Canopy](https://www.nature.com/articles/nbt.2939)

### Composition and Abundance-based Binning

Sometimes there can be species having similar nucleotide composition and hence sequences originating from those species cannot be well-distinguished using composition-based binning tools. In such cases, the abundance of the underlying species can be made use of to separate the sequences. Hence, composition and abundance-based binning methods have been introduced.

Example tools include,

- [MaxBin](https://microbiomejournal.biomedcentral.com/articles/10.1186/2049-2618-2-26)
- [MetaWatt](https://www.frontiersin.org/articles/10.3389/fmicb.2012.00410/full)
- [SolidBin](https://academic.oup.com/bioinformatics/article-abstract/35/21/4229/5448864?redirectedFrom=fulltext)
- [MetaBCC-LR](https://doi.org/10.1093/bioinformatics/btaa441)

### Other Approaches

Apart from the above three methods, the research community has proposed new tools which make use of additional information. Some of them are,

- [BMC3C](https://academic.oup.com/bioinformatics/article/34/24/4172/5045915): makes use of codon information
- [COCACOLA](https://academic.oup.com/bioinformatics/article/33/6/791/2525584): make use of linkage information from paired-end reads
- [d2S Bin](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-017-1835-1): refines binning results by adjusting sequences based on their dissimilarity
- [GraphBin](https://doi.org/10.1093/bioinformatics/btaa180): refines binning results using the connection information of the contigs in the assembly graph (which I have authored)

Hope you found this article useful, especially for beginners in the field of bioinformatics of metagenomics. Feel free to try out these tools and see how they perform. I have provided research articles relevant to them. Most of the articles have links to their software so you can download and try them out.

Thank you for reading!

Cheers.

---

_This article was originally published in [The Computational Biology Magazine on Medium](https://medium.com/computational-biology)._

_Cover image by [Markus Spiske](https://pixabay.com/users/markusspiske-670330/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1808082) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1808082)_

_You can find the original article at [https://medium.com/computational-biology/software-tools-for-reference-free-binning-of-metagenomes-f2d26b27eef2](https://medium.com/computational-biology/software-tools-for-reference-free-binning-of-metagenomes-f2d26b27eef2)_
