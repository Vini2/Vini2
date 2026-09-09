---
title: "Publishing Python packages related to bioinformatics on bioconda"
slug: "publishing-python-packages-related-to-bioinformatics-on-bioconda"
date: "2023-02-11"
updated: "2023-02-11"
sourceUrl: "https://vijinimallawaarachchi.com/2023/02/11/publishing-python-packages-related-to-bioinformatics-on-bioconda/"
featuredImage: "/blog-images/publishing-python-packages-related-to-bioinformatics-on-bioconda/bioconda_recipes.png"
categories: ["Bioinformatics", "Conda", "Python"]
tags: ["Bioconda", "Bioinformatics", "Conda", "Programming", "Python"]
---
<p>Have you had trouble installing packages and running a gazillion commands to install dependencies? If you are lucky (which most of the time you won’t be), you will end up installing the package without having any dependency issues or version conflicts. Working in interdisciplinary sciences has made me aware of how hard it is to get these tools to run unless you know what is actually happening from a programming view. You wish that these tools come bundled with all the dependencies and can be installed/run without having conflicts with what you already have installed. </p>

<p>Fear not — my dear readers! Package managers will come to the rescue! These are software tools, like <a href="https://docs.conda.io/en/latest/" rel="noreferrer" target="_blank"><strong>conda</strong></a> and <a href="https://pypi.org/project/pip/" rel="noreferrer" target="_blank"><strong>pip</strong></a>, that automate the process of installing, maintaining, and removing programs in a consistent manner. Having your package on such a repository can be helpful for your users to install it without much hassle. It also increases the visibility and reach of your package. In this article, I will walk you through how to publish your Python package related to bioinformatics on <strong>bioconda</strong> with example code snippets, templates and best practices.</p>

<div>
<figure><img src="../../blog-images/publishing-python-packages-related-to-bioinformatics-on-bioconda/502c2-17colvhi5pkej_uiapghs1q.png" alt="" /><figcaption>bioconda-recipes GitHub repository (Screenshot by&nbsp;Author)</figcaption></figure>
</div>

<h2>Bioconda and&nbsp;recipes</h2>

<p>My community (including myself 😃) loves <a href="https://bioconda.github.io/" rel="noreferrer" target="_blank">bioconda</a>! Bioconda allows you to install packages related to biomedical research using the <a href="https://docs.conda.io/en/latest/" rel="noreferrer" target="_blank">conda</a> package manager. Bioconda is basically a <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/channels.html" rel="noreferrer" target="_blank"><em>channel</em></a> (which is a location where packages are stored) that has <a href="https://docs.conda.io/projects/conda-build/en/stable/concepts/recipe.html" rel="noreferrer" target="_blank"><em>recipes</em></a> which contain the metadata of the software packages published. We have to create a similar recipe and add it to the bioconda channel. Assuming you have a GitHub account and have installed <a href="https://docs.anaconda.com/anaconda/install/" rel="noreferrer" target="_blank">Miniconda or Anaconda</a>, let’s get started.</p>

<h2>Step 1: Setup the bioconda-recipes repository</h2>

<p>If this is your first time publishing on bioconda, you have to set up your copy of the <a href="https://github.com/bioconda/bioconda-recipes" rel="noreferrer" target="_blank"><strong>bioconda-recipes</strong></a> repository.&nbsp;</p>

<p>Click <a href="https://github.com/bioconda/bioconda-recipes/fork" rel="noreferrer" target="_blank"><strong>here</strong></a> to create a fork of the bioconda-recipes repository.</p>

<p>Now create a local clone of the repository using the following command. Make sure to replace <code>&lt;USERNAME&gt;</code> with your GitHub username.</p>

<pre>git clone https://github.com/&lt;USERNAME&gt;/bioconda-recipes.git</pre>

<p>Then add the main bioconda-recipes repo as an upstream remote so it becomes easy to update changes made.</p>

