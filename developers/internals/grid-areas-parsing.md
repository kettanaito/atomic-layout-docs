# Grid areas parsing

This section describes the internal functionality of parsing layout areas, and creating React components based on them.

{% hint style="danger" %}
This information is meant for library maintainers. This is not something that can benefit you directly as a user of the library.
{% endhint %}

## Get unique area names

### Definition

`getAreasList(props: Props) => AreasList`

```typescript
type Template = {
  breakpoint: Breakpoint,
  behavior: BreakpointBehavior,
  areas: string[]
}

type AreaList = {
  areas: string[],
  templates: Template[]
}
```

First step is getting the array of unique grid area names, their breakpoint and its behavior.

### Example

```jsx
import { Composition } from 'atomic-layout'

const template = `
  first second
`

const templateTablet = `
  first second
  first third
`

<Composition
  template={template}
  tempalteMd={templateTablet} />
```

```javascript
getAreasList(Composition.props) // consider <Composition/> above
```

Returns:

```javascript
{
  areas: ['first', 'second', 'third'],
  templates: [
    {
      areas: ['first', 'second'],
      behavior: 'up',
      breakpoint: {
        maxWidth: 567,
      }
    },
    {
      areas: ['first', 'second', 'third'],
      behavior: 'up',
      breakpoint: {
        minWidth: 769,
        maxWidth: 992,
      },
    },
  ],
}
```

## Generate React components for areas

### Definition

`getComponents(areasList: AreasList) => AreaComponentsMap`

Generates React components for the necessary grid areas. Wraps conditional \(responsive\) areas in `<MediaQuery/>` component from `react-responsive`.

```typescript
type AreaComponentsMap = {
  [componentName: string]: Class<React.Component<any, void, void>
}
```

### Example

```jsx
getComponents(areasList) // consider "areasList" from the previous step
```

Returns:

```jsx
{
  /* First and second areas should render on all breakpoints */
  First: AreaComponent,
  Second: AreaComponent,
    
  /* Third area should render on "md" breakpoint and up */
  Third: ({ children, ...restProps }) => (
    <MediaQuery
      component={AreaComponent}
      minWidth={769}
      {...restProps}>
      {children}
    </MediaQuery>
  )
}
```



