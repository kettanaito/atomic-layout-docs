# Introduction

[Atomic Layout](https://github.com/kettanaito/atomic-layout) is a spatial distribution library for React. It uses [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) to define layout areas and render them as React components_._ You control spacing between the areas in a dedicated layer called _Composition_. Since the position and spacing is contextless that way, you achieve ultimate separation of concerns and boost maintenance of your components.

## Encouragements

To understand why Atomic Layout is beneficial for you take a look at some of the practices it encourages:

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

export const Page = () => (
  <Composition areas={areas}>
    {({ Header, Body, Footer }) => (
      <>
        <Header>{...}</Header>
        <Body>{...}</Body>
        <Footer>{...}</Footer>
      </>
    )}
  </Composition>
)
```

* **Unification at any scale**. Any component written with Atomic Layout has the same declaration structure. Browsing such code is quick, refactoring is predictable, and maintenance is painless.

## Getting started

We've prepared a full-scale tutorial where you will be creating a set of UI elements using Atomic Layout. That's a great place to get started with the library.

{% page-ref page="getting-started/installation.md" %}

## Motivation

One of the most popular ways to create layout nowadays is to combine a set of small, reusable components, often called "atoms", into a meaningful layout unit. Naturally, atoms have spacial relation between each other, which often depends on the context they are being rendered. However, when it comes to implementing this relation we often describe it, and all its variations, directly in the atom components, **making them irreversibly contextual**. Suddenly a plain button has a dozen of margin variations when in fact it should not be aware in which context it's included.

The issue lies in the luck of standardized way to describe relation between layout units. Don't get me wrong: there are plenty of techniques and features in CSS, yet they are rather _tools_ than _concepts_. 

This is why I've build Atomic Layout: to have a single spacial distribution layer, both conceptually and physically. It's meant to be a shell that controls how its children relate using concise declarative API. It uses powerful CSS features \(i.e. CSS Grid\) and provides you a high-level layout API, just as React uses DOM operations and gives you API of its own. That way I hope to encourage best practices and make UI development easy and fun.

{% page-ref page="motivation.md" %}

## Not convinced yet?

* Lightweight \(~**4 Kb gzipped**\);
* Based on the standardized CSS Grid \(no hacks or polyfills\);
* Supported in [**93+%**](https://caniuse.com/#search=css%20grid) of browsers worldwide;
* Comes with versatile responsive API and useful React hooks;

## Getting started

{% page-ref page="getting-started/installation.md" %}

