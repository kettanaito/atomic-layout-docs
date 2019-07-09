# Motivation

In the era of erupting component-focused development, we often underestimate spacing as a powerful relation distributing tool. Rigid frameworks have taken place of what might have been a simple, implementational vision of spacing, and layout composition that it empowers.

Inspired by [atomic design](http://bradfrost.com/blog/post/atomic-web-design), Atomic layout comes in to bring developers a physical grasp over such previously empirical concepts as spacing and composition. Apart from challenging the interface development process, it also focuses on making it fast and standardized, resulting into **layout that is easy to understand and maintain**.

## Core principles

### Semantics

Atomic layout is strict about its semantics. That's why we use the term "Composition" instead of "Grid", "Row", or "Column" as most of the other solutions do.

Semantically, grid is a _composition_ of rows and columns. In fact, any UI element is a composition of its sub-elements, making Composition far more powerful and non-restricting concept than explicit grid/row/column.

Encouraging declarative layout definition, Atomic layout leverages the concept of Composition over grid or flexbox, which is are implementational details over how the layout is achieved. With Composition you express an intent and semantical combination of layout elements, not paying attention to how they are actually implemented. Think of it as `React.Component` for layout definition: it's a common pattern to declare any layout piece.

> It would be ridiculous to have `React.Dropdown` to implement dropdowns, and `React.Image` to implement images.

### Physical composition

Imagine that you can render a composition as a component. It doesn't do anything on its own, but rather acts like a glue that describes elements relation.

```jsx
import { Composition } from 'atomic-layout'

<Composition areas="icon text">
  {({ Icon, Text }) => (
    <>
      <Icon>...</Icon>
      <Text>...</Text>
    </>
  )}
</Composition>
```

### Nested composition

Any interface element can be a combination of other elements. Since we wield a composition as a physical component, we can have elements composition by nesting their respective components.

```jsx
import { Composition } from 'atomic-layout'

{/* Defining "Button" as a composition */}
const Button = () => (
  <Composition areas="icon text">{...}</Composition>
)

const CardItem = () => (
  <Composition areas="actions">
    {({ Actions }) => (
      <>
        <Actions>
          {/* Rendering "Button" as a composite */}
          <Button>Purchase</Button>
        </Actions>
      </>
    )}
  </Composition>
)
```

### Responsive

Having responsive design has become a must in the modern web development. In fact, it is such an essential part of a layout composition that it makes no sense to decouple them. Although its usage is not obligatory, Atomic layout comes with responsive behavior built-in. That negates the need for additional CSS to define conditional layout areas, or responsive css properties.

{% page-ref page="../recipes/responsive-layout.md" %}

## Comparison

Ideas encouraged by Atomic layout may be hard to understand at first. However, by comparing it to one of the most popular frameworks for user interfaces you can immediately get the high-level overview of what Atomic layout is about.

### Bootstrap

In Bootstrap you have a grid system that sits on top of your page and serves as a ruler to snap the elements to. Once the amount of grid columns is specified, you start placing some components relatively to those columns.

![Bootstrap grid visualization](../.gitbook/assets/bootstrap-grid%20%283%29.png)

That kind of grid cannot be applied to each individual component you render, thus forcing you to write additional CSS to implement what appears but a regular composition. This is a primary problem Atomic layout aims to resolve.

### Atomic layout

Now in Atomic layout **anything** **can be a composition and a composite at the same time**. A grid is a composition of rows and columns, and a header is a composition of logo, menu and actions.

![Atomic layout visualization](../.gitbook/assets/atomic-layout%20%282%29.png)

> ### **It is like a grid that goes all the way down, to the furthest leaves of an interface tree.**

