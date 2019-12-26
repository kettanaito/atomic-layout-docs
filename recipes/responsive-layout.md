# Responsive layout

Responsive is a crucial part of any layout implementation. That's why its concept lies in the core of Atomic Layout design, as responsive is integrated by default.

**Implementation of responsive layout has two parts:**

1. Conditional \(responsive\) areas;
2. Conditional props assignment \(`gap`, `margin`, etc.\);

In this section we are going to take a look at how to implement these fundamentals. Make sure to be familiar with the basics of the library before you continue reading.

{% page-ref page="../resources.md" %}

## Responsive areas

### Declaration

Any grid area that is not present in all template declarations automatically becomes responsive.

```jsx
const areasMobile = `
  thumbnail
  heading
  subheading
`

const areasDesktop = `
  thumbnail heading
  thumbnail subheading
  thumbnail meta
`
```

We have two template declarations above: one for mobile and one for the desktop screen. Areas `thumbnail`, `heading` and `subheading` are present in both template declarations. However, the `meta`  area is declared in `templateDesktop` only. This makes `meta` a conditional area automatically.

{% hint style="info" %}
Note that template declaration alone has no effect over responsive area rendering. Make sure to supply the template declaration to the **respective template prop\(s\)**.
{% endhint %}

### Breakpoints

To connect a template declaration with a breakpoint we need to pass the template string to the template prop. 

Having different areas in different template declarations only signifies conditional areas. In order to control the breakpoints where those areas are rendered, we need to pass templates declarations to the `template` props of the `Composition` component:

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
  thumbnail
  heading
  subheading
`

const areasDesktop = `
  thumbnail heading
  thumbnail subheading
  thumbnail meta
`

export const Card = () => (
  <Composition
    areas={areasMobile}
    areasLg={areasDesktop}>
    {(Areas) => (
      <>
        <Areas.Thumbnail>I am rendered always</Areas.Thumbnail>
        <Areas.Heading>I am rendered always</Areas.Heading>
        <Areas.Subheading>I am rendered always</Areas.Subheading>
        <Areas.Meta>I am rendered on "lg" breakpoint and up!</Areas.Meta>
      </>
    )}
  </Composition>
)
```

The composition above will wrap `Meta` grid area in a `<MediaQuery/>` component from [react-responsive](https://github.com/contra/react-responsive). This area will render on `lg` breakpoint and up, because there is no succeeding template declaration that would contradict that, and because "up" is the default responsive behavior.

## Responsive props

Any prop name suffixed with a breakpoint name becomes responsive. This means that its value is applied at the given breakpoint.

{% page-ref page="../fundamentals/responsive-props.md" %}

We have already used a responsive prop in the example above. By suffixing `template` with the `Lg`, we stated that the given value must be applied on the `lg` breakpoint and up. Following this example, let's create a different gutter between the grid areas on different breakpoints:

```jsx
<Composition
  areas={areasMobile}
  areasLg={areasDesktop}
  gap={10}
  gapLg={20}>
  {(Areas) => (
    <>
      <Areas.Thumbnail>I am rendered always</Areas.Thumbnail>
      <Areas.Heading>I am rendered always</Areas.Heading>
      <Areas.Subheading>I am rendered always</Areas.Subheading>
      <Areas.Meta>I am rendered on "lg" breakpoint and up!</Areas.Meta>
    </>
  )}
</Composition>
```

There are two props we have added: `gutter` and `gutterLg`.

* `gutter` adds a `grid-gap` of `10px` on mobile screens, since `xs` is the default breakpoint,
* `gutterLg` adds a `grid-gap` of `20px` on large screens and up, since `up` is the default behavior.

{% hint style="info" %}
You can configure [custom breakpoints](../fundamentals/breakpoints.md#custom-breakpoints), default breakpoint and default behavior. Responsive props will abide by your settings.
{% endhint %}



