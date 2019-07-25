# Introduction

[Atomic layout](https://github.com/kettanaito/atomic-layout) is a spatial distribution library for React. It uses [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) to define layout areas and render them as React components_._ You control spacing between the areas in a dedicated layer called _Composition_. Since the position and spacing is contextless that way, you achieve ultimate separation of concerns and boost maintenance of your components.

## Encouragements

To understand why Atomic layout is beneficial for you take a look at some of the practices it encourages:

* **Separation of concerns**. What elements are rendered and what is the relation between them are now two independent paradigms in your code. Forget about CSS hacks and contextual tweaks.
* **Composition as a physical component**. We build applications with composability in mind. Adopted from the design world, we, engineers, can wield the power of composition because it's an actual React component. "_A page is a composition of header, body, and footer_"—that's not just an explanation from a designer anymore, but an actual code you would write. Literally:

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const areas = `
  header
  body
  footer
`

const Page = () => (
  <Composition areas={areas}>
    {({ Header, Body, Footer }) => (
      <Header>{...}</Header>
      <Body>{...}</Body>
      <Footer>{...}</Footer>
    )}
  </Composition>
)
```

* **Unification at any scale**. Any component written with Atomic layout has the same declaration structure. Browsing such code is quick, refactoring is predictable, and maintenance is painless.

## Getting started

{% page-ref page="general/getting-started/" %}

## Motivation

Think of how you create layouts today. You most likely have a set of reusable units \(atoms\) so you can combine them into functional compositions. Units are simple and predictable, but once they become composites for layouts they acquire contextual spacing and positioning. So you apply additional CSS rules to them to ensure that behavior. **That makes elements contextual**, thus not predictable \(and also makes you write more CSS, nobody likes that\).

Atomic layout exposes you a separate layer responsible for the spacial distribution between layout composites. Put simply, it allows you to set spacing and position of layout units **without mutating them**. That deprives from writing redundant CSS and ensures unit's predictability.

{% page-ref page="general/motivation.md" %}

## Not convinced yet?

* Lightweight \(~**4 Kb gzipped**\)
* Based on the standardized CSS Grid \(no hacks or polyfills\)
* Supported in [**93+%**](https://caniuse.com/#search=css%20grid) of browsers worldwide
* Supports [Responsive props](fundamentals/responsive-props.md) to create responsive layouts incredibly fast

