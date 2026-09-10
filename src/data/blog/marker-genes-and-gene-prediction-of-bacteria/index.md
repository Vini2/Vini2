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
When we think of the word **marker**, the first thing that comes to our minds is something that is used to indicate a place. For example, it can be your current location on Google Maps or it can be the place where you planted some seeds in your garden. Similarly, in genomics studies, we can find **marker genes** in bacterial genomes. In this article, I will introduce you to marker genes used in metagenomics analysis, how they are used and walk you through an example of a commonly used gene prediction tool.

### What are Marker Genes/Genetic Markers?

According to [Wikipedia](https://en.wikipedia.org/wiki/Genetic_marker),

> A genetic marker is a gene or DNA sequence with a known location on a chromosome that can be used to identify individuals or species.

As a result of mutations and alterations within the genome, these genes can vary depending on their composition and location.

### What are Single-Copy Marker Genes?

In bacterial cells, single-copy marker genes are expected to occur once. In other words, each bacterial cell contains only one copy of each of these single-copy marker genes. These genes are essential for the life-functions and can be found in the majority of the bacterial species.

Previous efforts have been made to identify marker genes that can resolve closely related organisms. Protein-coding marker genes which are rarely horizontally transferred and exist in single copies within genomes have been identified [1]. These include a set of 40 marker genes [2,3] and 107 marker genes [3].

### Usage of Marker Genes

Marker genes are commonly used in taxonomic profiling of environmental samples to identify gene families. These genes are also used in phylogenetic inference to reconstruct the evolutionary history of organisms.

Recently, reference-free binning tools such as [MaxBin](https://doi.org/10.1186/2049-2618-2-26) and [SolidBin](https://doi.org/10.1093/bioinformatics/btz253) have used single-copy marker genes to identify the number of species in a given sample. Moreover, tools such as [MyCC](https://doi.org/10.1038/srep24175) use single-copy marker genes to refine resulting clusters.

### Gene Predictors

Gene predictors can be used to extract marker genes. Some popular gene prediction tools include,

1. [Glimmer](https://doi.org/10.1093/nar/27.23.4636)
2. [MetaGene](https://doi.org/10.1093/nar/gkl723)
3. [GeneMark](https://doi.org/10.1093/nar/26.4.1107)
4. [FragGeneScan](https://doi.org/10.1093/nar/gkq747)
5. [fetchMG](https://doi.org/10.1038/nmeth.2693)

### Example Usage of FragGeneScan

Let us see how we can use [**FragGeneScan**](https://doi.org/10.1093/nar/gkq747) to predict genes. Firstly, you can download FragGeneScan from

- SourceForge: [https://sourceforge.net/projects/fraggenescan/files/latest/download](https://sourceforge.net/projects/fraggenescan/files/latest/download)
- GitHub: [https://github.com/gaberoo/FragGeneScan](https://github.com/gaberoo/FragGeneScan)

You can follow the instructions provided in the README file to compile and run FragGeneScan.

You can see the following parameters and options of FragGeneScan.

If you have a complete genomic sequence, you can run FragGeneScan to predict its genes as follows.

```bash
./run_FragGeneScan.pl -genome=<sequence_file> -out=<output_file>  -complete=1  -train=complete -thread=<num>

```

If you have a set of assembled contigs, you can run FragGeneScan to predict its genes as follows.

```bash
./run_FragGeneScan.pl -genome=<contigs_file> -out=<output_file>  -complete=0  -train=complete -thread=<num>

```

FragGeneScan generates four files with their contents as follows.

1. `<output_file>.out`: coordinates of putative genes
2. `<output_file>.fnn`: nucleotide sequences corresponding to the putative genes in `<output_file>.out`
3. `<output_file>.faa`: amino acid sequences corresponding to the putative genes in `<output_file>.out`
4. `<output_file>.gff`: gene prediction results

Once you have obtained these files, you can use the `<output_file>.faa` file along with [HMMER](http://hmmer.org/) to determine the single-copy marker genes in the sequences.

### Final Thoughts

Marker genes have become a very powerful aspect in bioinformatics research which has allowed researchers to gain insights into the taxonomic information and evolutionary history of bacterial and archaeal species. The field of metagenomics benefits immensely from studies based on marker genes.

I hope you found this article useful. Feel free to try out the tools mentioned in this article and play around with examples.

Cheers, and stay safe!

### References

[1] Microbial abundance, activity and population genomic profiling with mOTUs2 ([https://motu-tool.org/fetchMG.html](https://motu-tool.org/fetchMG.html))

[2] Ciccarelli et al. (2006) Toward Automatic Reconstruction of a Highly Resolved Tree of Life, _SCIENCE_03: 1283–1287

[3] Wu D, Jospin G, Eisen JA (2013) Systematic Identification of Gene Families for Use as “Markers” for Phylogenetic and Phylogeny-Driven Ecological Studies of Bacteria and Archaea and Their Major Subgroups. PLoS ONE 8(10): e77033. [https://doi.org/10.1371/journal.pone.0077033](https://doi.org/10.1371/journal.pone.0077033)

---

_This article was originally published in [The Computational Biology Magazine on Medium](https://medium.com/computational-biology)._

_Cover image by [Mahmoud Ahmed](https://pixabay.com/users/mahmoud-ahmed-16261757/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5299471) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5299471)_

_You can find the original article at [https://medium.com/computational-biology/marker-genes-and-gene-prediction-of-bacteria-5fa4cb7802f3](https://medium.com/computational-biology/marker-genes-and-gene-prediction-of-bacteria-5fa4cb7802f3)_
