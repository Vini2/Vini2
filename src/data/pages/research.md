---
slug: "research"
label: "Research"
kicker: "Computational Biology"
title: "Research"
intro: ""
order: 2
---
<div class="profile-icon-strip" aria-label="Research profiles">
<a href="https://drive.google.com/file/d/17jdhVXxyVOhhCqUzaFdMfdlQvPH_XYxv/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="CV" title="CV">
<i class="ai ai-cv" aria-hidden="true"></i>
</a>
<a href="https://scholar.google.com/citations?user=Ueve1zYAAAAJ" target="_blank" rel="noreferrer" aria-label="Google Scholar" title="Google Scholar">
<i class="ai ai-google-scholar" aria-hidden="true"></i>
</a>
<a href="https://www.scopus.com/authid/detail.uri?authorId=57195402179" target="_blank" rel="noreferrer" aria-label="Scopus" title="Scopus">
<i class="ai ai-scopus" aria-hidden="true"></i>
</a>
<a href="https://www.researchgate.net/profile/Vijini-Mallawaarachchi" target="_blank" rel="noreferrer" aria-label="ResearchGate" title="ResearchGate">
<i class="ai ai-researchgate" aria-hidden="true"></i>
</a>
<a href="https://orcid.org/0000-0002-2651-8719" target="_blank" rel="noreferrer" aria-label="ORCID" title="ORCID">
<i class="ai ai-orcid" aria-hidden="true"></i>
</a>
<a href="https://loop.frontiersin.org/people/1979569/overview" target="_blank" rel="noreferrer" aria-label="Loop" title="Loop">
<i class="fa-solid fa-circle-nodes" aria-hidden="true"></i>
</a>
<a href="https://researchnow.flinders.edu.au/en/persons/vijini-mallawaarachchi/" target="_blank" rel="noreferrer" aria-label="Research at Flinders" title="Research @ Flinders">
<i class="fa-solid fa-building-columns" aria-hidden="true"></i>
</a>
<a href="https://dl.acm.org/profile/99659269441" target="_blank" rel="noreferrer" aria-label="ACM Digital Library" title="ACM DL">
<i class="ai ai-acmdl" aria-hidden="true"></i>
</a>
<a href="https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&amp;queryText=Vijini%20Mallawaarachchi" target="_blank" rel="noreferrer" aria-label="IEEE Xplore" title="IEEE Xplore">
<i class="ai ai-ieee" aria-hidden="true"></i>
</a>
<a href="https://adscientificindex.com/scientist/vijini-mallawaarachchivijini-gimhani-mallawaarachchi/5455117/" target="_blank" rel="noreferrer" aria-label="AD Scientific Index" title="AD Scientific Index">
<i class="fa-solid fa-chart-line" aria-hidden="true"></i>
</a>
</div>

<section class="content-block">
<h2>Research Interests</h2>
<ul class="clean-list">
<li>Bioinformatics and computational biology</li>
<li>Metagenomics and microbial genome reconstruction</li>
<li>Graph algorithms and network analysis</li>
<li>Machine learning on graphs and sequence data</li>
<li>Scientific data visualisation and web-based analytics</li>
<li>Scientific software engineering</li>
</ul>
</section>

<section class="content-block">
<h2>Research Themes and Projects</h2>
<div class="project-list">
<p>My research focuses on developing computational methods, graph algorithms, visual analytics approaches, and open-source scientific software for analysing biological data. The projects below are organised by my main research themes.</p>

<h3>Graph-based metagenomic binning</h3>
<p>Assembly graphs preserve relationships between contigs that are often lost when sequences are analysed in isolation. My work uses this graph structure, together with sequence composition, coverage, and marker-gene information, to improve metagenomic contig binning and the recovery of metagenome-assembled genomes.</p>
<ul>
<li><a href="https://doi.org/10.1093/bioinformatics/btaa180" target="_blank" rel="noreferrer">GraphBin</a> introduced assembly graph-based refinement for metagenomic contig binning.</li>
<li><a href="https://doi.org/10.1186/s13015-021-00185-6" target="_blank" rel="noreferrer">GraphBin2</a> extended this work to refined and overlapped binning, including contigs shared between species.</li>
<li><a href="https://doi.org/10.1089/cmb.2022.0262" target="_blank" rel="noreferrer">MetaCoAG</a> combines composition, coverage, marker genes, and assembly graph connectivity for stand-alone contig binning.</li>
<li><a href="https://doi.org/10.21105/joss.07713" target="_blank" rel="noreferrer">GraphBin-Tk</a> brings GraphBin, GraphBin2, MetaCoAG, visualisation, and evaluation into one assembly graph-based binning toolkit.</li>
<li><a href="https://doi.org/10.1093/bioadv/vbag126" target="_blank" rel="noreferrer">agtools</a> supports downstream metagenomic methods by providing reusable tools for working with assembly graphs in GFA format.</li>
</ul>
<figure class="research-theme-figure">
<img src="../research-images/graphbin-figure.png" alt="GraphBin assembly graph-based metagenomic binning workflow overview" loading="lazy" />
</figure>

