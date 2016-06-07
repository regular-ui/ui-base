## Component

#### 简单示例

<div class="m-example"></div>

```xml
<input class="u-input" r-model={message} />
<span>{message}</span>
```

```javascript
let component = new RGUI.Component({
    template: template,
    data: {message: 'Hello World'}
});
```
