<blockquote>
  A <em>slider</em>, sometimes called a trackbar control, consists of a bar that defines the extent or range of the adjustment and an indicator that shows the current value for the control.

  <footer>— Microsoft Windows User Experience p. 146</footer>
</blockquote>

`Sliders` are used to select a value from a range of numeric values. They require an `id`, and a `min` and `max` value to make the range. You can use the `defaultValue` property to set the initial value of the slider.

```jsx
import { useState } from 'react';
function Default() {
  const [volume, setVolume] = useState(5);

  return (
    <>
      <Slider
        id="default"
        min={1}
        max={11}
        label="Volume"
        minLabel="Quiet"
        maxLabel="Loud"
        value={volume}
        onChange={(_, value) => setVolume(value)}
        style={{ maxWidth: 300 }}
      />
      <p>{volume}</p>
    </>
  );
}
<Default />;
```

You can use the property `boxIndicator` to replace the default indicator with a box. Also, you can set the `vertical` property to make the slider vertical.

```jsx
<Slider
  id="default"
  min={1}
  max={3}
  defaultValue={2}
  label="Cowbell"
  boxIndicator
  style={{ maxWidth: 300 }}
/>
```

```jsx
<Slider
  id="default"
  min={1}
  max={3}
  defaultValue={2}
  label="Vertical slider"
  boxIndicator
  vertical
  style={{ maxWidth: 300 }}
/>
```
