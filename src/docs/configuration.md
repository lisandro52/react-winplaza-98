To start using the library, simply import the style library (ideally in your root component) and the components you need.

In this example, I'm using `98.css`.

```jsx static
import React from 'react';
import '98.css';
import { Button, TextBox } from 'react-winplaza-98';

const App = () => (
  <>
    <Button>Click me</Button>
    <TextBox id="name" label="Name" />
  </>
);
```

`react-winplaza-98` is written completely in TypeScript, so you will get full type checking and IntelliSense support.

## Using with third-party libraries

Being the components styled wrappers around native HTML elements, they can be used with any third-party library, like `react-hook-form`.

```jsx static
import React from 'react';
import '98.css';
import { useForm } from 'react-hook-form';
import { Button, TextBox } from 'react-winplaza-98';

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <TextBox label="Name" labelPosition="top" {...register('name')} />
      <TextBox label="Lastname" labelPosition="top" {...register('lastName')} />
      <TextBox
        label="Email"
        type="email"
        labelPosition="top"
        {...register('email')}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## Contributing

Found a bug? Want to add a new component? Contributions are welcome! [github](https://github.com/lisandro52/react-winplaza-98)
