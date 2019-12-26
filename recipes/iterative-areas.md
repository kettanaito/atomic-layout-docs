# Iterative areas

A single template area may be rendered multiple types, for example during the iteration of a list items rendering.

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

export const List = ({ items }) => (
  <Composition areas="column" gap={10}>
    {(Areas) => items.map((item) => (
      <Areas.Column key={item.id} col="auto">{item}</Areas.Column> 
    ))}
  </Composition>
)
```

{% hint style="success" %}
By setting `row` and `col` props to "auto" you enable the auto-placing algorithm of CSS Grid.
{% endhint %}



