`TextAreas` are very similar to `TextBoxes`, but they are multi-line. They can be resized by dragging the bottom right corner. They can also be disabled with the `disabled` property.
`rows` and `cols` attributes to allow you to specify an exact size for the `TextArea` to take. Setting these is a good idea for consistency, as browser defaults can differ.

```jsx
<TextArea
  id="default"
  label="A big, ol' textarea"
  rows={6}
  style={{ maxWidth: 200 }}
/>
```

With the `labelPosition` property, you can change the position of the label to either `top` or `left`. `top` is the default.

```jsx
<TextArea
  id="add1"
  label="A left label"
  labelPosition="left"
  style={{ maxWidth: 200 }}
/>
```

Text areas can be disabled with the `disabled` property.

```jsx
<TextArea
  id="disabled"
  label="Occupation"
  disabled
  value="Garden keeper"
  style={{ maxWidth: 200 }}
/>
```
