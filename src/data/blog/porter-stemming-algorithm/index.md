---
title: "Porter Stemming Algorithm – Basic Intro"
slug: "porter-stemming-algorithm"
date: "2017-05-09"
updated: "2017-05-10"
sourceUrl: "https://vijinimallawaarachchi.com/2017/05/09/porter-stemming-algorithm/"
featuredImage: "/blog-images/porter-stemming-algorithm/porterstemmer.png"
categories: ["Algorithms", "Information Retrieval", "Stemming"]
tags: ["Algorithms", "Information Retrieval", "Porter", "Stemming"]
---
<p>In linguistics (study of language and its structure), a <strong>stem</strong> is part of a word, that is common to all of its inflected variants.</p>
<ul>
<li>CONNECT</li>
<li>CONNECTED</li>
<li>CONNECTION</li>
<li>CONNECTING</li>
</ul>
<p>Above words are <strong>inflected variants</strong> of CONNECT. Hence, CONNECT is a stem. To this stem we can add different suffixes to form different words.</p>
<p>The process of reducing such inflected (or sometimes derived) words to their word stem is known as <strong>Stemming</strong>. For example, CONNECTED, CONNECTION and CONNECTING can be reduced to the stem CONNECT.</p>
<p>The <strong>Porter Stemming algorithm</strong> (or <strong>Porter Stemmer</strong>) is used to <strong>remove the suffixes from an English word and obtain its stem</strong> which becomes very useful in the field of <strong>Information Retrieval (IR)</strong>. This process reduces the number of terms kept by an IR system which will be advantageous both in terms of space and time complexity. This algorithm was developed by a British Computer Scientist named  <strong>Martin F. Porter</strong>. You can visit the <a href="https://tartarus.org/martin/PorterStemmer/index.html" target="_blank" rel="noopener noreferrer">official home page</a> of the Porter stemming algorithm for further information.</p>
<p>First, a few terms and expressions will be introduced, which will be helpful for the ease of explanation.</p>
<h2><strong>Consonants and Vowels</strong></h2>
<p>A <strong>consonant</strong> is a letter other than the vowels and other than a letter “Y” preceded by a consonant. So in &#8220;TOY&#8221; the consonants are &#8220;T&#8221; and &#8220;Y&#8221;, and in &#8220;SYZYGY&#8221; they are &#8220;S&#8221;, &#8220;Z&#8221; and &#8220;G&#8221;.</p>
<p>If a letter is not a consonant it is a <strong>vowel</strong>.</p>
<p>A consonant will be denoted by <strong>c </strong>and a vowel by <strong>v</strong>.</p>
<p>A list of one or more consecutive consonants (ccc&#8230;) will be denoted by <strong>C</strong>, and a list of one or more consecutive vowels (vvv&#8230;) will be denoted by <strong>V</strong>. Any word, or part of a word, therefore has one of the four forms given below.</p>
<ul>
<li><strong>CVCV &#8230; C → </strong>collection, management</li>
<li><strong>CVCV &#8230; V → </strong>conclude, revise</li>
<li><strong>VCVC &#8230; C → </strong>entertainment, illumination</li>
<li><strong>VCVC &#8230; V → </strong>illustrate, abundance</li>
</ul>
<p>All of these forms can be represented using a single form as,</p>
<blockquote>
<p><strong>[C]VCVC &#8230; [V]</strong></p>
</blockquote>
<p>Here the square brackets denote arbitrary presence of consonants or vowels.</p>
<p>(VC)<sup>m</sup> denotes VC repeated m times. So the above expression can be written as,</p>
<blockquote>
<p><strong>[C](VC)<sup>m</sup>[V]</strong></p>
</blockquote>
<h2><strong>What is m?</strong></h2>
<p>The value <strong>m</strong> found in the above expression is called the <strong>measure </strong>of any word or word part when represented in the form <strong>[C](VC)<sup>m</sup>[V]</strong>. Here are some examples for different values of m:</p>
<ul>
<li>m=0   →   TREE, TR, EE, Y, BY</li>
<li>m=1   →   TROUBLE, OATS, TREES, IVY</li>
<li>m=2   →   TROUBLES, PRIVATE, OATEN, ROBBERY</li>
</ul>
<p><img src="../../blog-images/porter-stemming-algorithm/stemmer1.png" alt="Stemmer"   /></p>
<h2><strong>Rules</strong></h2>
<p>The rules for replacing (or removing) a suffix will be given in the form as shown below.</p>
<blockquote>
<p><strong>(condition) S1 → S2</strong></p>
</blockquote>
<p>This means that if a word ends with the suffix S1, and the stem before S1 satisfies the given condition, S1 is replaced by S2. The condition is usually given in terms of m in regard to the stem before S1.</p>
<blockquote><p>(m &gt; 1) EMENT →</p></blockquote>
<p>Here S1 is ‘EMENT’ and S2 is null. This would map REPLACEMENT to REPLAC, since REPLAC is a word part for which m = 2.</p>
<h2><strong>Conditions</strong></h2>
<p>The conditions may contain the following:</p>
<ul>
<li>*S    &#8211;    the stem ends with S (and similarly for the other letters)</li>
<li>*v*  &#8211;    the stem contains a vowel</li>
<li>*d    &#8211;    the stem ends with a double consonant (e.g. -TT, -SS)</li>
<li>*o    &#8211;    the stem ends cvc, where the second c is not W, X or Y (e.g. -WIL, -HOP)</li>
</ul>
<p>And the condition part may also contain expressions with and, or and not.</p>
<blockquote><p>(m&gt;1 and (*S or *T)) tests for a stem with m&gt;1 ending in S or T.</p>
<p>(*d and not (*L or *S or *Z)) tests for a stem ending with a double consonant and does not end with letters L, S or Z.</p></blockquote>
<h2><strong>How rules are obeyed?</strong></h2>
<p>In a set of rules written beneath each other, only one is obeyed, and this will be the one with the longest matching S1 for the given word. For example, with the following rules,</p>
<blockquote>
<ol>
<li>SSES       →           SS</li>
<li>IES          →           I</li>
<li>SS            →          SS</li>
<li>S              →</li>
</ol>
</blockquote>
<p>(Here the conditions are all null) CARESSES maps to CARESS since SSES is the longest match for S1. Equally CARESS maps to CARESS (since S1=&#8221;SS&#8221;) and CARES to CARE (since S1=&#8221;S&#8221;).</p>
<h2><strong>The Algorithm</strong></h2>
<h2><strong>Step 1a</strong></h2>
<blockquote>
<ol>
<li>SSES       →           SS</li>
<li>IES          →           I</li>
<li>SS           →           SS</li>
<li>S             →</li>
</ol>
</blockquote>
<h2><strong>Step 1b</strong></h2>
<blockquote>
<ol>
<li>(m&gt;0) EED           →           EE</li>
<li>(*v*) ED               →</li>
<li>(*v*) ING             →</li>
</ol>
</blockquote>
<p>If the second or third of the rules in Step 1b is successful, the following is performed.</p>
<blockquote>
<ol>
<li>AT            →             ATE</li>
<li>BL            →             BLE</li>
<li>IZ             →             IZE</li>
<li>(*d and not (*L or *S or *Z))             →             single letter</li>
<li>(m=1 and *o)             →             E</li>
</ol>
</blockquote>
<h2><strong>Step 1c</strong></h2>
<blockquote>
<ol>
<li>(*v*) Y             →             I</li>
</ol>
</blockquote>
<h2><strong>Step 2</strong></h2>
<blockquote>
<ol>
<li>(m&gt;0) ATIONAL                →                           ATE</li>
<li>(m&gt;0) TIONAL                   →                           TION</li>
<li>(m&gt;0) ENCI                         →                           ENCE</li>
<li>(m&gt;0) ANCI                         →                           ANCE</li>
<li>(m&gt;0) IZER                          →                           IZE</li>
<li>(m&gt;0) ABLI                          →                           ABLE</li>
<li>(m&gt;0) ALLI                          →                           AL</li>
<li>(m&gt;0) ENTLI                        →                           ENT</li>
<li>(m&gt;0) ELI                             →                           E</li>
<li>(m&gt;0) OUSLI                        →                           OUS</li>
<li>(m&gt;0) IZATION                    →                           IZE</li>
<li>(m&gt;0) ATION                       →                           ATE</li>
<li>(m&gt;0) ATOR                         →                           ATE</li>
<li>(m&gt;0) ALISM                       →                           AL</li>
<li>(m&gt;0) IVENESS                   →                           IVE</li>
<li>(m&gt;0) FULNESS                  →                           FUL</li>
<li>(m&gt;0) OUSNESS                  →                           OUS</li>
<li>(m&gt;0) ALITI                         →                           AL</li>
<li>(m&gt;0) IVITI                          →                           IVE</li>
<li>(m&gt;0) BILITI                        →                           BLE</li>
</ol>
</blockquote>
<h2><strong>Step 3</strong></h2>
<blockquote>
<ol>
<li>(m&gt;0) ICATE                       →                           IC</li>
<li>(m&gt;0) ATIVE                       →</li>
<li>(m&gt;0) ALIZE                        →                           AL</li>
<li>(m&gt;0) ICITI                          →                           IC</li>
<li>(m&gt;0) ICAL                          →                           IC</li>
<li>(m&gt;0) FUL                           →</li>
<li>(m&gt;0) NESS                         →</li>
</ol>
</blockquote>
<h2><strong>Step 4</strong></h2>
<blockquote>
<ol>
<li>(m&gt;1) AL                             →</li>
<li>(m&gt;1) ANCE                        →</li>
<li>(m&gt;1) ENCE                        →</li>
<li>(m&gt;1) ER                              →</li>
<li>(m&gt;1) IC                               →</li>
<li>(m&gt;1) ABLE                         →</li>
<li>(m&gt;1) IBLE                          →</li>
<li>(m&gt;1) ANT                           →</li>
<li>(m&gt;1) EMENT                     →</li>
<li>(m&gt;1) MENT                        →</li>
<li>(m&gt;1) ENT                           →</li>
<li>(m&gt;1 and (*S or *T)) ION             →</li>
<li>(m&gt;1) OU                            →</li>
<li>(m&gt;1) ISM                           →</li>
<li>(m&gt;1) ATE                           →</li>
<li>(m&gt;1) ITI                              →</li>
<li>(m&gt;1) OUS                           →</li>
<li>(m&gt;1) IVE                            →</li>
<li>(m&gt;1) IZE                            →</li>
</ol>
</blockquote>
<h2><strong>Step 5a</strong></h2>
<blockquote>
<ol>
<li>(m&gt;1) E                                →</li>
<li>(m=1 and not *o) E            →</li>
</ol>
</blockquote>
<h2><strong>Step 5b</strong></h2>
<blockquote>
<ol>
<li>(m &gt; 1 and *d and *L)        →               single letter</li>
</ol>
</blockquote>
<p>For each word you input to the algorithm, all the steps from 1 to 5 will be executed and the output will be produced at the end.</p>
<h2>Example Inputs</h2>
<p>Let&#8217;s consider a few example inputs and check what will be their stem outputs. 🙂</p>
<h2>Example 1</h2>
<p>In the first example, we input the word <strong>MULTIDIMENSIONAL</strong> to the Porter Stemming algorithm. Let&#8217;s see what happens as the word goes through steps 1 to 5.</p>
<p><img src="../../blog-images/porter-stemming-algorithm/ex.png" alt="ex.png"   /></p>
<ul>
<li>The suffix will not match any of the cases found in steps 1, 2 and 3.</li>
<li>Then it comes to step 4.</li>
<li>The stem of the word has m &gt; 1 (since m = 5) and ends with “<b>AL</b>”.</li>
<li>Hence in step 4, &#8220;<strong>AL</strong>&#8221; is deleted (replaced with null).</li>
<li>Calling step 5 will not change the stem further.</li>
<li>Finally the output will be <strong>MULTIDIMENSION</strong>.</li>
</ul>
<blockquote><p>MULTIDIMENSIONAL <strong>→ MULTIDIMENSION</strong></p></blockquote>
<h2>Example 2</h2>
<p>In the second example, we input the word <strong>CHARACTERIZATION </strong>to the Porter Stemming algorithm. Let&#8217;s see what happens as the word goes through steps 1 to 5.</p>
<p><img src="../../blog-images/porter-stemming-algorithm/ex2.png" alt="ex2"   /></p>
<ul>
<li>The suffix will not match any of the cases found in step 1.</li>
<li>So it will move to step 2.</li>
<li>The stem of the word has m &gt; 0 (since m = 3) and ends with “<strong>IZATION</strong>”.</li>
<li>Hence in step 2, “<strong>IZATION</strong>” will be replaced with “<strong>IZE</strong>”.</li>
<li>Then the new stem will be <strong>CHARACTERIZE</strong>.</li>
<li>Step 3 will not match any of the suffixes and hence will move to step 4.</li>
<li>Now m &gt; 1 (since m = 3) and the stem ends with <strong>“IZE”</strong>.</li>
<li>So in step 4, <strong>“IZE”</strong> will be deleted (replaced with null).</li>
<li>No change will happen to the stem in other steps.</li>
<li>Finally the output will be <strong>CHARACTER</strong>.</li>
</ul>
<blockquote><p>CHARACTERIZATION → CHARACTERIZE<strong> → CHARACTER</strong></p></blockquote>
<h2></h2>
<p>&nbsp;</p>
<h2>References</h2>
<ol>
<li>The Porter Stemming Algorithm &#8211; official page &#8211; <a href="https://tartarus.org/martin/PorterStemmer/index.html" target="_blank" rel="noopener noreferrer">https://tartarus.org/martin/PorterStemmer/index.html</a></li>
<li><a href="http://snowball.tartarus.org/algorithms/porter/stemmer.html" target="_blank" rel="noopener noreferrer">http://snowball.tartarus.org/algorithms/porter/stemmer.html</a></li>
</ol>
