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
Have you wondered how scientists identify regions of similarity in three or more biological sequences? As described in my [previous article](https://medium.com/towards-data-science/dna-sequence-data-analysis-starting-off-in-bioinformatics-3dba4cea04f), **Sequence alignment** is a method of arranging sequences of DNA, RNA, or protein to identify regions of similarity. In my latest article on bioinformatics, I have discussed about [**pairwise sequence alignment**](https://medium.com/towards-data-science/pairwise-sequence-alignment-using-biopython-d1a9d0ba861f). Make sure to check them out as well. Multiple sequence alignment is quite similar to pairwise sequence alignment, but it uses three or more sequences instead of only two sequences.

In this article, I will be walking you through **multiple sequence alignment**. Furthermore, we will be trying out some examples with **Clustal Omega** and **T-Coffee** whicle checking out some coding examples with **Biopython**.

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/1d0ab-1cpnlejxfw3j2oau9kv9oyg.png)

_Figure 1: Results from T-Coffee_

## What is Multiple Sequence Alignment?

In **multiple sequence alignment (MSA)**we try to align **_three or more related sequences_** so as to achieve maximal matching between them. The goal of **MSA** is to arrange a set of sequences in such a way that as many characters from each sequence are matched according to some scoring function.

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/0e783-0bkaomvm5ln1kllao.png)

