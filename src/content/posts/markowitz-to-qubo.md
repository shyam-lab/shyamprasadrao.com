---
title: "From Markowitz to QUBO: Teaching Quantum Computing Through Portfolio Optimization"
date: 2026-09-03
topic: "Quantum"
summary: "A course at the Chennai Mathematical Institute that started with an ordinary financial optimization problem and arrived at quantum computing only at the end — and what teaching it taught me about sequencing, validation, and when an emerging technology actually changes the game."
---

For the past several months I taught a course at the Chennai Mathematical Institute sitting at the intersection of portfolio optimization, machine learning and quantum computing. The question I opened with was deliberately modest: can we take an ordinary financial optimization problem and use it as a vehicle for learning quantum computing?

By the end, one of my students had written a 26-page report that runs from classical Markowitz optimization through machine-learning-enhanced portfolios to QUBO-based selection solved by simulated annealing. The report is on GitHub, and it's worth reading on its own terms. But what I want to write about here is the teaching, because that turned out to be the part I learned most from.

## Why portfolio optimization

Quantum computing is hard to teach cold. You can walk students through qubits, superposition, entanglement, Hamiltonians and QUBOs, and they will follow you, and none of it will stick, because there is nothing underneath it that they already care about. I still have my own moments of wondering where the advantage actually is.

Portfolio optimization gave us something underneath. Also, I understand money better than molecules, which is why we weren't simulating them. Any student with a quantitative background can hold the basic question in their head: given a set of assets, how do I split my money between them to balance return against risk? That is Markowitz. With weights $$w$$, expected returns $$\mu$$ and covariance matrix $$\Sigma$$, you maximize

$$
\mu^{\top} w - \gamma\, w^{\top} \Sigma w
$$

subject to the weights summing to one. Continuous, convex, well understood. A fine place to start.

The interesting move is changing the nature of the decision rather than the objective. Instead of "how much do I put in each stock," ask "which ten stocks do I pick?" The problem is now discrete, the variables are binary, $$x_i = 1$$ meaning asset $$i$$ is in, and you have walked into QUBO — Quadratic Unconstrained Binary Optimization — without anyone having to announce it.

## The order mattered

I built the course as a sequence: Markowitz, then convex optimization, then machine learning, then QUBO, then risk-aware QUBO, and only then quantum computing. I'll admit the sequence took a few rounds of arguing with ChatGPT before it settled. Each step added one idea and kept something from the step before. I wanted students to be able to say not just how you write down a QUBO but why you would bother.

The project followed the same arc. Classical Markowitz set the baseline. ML was brought in to improve the expected-return estimates. The selection problem was then recast as a QUBO with a cardinality constraint, and finally covariance risk was folded into the QUBO objective. The methodology diagram in the report lays the whole pipeline out: historical prices, feature engineering, ML return prediction, QUBO formulation, simulated annealing, backtest, comparison.

## Don't teach "quantum" too early

This is my main takeaway, and I hold it more strongly now than when I started.

The temptation is to open with qubits and gates, because that is the exciting part and it is what students showed up for. But in applied work the first question is what the underlying computational problem actually is. Whether quantum hardware offers an interesting way to attack it is the second question, and it only makes sense once the first has an answer.

Here the underlying problem was portfolio selection. We didn't introduce QUBO because QUBO is quantum-adjacent. We introduced it because picking exactly ten names out of fifty is combinatorial by nature and the binary formulation is the honest way to write that down. Once that was clear, quantum annealing and QAOA became genuinely interesting as solvers rather than as vocabulary.

## The shift from "what does this mean" to "what if I change this"

The best moment in any project is when a student stops asking what an equation means and starts asking what happens if they change a parameter.

She didn't just write down the QUBO and run it. She first tested the formulation by brute force on a reduced 15-asset problem, where all $$2^{15} = 32{,}768$$ subsets can be enumerated, and confirmed that the QUBO recovered the exact optimal top-10 selection. Only then did the work move to the full 50-stock universe, where brute force would mean roughly $$2^{50} \approx 10^{15}$$ subsets and simulated annealing becomes the only practical option.

Validate on something small enough to check by hand, then scale. That habit is worth more than anything specific to quantum computing.

## The result, and why it isn't the point

The benchmark compared four methods under a single out-of-sample framework: equal weight, classical Markowitz, ML-enhanced Markowitz, and covariance-aware QUBO. Best out-of-sample Sharpe ratios:

| Method | Full Universe | Extended Universe |
| --- | ---: | ---: |
| Equal Weight | 0.62 | 0.57 |
| Classic Markowitz | 0.67 | 0.74 |
| ML Markowitz | 0.68 | 0.79 |
| QUBO Mean-Variance | 0.878 | 1.141 |

Read quickly, that table is a strong advertisement for QUBO. Read carefully, it is an invitation to be suspicious, and the second reading is where the teaching happens.

