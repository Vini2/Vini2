---
title: "Pipeline Frameworks for Genomic Data"
slug: "pipeline-frameworks-for-genomic-data"
date: "2018-03-01"
updated: "2018-03-01"
sourceUrl: "https://vijinimallawaarachchi.com/2018/03/01/pipeline-frameworks-for-genomic-data/"
featuredImage: "/blog-images/pipeline-frameworks-for-genomic-data/1cl2jz1tgwrdgwfjtrxfcda.jpeg"
categories: ["Bioinformatics", "Data Science", "Genomics"]
tags: []
---
<div>
<p id="a8ef">Yesterday I was returning home from university via the expressway and the oil refinery at Sapugaskanda caught my eye. The refinery towers operate while sending huge flames into the sky with smoke. The sight of the oil refinery reminded me of pipelines which are used in many manufacturing and transportation industries to transform and transport materials which will provide outputs at the end. One common example is an oil pipeline which is used for long-distance transportation, while refining the oil within intermediate units to give various petroleum products.</p>
<p>Similarly, genomic data can be passed through special software pipelines to refine and analyse the data as required, while resulting in desired visualisations and interpretations.</p>
</div>
<p></p>
<div>
<h3 id="9bc2">Pipelines in Genomics</h3>
<p id="6024">With the advancement in sequencing technologies such as Next Generation Sequencing (NGS), huge amounts of genomic data are being generated at a fast rate. NGS techniques include steps such as sequence alignment and genomic annotation that consist of plethora of parameters and are compute-intensive. With the abundance of data and problems faced while carrying out genomic analyses, have led to the creation of several efficient tools for faster processing and analysis. <strong>Pipeline models</strong> is one such solution that scientists have used for various analyses. In this article, I will be introducing you to pipeline tools and how they have evolved over time to result in cloud-based pipeline frameworks at present, along with future trends.</p>
<h3 id="5995">What are Pipelines?</h3>
<p id="3188">According to Wikipedia,</p>
<blockquote id="5d79"><p>A <strong>pipeline</strong> is a set of data processing elements connected in series, where the output of one element is the input of the next one. The elements of a pipeline are often executed in parallel or in time-sliced fashion; in that case, some amount of buffer storage is often inserted between elements.</p></blockquote>
<p id="2599">Multiple analysing tools can be connected together to analyse genomic data in a step-wise manner. This is where pipelines come to work. Pipelines are created to process data in steps consisting of different tools where the output produced by one step is passed as input to the next step.</p>
<h4 id="48aa">Pipeline Scripts</h4>
<p id="9102">Pipelines are created using special code snippets known as <strong>pipeline scripts </strong>which consist of various instructions for processing and tracking information in all the steps. Scripts written in Unix shell or other scripting languages such as Perl and Python, can be seen in most of the basic forms of pipelines. These scripts can be customised according to the application and incorporate the desired analysis tools.</p>
<p id="54a8">As the pipeline grow with more steps, managing these scripts becomes hard. Dependencies in various steps need to be met precisely and updating these dependencies manually can in erroneous outputs. Furthermore, if a pipeline fails in the middle of execution, it can be hard to resume from where it stopped. It can be inconvenient and error prone to run every step of the pipeline manually for numerous samples with multiple conditions in different projects.</p>
<h3 id="4400">Pipeline Frameworks</h3>
<p id="59cc">In order to automate the process of creating and arranging scripts to form pipelines, <strong>pipeline frameworks</strong> were created. This reduced the burden upon scientists to manually setup pipelines and run them individually for different projects with terabytes of data. Pipeline frameworks introduced new features such as reproducible scripts, version controlling and reporting facilities.</p>
<h4 id="b12e">Class-based Frameworks</h4>
<p id="b10b">Class-based frameworks consist of existing code libraries which provide different functionality. These frameworks provide abstract classes to implement pipelines. <a href="https://software.broadinstitute.org/gatk/" target="_blank" rel="nofollow noopener">Genome Analysis Toolkit</a> is a class-based pipeline framework developed by BROAD Institute, USA.</p>
<p><span><img src="../../blog-images/pipeline-frameworks-for-genomic-data/e4f3a-1hzlnwupuov0mzqadf278kq.png" /></span></p>
<figure id="99f9">
<div>
<div>Image Source: <a href="https://software.broadinstitute.org/gatk/" target="_blank" rel="noopener nofollow">Genome Analysis Toolkit</a></div>
</div>
</figure>
<h4 id="e318">Server-base Workbenches</h4>
<p id="1f8d">These workbenches consist of tools in the form of preconfigured modules where scientists can arrange them to create pipelines and analyse data. Generally these frameworks provide a graphical user interface with modules as drag-and-drop components. Some of the most popular server-based workbenches are <a href="https://taverna.incubator.apache.org/" target="_blank" rel="noopener nofollow">Taverna</a> and <a href="https://galaxyproject.org/" target="_blank" rel="noopener nofollow">Galaxy</a>.</p>
<p><img src="../../blog-images/pipeline-frameworks-for-genomic-data/2df81-1qwna91zrgrpurws-b5evcw.png" />Taverna Workbench (Image Source: <a href="https://taverna.incubator.apache.org/introduction/" target="_blank" rel="noopener nofollow">Apache Taverna</a>)</p>
<p>&nbsp;</p>
<h4 id="8a2b">Cloud-based Platforms</h4>
<p id="beee">Advancements in cloud computing have paved the way for attractive and scalable options for big data analytics. Various cloud-based platforms for pipeline management are available at present which utilise the scalability of cloud computing to offer high performance, rapid pipeline generation, execution and an enhanced user experience. They also provide APIs to automate analysis of large batches of data without using a web interface to feed the data to the tool.</p>
<p>Some of the commercial available cloud-based platform solutions include <a href="https://www.dnanexus.com/" target="_blank" rel="nofollow noopener">DNAnexus</a>, <a href="https://basespace.illumina.com/home/index" target="_blank" rel="nofollow noopener">Illumina’s BaseSpace</a> and <a href="https://www.sevenbridges.com/platform/" target="_blank" rel="nofollow noopener">SevenBridges.</a></p>
<figure id="2f4b">
<div>
<div><img src="../../blog-images/pipeline-frameworks-for-genomic-data/05614-1yxk1-nrhg5kjrlul6q4-9g.png" width="648" height="377" /></div>
</div><figcaption>Image Source: <a href="https://www.dnanexus.com/" target="_blank" rel="nofollow noopener">DNAnexus</a></figcaption></figure>
<h3 id="2850">Future Trends</h3>
<p id="306b">Many companies are working towards distributing popular gene data analysing tools among different frameworks in order to standardise them. Furthermore, containerisation of pipeline tools using software containerisation platforms such as Docker, can enable pipeline frameworks to operate with various dependencies.</p>
<p id="0613">Future developements of pipeline frameworks can impact immensely upon analysis of genomic data, medicinal data and drug testing, while improving the quality of outputs. This can result in better human life and help heal the world.</p>
<hr />
<p>Originally published in Medium.com at <a href="https://medium.com/the-bioinformatics-press/pipeline-frameworks-for-genomic-data-af390b163ed">https://medium.com/the-bioinformatics-press/pipeline-frameworks-for-genomic-data-af390b163ed</a></p>
</div>
