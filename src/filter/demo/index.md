## 示例
### dateFormat

<div class="m-example"></div>

```xml
<p>{now | dateFormat}</p>
<p>{now | dateFormat: 'yyyy-MM-dd'}</p>
```

```javascript
let component = new RGUI.Component({
    template,
    data: { now: new Date() },
});
```

### format

<div class="m-example"></div>

```xml
<p>{now | format: 'date'}</p>
<p>{now | format: 'date', 'yyyy-MM-dd'}</p>
```

```javascript
let component = new RGUI.Component({
    template,
    data: { now: new Date() },
});
```