<h3>Geometry-based metagenomic binning</h3>
<p>Metagenomic sequences can also be grouped using patterns in nucleotide composition and geometric structure in feature space, where dimensionality can grow rapidly as oligonucleotide size increases. My work in this area explores reference-free binning approaches that efficiently separate contigs in these increasingly high-dimensional compositional feature spaces.</p>
<ul>
<li><a href="https://doi.org/10.1016/j.compbiolchem.2022.107734" target="_blank" rel="noreferrer">CH-Bin</a> is a convex hull-based approach for binning metagenomic contigs using composition-derived features.</li>
</ul>
<figure class="research-theme-figure">
<img src="../research-images/ch-bin-figure.png" alt="CH-Bin geometry-based metagenomic binning overview" loading="lazy" />
</figure>

<h3>Reconstruction of complete bacteriophage and viral genomes from metagenomes</h3>
<p>Viral metagenomic assemblies are often fragmented and difficult to resolve. I develop graph-based approaches for reconstructing high-quality and contiguous bacteriophage and viral genomes using assembly graphs, flow network models and integer linear programming.</p>
<ul>
<li><a href="https://github.com/Vini2/phables" target="_blank" rel="noreferrer">Phables</a> resolves bacteriophage genomes from fragmented viral metagenomic assemblies using assembly graphs and flow decomposition.</li>
<li><a href="https://github.com/Vini2/reneo" target="_blank" rel="noreferrer">Reneo</a> continues this line of work by untangling high-quality genomes from viral communities in metagenomes.</li>
</ul>
<figure class="research-theme-figure">
<img src="../research-images/phables-figure.png" alt="Phables workflow and bacteriophage genome reconstruction overview" loading="lazy" />
</figure>

<h3>Graph machine learning and representation learning of microbial communities</h3>
<p>Microbial community data can be represented as graphs that capture relationships between sequences, organisms, and genomic context. I am interested in graph machine learning and representation learning methods for modelling metagenomic assembly graphs and sequence-derived graph structures.</p>
<ul>
<li><a href="https://ojs.aaai.org/index.php/AAAI/article/view/20388" target="_blank" rel="noreferrer">RepBin</a> explores constraint-based graph representation learning for metagenomic binning.</li>
<li><a href="https://openreview.net/forum?id=vBw8JGBJWj" target="_blank" rel="noreferrer">Unitig-level assembly graph encoding</a> investigates graph representations with heterophilous constraints for contig binning.</li>
</ul>

<h3>Taxonomic annotation, metaproteomics, and functional interpretation</h3>
<p>Genome reconstruction is most useful when it supports downstream biological interpretation. I work on methods that connect metagenomic data with taxonomic annotation, protein sequence database construction, and metaproteomic analysis.</p>
<ul>
<li><a href="https://github.com/metagentools/ConDiGA" target="_blank" rel="noreferrer">ConDiGA</a> is a contigs directed gene annotation pipeline for building accurate protein sequence databases from metagenomic data.</li>
</ul>

<h3>Visual analytics of biological data</h3>
<p>Complex biological datasets often need to be explored visually as well as computationally. I build interactive and browser-based tools for inspecting graph-based results, comparing outputs, and supporting visual interpretation of bioinformatics analyses.</p>
<ul>
<li><a href="https://github.com/metagentools/graphbin-viz" target="_blank" rel="noreferrer">GraphBin-Viz</a> provides interactive visual analytics for comparing metagenomic binning results on assembly graphs.</li>
<li><a href="https://vini2.github.io/phagescale/" target="_blank" rel="noreferrer">PhageScale</a> allows the measurement of dimensions of bacteriophages (capsid size, tail length, etc.) from transmission electron microscopy (TEM) images.</li>
</ul>

<h3>Scientific workflows</h3>
<p>Bioinformatics analyses depend on computational workflows that need to be reproducible, inspectable, and practical to run. My earlier work includes systems for designing, executing, monitoring, and managing analysis workflows.</p>
<ul>
<li><a href="https://github.com/anuradhawick/bio-workflow" target="_blank" rel="noreferrer">An interactive workflow solution for bioinformatics analyses</a> explored web-based workflow creation for biologists and bioinformaticians with different levels of programming expertise.</li>
<li><a href="https://github.com/anuradhawick/pipe-line-monitor" target="_blank" rel="noreferrer">Pipeline Monitor</a> supports graph-like execution of command pipelines in high-performance computing environments.</li>
</ul>

<h3>Change detection and notification of webpages</h3>
<p>My undergraduate research explored how to detect and track changes across distributed web-based information sources, then notify users when meaningful updates occur.</p>
<ul>
<li><a href="https://dl.acm.org/doi/abs/10.1145/3369876" target="_blank" rel="noreferrer">Change detection in distributed digital collections</a> is a review paper on approaches for detecting, tracking, and reporting changes in distributed digital collections and web pages.</li>
</ul>
</div>
</section>
