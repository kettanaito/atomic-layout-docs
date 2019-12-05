# Nested composition

React encourages [composition over inheritance](https://reactjs.org/docs/composition-vs-inheritance.html), so when it comes to more complex UI component, let's nest compositions!

Any React component can be a **composition** and a **composite** at the same time. In this section we are going to illustrate how to apply this principle on practice, taking our previously created `<Album/>` component and using it as a composite of a new `<AlbumsList/>` component.

## Albums list

Imagine there is an `AlbumsList` component that renders a list of albums. Conceptually, it is a composition of albums. That is all we need to know to implement it with Atomic Layout.

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'
// The Album component we have created in
// the previous steps of this tutorial.
import Album from './Album'

const AlbumsList = ({ albums }) => (
  <Composition gap={10}>
    {albums.map((album) => (
      <Album
        key={album.id}
        title={album.title}
        releaseDate={album.releaseDate}
        artistName={album.artistName}
      />
    )}
  </Composition>
)
```

Notice how we are using the `Composition` component, but this time there are **no areas involved**. That's because our albums list essentially renders the same child dynamically. You can imagine the `Album` being the one and only area in that case. There is no need to use the `areas` prop for a single area, since the power of areas is in their _relation_, and thus, multiplicity.

> The usage of the `areas` prop is a design decision you make. Sometimes it's beneficial, while other times it may be not.

From the API perspective, the `areas` prop is not required in `Composition`. When not provided, the composition component still acts like a `display: grid` parent. You can use other CSS Grid properties with it to control the layout of its children, such as `templateCols` or `templateRows` to describe columns or rows relation respectively.

## Summary

In this section we have learned:

* Nesting is a crucial part of dealing with UI complexity;
* A single React component may be a composition and a composite at the same time;

