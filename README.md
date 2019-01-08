# Introduction

[Atomic layout](https://github.com/kettanaito/atomic-layout) is a library that manages spacial distribution in your layouts. It aims to provide a single control point for any space, and thus composition, in your implementations.

## Goals

* **Immutable**. Stop coupling spacing with your components. Have a dedicated composition layer that handles components relation, ensuring immutable layouts.
* **Physical composition**. ****Allow to treat spacing and composition as physical components.
* **Standardized layout declaration**. Imagine opening any layout part of the project and being able to understand and adjust it in seconds.
* **Faster development speed**. Best practices and patterns immediately at your disposal.

## Motivation

Think of how you create layouts today. You most likely have a set of reusable units \(atoms\) so you can combine them into functional compositions. Units are simple and predictable, but once they become composites for layouts they acquire contextual spacing and positioning. So you apply additional CSS rules to them to ensure that behavior. **That makes elements contextual**, thus not predictable \(and also makes you write more CSS, nobody likes that\).

Atomic layout exposes you a separate layer responsible for the spacial distribution between layout composites. Put simply, it allows you to set spacing and position of layout units **without mutating them**. That deprives from writing redundant CSS and ensures unit's predictability.

{% page-ref page="general/motivation.md" %}

## Advantages

* Based on standardized CSS Grid, no hacks or polyfills
* Supported in more than **85%** of browsers around the globe
* Encourages consistent, maintainable layout declaration
* Supports [Responsive props](fundamentals/responsive-props.md) to create responsive layouts incredibly fast
* Keeps layout composites immutable and predictable
* **~6 Kb gzipped!**

## How does it work?

Briefly, Atomic layout is based on [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). During the layout composition you define which layout areas are present, configure their relation, and render your components in those areas.

Get a more profound understanding of what Atomic layout does following the example-based guidelines:

{% page-ref page="general/getting-started/" %}

