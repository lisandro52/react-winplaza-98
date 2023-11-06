<blockquote>
  A <em>check box</em> represents an independent or non-exclusive choice. 
  that causes the application to perform some action when the user clicks it.

  <footer>— Microsoft Windows User Experience p. 167</footer>
</blockquote>

Checkboxes are represented with a sunken panel, populated with a "check" icon when selected, next to a label indicating the choice.

Note: You **must** include a corresponding label for your checkbox, using the `label` attribute and give a `name` to your input. This ensures the checkbox is easy to use with assistive technologies, on top of ensuring a good user experience for all (navigating with the tab key, being able to click the entire label to select the box).

```jsx
<Checkbox name="default" label="This is a checkbox" />
```

Checkboxes can be selected and disabled with the standard `checked` and `disabled` attributes.
Remember that if you provide a `checked` attribute, you must also provide an `onChange` handler. Otherwise, the checkbox will be read-only.
If you just want to provide the initial value, use the `defaultChecked` attribute instead.

```jsx padded
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <Checkbox name="checked" defaultChecked label="I'm active" />
  <Checkbox name="readonly" checked label="I'm read-only" />
  <Checkbox name="disabled" label="I'm inactive" disabled />
  <Checkbox
    name="checkedisable"
    label="I'm checked and inactive"
    checked
    disabled
  />
</div>
```

// ToDo: Add the part about the `field-row` component/class.
