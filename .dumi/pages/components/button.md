---
title: Button
nav:
  title: Components
  path: /components
group:
  title: general
  order: 1
cols: 2
---

:::info
It can only be used normally when wrapped in `DumiSiteProvider`.
:::

# When To Use

A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business
logic.

In Ant Design we provide 5 types of button.

- 🔵 Primary button: used for the main action, there can be at most one primary button in a section.
- ⚪️ Default button: used for a series of actions without priority.
- 😶 Dashed button: commonly used for adding more actions.
- 🔤 Text button: used for the most secondary action.
- 🔗 Link button: used for external links.

And 4 other properties additionally.

- 🔴 danger: used for actions of risk, like deletion or authorization.
- 👻 ghost: used in situations with complex background, home pages usually.
- 🚫 disabled: used when actions are not available.
- 🔃 loading: adds a loading spinner in button, avoids multiple submits too.

<embed src="../../../components/button/demo/basic.md"></embed>

<embed src="../../../components/button/demo/variant.md"></embed>

<embed src="../../../components/button/demo/size.md"></embed>
