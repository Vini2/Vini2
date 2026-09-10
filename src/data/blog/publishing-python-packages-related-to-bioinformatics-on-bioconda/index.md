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
Have you had trouble installing packages and running a gazillion commands to install dependencies? If you are lucky (which most of the time you won’t be), you will end up installing the package without having any dependency issues or version conflicts. Working in interdisciplinary sciences has made me aware of how hard it is to get these tools to run unless you know what is actually happening from a programming view. You wish that these tools come bundled with all the dependencies and can be installed/run without having conflicts with what you already have installed.

Fear not — my dear readers! Package managers will come to the rescue! These are software tools, like [**conda**](https://docs.conda.io/en/latest/) and [**pip**](https://pypi.org/project/pip/), that automate the process of installing, maintaining, and removing programs in a consistent manner. Having your package on such a repository can be helpful for your users to install it without much hassle. It also increases the visibility and reach of your package. In this article, I will walk you through how to publish your Python package related to bioinformatics on **bioconda** with example code snippets, templates and best practices.

bioconda-recipes GitHub repository (Screenshot by Author)

## Bioconda and recipes

My community (including myself 😃) loves [bioconda](https://bioconda.github.io/)! Bioconda allows you to install packages related to biomedical research using the [conda](https://docs.conda.io/en/latest/) package manager. Bioconda is basically a [_channel_](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/channels.html) (which is a location where packages are stored) that has [_recipes_](https://docs.conda.io/projects/conda-build/en/stable/concepts/recipe.html) which contain the metadata of the software packages published. We have to create a similar recipe and add it to the bioconda channel. Assuming you have a GitHub account and have installed [Miniconda or Anaconda](https://docs.anaconda.com/anaconda/install/), let’s get started.

## Step 1: Setup the bioconda-recipes repository

If this is your first time publishing on bioconda, you have to set up your copy of the [**bioconda-recipes**](https://github.com/bioconda/bioconda-recipes) repository.

Click [**here**](https://github.com/bioconda/bioconda-recipes/fork) to create a fork of the bioconda-recipes repository.

Now create a local clone of the repository using the following command. Make sure to replace `<USERNAME>` with your GitHub username.

```bash
git clone https://github.com/<USERNAME>/bioconda-recipes.git

```

Then add the main bioconda-recipes repo as an upstream remote so it becomes easy to update changes made.

```bash
cd bioconda-recipes
git remote add upstream https://github.com/bioconda/bioconda-recipes.git

```

If changes to the original repository were made after you made your copy, you can update your local copy using the following command.

```bash
git checkout master
git pull upstream master
git push origin master

```

You can go to your GitHub repository and check if your fork is up-to-date with the original repository.

Check if your fork is up-to-date (Screenshot by Author)

## Step 2: Create a branch

It is recommended to create your own branch to work on. Assuming your tool name is `mytool`, let’s create a branch using the following command. Feel free to replace `mytool` with your tool name.

```bash
git checkout -b mytool

```

## Step 3: Create your recipe

A recipe will contain a `meta.yaml` file with all the metadata in the recipe. Normally, having this file should be enough for a pure Python package. If you need to compile more packages (e.g., C/C++ packages) or export paths, these should be added in the `build.sh` file for macOS and Linux or the `bld.bat` file for Windows.

Let’s begin by moving into the recipes directory.

```bash
cd recipes

```

### Create recipe using `conda skeleton`

If you already have your package on the [Python package index (PyPI)](https://pypi.org/), you can use the `conda skeleton`command as follows to create a template automatically. The following command will create a folder named `mytool` with a `meta.yaml` file inside.

```bash
conda skeleton pypi mytool

```

### Create your own recipe

If your code should be downloaded from a GitHub repository you have and compiled, then you should have a release published on GitHub. Here is a template assuming your package follows the [basic Python package structure](https://packaging.python.org/en/latest/guides/distributing-packages-using-setuptools/). Make sure to change `<USERNAME>`, `mytool` and version number to match your GitHub account and package details.

```yaml
{% set name = "mytool" %}
{% set version = "0.1.0" %}

package:
  name: "{{ name|lower }}"
  version: "{{ version }}"

source:
  url: "https://github.com/<USERNAME>/{{ name }}/archive/v{{ version }}.tar.gz"
  sha256: 8e87ae23bd81b842b95d778291d9379b2d89936c14dbb8216ac9cb2d7104c87a

build:
  number: 0
  noarch: python
  entry_points:
    - myutil=mytool_utils.myutil:main
  script:
    - {{ PYTHON }} -m pip install . --no-deps -vv

requirements:
  build:
    - {{ compiler('cxx') }}
  host:
    - pip
    - python >=3.8
  run:
    - python >=3.8
    - biopython
    - pysam
    - networkx
    - scipy
    - numpy
    - tqdm

test:
  commands:
    - mytool --help

about:
  home: "https://github.com/<USERNAME>/mytool"
  license: MIT
  license_file: LICENSE
  summary: "mytool: This is a test"
  doc_url: "https://mytool.readthedocs.io/"
  dev_url: "https://github.com/<USERNAME>/mytool"

extra:
  recipe-maintainers:
    - <USERNAME>
  identifiers:
    - doi:10.10943/myjournal

```

Start with the name and version of your package under `package`.

Then you should point to the release under `source`. Make sure to add the correct URL with the correct SHA256 checksum. You can get the SHA256 checksum of the source code using the following command.

```bash
name=<your_repo_name>
version=<release_version>
url=https://github.com/<USERNAME>/$name/archive/v$version.tar.gz
wget -O- $url | shasum -a 256

```

Under `build` you have to provide the build number (starting from 0), the platform and build commands (here I have added the build command for `setup.py`). Here I have defined `noarch: python` meaning that this is a pure python [**noarch** package](https://www.anaconda.com/blog/condas-new-noarch-packages) that contains **no operating system-specific files**. If you want to call custom scripts from the command line, you can add them under `entry-points` which will define shell commands by identifying a Python function to run (which is `main` in our example).

Then you have to specify compilers, preprocessors, Python versions and dependencies (with specific versions pinned if you need to) under `requirements`.

Next, you can specify a command to test the installation under `commands` in `tests`. I normally call the help command of my tool. Make sure to keep these test commands quick and simple.

Then you can add details about the package such as the home page URL, documentation URL, licence type, licence file and a summary of the tool under `about`.

Finally, you can add your GitHub username in`recipe-maintainers` and DOI of the publication in`identifiers` under `extra`.

If you want to read more details about the sections in the `meta.yaml` file, check out the [official bioconda documentation](https://bioconda.github.io/tutorials/gcb2020.html#meta-yaml-sections).[https://bioconda.github.io/tutorials/gcb2020.html#meta-yaml-sections](https://bioconda.github.io/tutorials/gcb2020.html#meta-yaml-sections)

### Advice: Look at others’ recipes

If you have no idea how to make a recipe, check out other recipes for example code that you can use and copy into your own recipe directory. Here are some great example recipes.

- [Phanotate](https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phanotate) — Downloaded from PyPI
- [Phispy](https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy) — Downloaded from PyPI
- [Samtools](https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools)— Downloaded from GitHub
- [Hecatomb](https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb) — Downloaded from GitHub

You can check your changes using the following command.

```bash
git status

```

## Step 4: Commit and push changes

You can commit your changes and push them from your `mytool` branch to your forked GitHub repository.

```bash
git add mytool
git commit -m 'Add mytool v0.1.0'
git push --set-upstream origin mytool

```

## Step 5: Create a pull request

Now go to your forked GitHub repository and you will see a message saying `This branch is 1 commit ahead [...] bioconda:master`. You will see a button called **Pull Request**, click on it and follow the instructions. You should add describe your pull request. Here is a [pull request I created](https://github.com/bioconda/bioconda-recipes/pull/36256) to add one of my tools. If your package has a publication, make sure to add those details as well.

Creating an informative pull request (Screenshot by Author)

Once you have created the pull request, the bioconda build system will start testing your changes. If you are very lucky, you won’t have any issues and your build will pass. If not, edit your recipe to fix the issues and push the changes to your branch again (and again and again).

When your build “turns green” and all the checks have passed, you can issue the `@BiocondaBot please add label` command.

## Step 6: Test the build

In the meantime, you can issue the command `@BiocondaBot please fetch artifacts` to get the links to CI-built packages/containers. You can download these builds and use them to test packages locally. Once you have downloaded the build, create a new conda environment (DO NOT install in your `base` environment) and simply run the following command to install your package. Make sure to replace `<build_file_name>` with the name of the `.tar.bz2` file you downloaded.

```bash
conda install -c packages <build_file_name>

```

Now you can test your installation using the following commands.

```bash
# show the location of the executable
which mytool

# print the version
mytool --version

# print the help message
mytool --help

```

If you have already set up test cases, you can run them to make sure your package works correctly end-to-end. I usually do this test and post the outputs on the pull request to show everything is good to go. Here is a [test run](https://github.com/bioconda/bioconda-recipes/pull/36256#issuecomment-1206012532) I posted in one of my pull requests.

If everything goes well, someone from the bioconda team will approve your pull request and the changes will be merged into the main repository.

## Final Thoughts

Bioconda only supports dependencies from the `defaults`, `conda-forge` and `bioconda`channels only. So if you have dependencies from any other channels, there is no way to specify them in the `meta.yaml` file and your recipe will fail the build. There are still [open issues](https://github.com/conda/conda-build/issues/532) about adding channels in recipes and there is no solution yet. In that case, you will have to publish your package on your own channel which we will talk about in a future article.

Hope you found this article useful to publish your own bioinformatics software on bioconda. Feel free to browse through the [bioconda tutorials](https://bioconda.github.io/tutorials/index.html) for more details.

Happy package-publishing!

Cheers!

## References

[1] **Initial Setup — Bioconda documentation** available at [https://bioconda.github.io/contributor/setup.html](https://bioconda.github.io/contributor/setup.html)

[2] **Contribution Workflow — Bioconda documentation** available at [https://bioconda.github.io/contributor/workflow.html](https://bioconda.github.io/contributor/workflow.html)

[3] **Tutorials — Bioconda documentation** available at [https://bioconda.github.io/tutorials/index.html](https://bioconda.github.io/tutorials/index.html)

[4] Experience from my personal hiccups while publishing my packages 😁

---

This article was modified from the original article published on Towards Data Science at [https://towardsdatascience.com/all-you-need-to-know-about-publishing-software-on-bioconda-680d48e52868](https://towardsdatascience.com/all-you-need-to-know-about-publishing-software-on-bioconda-680d48e52868).