The QUBO portfolio is doing a different job. It picks exactly ten assets and weights them equally; Markowitz is solving a continuous allocation problem across the whole universe. Those are answers to two different questions — "best ten-name equal-weight portfolio" versus "best portfolio at this risk budget" — so the comparison is not like-for-like. And all of it rests on one rebalance date and one holding period, which the report flags as its most pressing limitation.

There was also a detail I didn't anticipate: QUBO performance is non-monotonic in the risk-aversion parameter $$\gamma$$. Turning risk aversion up doesn't move the portfolio smoothly in one direction. That surprised the class until we talked it through — the decision is discrete, so a small change in $$\gamma$$ can flip the optimizer from one set of ten names to a different set entirely. Continuous optimization has no equivalent behaviour, and students who have only ever seen convex problems expect optimization to hand back a single correct answer. In practice the formulation, the constraints and the parameterization are part of the answer.

## What the ML component taught us

The machine learning turned out to be instructive in a quieter way.

The first attempts at short-horizon prediction went nowhere. One-day-ahead returns were essentially uninformative and produced unstable allocations. Extending the horizon to fifteen days gave a more usable cross-sectional ranking, but the improvement over classical Markowitz was modest — 0.68 against 0.67 in the full universe.

ML did not produce better portfolios by itself. What it produced was a better ranking signal for the optimizer to act on. That framing — ML estimates the signal, optimization decides what to do with it — is the one I keep coming back to, and I expect it to hold across most real AI systems, not just this one.

## Simulated annealing before hardware

We deliberately did not jump to quantum hardware. Every QUBO in the project was solved classically, by simulated annealing.

That served two purposes. It let the student understand the optimization problem independently of any hardware, and it left us with a classical baseline. If the same QUBO is later run on a D-Wave annealer or through QAOA on a gate-based machine, there is now something meaningful to compare against — which is the report's proposed next experiment: one QUBO, three solvers.

That reframes the question. "Can a quantum computer solve portfolio optimization?" is not very interesting; the answer is yes, at toy scale, and so can your laptop. The question worth asking is at what problem sizes and structures quantum hardware beats a strong classical heuristic. That one is much harder.

## What teaching did to me

Three things I didn't expect.

**It exposes what you don't actually understand.** Working professionally, you can operate at the conceptual level indefinitely. Teaching drags you a level lower, because a student will ask "why" about something you have been comfortably assuming for years, and sometimes the honest answer is "good question, let's work it out." I ended up revisiting material I thought I knew well. Why is standard deviation a measure of risk at all, when it punishes upside moves exactly as hard as downside ones?

**Students arrive with different shapes, not different speeds.** Some were strong mathematically, some were better programmers, some picked up the finance immediately and needed longer with the linear algebra. Quantum computing adds another layer of abstraction on top of all of it. I stopped trying to move everyone through the material in lockstep and started trying to build enough structure that each of them could keep making progress from wherever they were.

**A project becomes real when the student takes it over.** At some point the instructor has to stop supplying the next step. "Do this next" becomes "what do you think we should test next," and the report starts to read differently — methodological choices being made, experiments being run, odd results being chased down, limitations being written up honestly. That is roughly the moment teaching turns into research.

## What's still missing

I don't read this as proof that QUBO beats Markowitz. That would be a considerable overstatement of what one backtest can support.

The obvious next step is a rolling backtest: rebalance monthly rather than optimizing once on 1 January 2019, refitting the ML model and re-estimating the covariance matrix at each date using only information available then. Twenty or thirty rebalance dates would give a distribution of Sharpe ratios instead of a single number, which is what you'd need before claiming an edge. After that, transaction costs — the QUBO rotates its full ten names, so turnover is high and the gross-return advantage may not survive net of costs. Then richer ML models. Then, eventually, real hardware.

There's a nice scaling detail buried in the report on that last point. Encoding the weights themselves as binary variables rather than just the selection, at three bits per asset, blows the problem up from 1,275 terms to 11,325 for the full universe. That is the regime where the quantum question stops being rhetorical.

## Teaching and research aren't as separate as they look

A teaching project turns into a research project when it has a real problem, a clear baseline, methods that get progressively more sophisticated, reproducible experiments, honest evaluation, and enough curiosity to chase the results that misbehave. This one had all six, mostly because the student insisted on it.

We started with a problem Markowitz posed in 1952, added convex optimization, then machine learning, then combinatorial optimization, then QUBO — and arrived at quantum computing at the end rather than the beginning. The quantum computer wasn't the premise. It was where the problem led.

That's the approach I'll carry into the next one: start with a problem worth solving, build the classical solution, understand where it breaks, and only then ask whether an emerging technology genuinely changes the game.

Which leaves me with the question I'd like to work on next. When does quantum optimization stop being an interesting way to write a problem down and start being a better way to solve it?

---

Project: *Machine Learning and QUBO-Based Portfolio Optimization: A Comparative Study on NIFTY50 Equities* — Chennai Mathematical Institute.

Implementation, datasets, notebooks and report source: [Shyam Lab — Portfolio Optimization NIFTY50](https://github.com/shyam-lab/portfolio-optimization-nifty50).
