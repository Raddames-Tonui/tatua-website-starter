# Understanding rem vs em in CSS

## What Are rem and em?

| Unit  | Stands For     | Relative To                     |
| ----- | -------------- | ------------------------------- |
| `em`  | "element"      | The **font-size of the parent** |
| `rem` | "root element" | The **font-size of `<html>`**   |

By default, the `html` element has:

```css
html {
  font-size: 16px;
}
```

So:

* `1rem = 16px`
* `2rem = 32px`
* `0.5rem = 8px`

---

## rem – Root-relative Unit

Example:

```css
html {
  font-size: 16px;
}

p {
  font-size: 1.5rem; /* 24px */
}
```

### Advantages:

* ✔️ Consistent sizing
* ✔️ Ideal for global layouts and spacing
* ✔️ Scales with root font size (great for accessibility)

Use Cases:

* Base font sizes
* Spacing (margin, padding)
* Layout widths/heights

---

## em – Context-relative Unit

Example:

```css
div {
  font-size: 20px;
}

p {
  font-size: 1.2em; /* 24px (1.2 × 20px) */
}
```

### Drawbacks:

* ❌ Compounds with nesting:

```css
div {
  font-size: 1.5em; /* 24px if parent is 16px */
}
div p {
  font-size: 1.5em; /* 36px (1.5 × 24px) */
}
```

### Use Cases:

* Scaling elements inside components
* Button text and padding
* Form field labels relative to input font-size

---

## When to Use What?

| Use Case                | Recommended Unit |
| ----------------------- | ---------------- |
| Global font size        | `rem`            |
| Layout spacing          | `rem`            |
| Component-local scaling | `em`             |
| Button font + padding   | `em`             |

---

## Pro Tip: Simplify rem Math

Set:

```css
html {
  font-size: 62.5%; /* 10px base (0.625 * 16px) */
}
```

Then:

* `1rem = 10px`
* `2.4rem = 24px`
* Easy mental math for spacing

---

## Summary

* **Use `rem`** for consistent, root-relative sizing.
* **Use `em`** when you want elements to scale with their parent.

Rem keeps things predictable.
Em gives you local flexibility.
