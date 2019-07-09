# Composition

## Specification

Component that represents a layout composition.

## Props

Composition inherits from [Box](box.md) component, thus is accepts the same props and CSS Grid props on top.

| Prop name | Type | Description |
| :--- | :--- | :--- |
| `inline` | `boolean` | Renders composition with `display: inline-grid`. |

{% hint style="info" %}
Composition supports all [Prop aliases](../../fundamentals/prop-aliases.md).
{% endhint %}

## Usage

### Define templates

Composition begins by defining a template string that consists of layout \(grid\) areas.

```jsx
const areasMobile = `
  logo
  menu
`
```

{% hint style="info" %}
Template string is just an alias for [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).
{% endhint %}

Since Atomic layout comes with responsive built-in, you can define multiple layout templates for a single composition based on the [breakpoints](../../fundamentals/breakpoints.md) of your layout.

```jsx
const areasTablet = `
  logo menu
  search search
`
```

### Render Composition

Once layout templates are defined, pass them as the respective `areas` props of the Composition. Each area in the template is turned into a React component and being exposed as an argument property of the children function:

```jsx
<Composition
  areas={areasMobile}
  areasMd={areasTablet}>
  {({ Logo, Search, Menu }) => (
    <>
      <Logo>...</Logo>
      <Search>...</Search>
      <Menu>...</Menu>
    </>
  )}
</Composition>
```

{% hint style="success" %}
Generated area components are exposed as unique capitalized keys of the children function.
{% endhint %}

## Configuration

Composition is meant to be configurable. There is a set of [Prop aliases](../../fundamentals/prop-aliases.md) you can apply to make composition suit your needs. For example, we can specify a `templateCols` prop to control the behavior of our columns on different breakpoints:

```jsx
<Composition
  areas={areasMobile}
  areasMd={areasTablet}
  templateCols="1fr auto"
  templateColsMd="1fr 1fr" />
```

## Examples

### Template-less composition

Composition can be used without any templates. In that case it serves as a `display: grid` wrapper for  its children elements. All [Prop aliases](../../fundamentals/prop-aliases.md) still apply.

```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const Header = () => (
  <Composition templateCols="repeat(3, 1fr)">
    <Logo />
    <Menu />
    <Actions />
  </Composition>
)

export default Header
```

Note that using the Box component is recommended when you don't wish to control elements composition, but want to distribute spacial relation of the parent element.

{% page-ref page="box.md" %}

### Simple composition

{% code-tabs %}
{% code-tabs-item title="src/components/ArtistCard/index.jsx" %}
```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
  thumbnail
  heading
  content
`

const areasDesktop = `
  thumbnail heading
  thumbnail content
`

const ArtistCard = ({ title, imageUrl, description }) => (
  <Composition
    areas={areasMobile}
    areasMd={areasDesktop}
    gap={10}
    gapMd={20}
    padding={10}>
    {({ Thumbnail, Heading, Content }) => (
      <>
        <Thumbnail>
          <img src={imageUrl} alt={title} />
        </Thumbail>
        <Heading>
          <h3>{title}</h3>
        </Heading>
        <Content>
          <p>{description}</p>
        </Content>
      </>
    )}
  </Composition>
)

export default ArtistCard
```
{% endcode-tabs-item %}
{% endcode-tabs %}

### Nested composition

{% code-tabs %}
{% code-tabs-item title="components/ArtistCard/index.jsx" %}
```jsx
import React from 'react'
import { Composition } from 'atomic-layout'
import ArtistContent from './ArtistContent'

const areasMobile = `
  thumbnail
  content
`

const ArtistCard = ({
  title,
  description,
  publishDate,
  imageUrl,
  onShareClick
}) => (
  <Composition areas={areasMobile}>
    {({ Thumbnail, Content }) => (
      <>
        <Thumbnail>
          <img src={imageUrl} alt={title} />
        </Thumbnail>
        <Content>
          <ArtistContent
            description={description}
            publishDate={publishDate}
            onShareClick={onShareClick} />
        </Content>
      </>
    )}
  </Composition>
)

export default ArtistCard
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="components/ArtistCard/ArtistContent.jsx" %}
```jsx
import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
  meta
  actions
  text
`

const areasTablet = `
  meta actions
  text text
`

const ArtistContent = ({ description, publishDate, onShareClick }) => (
  <Composition
    areas={areasMobile}
    areasMd={areasTablet}
    gap={10}
    gapMd={20}>
    {({ Meta, Actions, Text }) => (
      <>
        <Meta>
          {publishDate}
        </Meta>
        <Actions>
          <button onClick={onShareClick}>Share</button>
        </Actions>
        <Text>
          {description}
        </Text>
      </>
    )}
  </Composition>
)

export default ArtistContent
```
{% endcode-tabs-item %}
{% endcode-tabs %}



