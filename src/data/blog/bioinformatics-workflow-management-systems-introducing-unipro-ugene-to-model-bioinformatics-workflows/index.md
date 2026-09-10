---
title: "Bioinformatics Workflow Management Systems: Introducing Unipro UGENE to model Bioinformatics Workflows"
slug: "bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows"
date: "2018-03-24"
updated: "2020-02-28"
sourceUrl: "https://vijinimallawaarachchi.com/2018/03/24/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/"
featuredImage: "/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/1nkopf7lxdgto-enrzjqucq.jpeg"
categories: ["Bioinformatics", "Computer Science", "Data Science", "Workflow Management"]
tags: ["Bioinformatics", "Data Science", "Workflow", "Workflow Management"]
---
With the development of various methods to obtain data from living beings, there has been an explosion in biological data which is readily available to be used. However, such vast amounts of data will be of no use if there is no proper way to execute a series of steps to manipulate the data as we want, to output desired results. This is where **Workflow Management Systems** come in handy.

Before diving further, let me explain today’s outline. I will be walking you through the following sections in this article.

1. What is a Workflow?
2. What is a Workflow Management System?
3. What is a Bioiformatics Workflow Management System?
4. Unipro UGENE

I won’t be going deep on how to create bioinformatics workflows, but I will explain about workflow management systems and introduce you to _Taverna_, a workflow management system widely used by bioinformaticians.

## What is a Workflow?

A **workflow** consists of a set of activities which are enabled by the systematic organisation of resources that transform materials, provide services, or process information. It can be depicted as a sequence of operations to complete a process.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/0d335-1_s3bobzw-kvoowcbvnmmug.jpeg)

