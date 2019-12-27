# Comparison with styled-system

This page is going to make a comparison between [Atomic Layout](https://github.com/kettanaito/atomic-layout) and [Styled System](https://github.com/styled-system/styled-system). I am going to compare a generic direction of each library and those API which they share.  The purpose of this comparison is not to prove one solution better or worse than the other, but to objectively highlight the difference and help you choose a tool that would suit you best.

## Concept

#### styled-system

Styled System is a Swiss army knife of component-based styling in modern applications. It comes with a set of tools responsible for multiple areas: global theming, responsive behavior, and additional visual styling.

#### Atomic Layout

Atomic Layout is responsible for spatial distribution only. It strongly follows the principle of handling one thing and doing it well. Such strict approach encourages you to separate spacing from any other visual styling logic when declaring your components. This makes spacing itself a separate entity and not a supplementary characteristic bound to a component.

{% page-ref page="../motivation.md" %}

## Responsive props

I will be comparing the Responsive props API with the analogous API in styled-system that uses a list of values. Note that it's also possible to use Objects for responsive props in styled-system, but it introduces unnecessary depth of prop value assignment.

### Declaration

#### styled-system

Styled system uses an Array of values listed from left to right, which represents breakpoint-value binding progression. This creates a property-based way of value assignment, resulting into more concise declaration:

```jsx
<Box padding={[10, 20, 30]} />
```

However, such declaration is more complex since the relation between a breakpoint and its value is implicit. In other words, we can't say which breakpoint the value `20` describes without knowing a complete set of breakpoints in our system.

There are also a few questions that come to my mind when looking at such declaration:

* What is the connection of a breakpoint and a value?
* How to skip or stretch a value at a specific breakpoint?

I'm sure all of those can be answered in the documentation, yet I'd like to focus on creating thing rather than scouting documentation.

#### Atomic Layout

Atomic Layout uses a more intuitive syntax of [Responsive props](../fundamentals/responsive-props.md) so you could understand what a prop does without having to dive into documentation, or knowing anything about other breakpoints:

```jsx
<Box padding={10} paddingMd={20} paddingLg={30} />
```

In this case a responsive prop is represented as an individual breakpoint-value pair, with each responsive prop suffixed with a respective breakpoint name.

The trade off of such syntax is its length. Having built multiple projects with Atomic Layout never had I found such syntax so long to the point of annoyance. If you do, you can create a set of code snippets in your IDE to overcome this issue.

### Adding/deprecating breakpoints

When it comes to responsive layouts one must acknowledge that we are building a compound system that's subjected to change in the future. As with any software development, its maintenance should be of consideration as well.

#### styled-system

Let's say we had two breakpoints in our application. To specify responsive props values for those breakpoints we would use the following syntax in our components:// Let's say we had two breakpoints

```jsx
<Box padding={[10, 20]} />
```

Now we need to add another breakpoint that would be positioned in between the previously present two. With the responsive values forming an ordered list, such change would imply refactoring of all responsive props that we have in our application:

```jsx
<Box padding={[10, 15, 20]} />
```

The complexity of such a trivial change equals to the amount of components relying on such responsive props declaration pattern. 

#### Atomic Layout

Let's take the very same refactoring example from before: we have a set of two breakpoints and would like to add the third one in between.

```jsx
<Box padding={10} paddingLg={20} />
```

In order to introduce a new breakpoint in our layout system we would have to declare it and apply its value by adding a new prop that represents that breakpoint:

```jsx
<Box padding={10} paddingMd={15} paddingLg={20} />
```

Since Atomic Layout uses individual breakpoint-value pairs to connect a value to a breakpoint we can approach any kind of change of responsive behavior in isolation. In the example above we don't need to touch `padding` and `paddingLg` at all in order to introduce a new `paddingMd` breakpoint-value pair. The same applies to the scenarios when we need to deprecate a single or multiple breakpoints.

## Found an issue?

Please help use make this comparison up-to-date and non-biased. Report any found issues or suggest improvement in Atomic Layout repository: [https://github.com/kettanaito/atomic-layout](https://github.com/kettanaito/atomic-layout)

