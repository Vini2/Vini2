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
Yesterday I was returning home from university via the expressway and the oil refinery at Sapugaskanda caught my eye. The refinery towers operate while sending huge flames into the sky with smoke. The sight of the oil refinery reminded me of pipelines which are used in many manufacturing and transportation industries to transform and transport materials which will provide outputs at the end. One common example is an oil pipeline which is used for long-distance transportation, while refining the oil within intermediate units to give various petroleum products.

Similarly, genomic data can be passed through special software pipelines to refine and analyse the data as required, while resulting in desired visualisations and interpretations.

### Pipelines in Genomics

With the advancement in sequencing technologies such as Next Generation Sequencing (NGS), huge amounts of genomic data are being generated at a fast rate. NGS techniques include steps such as sequence alignment and genomic annotation that consist of plethora of parameters and are compute-intensive. With the abundance of data and problems faced while carrying out genomic analyses, have led to the creation of several efficient tools for faster processing and analysis. **Pipeline models** is one such solution that scientists have used for various analyses. In this article, I will be introducing you to pipeline tools and how they have evolved over time to result in cloud-based pipeline frameworks at present, along with future trends.

### What are Pipelines?

According to Wikipedia,

> A pipeline is a set of data processing elements connected in series, where the output of one element is the input of the next one. The elements of a pipeline are often executed in parallel or in time-sliced fashion; in that case, some amount of buffer storage is often inserted between elements.

Multiple analysing tools can be connected together to analyse genomic data in a step-wise manner. This is where pipelines come to work. Pipelines are created to process data in steps consisting of different tools where the output produced by one step is passed as input to the next step.

#### Pipeline Scripts

Pipelines are created using special code snippets known as **pipeline scripts**which consist of various instructions for processing and tracking information in all the steps. Scripts written in Unix shell or other scripting languages such as Perl and Python, can be seen in most of the basic forms of pipelines. These scripts can be customised according to the application and incorporate the desired analysis tools.

As the pipeline grow with more steps, managing these scripts becomes hard. Dependencies in various steps need to be met precisely and updating these dependencies manually can in erroneous outputs. Furthermore, if a pipeline fails in the middle of execution, it can be hard to resume from where it stopped. It can be inconvenient and error prone to run every step of the pipeline manually for numerous samples with multiple conditions in different projects.

### Pipeline Frameworks

In order to automate the process of creating and arranging scripts to form pipelines, **pipeline frameworks** were created. This reduced the burden upon scientists to manually setup pipelines and run them individually for different projects with terabytes of data. Pipeline frameworks introduced new features such as reproducible scripts, version controlling and reporting facilities.

#### Class-based Frameworks

Class-based frameworks consist of existing code libraries which provide different functionality. These frameworks provide abstract classes to implement pipelines. [Genome Analysis Toolkit](https://software.broadinstitute.org/gatk/) is a class-based pipeline framework developed by BROAD Institute, USA.

![](/blog-images/pipeline-frameworks-for-genomic-data/e4f3a-1hzlnwupuov0mzqadf278kq.png)

Image Source: Genome Analysis Toolkit

#### Server-base Workbenches

These workbenches consist of tools in the form of preconfigured modules where scientists can arrange them to create pipelines and analyse data. Generally these frameworks provide a graphical user interface with modules as drag-and-drop components. Some of the most popular server-based workbenches are [Taverna](https://taverna.incubator.apache.org/) and [Galaxy](https://galaxyproject.org/).

![](/blog-images/pipeline-frameworks-for-genomic-data/2df81-1qwna91zrgrpurws-b5evcw.png)

_Taverna Workbench (Image Source: [Apache Taverna](https://taverna.incubator.apache.org/introduction/))_

#### Cloud-based Platforms

Advancements in cloud computing have paved the way for attractive and scalable options for big data analytics. Various cloud-based platforms for pipeline management are available at present which utilise the scalability of cloud computing to offer high performance, rapid pipeline generation, execution and an enhanced user experience. They also provide APIs to automate analysis of large batches of data without using a web interface to feed the data to the tool.

Some of the commercial available cloud-based platform solutions include [DNAnexus](https://www.dnanexus.com/), [Illumina’s BaseSpace](https://basespace.illumina.com/home/index) and [SevenBridges.](https://www.sevenbridges.com/platform/)

Image Source: DNAnexus

### Future Trends

Many companies are working towards distributing popular gene data analysing tools among different frameworks in order to standardise them. Furthermore, containerisation of pipeline tools using software containerisation platforms such as Docker, can enable pipeline frameworks to operate with various dependencies.

Future developements of pipeline frameworks can impact immensely upon analysis of genomic data, medicinal data and drug testing, while improving the quality of outputs. This can result in better human life and help heal the world.

---

Originally published in Medium.com at [https://medium.com/the-bioinformatics-press/pipeline-frameworks-for-genomic-data-af390b163ed](https://medium.com/the-bioinformatics-press/pipeline-frameworks-for-genomic-data-af390b163ed)
