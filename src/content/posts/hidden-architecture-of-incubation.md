---
title: "The Hidden Architecture of Incubation"
date: 2026-08-20
topic: "Strategy"
summary: "What building a technology development center in India taught me about strategy, talent, and execution — and why the hardest part of incubation inside a large company is not inventing the technology, but building the hidden architecture around it."
---

When I was asked to build a new technology development center in India, the mandate sounded simple: hire a team, develop a product designed for India, and do it differently from the Taiwan PC ODM model that PC makers had spent decades perfecting.

It wasn't simple.

The interesting part turned out to be neither the org chart nor the product. It was everything that had to exist around them before a single engineer could sit down and build. A network. A lab. Source control. Hardware samples. Cybersecurity approvals. Recruiters who understood Android. Manufacturing partners who could do more than assemble. A way to work with the government. And a product team capable of stopping individual experts from optimizing their own feature at the expense of the whole product.

I started as employee number one. Over roughly two years, the organization grew to nearly 60 people, and we shipped a product. The most important thing I learned had nothing to do with India, Android, or laptops. It was this:

> The hardest part of innovation inside a large company is usually not inventing the technology. It is building the hidden architecture around the technology that lets it become real.

## Manufacturing capacity is not manufacturing capability

We had two objectives: understand what an affordable computing product designed around Indian users could look like — not an existing product sold at a lower price — and create a development model that broke from the traditional Taiwan approach.

The first reality check came quickly. The Taiwan ecosystem had decades of specialized depth — ODMs, component suppliers, tooling, process knowledge. India didn't have that ecosystem, and our diligence exposed a distinction that is easy to miss in the headlines: a company can manufacture millions of devices without having the upstream capability to design and industrialize the manufacturing process itself.

Who designs the jigs and fixtures? Who defines the line testing? Who troubleshoots when equipment drifts out of tune? Who understands why the process works? We brought HP experts together with a manufacturing partner for a detailed technical workshop, and the conclusion was uncomfortable: building those capabilities locally would require significant additional capital and delay the product.

So we used external design and manufacturing capability while building higher-value development capabilities in India. That meant giving up some local manufacturing economics in the near term — and it was the right trade. We could spend years building an ecosystem before learning whether the product even worked, or we could get the product into customers' hands and build the ecosystem from a position of experience. We chose learning velocity.

## Ask which parts, not whether

One of the most useful artifacts we produced was a capability map of India's electronics ecosystem. It showed what a simple "India manufacturing" label never could: different parts of the value chain were at very different stages of maturity. Some capabilities existed. Some were one to three years away. Others were further out.

That changed the question from "Can India manufacture this?" to "Which parts of the value chain can India do today, which are developing, and which are we better off accessing externally while the ecosystem catches up?" A far more useful strategy question — and it led to a realization about intellectual property.

## You don't need to own everything — you need to own what matters

Our original thinking had put too much weight on retaining manufacturing know-how. Going deep into the ecosystem taught me to separate execution capability from strategic differentiation.

Take the camera. An external partner can manufacture a camera module, but that doesn't mean the partner owns the product experience. Who decides which algorithms matter? Who owns the camera application, the OS integration, the UX, the telemetry and learning loop, and what gets reused in the next product? Those are very different forms of knowledge.

For our Android product, we retained control of product requirements, system architecture, software control points, UX, telemetry, the ISV ecosystem, and validation. The principle became simple:

> Outsource execution where someone else has a structural advantage. Retain control of the system-level decisions that create differentiation.

That is a far more useful definition of IP than asking which company designed a fixture on a manufacturing line.

## Then strategy collided with reality inside HP

A development center needs much more than engineers. The networking requirements alone became a project: the team needed HP's internal systems and R&D infrastructure, but development also required things that didn't fit standard corporate networking — external internet access, connectivity to development partners, remote access into lab systems, and non-corporate Wi-Fi to recreate real customer environments. The same was true of lab space, servers, power, and racks — including stretches when space existed but sat unused, and stretches when we needed space and couldn't get it.

