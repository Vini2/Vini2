---
title: "Assessing the Quality of Genome Assemblies using QUAST"
slug: "assessing-the-quality-of-genome-assemblies-using-quast"
date: "2020-09-03"
updated: "2022-04-29"
sourceUrl: "https://vijinimallawaarachchi.com/2020/09/03/assessing-the-quality-of-genome-assemblies-using-quast/"
featuredImage: "/blog-images/assessing-the-quality-of-genome-assemblies-using-quast/1_4qghtp8t0fwmohtrlgaziq.png"
categories: ["Bioinformatics", "Genomics"]
tags: ["Assembly", "Assembly quality", "Bioinformatics", "Genomics"]
---
<p id="d26f">The assembly algorithms that have been developed so far intend to provide better assemblies evaluated under different criteria. Hence, depending on the specific scenario the assembly process might produce better results if we use the most appropriate assembler. Even though contiguous genomes may not be produced, segments from the reference genomes can be obtained using existing assembly methods. Therefore, the need to evaluate the quality of assemblies exists. These evaluations help researchers to pick different assemblers for different scenarios.</p>

<p id="a891">How can we know whether the assemblies we obtain from reads using currently available assemblers are correct or not? In this article, we will see how to determine the quality of assemblies using&nbsp;<strong>QUAST</strong>, which is one of the most famous assessment tools available for genome assemblies. Let’s get started.</p>

<h2 id="c464">What is QUAST?</h2>

<p id="4a86"><strong>QUAST</strong>&nbsp;stands for QUality Assessment Tool. QUAST can evaluate assemblies using reference genomes, as well as without reference genomes. QUAST produces detailed reports, tables and plots which show the different aspects of assemblies.</p>

<h2 id="4dda">Download QUAST</h2>

<p id="8f44">You can go to the official website of <a rel="noreferrer" href="http://bioinf.spbau.ru/quast" target="_blank"><strong>QUAST</strong></a> and click on the <strong>DOWNLOAD</strong> button.</p>

<p id="b9bf">You will be directed to a SOURCEFORGE download page from where you can download the latest version (<em>quast-5.0.2</em>&nbsp;when I was writing this article) of QUAST. The pre-compiled binaries will be downloaded and you can run it straight away after extracting.</p>

<pre><code>tar -xf quast-5.0.2.tar.gz<br>cd quast-5.0.2<br>quast.py</code></pre>

<p id="366e">You can see the following after executing&nbsp;<code>quast.py</code>&nbsp;or&nbsp;<code>python quast.py</code>.</p>

<pre>QUAST: Quality Assessment Tool for Genome Assemblies<br>Version: 5.0.2Usage: python quast.py [options] &lt;files_with_contigs&gt;Options:<br>-o  --output-dir  &lt;dirname&gt;       Directory to store all result files [default: quast_results/results_&lt;datetime&gt;]<br>-r                &lt;filename&gt;      Reference genome file<br>-g  --features [type:]&lt;filename&gt;  File with genomic feature coordinates in the reference (GFF, BED, NCBI or TXT)<br>                                  Optional 'type' can be specified for extracting only a specific feature type from GFF<br>-m  --min-contig  &lt;int&gt;           Lower threshold for contig length [default: 500]<br>-t  --threads     &lt;int&gt;           Maximum number of threads [default: 25% of CPUs]These are basic options. To see the full list, use --helpOnline QUAST manual is available at <a href="http://quast.sf.net/manual" rel="noreferrer" target="_blank">http://quast.sf.net/manual</a></pre>

<p id="ea6a">Once you have ensured that QUAST is running correctly, we can start to assess some assemblies.</p>

<h2 id="1d86">Obtaining an Example Assembly</h2>

<p id="d4dc">We will be using the&nbsp;<a href="https://github.com/fenderglass/Flye/blob/flye/docs/USAGE.md#e-coli-p6-c4-pacbio-data" rel="noreferrer" target="_blank">example dataset</a>&nbsp;used in the&nbsp;<a href="https://github.com/fenderglass/Flye" rel="noreferrer" target="_blank">Flye</a>&nbsp;assembler. The example dataset consists of reads of an&nbsp;<strong>E. coli</strong>&nbsp;genome (Escherichia coli str. K-12 substr. MG1655 with NCBI accession number&nbsp;<a href="https://www.ncbi.nlm.nih.gov/nuccore/CP009685.1/" rel="noreferrer" target="_blank">CP009685</a>). The reads consist of PacBio reads.</p>

<p id="92be">You can download the dataset with reads using the following command.</p>

<pre><code>wget https://zenodo.org/record/1172816/files/E.coli_PacBio_40x.fasta</code></pre>

<p id="2d53">Let’s assemble this dataset using the Flye assembler.</p>

<pre><code>flye --pacbio-raw E.coli_PacBio_40x.fasta --out-dir my_assembly --threads 8</code></pre>

<p id="5df9">Now we have an example assembly. The contigs of the final assembly can be found in the file&nbsp;<code>assembly.fasta</code>. Let’s see how good the quality of the assembly is.</p>

