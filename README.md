# [WIP] Minimal jump animated text
> _(not yet published)_

```jsx
function App () {
  return (
    <div className="app">
      <h1 className="title">
        <AnimatedText>Hello, World!</AnimatedText>
      </h1>
    </div>
  );
}
```

---

![Demo gif](./demo.gif)

---


## Options

```js
{
  delay: React.PropTypes.number,
  interval: React.PropTypes.number,
  repeat: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  animation: React.PropTypes.shape({
    time: React.PropTypes.string,
    height: React.PropTypes.number
  })
}
```
