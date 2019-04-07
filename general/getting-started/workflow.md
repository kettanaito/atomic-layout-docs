# Workflow

This section is going to demonstrate how the workflow with Atomic layout looks like. It's highly recommended you read through the Getting started guidelines first. 

{% page-ref page="./" %}

## Declarative

The biggest difference when working with Atomic layout is that you **declare** what your layout suppose to look like, without explicitly telling how that must be achieved.

## Creating a composition

### Import

Start from importing a `Composition` React component:

```jsx
import { Composition } from 'atomic-layout'
```

### Define layout areas

Now describe your layout in a verbose `grid-template-areas` syntax. You can use single- or multiline strings as areas.

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

// areas for mobile devices
const areasMobile = `
  header
  content
  footer
`

// areas for tablets
const areasTablet = `
  header header
  content aside
  footer footer
`
```

{% hint style="warning" %}
Note that the position of an area within the template string affects where the area is rendered.
{% endhint %}

### Configure composition

Pass the defined template string as the values of respective `areas` props of the `Composition` component:

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

// grid areas on mobile devices
const areasMobile = `
  header
  content
  footer
`

// grid areas on tablets
const areasTablet = `
  header header
  content aside
  footer footer
`

const Page = () => (
  <Composition
    areas={areasMobile}
    areasMd={areasTablet}>
    {() => (/* ... */)}
  </Composition>
)

export default Page
```

Notice how we can apply different template strings based on breakpoints by suffixing a template prop with a breakpoint name. Atomic layout will automatically apply the given template string on the specified breakpoint.

{% page-ref page="../../fundamentals/responsive-props.md" %}

### Render areas

Whenever we pass template strings as props to a Composition component, it would expose a function as its children, which we can use to render the React components generated based on template areas.

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

// grid areas on mobile devices
const areasMobile = `
  header
  content
  footer
`

// grid areas on tablets
const areasTablet = `
  header header
  content aside
  footer footer
`

const Page = () => (
  <Composition
    areas={areasMobile}
    areasMd={areasTablet}
  >
    {({ Header, Content, Aside, Footer }) => (
      <>
        <Header>Header</Header>
        <Content>Content</Content>
        <Aside>Aside</Aside>
        <Footer>Footer</Footer>
      </>
    )}
  </Composition>
)

export default Page
```

Pay attention that the Aside area exists only in `areasTablet` declaration. Atomic layout will automatically wrap it in a proper `<MediaQuery/>` component to prevent it from rendering on mobile devices. **Responsive areas are built-in**.

{% hint style="info" %}
You can also render a [Template-less composition](../../components/composition.md#template-less-composition).
{% endhint %}

That's it. We have created a layout composition for our `Page` component, that consist of four layout areas. No we can render another compositions inside those layout areas, thus making a [Nested composition](../../components/composition.md#nested-composition). The latter is a main distinctive key of Atomic layout, which allows to create immersive layouts following the same pattern.