<h2 id="c6f8">Using QUAST</h2>

<p id="0882">You can run QUAST by providing the contigs file containing the final assembly and the reference genome.</p>

<pre><code>quast.py my_assembly/assembly.fasta -r ref.fasta -o quastResult</code></pre>

<p id="f0c3">Now you can view the final report from the <code>report.html</code> file in the output folder.</p>

<figure><img width="1400" height="871" src="../../blog-images/assessing-the-quality-of-genome-assemblies-using-quast/1_muszp2ozwem02rqkeqjvuq.png" alt="" /><figcaption>QUAST report for Flye assembly of E. coli dataset</figcaption></figure>

<p id="9351">You can also compare multiple assemblies (<code>assemly1.fasta</code>&nbsp;and&nbsp;<code>assembly2.fasta</code>) as shown. You can specify labels for each assembly as well.</p>

<pre><code>quast.py assemly1.fasta assembly2.fasta -l label1,label2 -r ref.fasta -o quastResult</code></pre>

<figure><img width="1400" height="816" src="../../blog-images/assessing-the-quality-of-genome-assemblies-using-quast/1_4qghtp8t0fwmohtrlgaziq-2.png" alt="" /><figcaption>QUAST report for two assemblies</figcaption></figure>

<p id="7d2e">You can note the following common evaluation measures that are used to assess the quality of genomes.</p>

<ul><li>Genome fraction</li><li>Largest alignment</li><li>NGA50</li><li>LGA50</li><li>Number of misassemblies</li><li>Number of contigs</li></ul>

<p id="9573">QUAST provides sample explanations for each of these measures. You can hover over each measure and a popup message will be shown with the explanation.</p>

<p id="9b06">You can also assess your assembly without providing any reference genomes.</p>

<pre><code>quast.py my_assembly/assembly.fasta -o quastResult</code></pre>

<p id="e5f0">Your result will contain details of the statistics without any references such as,</p>

<ul><li>Number of contigs</li><li>Largest contig</li><li>Total length</li><li>N50</li><li>L50</li></ul>

<figure><img width="1400" height="834" src="../../blog-images/assessing-the-quality-of-genome-assemblies-using-quast/1_q_iz5unionxpw2_-cveyzg.png" alt="" /><figcaption>QUAST report for Flye assembly of E. coli dataset without reference</figcaption></figure>

<h2 id="9f37">Icarus Contig Browser</h2>

<p id="df09"><a rel="noreferrer" href="http://quast.sourceforge.net/icarus" target="_blank"><strong>Icarus</strong></a> is a tool available within QUAST which can visualise assemblies for analytical purposes.</p>

<figure><img width="1400" height="459" src="../../blog-images/assessing-the-quality-of-genome-assemblies-using-quast/1_jqyyl1peq_luz9wteuidpq.png" alt="" /><figcaption>Icarus contig browser</figcaption></figure>

<p id="b0a6">You can view how well your assembly aligns with the reference genome.</p>

<h2 id="1b23">MetaQUAST: QUAST for Metagenomics Assemblies</h2>

<p id="65f8">QUAST provides a version named&nbsp;<a href="http://quast.sourceforge.net/metaquast" rel="noreferrer" target="_blank"><strong>MetaQUAST</strong></a>, that allows us to assess metagenomics assemblies. You can provide multiple assemblies and compare them at once. Moreover, you can provide multiple reference genomes as well.</p>

<p id="d3eb">You can run MetaQUAST as follows.</p>

<pre><code>metaquast.py meta.contigs1.fasta meta.contigs2.fasta -l label1,label2 -R References/ -t 8 -o metaquastResult</code></pre>

<p id="c18b">Similar to QUAST, you can provide labels for each assembly so that they will be displayed in the final report. Moreover, you can provide a single folder containing all the reference genomes for the assessment.</p>

<figure><img width="1400" height="793" src="../../blog-images/assessing-the-quality-of-genome-assemblies-using-quast/1_rmi6ssdcbncjowkcx1xv2g.png" alt="" /><figcaption>MetaQUAST report for three assemblies with multiple references</figcaption></figure>

<h2 id="b62a">Final Thoughts</h2>

<p id="e446">Hope you found this article useful and informative as a starting point for using quality assessment tools for genome assemblies. Feel free to use these tools for your projects and research work as they are freely available.</p>

<p id="f228">Cheers, and stay safe!</p>

<hr />

<p><em>This article was originally published in <a rel="noreferrer" href="https://medium.com/computational-biology" target="_blank">The Computational Biology Magazine on Medium</a>.</em></p>

<p><em>You can find the original article at <a href="https://medium.com/computational-biology/assessing-the-quality-of-genome-assemblies-using-quast-94fec3f8cb70" target="_blank" rel="noreferrer">https://medium.com/computational-biology/assessing-the-quality-of-genome-assemblies-using-quast-94fec3f8cb70</a></em></p>
