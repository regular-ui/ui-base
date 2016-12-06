## 示例
### createBoolClassDirective

<div class="m-example"></div>

```xml
<input type="checkbox" r-model={enabled} z-test={enabled} />
```

```css
input[type=checkbox].z-test { outline: 2px solid red; outline-offset: 2px; }
```

```javascript
RGUI.Component.directive('z-test', RGUI._.createBoolClassDirective('z-test'));
let component = new RGUI.Component({ template });
```

### dateFormat

<div class="m-example"></div>

```xml
<p>{date1}</p>
<p>{date2}</p>
```

```javascript
let component = new RGUI.Component({
    template,
    data: {
        date1: RGUI._.dateFormat(new Date()),
        date2: RGUI._.dateFormat(new Date(), 'yyyy-MM-dd'),
    },
});
```

### format

<div class="m-example"></div>

```xml
<p>{date1}</p>
<p>{date2}</p>
```

```javascript
let component = new RGUI.Component({
    template,
    data: {
        date1: RGUI._.format(new Date(), 'date'),
        date2: RGUI._.format(new Date(), 'date', 'yyyy-MM-dd'),
    },
});
```
