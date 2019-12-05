# FAQ

## Can I use Atomic Layout with emotion/glamour/etc.?

The current implementation of the library requires `styled-components` as a peer dependency in your project. You can use any other styling library alongside Atomic Layout, but it will rely on the `styled` to generate CSS internally.

**However**, the rendering and styling parts of the library's implementation are isolated from the areas generation and responsive logic, which makes Atomic Layout susceptible to becoming a styling-agnostic solution.

{% hint style="info" %}
You are one [Pull request](https://github.com/kettanaito/atomic-layout/pulls) away from your favorite styling library working with Atomic Layout. What a striking combo that would be!
{% endhint %}

## Why is there no `useComposition` React hook?

[React hooks](https://reactjs.org/docs/hooks-intro.html) are extremely powerful, and there may be a temptation to use something like a `useComposition` hook. However, that is not a good idea, when examined more closely.

Hooks are useful for a few patterns:

* Isolate repeated state and its update logic;

Internally, `<Composition/>` component is _stateless_. Composition accepts areas and props, generates areas React components, and returns them in a render prop.

Since there is no state to encapsulate in the `useComposition` hook, perhaps, it can handle areas generation? It could shorten the rendering part, allowing us to get rid of the render prop and `React.Fragment` wrapper. Such hook may look something like this:

```jsx
import React from 'react'
import { useComposition } from 'atomic-layout'

const Header = () => {
  const { Composition, Areas } = useComposition(`
    logo menu
  `)
  
  return (
    <Composition>
      <Areas.Logo />
      <Areas.Menu />
    </Composition>
  )
}
```

There is a serious problem with the output such hook produces: **it disrupts a parent-child relation of the composition and its composites**. This lack of relation can lead to problems during the rendering, as nothing forces a developer to render areas as children of an associated composition component.

The biggest reason to adopt the render prop pattern for the `<Composition/>` component is to enforce a strict Composition-Areas relation.

