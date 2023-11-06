<blockquote>
  A <em>text box</em> (also referred to as an edit control) is a rectangular control where the user enters or edits text. It can be defined to support a single line or multiple lines of text.

  <footer>— Microsoft Windows User Experience p. 181</footer>
</blockquote>

Text boxes are `input` elements with the types of `text` by default. As with checkboxes and radio buttons, you should provide a corresponding label. You can also pass them almost all of the `input` attributes.

```jsx
<TextBox id="default" label="Occupation" style={{ maxWidth: 200 }} />
```

With the `labelPosition` property, you can change the position of the label to either `top` or `left`. `left` is the default.

```jsx
<>
  <TextBox
    id="add1"
    label="Address (Line 1)"
    labelPosition="top"
    style={{ maxWidth: 200 }}
  />
  <TextBox
    id="add2"
    label="Address (Line 2)"
    labelPosition="top"
    style={{ maxWidth: 200 }}
  />
</>
```

Text boxes can be disabled with the `disabled` property.

```jsx
<TextBox
  id="disabled"
  label="Occupation"
  disabled
  value="Garden keeper"
  style={{ maxWidth: 200 }}
/>
```

Their types can be `email`, `password`, `number` or `tel`.

```jsx
<>
  <TextBox
    id="email"
    label="Email"
    type="email"
    labelPosition="top"
    style={{ maxWidth: 200 }}
    defaultValue="example@contoso.com"
  />
  <TextBox
    id="password"
    label="Password"
    type="password"
    labelPosition="top"
    style={{ maxWidth: 200 }}
    defaultValue="password123"
  />
  <TextBox
    id="number"
    label="Number"
    type="number"
    labelPosition="top"
    style={{ maxWidth: 200 }}
    defaultValue={100}
  />
  <TextBox
    id="tel"
    label="Telephone"
    type="tel"
    labelPosition="top"
    style={{ maxWidth: 200 }}
    defaultValue="+1 555 8888"
  />
</>
```
