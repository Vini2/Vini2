---
title: "Introduction to Genetic Algorithms"
slug: "introduction-to-genetic-algorithms"
date: "2017-06-02"
updated: "2019-08-28"
sourceUrl: "https://vijinimallawaarachchi.com/2017/06/02/introduction-to-genetic-algorithms/"
featuredImage: "/blog-images/introduction-to-genetic-algorithms/ga-cover.png"
categories: ["Algorithms", "Machine Learning"]
tags: ["Algorithms", "Machine Learning", "Optimization"]
---
A **genetic algorithm** is a search heuristic that is inspired by Charles Darwin’s theory of natural evolution. This algorithm reflects the process of natural selection where the fittest individuals are selected for reproduction in order to produce offspring of the next generation.

## **Notion of Natural Selection**

The process of natural selection starts with the selection of fittest individuals from a population. They produce offspring which inherit the characteristics of the parents and will be added to the next generation. If parents have better fitness, their offspring will be better than parents and have a better chance at surviving. This process keeps on iterating and at the end, a generation with the fittest individuals will be found.

This notion can be applied for a search problem. We consider a set of solutions for a problem and select the set of best ones out of them.

Five phases are considered in a genetic algorithm.

1. Initial population
2. Fitness function
3. Selection
4. Crossover
5. Mutation

## **Initial Population**

The process begins with a set of individuals which is called a **Population**. Each individual is a solution to the problem you want to solve.

An individual is characterized by a set of parameters (variables) known as **Genes**. Genes are joined into a string to form a **Chromosome** (solution).

In a genetic algorithm, the set of genes of an individual is represented using a string, in terms of an alphabet. Usually, binary values are used (string of 1s and 0s).

![GA1](/blog-images/introduction-to-genetic-algorithms/ga1.png)

## **Fitness Function**

The **fitness function** determines how fit an individual is (the ability of an individual to compete with other individuals). It gives a **fitness score** to each individual. The probability that an individual will be selected for reproduction is based on its fitness score.

## **Selection**

The idea of **selection** phase is to select the fittest individuals and let them pass their genes to the next generation.

Two pairs of individuals (**parents**) are selected based on their fitness scores. Individuals with high fitness have more chance to be selected for reproduction.

## **Crossover**

**Crossover** is the most significant phase in a genetic algorithm. For each pair of parents to be mated, a **crossover point** is chosen at random from within the genes.

For example, consider the crossover point to be 3 as shown below.

![GA2](/blog-images/introduction-to-genetic-algorithms/ga2.png)

**Offspring** are created by exchanging the genes of parents among themselves until the crossover point is reached.

![GA3](/blog-images/introduction-to-genetic-algorithms/ga3.png)

The new offspring are added to the population.

![GA4](/blog-images/introduction-to-genetic-algorithms/ga4.png)

## **Mutation**

In certain new offspring formed, some of their genes can be subjected to a **mutation** with a low random probability. This implies that some of the bits in the bit string can be flipped.

![GA5](/blog-images/introduction-to-genetic-algorithms/ga5.png)

Mutation occurs to maintain diversity within the population and prevent premature convergence.

## Termination

The algorithm terminates if the population has converged (does not produce offspring which are significantly different from the previous generation). Then it is said that the genetic algorithm has provided a set of solutions to our problem.

## Psuedocode

```text
START
Generate the initial population
Compute fitness
REPEAT
Selection
Crossover
Mutation
Compute fitness
UNTIL population has converged
STOP

```

## References

Introduction to Genetic Algorithms – [https://www.youtube.com/watch?v=zwYV11a__HQ](https://www.youtube.com/watch?v=zwYV11a__HQ)

Genetic Algorithm – explained in 4 minutes – [https://www.youtube.com/watch?v=Y-XMh-iw07w](https://www.youtube.com/watch?v=Y-XMh-iw07w)

An Introduction to Genetic Algorithms by Melanie Mitchell – [https://pdfs.semanticscholar.org/e0fd/bda2b7ebab03f798f9d33847050d012df9cc.pdf](https://pdfs.semanticscholar.org/e0fd/bda2b7ebab03f798f9d33847050d012df9cc.pdf)
