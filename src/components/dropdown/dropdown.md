<blockquote>
  A <em>drop-down list box</em> allows the selection of only a single item from a list. In its closed state, the control displays the current value for the control. The user opens the list to change the value.

  <footer>— Microsoft Windows User Experience p. 175</footer>
</blockquote>

Dropdowns can be rendered using the `Dropdown` and `option` components.
The component can receive any property that a native `select` element can receive.

```jsx
<Dropdown name="default">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
</Dropdown>
```

By default, the first option will be selected. You can change this by using the `defaultValue` prop on the `Dropdown` component.

```jsx
<Dropdown name="selected" defaultValue="3">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
</Dropdown>
```