<pre>cd bioconda-recipes<br>git remote add upstream https://github.com/bioconda/bioconda-recipes.git</pre>

<p>If changes to the original repository were made after you made your copy, you can update your local copy using the following command.</p>

<pre>git checkout master<br>git pull upstream master<br>git push origin master</pre>

<p>You can go to your GitHub repository and check if your fork is up-to-date with the original repository.</p>

<div>
<figure><img src="../../blog-images/publishing-python-packages-related-to-bioinformatics-on-bioconda/35b0c-156ovx8fx9639-stkryiefw.png" alt="" /><figcaption>Check if your fork is up-to-date (Screenshot by&nbsp;Author)</figcaption></figure>
</div>

<h2>Step 2: Create a&nbsp;branch</h2>

<p>It is recommended to create your own branch to work on. Assuming your tool name is <code>mytool</code>, let’s create a branch using the following command. Feel free to replace <code>mytool</code> with your tool name.</p>

<pre>git checkout -b mytool</pre>

<h2>Step 3: Create your&nbsp;recipe</h2>

<p>A recipe will contain a <code>meta.yaml</code> file with all the metadata in the recipe. Normally, having this file should be enough for a pure Python package. If you need to compile more packages (e.g., C/C++ packages) or export paths, these should be added in the <code>build.sh</code> file for macOS and Linux or the <code>bld.bat</code> file for Windows.</p>

<p>Let’s begin by moving into the recipes directory.</p>

<pre>cd recipes</pre>

<h3>Create recipe using <code>conda&nbsp;skeleton</code></h3>

<p>If you already have your package on the <a href="https://pypi.org/" rel="noreferrer" target="_blank">Python package index (PyPI)</a>, you can use the <code>conda skeleton</code>command as follows to create a template automatically. The following command will create a folder named <code>mytool</code> with a <code>meta.yaml</code> file inside.</p>

<pre>conda skeleton pypi mytool</pre>

<h3>Create your own&nbsp;recipe</h3>

<p>If your code should be downloaded from a GitHub repository you have and compiled, then you should have a release published on GitHub. Here is a template assuming your package follows the <a href="https://packaging.python.org/en/latest/guides/distributing-packages-using-setuptools/" rel="noreferrer" target="_blank">basic Python package structure</a>. Make sure to change <code>&lt;USERNAME&gt;</code>, <code>mytool</code> and version number to match your GitHub account and package details.</p>

<pre>{% set name = "mytool" %}<br>{% set version = "0.1.0" %}<br><br>package:<br>  name: "{{ name|lower }}"<br>  version: "{{ version }}"<br><br>source:<br>  url: "https://github.com/&lt;USERNAME&gt;/{{ name }}/archive/v{{ version }}.tar.gz"<br>  sha256: 8e87ae23bd81b842b95d778291d9379b2d89936c14dbb8216ac9cb2d7104c87a<br><br>build:<br>  number: 0<br>  noarch: python<br>  entry_points:<br>    - myutil=mytool_utils.myutil:main<br>  script:<br>    - {{ PYTHON }} -m pip install . --no-deps -vv<br><br>requirements:<br>  build:<br>    - {{ compiler('cxx') }}<br>  host:<br>    - pip<br>    - python &gt;=3.8<br>  run:<br>    - python &gt;=3.8<br>    - biopython<br>    - pysam<br>    - networkx<br>    - scipy<br>    - numpy<br>    - tqdm<br><br>test:<br>  commands:<br>    - mytool --help<br><br>about:<br>  home: "https://github.com/&lt;USERNAME&gt;/mytool"<br>  license: MIT<br>  license_file: LICENSE<br>  summary: "mytool: This is a test"<br>  doc_url: "https://mytool.readthedocs.io/"<br>  dev_url: "https://github.com/&lt;USERNAME&gt;/mytool"<br><br>extra:<br>  recipe-maintainers:<br>    - &lt;USERNAME&gt;<br>  identifiers:<br>    - doi:10.10943/myjournal</pre>

