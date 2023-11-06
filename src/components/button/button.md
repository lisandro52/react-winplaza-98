<blockquote>
  A <em>command button</em>, also referred to as a push button, is a control
  that causes the application to perform some action when the user clicks it.

  <footer>— Microsoft Windows User Experience p. 160</footer>
</blockquote>

A standard button measures 75px wide and 23px tall, with a raised outer and inner border. They are given 12px of horizontal padding by default.
The component can receive any property that a native `<button>` element can receive.

```jsx padded
<Button>Push me</Button>
```

When buttons are clicked, the raised borders become sunken. The following button is simulated to be in the pressed (active) state.

```jsx padded
<Button active>Push me</Button>
```

Disabled buttons maintain the same raised border, but have a "washed out" appearance in their label.

```jsx padded
<Button disabled>Push me</Button>
```

Button focus is communicated with a dotted border, set 4px within the contents of the button. The following example is simulated to be focused.

```jsx padded
<Button focused>Push me</Button>
```
