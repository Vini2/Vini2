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
<p id="779f">With the development of various methods to obtain data from living beings, there has been an explosion in biological data which is readily available to be used. However, such vast amounts of data will be of no use if there is no proper way to execute a series of steps to manipulate the data as we want, to output desired results. This is where <strong>Workflow Management Systems</strong> come in handy.</p>
<p></p>
<p id="42fc">Before diving further, let me explain today’s outline. I will be walking you through the following sections in this article.</p>
<ol>
<li id="4cf2">What is a Workflow?</li>
<li id="d696">What is a Workflow Management System?</li>
<li id="d826">What is a Bioiformatics Workflow Management System?</li>
<li id="0b7a">Unipro UGENE</li>
</ol>
<figure id="63ff"><figcaption></figcaption></figure>
<p id="aefe">I won’t be going deep on how to create bioinformatics workflows, but I will explain about workflow management systems and introduce you to <em>Taverna</em>, a workflow management system widely used by bioinformaticians.</p>
<h2 id="2dba">What is a Workflow?</h2>
<p id="a250">A <strong>workflow</strong> consists of a set of activities which are enabled by the systematic organisation of resources that transform materials, provide services, or process information. It can be depicted as a sequence of operations to complete a process.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/0d335-1_s3bobzw-kvoowcbvnmmug.jpeg" /><em><span>Example Workflow (Image Source: </span><a href="https://i.ytimg.com/vi/JVNDvhA0G50/maxresdefault.jpg" target="_blank" rel="noopener">YouTube</a><span>)</span></em></p>
<h2 id="8c36">What is a Workflow Management System?</h2>
<p id="1cbd">A <strong>Workflow Management System</strong> (<strong>WMS</strong>) is a software that provides an infrastructure to setup, execute, and monitor scientific workflows.</p>
<p id="09a0">Workflow management systems emerged as an answer to the problem of how to carry out and automate complex processes on larger volumes of heterogeneous data. They visualise workflows in the form of <strong>workflow diagrams</strong>, depicting inputs, outputs, services and data flows. They also allow to save workflows for publishing and sharing.</p>
<h2 id="62bb">What is a Bioinformatics Workflow Management System?</h2>
<p id="d9d0">A <strong>bioinformatics workflow management system</strong> is a specialised form of workflow management system designed specifically to compose and execute a series of computational or data manipulation steps that is related to bioinformatics.</p>
<p id="118c">Such systems show an abstract representation of the computation and how it proceeds in the form of a directed graph. Each node of the graph represents a task to be executed and each edge represents either data flow or execution dependency between different tasks. The system provides a visual front-end, which allows the user to build and modify different workflows with little or no programming expertise.</p>
<p id="0177">Some famous bioinformatics workflow management systems include,</p>
<ul>
<li id="8d47"><a href="https://taverna.incubator.apache.org/" target="_blank" rel="noopener">Apache Taverna</a></li>
<li id="09ae"><a href="https://galaxyproject.org/" target="_blank" rel="noopener">Galaxy</a></li>
<li id="6a79"><a href="http://ugene.net/" target="_blank" rel="noopener">Unipro UGENE</a></li>
</ul>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/2df81-1qwna91zrgrpurws-b5evcw.png" /><em>Taverna Workbench (Image Source: <a href="https://taverna.incubator.apache.org/introduction/" target="_blank" rel="noopener">Apache Taverna</a>)</em></p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/b605c-1jd1yzklcctkuxj1e8zxokg.png" /></p>
<p><em>Galaxy (Image Source: <a href="http://mgescan.readthedocs.io/en/latest/workflow.html" target="_blank" rel="noopener">MGEscan</a>)</em></p>
<figure id="3672">
<div>
<div><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/3f6a3-1dfjjhsnfwpgrgqfspeirtw.png" /></div>
<div><em>A simple workflow I drew using Unipro UGENE</em></div>
</div>
</figure>
<div>
<h2 id="a289">Unipro UGENE</h2>
<p id="1da8"><strong>Unipro UGENE</strong> is a free open-source cross-platform bioinformatics software. It allows you to View, edit, annotate and align DNA, RNA and protein sequences, work with 3D structures and surface algorithms and model workflows using the <strong>Workflow Designer</strong>. You can read more details about UGENE from <a href="https://ugene.net/wiki/pages/viewpage.action?pageId=2523425" target="_blank" rel="noopener">here</a>.</p>
<div>
<div><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/ec16a-1j4e2tuxwodxfk2kxvubtgg.png" /></div>
</div>
<p><em>UGENE Loading Screen</em></p>
<p id="9ac6">You can download Unipro UGENE from <a href="http://ugene.net/download.html" target="_blank" rel="noopener">here</a>. Once you have downloaded the installer, follow the steps given in the readme.txt before installing. Make sure to copy the sample folder provided in the download containing sample files in different formats.</p>
<p id="5c72">Once installed and the application is opened, you will see the <strong>Start Page</strong> as depicted in Figure 1. (I have opened one file before and you can see it under recent files. If you open UGENE for the first time, you will not see any files here.)</p>
<div>
<div><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/91141-1dvra5aat9p-qc30s1wne9q.png" /><em>Figure 1</em></div>
</div>
</div>
<div></div>
<div>
<div>
<h3 id="fa3f">Building a simple workflow using UGENE <strong>Workflow Designer</strong></h3>
<p id="e5de"><strong>UGENE Workflow Designer </strong>allows to create and run complex computational workflows even if he or she is not familiar with any programming language.</p>
<p id="10d2">We will start by building a simple workflow; find a given pattern in a sequence or in sequences and save it as annotations.</p>
<p id="2699">Click on <strong>Create Workflow</strong> option in the <strong>Start Page</strong>. You will see the workflow design area as shown in Figure 2.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/19086-1vazv607h3u_zua1v-cjrjg.png" /><em><span>Figure 2</span></em></p>
<p>Drag and drop <strong>Find Pattern</strong> element from <strong>Basic Analysis</strong> section in the list of elements as shown in Figure 3.</p>
</div>
<div>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/2f364-1y95swixgxg67n4_x8usvtw.png" /><em>Figure 3</em></p>
<p>Now add <strong>Read Sequence</strong> component from <strong>Data Readers </strong>section in the list of elements as shown in Figure 4.</p>
</div>
<div>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/15767-1qz2bcsqvetmjkn4l2zgpgg.png" /><em>Figure 4</em></p>
<p>Click on the loop mark on <strong>Read Sequence</strong> component, drag it on the half loop mark on <strong>Find Pattern</strong> element to connect them as shown in Figure 5.</p>
</div>
<div>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/c99ce-1jsevf0_cuukhqsygulbpyw.png" /><em>Figure 5</em></p>
<p>Now similarly, add <strong>Write Sequence</strong> component from <strong>Data Writers </strong>section in the list of elements and connect it to <strong>Find Pattern</strong> element. Final workflow should look as given in Figure 6.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/5a546-1rc7ypld1ileoedtlvijyjg.png" /><em>Figure 6</em></p>
<p>Now we have to define the file containing the input sequences. In order to do so, click on the word <strong>unset</strong> in the <strong>Read Sequence</strong> component and you will see its details in the <strong>Property Editor</strong> on the right-hand side of the screen. Under <strong>Dataset1</strong>, click on <strong>Add files</strong> icon. Refer Figure 7.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/709bc-1p-9lp7kesmbahu8qp4ln2w.png" /><em>Figure 7</em></p>
<p>You will see that the sample folder is opened. For this example we will be selecting the following file in the given path. Refer Figure 8.</p>
</div>
<div>
<pre id="a92a">samples → Genebank → murine.gb</pre>
<figure id="3dcf"><figcaption><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/d23fc-1ojsy1roxtak4jrkzbjxvsa.png" /><em>Figure 8</em></figcaption><figcaption></figcaption></figure>
<p id="f644">Now we have to define the pattern we want to find. Click on the word <strong>unset</strong> in the <strong>Find Pattern</strong> component and you will see its details in the <strong>Property Editor</strong> on the right-hand side of the screen. Under <strong>Parameters</strong>, enter the pattern you want to match as the value for <strong>Pattern(s)</strong> under <strong>Annotate as </strong>section. Refer Figure 9. I have used the following pattern.</p>
<pre id="1f4f"><strong>TTCCGAGGGACACTAGGCTGACTCCATC</strong></pre>
</div>
<div>
<figure id="59c7">
<div>
<div><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/b573a-1ttrzresmgusq24vdbb8mag.png" /></div>
</div><figcaption><em>Figure 9</em></figcaption></figure>
</div>
<div>
<p id="9d79">Our final step is to define the output file. Click on <strong>default file </strong>in the <strong>Write Sequence </strong>component and you will see its details in the <strong>Property Editor</strong> on the right-hand side of the screen. Under <strong>Parameters</strong>, enter the output file name as <strong><em>pattern.gb</em></strong> to <strong>Output file</strong> value. Change the <strong>Document format of the output file</strong> to <strong>GeneBank</strong>. Final values should be as in Figure 10.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/5351e-1oojvumeco48iw2kxnporjq.png" /><em>Figure 10</em></p>
<p>Now you can run the workflow by clicking on the <strong>Run workflow </strong>button in the tool bar as shown in Figure 11.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/eeb02-1t-zv6djij2rwwjis8j7xvg.png" /><em>Figure 11</em></p>
<p>A report including all the information about the workflow execution will be shown as in Figures 12 and 13.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/bee2a-1m7x0jxvbryxd0h1opkwjrw.png" /><em>Figure 12</em></p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/876ba-186mibv91fitn2frfl47uyg.png" /><em>Figure 13</em></p>
<p>You can open the results file (<strong><em>pattern.gb</em></strong>) and view it as in Figure 14.</p>
<p><img src="../../blog-images/bioinformatics-workflow-management-systems-introducing-unipro-ugene-to-model-bioinformatics-workflows/a9b86-1hzbtalj6afxwwkvs7nnyrw.png" /><em>Figure 14</em></p>
<p>You can play around with the tool and see other available components, create workflows and run them.</p>
</div>
<div>
<p id="4c1e">Hope you got a basic idea about bioinformatics workflow management software to start experimenting with.</p>
<p id="7936">Cheers! 😊</p>
<hr />
</div>
<p>Originally published in Medium.com publication <a href="https://towardsdatascience.com/bioinformatics-workflow-management-systems-cc3edd97be79?source=friends_link&amp;sk=4b1c2f02df3605d908739a5bcb99a4e3" target="_blank" rel="noopener">Towards Data Science</a>.</p>
</div>
