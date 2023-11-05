
<blockquote>
  An <em>option button</em>, also referred to as a radio button, represents a single choice within a limited set of mutually exclusive choices. That is, the user can choose only one set of options. 

  <footer>— Microsoft Windows User Experience p. 164</footer>
</blockquote>

`OptionButton`s **must** be used with an `OptionGroup` component. The `OptionGroup` component is responsible for managing the state of the `OptionButton`s.
You have to provide an `OptionGroup` with an `id` prop. Each `OptionButton` in the group must have a `value` prop that is unique within the group,
and must also have a `label`. The `OptionButton` also can receive any other props that an `input` can receive.

```jsx
<OptionGroup name="default">
  <OptionButton label="Yes" value="Yes" />
  <OptionButton label="No" value="No" />
</OptionGroup>
```

`OptionButton`s can also be `disabled`. If you want to mark an `OptionButton` as default, use the `defaultValue` prop from the `OptionGroup`.

```jsx
<OptionGroup name="disabled" defaultValue="2">
  <OptionButton label="Option 1" value="1" />
  <OptionButton label="Option 2" value="2" disabled />
  <OptionButton label="Option 3" value="3" disabled />
</OptionGroup>
```
