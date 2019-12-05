# Responsive props

## What is a "responsive prop"?

Responsive prop is a regular prop which name is suffixed with a breakpoint name. When done so, its value will be applied at the specified breakpoint and up \(default mobile-first behavior\). The behavior of the responsive value application may also be adjusted by adding a behavior suffix to a responsive prop name.

## Declaration

To declare a responsive prop follow this schema:

![propName + ?breakpointName + ?behavior](../.gitbook/assets/responsive-prop.png)

### **Prop name**

Any [Prop alias](prop-aliases.md) can be used as a responsive prop. Not all props are allowed as responsive props to preserve the ideological approach of layout composition. For example, you won't be able to use `backgroundColor` or `textAlign` because neither of those describe components' relation.

### Breakpoint name

An optional name of the configured [breakpoint](breakpoints.md).

### **Behavior**

* `up` \(_Default_\) — Applies the given value from the specified breakpoint and up,
* `down` — Applies the given value from the specified breakpoint and down,
* `only` — Applies the given value only for the specified breakpoint.

{% hint style="success" %}
Atomic Layout is mobile-first. That means that by default all responsive props are applied starting **from the given breakpoint and** **up**, unless different behavior is specified, or rewriting prop is met.
{% endhint %}

## Defaults

* Default breakpoint behavior is `up`,
* Default measurement unit for numeric prop values is `px`,
* When not suffixed, any prop value is applied for `xs` breakpoint and `up`.

## Examples

```jsx
import React from 'react'
import { Box } from 'atomic-layout'

const Header = ({ children }) => (
  <Box
    paddingVertical={10}
    paddingVerticalMd={20}
  >
    {children}
  </Box>
)
```

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const Post = ({ title, content }) => (
  <Composition
    areas={`
      header
      content
    `}
    gap={10}
    gapLg={20}
  >
    {(Areas) => (
      <>
        <Areas.Header paddingSmOnly={10}>
          <h3>{title}</h3>
        </Areas.Header>
        <Areas.Content>
          <p>{content}</p>
        </Areas.Content>
      </>
    )}
  </Composition>
)
```