<p>Start with the name and version of your package under <code>package</code>.</p>

<p>Then you should point to the release under <code>source</code>. Make sure to add the correct URL with the correct SHA256 checksum. You can get the SHA256 checksum of the source code using the following command.</p>

<pre>name=&lt;your_repo_name&gt;<br>version=&lt;release_version&gt;<br>url=https://github.com/&lt;USERNAME&gt;/$name/archive/v$version.tar.gz<br>wget -O- $url | shasum -a 256</pre>

<p>Under <code>build</code> you have to provide the build number (starting from 0), the platform and build commands (here I have added the build command for <code>setup.py</code>). Here I have defined <code>noarch: python</code> meaning that this is a pure python <a href="https://www.anaconda.com/blog/condas-new-noarch-packages" rel="noreferrer" target="_blank"><strong>noarch</strong> package</a> that contains <strong>no operating system-specific files</strong>. If you want to call custom scripts from the command line, you can add them under <code>entry-points</code> which will define shell commands by identifying a Python function to run (which is <code>main</code> in our example).</p>

<p>Then you have to specify compilers, preprocessors, Python versions and dependencies (with specific versions pinned if you need to) under <code>requirements</code>.</p>

<p>Next, you can specify a command to test the installation under <code>commands</code> in <code>tests</code>. I normally call the help command of my tool. Make sure to keep these test commands quick and simple.</p>

<p>Then you can add details about the package such as the home page URL, documentation URL, license type, licence file and a summary of the tool under <code>about</code>.&nbsp;</p>

<p>Finally, you can add your GitHub username in<code>recipe-maintainers</code> and DOI of the publication in<code>identifiers</code> under <code>extra</code>.</p>

<p>If you want to read more details about the sections in the <code>meta.yaml</code> file, check out the <a rel="noreferrer" href="https://bioconda.github.io/tutorials/gcb2020.html#meta-yaml-sections" target="_blank">official bioconda documentation</a>.<a href="https://bioconda.github.io/tutorials/gcb2020.html#meta-yaml-sections"></a></p>

<h3>Advice: Look at others&#8217;&nbsp;recipes</h3>

<p>If you have no idea how to make a recipe, check out other recipes for example code that you can use and copy into your own recipe directory. Here are some great example recipes.</p>

<ul>
<li><a href="https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phanotate" rel="noreferrer" target="_blank">Phanotate</a> — Downloaded from PyPI</li>

<li><a rel="noreferrer" href="https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy" target="_blank">Phispy</a> — Downloaded from PyPI</li>

<li><a href="https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools" rel="noreferrer" target="_blank">Samtools</a>— Downloaded from GitHub</li>

<li><a href="https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb" rel="noreferrer" target="_blank">Hecatomb</a> — Downloaded from GitHub</li>
</ul>

<p>You can check your changes using the following command.</p>

<pre>git status</pre>

<h2>Step 4: Commit and push&nbsp;changes</h2>

<p>You can commit your changes and push them from your <code>mytool</code> branch to your forked GitHub repository.</p>

<pre>git add mytool<br>git commit -m 'Add mytool v0.1.0'<br>git push --set-upstream origin mytool</pre>

<h2>Step 5: Create a pull&nbsp;request</h2>

<p>Now go to your forked GitHub repository and you will see a message saying <code>This branch is 1 commit ahead [...] bioconda:master</code>. You will see a button called <strong>Pull Request</strong>, click on it and follow the instructions. You should add describe your pull request. Here is a <a href="https://github.com/bioconda/bioconda-recipes/pull/36256" rel="noreferrer" target="_blank">pull request I created</a> to add one of my tools. If your package has a publication, make sure to add those details as well.</p>

