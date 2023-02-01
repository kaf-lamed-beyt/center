# centre

"CSS is hard". We all know how it can make a lot of developers go **Bonkers** 😩, especially Backend Developers!

This repo is a simple implementation of one, out of the many reasons why a lot of Devs lament over CSS, "Centering a div". It is a React component that you can wrap around any element in your project, and it'll center such element(s), vertically and horizontally on the page or current viewport.

## Usage

To use this package, install it from [npm](https://npmjs.com/package/centre), and import it anywhere in your project.

```jsx
import React from "react";
import Center from "centa";

export default function Component() {
  return (
    <Center>
      <h1>This element will be centered</h1>
    </Center>
  );
}
```

When you're importing the package, make sure you spell the package name as **"centa"** not "center" or "centre". Why? You might ask. Well.... this is because there are two packages on NPM that are spelt exactly that way. So to avoid any errors when I try to publish the package, I had to change the package name to use something completely different from the British and American spelling convention.

## Not a fan of React?

Yes, you can use the style of this component, even if you dont write, or like React, just copy the style below.

```css
.parent-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.element-you-want-to-center {
  width: 40px;
  height: 40px;
  /* rest of your styles */
}
```

Whenever you try to use the style declarations above, note that the `.parent-container` class should always have a fixed `width` and `height` properties. Your use case doesn't have to implement the `view-width` and `view-height` units, which takes the whole viewport. You can use other CSS measurement units.

## Contributing

Checkout the [Contributing guide](CONTRIBUTING.md)