_Figure 2: Image Source: [https://openi.nlm.nih.gov/detailedresult.php?img=PMC2921379_1756-0500-3-199-1&req=4](https://openi.nlm.nih.gov/detailedresult.php?img=PMC2921379_1756-0500-3-199-1&req=4)_

## Scoring

The scoring process of **MSA** is based on the sum of the scores of all possible pairs of sequences in the multiple alignment according to some scoring matrix. You can refer my [previous article](https://medium.com/towards-data-science/pairwise-sequence-alignment-using-biopython-d1a9d0ba861f) to learn about the different scoring matrices and how to match them.

```text
Score of multiple alignment = ∑ score(A, B)

```

where score(A, B) = pair-wise alignment score of A, B.

### Example

```text
Sequence 1:    G   K   N
Sequence 2:    T   R   N
Sequence 3:    S   H   E
Sum of pairs: -1 + 1 + 6 = 6

```

Sum of 2nd Col = score (K, R) + score (R, H) + score (K, H) = 2+0+-1 = 1

The goal of **MSA** is to achieve the **maximum Sum of Pairs**.

## Types of Multiple Sequence Alignment

Aligning three or more sequences can be difficult and are almost always time-consuming to align manually. Hence computational algorithms are used to produce and analyse these alignments. Most **MSA** algorithms use [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) and [heuristic](https://en.wikipedia.org/wiki/Heuristic) methods.

Given below are **MSA** techniques which use heuristic methods.

1. Progressive Alignment Construction
2. Iterative Alignment Construction
3. Block-base Alignment

These methods can find solutions among all possible solutions, but they do NOT guarantee that the best solution will be found. Hence they are considered as approximations but we can easily find a solution close to the actual one within a short time.

### **Progressive Alignment Construction**

This method, also known as the **hierarchical** or **tree method**, was developed by **Paulien Hogeweg** and **Ben Hesper** in 1984. It builds up a final **MSA** by combining pairwise alignments beginning with the most similar pair and progressing to the most distantly related pair.

Two of the popular progressive alignment methods used at present are,

1. [**Clustal Omega**](http://www.ebi.ac.uk/Tools/msa/clustalo/)
2. [**T-Coffee**](http://tcoffee.crg.cat/apps/tcoffee/index.html)

### **Iterative Alignment Construction**

This method consists of a set of methods to produce **MSAs** while reducing the errors inherent in progressive methods. They work similarly to progressive methods, but repeatedly realign the initial sequences as well as add new sequences to the growing **MSA**.

The software package [**PRRN/PRRP**](http://www.genome.jp/tools/prrn/) is based on a [hill-climbing algorithm](https://en.wikipedia.org/wiki/Hill-climbing_algorithm) to optimise its **MSA** alignment score.

### Block-base Alignment

This method divides the sequences into blocks and tries to identify blocks of un-gapped alignments shared by many sequences.

[**DIALIGN2**](https://www.ncbi.nlm.nih.gov/pubmed/10222408) is a popular block-base alignment approach .

## Time to Practice

The time you have been waiting for has arrived. It is time to try out some tools and examples. I will be using [**Clustal Omega**](http://www.ebi.ac.uk/Tools/msa/clustalo/) and [**T-Coffee**](http://tcoffee.crg.cat/) to show you a few examples of MSA. You can try out these tools online.

### Clustal Omega

Go to [http://www.ebi.ac.uk/Tools/msa/clustalo/](http://www.ebi.ac.uk/Tools/msa/clustalo/).

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/984f6-1btz6gnh_768javtcqze7gq.png)

__Figure 3: Clustal Omega__

You will get a page to select the type of data (Protein, DNA or RNA), enter the sequences (or upload a file of a supported format) and set the output format.

I will be using the following 10 genome sequences (DNA) of **Acanthaster planci** (commonly known as [**Crown-of-thorns starfish**](https://en.wikipedia.org/wiki/Crown-of-thorns_starfish)) for this demonstration. You can download the complete genome for an organism from [_here_](https://www.ncbi.nlm.nih.gov/guide/howto/dwn-genome/), in .fsa format.

> An FSA file (.fsa) is a fragment analysis data file created by DNA sequencers and analyzers.

```text
>gnl|GNOMON|17969.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1752, whole genome shotgun sequence (NW_019093106.1)
AAGCAAAAAGCAGAGAAGGAGAAACCAGGTTTCCTTAGTAGGATCCACCAGGCATTCAGCTTTGAAGAGG
AACAGTCCAGGGATGATGAGCAGGATAGTCAAGACAGCGAGTCCGAGGATGGGAGTATTGACGAAGACCC
TGAGGGCAATGAAAACACGGTGGATCCAATCGACTGTTTGAGTGCCCCACGTGCTGTTGTCACCAAAGAA
GAGCTCATCACTGAGGAG
>gnl|GNOMON|70594930.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1731, whole genome shotgun sequence (NW_019093085.1)
CAAGAACAGTGGATGAAGAAAACAGCAGGCGATAGCAGCGTGGTTGGCGCCTTGCCCCTGGGCTCATCTT
CTAGCATCACTGCCCTGATACGCGAAAGCAGCGTGGTTGGTCCCTTCCTGTGGGCTCATCTTCTGGCATC
ACTGCCCTGATAATGTAAGGCGGTAGCAGCGAGGTTGGTCCCCTGCCTGTGGGCTCATCTTCTGGAATCA
CCACCCT
>gnl|GNOMON|18113.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1727, whole genome shotgun sequence (NW_019093081.1)
ATGGATTTCTACCAAGACATACAAAACTGCCAAACGTACGAAGCGCTCAACTTGCTTCTCGAAACCATTG
TACTCAGCGAAGATGAGAGGGCGTACGCTTTTCATAGACTGTGCGAACTGGCTCTGATTCAGGAGGCCGG
TGACGGTCCGGGGGATGAAGAGGAACGAATGGACCCGACTGAAGACGGCGCACCGCACCAGCGAGGGTAC
GGGCACGACAACGATGATCCGTGGGCAGAATTTGAGGAGGATGATCCAGAGGACGAGGGGACGGAAGAGC
TACCGGAGGAGGAAGACGAGGAGAACCAGCCACCGAGGAAAAGGATTCGCGTGGAGAGACCGCAAGATTA
TTACAATATTGTAGACGTTAATGAAAA
>gnl|GNOMON|130719778.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1726, whole genome shotgun sequence (NW_019093080.1)
CCTGAGTTACAACTCCTTCTGTGCCCTTCCGCCATGGAGTTAACTTCCACGCACCTACTATAATCAGCAC
GAAACGCAAGACCATAGCTTAATACTTACAGGGAAGTGGATGATCGTGCTG
>gnl|GNOMON|65528162.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1702, whole genome shotgun sequence (NW_019093056.1)
TATATGCAAACAGTCCACAGACCAGCACCAACTGGCCCTCTGTGATACCTGCAAGAAGCACTACCATCTG
GGCTGTCTGGACCCACCACTGAGCCGAATGCCTAAGAAGACTGCTTTCAGCGGATGGCAGTGCTCTGAGT
GCGTCTCATCTTCCAGTGATACCTCCATGGCTGAGACTGTAGAAGGCGAGGAAGGGGATGAGGCAGGCAG
GCGTAAGCGACGAGTCATCCGAGAACCCAATAAATTCACCCCTCCCGTGGACGGCAAAGGCGGTCAGAA
>gnl|GNOMON|85684402.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1690, whole genome shotgun sequence (NW_019093044.1)
GGAAACTGTTGAAATGGTCCCCACCAGCCTAGCTCTTCTTCTTTCGCTGTTTGGAAGGGAACCTCTTTCA
CAAGGCAGATAGGGAAATATTTTCATTTCCAAGAGAGAGGTAGTCAGTGAGGATCCATCATCACCACGAG
AGGGTTACAATGATAACAGCCCAGATGAAGACATAGAAAATCCACTGGTGACAGGACAAAACCCAACTGT
CTACAAAATT
>gnl|GNOMON|65753714.m Model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1685, whole genome shotgun sequence (NW_019093039.1)
GTACCTATACCCACTAAACCAGTCAAATGCTTTGCAGGAGATTCCATCTCTGAAATGGAGACGATTCTGC
AGAATGCTGTGACCTAGCTGCTGGCATCAGATACTGCATTCAGATCCAACAAGACTGGTATTCTTGTAAG
ATGGGAACTACTACTACGTTGAGAACCTACCAGTCTGTCAGCCAGCCAACCAGGAACTTTACCATCCCCC
AGCCACCTTGTCAGC
>gnl|GNOMON|22673.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1684, whole genome shotgun sequence (NW_019093038.1)
TGGGGAGCTTTGCAGGAACAAGCTTTTAGGACGCTGAAAGCGCGACTGGAATCACAACCGATCTTGAATC
TTCCCGATCCGGAGAAACCGTATATCTTAGCCACAGATGCCTCAGATGTAGGAATAGGGGCGGTGCTCAT
GCAAGAGCATGAAGGTGTGAACCATCCGATCAGCTATGCCAGCCGAAAGTTGCTGCCACCATCTCGCCTC
TATAACAAGGGCTTCGATGAGCAGCTCATCGGCAAGACAACAAGCCACAGGTCAAATGCCATAAGAGCGT
ACAAGAGAACCAGCGAGGACGAGAAGCAAGCTGTCAGCGTGGCTTTGTACGGAGAGTTACAGCAGG
>gnl|GNOMON|11409.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1657, whole genome shotgun sequence (NW_019093011.1)
AAATTCAATAAAACAATTTTTCTAAAAGAAGGCTATTCAGTGAAAATGGCTTTGTGGTGTGATTACCTAT
GCATAGAATGTGCTCGAGATGAAGACCTGGAGAGTCTACCCAGCCACGAGGAAGAGCTTCAAGATGTTGG
GCAGCAACAGCAGCAAATGGATAACACACACATTGACCTTGTCACCCCAGAGCTGAGTGCCGAGGAAAAG
GAATCCATGCCCATGCCTCCGAGACTGTCTCACAAGAAGTCCCTCAAGAAGAAAAGTCCATCGGCTGAGC
ACAGCAGAAAAAGTGGCAGGAAGCTGGATTACCAGAGCTCTAACCAAG
>gnl|GNOMON|22945.m Partial model predicted by Gnomon on Acanthaster planci unplaced genomic scaffold, OKI-Apl_1.0 oki_scaffold1640, whole genome shotgun sequence (NW_019092994.1)
ATCTGCGCCCGCGGCGGCTGCACGCGGCCTCGCGGCCGGCGCTTCGACGTGCACCGGGGCGGCCCTCCTA
CTCGTTGGGGCGCACCACCCGGGCGGCGGTCCCACTCTTTCTCTGCCCCGACGGCCGGGTGTGGGCGGCA
CGCTCAGCGCCGTCCATTTTCAGGGCTAGTTGATTCGGCAGGCTCCATCTATCCTGAGGGAAACTTCGGA
GGGAACCAGCTACTAGACGGTTCGAATAGTCTTTCGCCCCTATACCCAAGTCGGTTTGCAG

```

_10 sequences from the genome of **Acanthaster planci** (commonly known as **Crown-of-thorns starfish**)_

After entering the sequences and selecting the parameters, you can submit your job. The results of the job can be viewed as follows. You can check the results for this example from [_here_](http://www.ebi.ac.uk/Tools/services/web/toolresult.ebi?jobId=clustalo-I20170922-134518-0538-73689021-p2m).

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/071c6-1usoicksuuyhvhfdl67hpsa.png)

__Figure 4: Results of the job on Clustal Omega__

You can download the results as an alignment file with the .aln extension by clicking on the **Download Alignment File** button.

### T-Coffee

Go to [http://tcoffee.crg.cat/apps/tcoffee/index.html](http://tcoffee.crg.cat/apps/tcoffee/index.html).

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/3e136-1aooksdlragwvsefm2wtntg.png)

__Figure 5: T-Coffee__

For this demonstration, I have selected _Combine popular aligners (M-Coffee)_under **DNA**section. Then you will get a page to enter the sequences (or upload a file of supported format).

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/42196-1cl3zby0m6rzzmo2f_xuqeg.png)

__Figure 6: M-Coffee input page__

I will be using the same file I used to demonstrate **Clustal Omega**. After entering the sequences, you can submit your job. The results of the job can be viewed as follows. You can check the results for this example from [_here_](http://tcoffee.crg.cat/apps/tcoffee/result?rid=3666c6c4).

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/bfecb-18lfp2vmpxgottkc22mfxgw.png)

__Figure 7: Results for the job on T-Coffee__

### Biopython Wrappers for Clustal Omega and T-Coffee

[**Biopython**](http://biopython.org/), which I had introduced in my [previous article](https://medium.com/towards-data-science/pairwise-sequence-alignment-using-biopython-d1a9d0ba861f), consists of command line wrappers for **Clustal Omega**, **T-Coffee** and many other tools such as **ClustalW** and **DIALIGN**. You can check out all the wrappers and sample code from [_here_](http://biopython.org/DIST/docs/api/Bio.Align-module.html). I will show how to use the **Clustal Omega** wrapper in the next example.

To run the _Clustal Omega wrapper_, first you should download its precompiled binaries. You can download them from [_here_](http://www.clustal.org/omega/). A binary file will be downloaded. You can make it an executable using the command given below. The name of the binary file may vary according to the binary file version you have downloaded. In my machine it was downloaded as **clustal-omega-1.2.3-macosx**.

```bash
chmod 777 clustal-omega-1.2.3-macosx

```

I will be using the same **.fsa** file used before, for this example as well.

The following code uses the Clustal Omega wrapper to develop **MSA** for the given input .fsa file. It will be easy if you have the .fsa file, .py file and the executable binary in the same location.

```python
# Import Clustal Omega wrapper
from Bio.Align.Applications import ClustalOmegaCommandline

# Define input file
in_file = "/Users/vijinimallawaarachchi/Documents/Python/Acanthaster_planci_Gnomon.fsa"

# Define output file
out_file = "aligned.fasta"

# Get the command for Clustal Omega
clustalomega_cline = ClustalOmegaCommandline(infile=in_file, outfile=out_file, verbose=True, auto=True)

# Print the executable command
print(clustalomega_cline)

```

After running this python code you will get a command as output. The path may change according to where you put your files.

```bash
clustalo -i /Users/vijinimallawaarachchi/Documents/Python/Acanthaster_planci_Gnomon.fsa -o aligned.fasta — auto -v

```

_Figure 8: Output command_

Now execute the downloaded binary file with the shown command as follows. Make sure to replace **clustalo** by **./clustal-omega-1.2.3-macosx**

```bash
./clustal-omega-1.2.3-macosx -i /Users/vijinimallawaarachchi/Documents/Python/Acanthaster_planci_Gnomon.fsa -o aligned.fasta --auto -v

```

You will get the following results saying that progressive alignment has been done.

![](/blog-images/multiple-sequence-alignment-using-clustal-omega-and-t-coffee/15e14-1da7el-5lcxazkdlgqf8k1w.png)

_Figure 9: Final result_

Now you can see that a file named as **aligned.fasta** has been formed in the same location as your files are. Once you open it, you can see the alignments in FASTA format.

> FASTA format is a text-based format for representing either nucleotide sequences or peptide sequences, in which nucleotides or amino acids are represented using single-letter codes. The format also allows for sequence names and comments to precede the sequences. The format originates from the FASTA software package, but has now become a standard in the field of bioinformatics.

 Figure 10: Output file in FASTA format

Hope you enjoyed reading this article and learned something useful and interesting.

Since I’m still very new to this field, I would like to hear your advice. 😊

Thanks for reading… 😃

---

Originally posted in [Towards Data Science](https://towardsdatascience.com/multiple-sequence-alignment-using-clustal-omega-and-t-coffee-3cc662b1ea82?source=friends_link&sk=bacdd8d7cf10931720a68440484c4edd)