<div>
<figure><img src="../../blog-images/publishing-python-packages-related-to-bioinformatics-on-bioconda/fbfa2-1rxvrqvco59lb8m6caaf-nw.png" alt="" /><figcaption>Creating an informative pull request (Screenshot by&nbsp;Author)</figcaption></figure>
</div>

<p>Once you have created the pull request, the bioconda build system will start testing your changes. If you are very lucky, you won’t have any issues and your build will pass. If not, edit your recipe to fix the issues and push the changes to your branch again (and again and again).&nbsp;</p>

<p>When your build “turns green” and all the checks have passed, you can issue the <code>@BiocondaBot please add label</code> command.&nbsp;</p>

<h2>Step 6: Test the&nbsp;build</h2>

<p>In the meantime, you can issue the command <code>@BiocondaBot please fetch artifacts</code> to get the links to CI-built packages/containers. You can download these builds and use them to test packages locally. Once you have downloaded the build, create a new conda environment (DO NOT install in your <code>base</code> environment) and simply run the following command to install your package. Make sure to replace <code>&lt;build_file_name&gt;</code> with the name of the&nbsp;<code>.tar.bz2</code> file you downloaded.</p>

<pre>conda install -c packages &lt;build_file_name&gt;</pre>

<p>Now you can test your installation using the following commands.</p>

<pre># show the location of the executable<br>which mytool<br><br># print the version<br>mytool --version<br><br># print the help message<br>mytool --help</pre>

<p>If you have already set up test cases, you can run them to make sure your package works correctly end-to-end. I usually do this test and post the outputs on the pull request to show everything is good to go. Here is a <a href="https://github.com/bioconda/bioconda-recipes/pull/36256#issuecomment-1206012532" rel="noreferrer" target="_blank">test run</a> I posted in one of my pull requests.</p>

<p>If everything goes well, someone from the bioconda team will approve your pull request and the changes will be merged into the main repository.</p>

<h2>Final Thoughts</h2>

<p>Bioconda only supports dependencies from the <code>defaults</code>, <code>conda-forge</code> and <code>bioconda</code>channels only. So if you have dependencies from any other channels, there is no way to specify them in the <code>meta.yaml</code> file and your recipe will fail the build. There are still <a href="https://github.com/conda/conda-build/issues/532" rel="noreferrer" target="_blank">open issues</a> about adding channels in recipes and there is no solution yet. In that case, you will have to publish your package on your own channel which we will talk about in a future article.</p>

<p>Hope you found this article useful to publish your own bioinformatics software on bioconda. Feel free to browse through the <a href="https://bioconda.github.io/tutorials/index.html" rel="noreferrer" target="_blank">bioconda tutorials</a> for more details.&nbsp;</p>

<p>Happy package-publishing!</p>

<p>Cheers!</p>

<h2>References</h2>

<p>[1] <strong>Initial Setup — Bioconda documentation</strong> available at <a href="https://bioconda.github.io/contributor/setup.html" rel="noreferrer" target="_blank">https://bioconda.github.io/contributor/setup.html</a></p>

<p>[2] <strong>Contribution Workflow — Bioconda documentation</strong> available at <a href="https://bioconda.github.io/contributor/workflow.html" rel="noreferrer" target="_blank">https://bioconda.github.io/contributor/workflow.html</a></p>

<p>[3] <strong>Tutorials — Bioconda documentation</strong> available at <a href="https://bioconda.github.io/tutorials/index.html" rel="noreferrer" target="_blank">https://bioconda.github.io/tutorials/index.html</a></p>

<p>[4] Experience from my personal hiccups while publishing my packages 😁</p>

<hr />

<p>This article was modified from the original article published on Towards Data Science at <a href="https://towardsdatascience.com/all-you-need-to-know-about-publishing-software-on-bioconda-680d48e52868">https://towardsdatascience.com/all-you-need-to-know-about-publishing-software-on-bioconda-680d48e52868</a>.</p>
