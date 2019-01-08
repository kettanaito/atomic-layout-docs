# Box

## Specification

Box is a primitive component designed to distribute alignment and spacing.

{% hint style="warning" %}
Box has no control over elements composition. Use [Composition](composition.md) instead.
{% endhint %}

## Props

Box supports all [Prop aliases](../fundamentals/prop-aliases.md), **except** those specific to CSS Grid.

| Prop name | Type | Description |
| :--- | :--- | :--- |
| `flex` | `boolean` | Display a box as `flex`. |

## Example

```jsx
import React from 'react'
import { Box } from 'atomic-layout'

const Header = ({ children }) => (
  <Box paddingVertical="10" paddingVerticalMd="20">
    {children}
  </Box>
)

export default Header
```



