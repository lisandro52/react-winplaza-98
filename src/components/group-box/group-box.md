<blockquote>
  A <em>group box</em> is a special control you can use to organize a set of controls. A group box is a rectangular frame with an optional label that surrounds a set of controls.

  <footer>— Microsoft Windows User Experience p. 189</footer>
</blockquote>

A `GroupBox` contains a sunken outer border and a raised inner border, resembling an engraved box around the controls. It can also contain a label.

```jsx
<GroupBox label="Select on option:">
  <OptionGroup name="groupbox-1" defaultValue="2">
    <OptionButton label="Option 1" value="1" />
    <OptionButton label="Option 2" value="2" />
  </OptionGroup>
</GroupBox>
```
