---
title: first-post
services: Branding, Training & Tax Regulations
address: Ojota Lagos Nigeria
date: 2023-27-01
---

Here's an example of my new custom code blocks:

```jsx
// here's a button in React!
<button
  onClick={() => {
    alert("Hello MDX!");
  }}
>
  test
</button>
```

Wow! Such code snippets!
Let's see another, with line highlighting:

```js
// fizzbuzz in JS
for (let i = 1; i <= 100; i++) {
  let out = "";
  if (i % 3 === 0) out += "Fizz";
  if (i % 5 === 0) out += "Buzz";
  console.log(out || i);
}
```

### Quering data


```js
 const data = useStaticQuery(graphql`
    query MyInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

```

