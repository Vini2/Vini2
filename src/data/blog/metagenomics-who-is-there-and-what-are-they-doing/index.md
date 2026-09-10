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
Did you know that your body houses about 100 trillion bacteria? Estimates show that a human has approximately a pound or two of bacteria living in his/her gut (stomach) [1] (Now don’t go and drink all the antibiotics you know, to kill those bacteria. In fact, these bacteria play an important role in our metabolism and immune system). The same goes for the backyard of your house. There can be many species of bacteria living in the soil and they help to enrich the soil (e.g.: _nitrifying bacteria_ produce nitrates which are essential for plants). These microscopic communities have very diverse ecosystems and studying their composition and behaviour can provide us with valuable insights. In this article, I will provide a basic introduction to **metagenomics**, which is the study of genetic material obtained from microbial communities.

## What is Metagenomics?

> Metagenomics is the application of modern genomic techniques to the study of communities of microbial organisms directly in their natural environments, bypassing the need for isolation and lab cultivation of individual species [2].

Different communities of microorganisms can be found in soil, sea, mud, forests, space and even in the human body. Microorganisms that can be found in these environments can include bacteria, viruses/phages, microbial eukaryotes (e.g.: yeast) and worms (e.g.: helminths and nematodes).

## Why Metagenomics?

Now you must be wondering how can we study these tiny organisms which we cannot even see. The old school way to study them would be to obtain samples, plate them in Petri dishes, see if anything grows, isolate the culture, and [sequence](https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f). However, the majority of the bacterial species cannot be cultured using this traditional way. So in metagenomics, what we do is obtain samples from the microbial communities directly and [sequence](https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f) them [3].

Metagenomics helps in the discovery of novel natural products, antibiotics and enzymes with new functions in many areas such as medicine, agriculture, energy, food and nutrition, etc.

## Two Main Questions in Metagenomics

Every metagenomics study comes across two main questions [4];

1. **_Who is there?_**
2. **_What are they doing_**?

When we consider the question “_who is there_”, we want to identify what species of micro-organisms are present in the sample. The question “_what are they doing_” implies that we have to determine their functions and behaviours.

## Shotgun vs. Targeted Metagenomics

Once you have obtained samples from the environment, you have to prepare libraries so that it becomes easy to analyse. The two current methods of creating your libraries for analysis are

1. **Targeted metagenomics**: targeting a specific region of a genome (e.g.: 16S rRNA and 18S rRNA) that is shared across multiple organisms and samples. It provides more precise data with more depth but it may result in unequal amplification for certain targeted regions.
2. **Shotgun metagenomics**: can [sequence](https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f) everything in your sample. It is perfect for all organisms. It provides greater resolution to genetic content (especially [DNA](https://towardsdatascience.com/starting-off-in-bioinformatics-dna-nucleotides-and-strands-8c32515271a8)) but will result in very complex datasets.

## Shotgun Metagenomics Analysis

There are three main approaches when dealing with metagenomic datasets [4] as shown in Figure 1.

1. **Marker gene analysis**: sequences are compared with databases of taxonomically or phylogenetically informative sequences called **marker genes**, compare their similarity and taxonomically annotate the sequences. The most frequently used marker genes are ribosomal [RNA](https://towardsdatascience.com/starting-off-in-bioinformatics-rna-transcription-and-translation-aaa7a91db031) (ribonucleic acid) genes that have a single copy and are common to microbial genomes.
2. **Binning**: clusters sequences into similar groups corresponding to taxonomic groups such as species, genus or higher levels.
3. **Assembly**: put all the small sequences together in your sample to form much longer sequences representing genomes. Check out [my previous article](https://towardsdatascience.com/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f) to get a basic idea about sequencing and assembly. A more detailed article will be published in future.

Fig 1. Methods used for shotgun metagenomics analysis

## Targeted Metagenomics

In order to perform targeted metagenomics, the genetic material from samples is extracted and the genes of interest are PCR amplified based on regions of interest [5]. The most commonly used gene for this purpose is the **16S ribosomal RNA**gene. This gene is called the “**universal phylogenetic marker**”. It is present in all living microorganisms and contains a single copy.

Fig 2. The basic workflow of 16S rRNA analysis

Let’s consider the basic workflow of 16S rRNA gene-based analysis (Figure 2) of the human skin [6]. Firstly, samples are collected and the DNA is extracted. Next, PCR amplification is done for bacterial 16S rRNA genes and the amplified samples are sequenced. Finally, the resulting data is processed and analysed using various tools. We can determine operational taxonomic units (OTUs), aspects of community structure and functional roles of microbial communities.

Two famous 16S rRNA analysis pipelines include [**QIIME**](https://qiime2.org/) and [**Mothur**](https://www.mothur.org/).

## Final Thoughts

Currently, I’m doing research related to metagenomics. The articles I have read and what I have done so far inspired me to write this article. Metagenomics is a fairly new area and considered as a hot topic these days. I have found metagenomics to be very fascinating, full of research problems and new things to discover. For those of you who are interested in pursuing higher studies in the fields of bioinformatics and computational genomics, I hope you found my article as a useful stepping point.

Thank you for reading. I would like to hear your ideas about this emerging field.

Cheers!

## References

[1] 6 Surprising Facts About the Microbes Living in Your Gut ([https://www.healthline.com/health-news/strange-six-things-you-didnt-know-about-your-gut-microbes-090713#1](https://www.healthline.com/health-news/strange-six-things-you-didnt-know-about-your-gut-microbes-090713#1))

[2] Kevin Chen and Lior Pachter. Bioinformatics for Whole-Genome Shotgun Sequencing of Microbial Communities in _PLOS Computational Biology_. Vol. 1 2005.

[3] D.R. Garza and B.E. Dutilh. From cultured to uncultured genome sequences: metagenomics and modeling microbial ecosystems in _Cellular and Molecular Life Sciences _(2015) 72: 4287

[4] Thomas J. Sharpton. An introduction to the analysis of shotgun metagenomic data. _Frontiers in Plant Science _16 June 2014

[5] Metagenomics — an overview | ScienceDirect Topics ([https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/metagenomics](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/metagenomics))

[6] J.H. Jo, E.A. Kennedy and H.H. Kong. Research Techniques Made Simple: Bacterial 16S Ribosomal RNA Gene Sequencing in Cutaneous Research. _Journal of Investigative Dermatology_Volume 136, Issue 3, March 2016, Pages e23-e27

---

_This article was originally published in [The Computational Biology Magazine on Medium](https://medium.com/computational-biology)._

Cover image by [Gerd Altmann](https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=106583) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=106583)

You can find the original article at [https://medium.com/computational-biology/metagenomics-who-is-there-and-what-are-they-doing-9ea71f03eeee](https://medium.com/computational-biology/metagenomics-who-is-there-and-what-are-they-doing-9ea71f03eeee)