__Example Workflow (Image Source: [YouTube](https://i.ytimg.com/vi/JVNDvhA0G50/maxresdefault.jpg))__

## What is a Workflow Management System?

A **Workflow Management System** (**WMS**) is a software that provides an infrastructure to setup, execute, and monitor scientific workflows.

Workflow management systems emerged as an answer to the problem of how to carry out and automate complex processes on larger volumes of heterogeneous data. They visualise workflows in the form of **workflow diagrams**, depicting inputs, outputs, services and data flows. They also allow to save workflows for publishing and sharing.

## What is a Bioinformatics Workflow Management System?

A **bioinformatics workflow management system** is a specialised form of workflow management system designed specifically to compose and execute a series of computational or data manipulation steps that is related to bioinformatics.

Such systems show an abstract representation of the computation and how it proceeds in the form of a directed graph. Each node of the graph represents a task to be executed and each edge represents either data flow or execution dependency between different tasks. The system provides a visual front-end, which allows the user to build and modify different workflows with little or no programming expertise.

Some famous bioinformatics workflow management systems include,

- [Apache Taverna](https://taverna.incubator.apache.org/)
- [Galaxy](https://galaxyproject.org/)
- [Unipro UGENE](http://ugene.net/)

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/2df81-1qwna91zrgrpurws-b5evcw.png)

__Taverna Workbench (Image Source: [Apache Taverna](https://taverna.incubator.apache.org/introduction/))__

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/b605c-1jd1yzklcctkuxj1e8zxokg.png)

_Galaxy (Image Source: [MGEscan](http://mgescan.readthedocs.io/en/latest/workflow.html))_

A simple workflow I drew using Unipro UGENE

## Unipro UGENE

**Unipro UGENE** is a free open-source cross-platform bioinformatics software. It allows you to View, edit, annotate and align DNA, RNA and protein sequences, work with 3D structures and surface algorithms and model workflows using the **Workflow Designer**. You can read more details about UGENE from [here](https://ugene.net/wiki/pages/viewpage.action?pageId=2523425).

_UGENE Loading Screen_

You can download Unipro UGENE from [here](http://ugene.net/download.html). Once you have downloaded the installer, follow the steps given in the readme.txt before installing. Make sure to copy the sample folder provided in the download containing sample files in different formats.

Once installed and the application is opened, you will see the **Start Page** as depicted in Figure 1. (I have opened one file before and you can see it under recent files. If you open UGENE for the first time, you will not see any files here.)

Figure 1

### Building a simple workflow using UGENE **Workflow Designer**

**UGENE Workflow Designer**allows to create and run complex computational workflows even if he or she is not familiar with any programming language.

We will start by building a simple workflow; find a given pattern in a sequence or in sequences and save it as annotations.

Click on **Create Workflow** option in the **Start Page**. You will see the workflow design area as shown in Figure 2.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/19086-1vazv607h3u_zua1v-cjrjg.png)

__Figure 2__

Drag and drop **Find Pattern** element from **Basic Analysis** section in the list of elements as shown in Figure 3.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/2f364-1y95swixgxg67n4_x8usvtw.png)

__Figure 3__

Now add **Read Sequence** component from **Data Readers**section in the list of elements as shown in Figure 4.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/15767-1qz2bcsqvetmjkn4l2zgpgg.png)

__Figure 4__

Click on the loop mark on **Read Sequence** component, drag it on the half loop mark on **Find Pattern** element to connect them as shown in Figure 5.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/c99ce-1jsevf0_cuukhqsygulbpyw.png)

__Figure 5__

Now similarly, add **Write Sequence** component from **Data Writers**section in the list of elements and connect it to **Find Pattern** element. Final workflow should look as given in Figure 6.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/5a546-1rc7ypld1ileoedtlvijyjg.png)

__Figure 6__

Now we have to define the file containing the input sequences. In order to do so, click on the word **unset** in the **Read Sequence** component and you will see its details in the **Property Editor** on the right-hand side of the screen. Under **Dataset1**, click on **Add files** icon. Refer Figure 7.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/709bc-1p-9lp7kesmbahu8qp4ln2w.png)

__Figure 7__

You will see that the sample folder is opened. For this example we will be selecting the following file in the given path. Refer Figure 8.

```text
samples → Genebank → murine.gb

```

Figure 8

Now we have to define the pattern we want to find. Click on the word **unset** in the **Find Pattern** component and you will see its details in the **Property Editor** on the right-hand side of the screen. Under **Parameters**, enter the pattern you want to match as the value for **Pattern(s)** under **Annotate as**section. Refer Figure 9. I have used the following pattern.

```text
TTCCGAGGGACACTAGGCTGACTCCATC

```

Figure 9

Our final step is to define the output file. Click on **default file**in the **Write Sequence**component and you will see its details in the **Property Editor** on the right-hand side of the screen. Under **Parameters**, enter the output file name as **_pattern.gb_** to **Output file** value. Change the **Document format of the output file** to **GeneBank**. Final values should be as in Figure 10.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/5351e-1oojvumeco48iw2kxnporjq.png)

__Figure 10__

Now you can run the workflow by clicking on the **Run workflow**button in the tool bar as shown in Figure 11.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/eeb02-1t-zv6djij2rwwjis8j7xvg.png)

__Figure 11__

A report including all the information about the workflow execution will be shown as in Figures 12 and 13.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/bee2a-1m7x0jxvbryxd0h1opkwjrw.png)

__Figure 12__

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/876ba-186mibv91fitn2frfl47uyg.png)

__Figure 13__

You can open the results file (**_pattern.gb_**) and view it as in Figure 14.

![](/blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/a9b86-1hzbtalj6afxwwkvs7nnyrw.png)

__Figure 14__

You can play around with the tool and see other available components, create workflows and run them.

Hope you got a basic idea about bioinformatics workflow management software to start experimenting with.

Cheers! 😊

---

Originally published in Medium.com publication [Towards Data Science](https://towardsdatascience.com/bioinformatics-workflow-management-systems-cc3edd97be79?source=friends_link&sk=4b1c2f02df3605d908739a5bcb99a4e3).
