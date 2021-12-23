# flyVar

 F*** you, I only want to fly my Global variable!

## Install

```
npm install flyvar
```

## Use

I want to fly! I want to fly global variables freely! I also want to trigger some callbacks when the variables change!

### import

```js
import flyVar from 'flyvar';
```

### initialize a storage

```js
const store = new flyVar();
```

### use a global variable

```js
store.set('valueKey',yourGlobalVariable)
```

### connect a global variable with a callback

```js
store.connect('valueKey',()=>{
	//do something
})
```

When this variable update, this callback will be triggered.

### set a global effect

```js
store.effect(()=>{
	//do something
})
```

When a variable in this storage changed, this callback will be triggered.

# 中文文档

 老子就要飞全局变量，怎么滴？

## 安装

```
npm install flyvar
```

## 使用

老子就要飞！飞变量！全局的！痛快的飞！谁也***别想拦着我！

除此以外，我还想在飞全局变量的时候触发一些回调。

### 导入

```js
import flyVar from 'flyvar';
```

### 初始化一个存储库

```js
const store = new flyVar;
```

### 使用全局变量

```js
store.set('valueKey',yourGlobalVariable)
```

### 将全局变量与一个回调连接

```js
store.connect('valueKey',()=>{
	//do something
})
```

当这个全局变量的值改变，回调会被触发。

### 设置全局效果

```js
store.effect(()=>{
	//do something
})
```

当任何一个全局变量的值改变，回调会被触发。
