# Directive

### z-crt, z-sel

<div class="m-example"></div>

```xml
<ul class="m-toolbar">
    {#list 1..3 as index}
    <li z-crt={current === index} on-click={current = index}><a>Item{index}</a></li>
    {/list}
</ul>
```

### z-dis, z-chk

<div class="m-example"></div>

```xml
<input type="checkbox" r-model={enabled}>
<a class="u-btn" z-dis={!enabled}>Button</a>
```

### r-show

和`r-hide`相反，主要为了避免`r-hide`在性能较差的情况下从显示到隐藏会闪一下的问题，但`r-show`目前只支持`display: block`。

### r-autofocus

主要为了解决Regular中使用autofocus在某些情况下不生效的问题。

<div class="m-example"></div>

```xml
<input class="u-input" r-autofocus>
```