On a strategy slide, none of this is interesting. In reality, the product doesn't move until these things work.

That experience changed how I think about enterprise execution. I stopped asking, "Why is the company making this so difficult?" and started asking: What is the actual constraint? What policy creates it? Is there an exception? Who owns the decision? What is the smallest change that gets us moving? Not redesigning the corporation — finding the minimum intervention that unlocks the next step.

## Talent: stop hiring the story, hire the next move

The hardest role to fill was the engineering leader, because the role didn't fit a conventional job description: someone who understood enough hardware, Android, software architecture, vendors, and product realization to connect the whole system.

I also learned the hard way that ambition is not execution. Our first engineering leader and technical architect were misfits — more on that later. I also had to rebuild the recruiting system. The talent-acquisition team didn't yet have the pattern recognition to identify specialized Android talent, so I taught them: which profiles and keywords to search for, what screening questions to ask, and how to distinguish real technical depth from interview polish. We ran concentrated hiring sessions — sometimes working through roughly 100 resumes to move a much smaller group through interviews quickly. The goal wasn't just to hire; it was to teach the organization how to recognize the people we needed.

Some of our best hires were "alternators" — people who could move between engineering, program management, infrastructure, vendors, and product problems. One could go from setting up Git and backups to solving connectivity problems with an ODM. In a zero-to-one environment, that range matters more than a textbook role fit.

## Don't let experts optimize the wrong thing

The product — an Android device — surfaced the clearest version of this trap: the camera. We had people with deep camera expertise, and that expertise was valuable — and dangerous, because we weren't building a camera. We were building a product that needed many features, of which the camera was one. Feature expertise is necessary but insufficient for product realization.

So I changed the operating model. We outsourced camera development and testing to experienced third parties, and our internal specialists became technical overseers. That gave us something more valuable than another feature enhancement: engineering bandwidth. Sometimes a B+ across the product beats an A+ in one feature and unfinished everywhere else.

## The cheapest component can be the most expensive decision

The obvious processor choice for a cost-sensitive product was the lowest-cost silicon supplier, and the economics looked right. Then execution stalled: we needed the Android software drop, got caught in contractual discussions instead, and lost two months.

At that point the question was no longer "Which chip is cheapest?" but "Which path gets us to a shippable product?" I reached out directly to a product leader at another silicon company — skipping the usual sales channels — with a simple constraint: we needed a solution around a specific price point, or neither of us should waste time. That permanently changed how I think about commodity strategy. The right metric isn't component price; it's total execution economics. A component that is a dollar cheaper can be vastly more expensive if it costs you schedule, integration capacity, or momentum.

## The hidden architecture

When you build something from zero, strategy eventually becomes physical. Can the engineer connect to the network? Can the lab reproduce the customer's environment? Can QA independently test? Can the recruiter find the engineer — and can the engineer get a job code? Can the next decision happen before another month disappears? None of those questions looks like incubation. Together, they determine whether incubation happens.

I think of the development center as having two architectures. The visible one was the product: silicon to hardware to Android to applications to customer. The hidden one was everything that made the product possible: talent, infrastructure, partners, corporate systems, manufacturing, government, capital, and decisions. The two have to move together — if one gets stuck, the product gets stuck.

> Incubation inside a large company is often an organizational design problem disguised as a technology problem.

If I did it again, I would identify the strategic IP before deciding what to own, distinguish ecosystem capacity from capability before committing to a manufacturing model, hire for range sooner, test leaders on turning ambiguity into the next three executable moves, set decision triggers for abandoning a supplier or technology path, and bring product design in earlier than I did.

Most importantly, I would think about the hidden architecture from day one. A strategy isn't real when everyone agrees with it. A strategy is real when an engineer can sit down on Monday morning and actually execute it.
