# Dynamic areas

A single template area may be rendered multiple types, for example when rendering a list of items.

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const List = ({ items }) => (
  <Composition template="column" gutter={10}>
    {({ Column }) => items.map((item) => (
      <Column key={item.id} col="auto">{item}</Column> 
    ))}
  </Composition>
)

export default List
```

{% hint style="success" %}
By setting `row` and `col` props to "auto" you enable the auto-placing algorithm.
{% endhint %}



