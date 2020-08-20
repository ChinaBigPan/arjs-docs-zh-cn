---
title: 基于位置的 AR
---

# 基于位置的AR（Location Based）

[英文原地址](https://ar-js-org.github.io/AR.js-Docs/location-based/)

基于位置的 AR 功能仅限于 A-Frame 版框架。

[这篇文章](https://medium.com/chialab-open-source/build-your-location-based-augmented-reality-web-app-c2442e716564)让您对 AR.js 的基于位置的功能有初步的了解。它可以用于室内(但精度不高)和室外的 AR 内容定位。

您可以从 HTML 或 JavaScript 静态加载位置，也可以从本地/远程 JSON，或是通过调用 API 来加载数据。上面的文章中均有体现。

下面是 API 引用：

### `gps-camera` <Badge text="required">

**每个场景允许的最大值: 1**

该组件让位置 AR 成为可能。您必须将其设置为`carema`组件的属性。它可以处理相机的位置和旋转，还可以确定用户将他们的设备指向何处。

```html
<a-camera gps-camera rotation-reader></a-camera>
```

除此之外，正如您在上面的示例中看到的，我们还必须添加`rotation-reader`属性来处理旋转事件。参见[这里](https://aframe.io/docs/0.9.0/components/camera.html#reading-position-or-rotation-of-the-camera)获取更多信息。

#### 属性

| 属性 | 描述 | 默认值 | 
|:---:|:----:|:----:|
| alert | 当 GPS 信号在小于`positionMinAccuracy`时是是否显示信息 | false |
| positionMinAccuracy | 位置信号所允许的最小精度 | 100 |
| minDistance | 如果设置了，则不会显示与用户之间的距离低于该值的位置。必须为正值。单位是米。| 0 表示禁用 | 
| maxDistance | 如果设置了该值，则不会显示与用户之间的距离高于该值的位置。必须为正值。单位是米。  | 0 表示禁用 |
| simulateLatitude | 设置相机要模拟的纬度值，以方便测试   | 0 表示禁用 |
| simulateLongitude | 设置相机要模拟的经度值，以方便测试  | 0 表示禁用 |
| simulateAltitude |  设置相机要模拟的海拔高度(以米为单位)，以方便测试  | 0 表示禁用 |

### `gps-entity-place` <Badge text="required">

**每个场景允许的最大值: 无限制**

该组件的让每个实体都可以追踪 GPS。这为实体分配了一个特定的世界位置，这样当用户的设备在现实世界中指向它的位置时，用户就可以看到它。如果用户离实体很远，它会看起来更小。如果它离得太远，就根本看不见了。

它需要纬度和经度作为单个字符串参数(示例：aframe的`a-box`)

```html
<a-box material="color: yellow" gps-entity-place="latitude: <your-latitude>; longitude: <your-longitude>"/>
```

⚡️ 另外，您可以使用 a-frame 的“position”参数指定一个 y 值来更改内容的高度。这个值应该高于或低于(如果为负值)当前相机高度，单位为米。举例来说，若设置为30米，则会在相对于 GPS 相机的当前高度显示：

```html
<a-box material="color: yellow" gps-entity-place="latitude: <your-latitude>; longitude: <your-longitude>" position="0 30 0"/>
```

## 属性

除一同定义的纬度和经度字符串外，并没有其他真正意义上的属性，如上所示。

## 自定义属性

下面是一些可以从`gps-entity-place`元素中检索的自定义属性：

```js
const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
console.log(distanceMsg);   // "890 meters"
```

| 自定义属性 | 描述 | 默认值 |
|:---:|---|:---:|
| distance | 和用户之间的距离，随用户位置更新，单位是米 | 0 |
| distanceMsg | 和用户之间的距离的带单位的字符串，随每个用户的位置更新。值 `<distance> meters/kilometers` | '' |

## 事件   

参见[UI和事件部分](/arjs-docs-zh-cn/routes/ui_and_event)了解更多关于基于位置的自定义事件。

⚡️ 通常来说，在基于位置的情况下，让增强后的内容始终面向用户是一个很棒的主意。当你旋转摄像头时，3D模型、文本都是清晰可见的。

看看[这个示例](https://github.com/AR-js-org/AR.js/tree/master/aframe/examples/location-based/always-face-user)以创建总是面向用户(摄像头)`gps-entity-place`组件。

## 投影相机版本

AR.js 中基于位置组件的实验性“投影相机”版本使用了[球面墨卡托 Spherical Mercator](https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection)(又叫：EPSG:3857)，用于存储相机、用户添加的感兴趣的点的位置和其他地理数据。

这个版本的基本原理是允许您轻松地添加更复杂的地理数据，比如道路和路径。这样数据就可以被投影并添加到 AR.js 场景中，然后由于球面墨卡托 单位和米类似(从离极点的位置算)，坐标可以直接使用 WebGL/A-Frame 的世界坐标。

投影相机版本的两个组件是`gps-projected-camera`和`gps-projected-entity-place`。它们的接口与`gps-camera`和`gps-entity-place`几乎相同，但内部工作方式不同。

```html
<a-camera gps-projected-camera rotation-reader></a-camera>
```

和

```html
<a-box color="yellow" gps-projected-entity-place="latitude: <your-latitude>; longitude: <your-longitude>"/>
```

**请注意，内部已经将经度和纬度转换为球面墨卡托坐标。**

对于`gps-entity-place`，您可以使用`position`属性设置 y 组件的高度。

```html
<a-box color="yellow" gps-projected-entity-place="latitude: <your-latitude>; longitude: <your-longitude>" position="0 30 0"/>
```

## 计算任意增强内容的世界坐标

`gps-projected-camera`拥有一些有用的属性和方法，可以很简单地处理任意的增强内容(例如，来自于 [OpenStreetMap](https://openstreetmap.org/)等地理数据 API 的线条或多边形)。在介绍这些之前，有一点需要说明，在`gps-projected-camera`中，**GPS 的原始位置**是世界的原点。因此，当我们要添加内容且该内容的源坐标是非投影(WG384)经纬度，那么您需要：
- 投影到球面墨卡托。
- 然后转换成相对于原始GPS位置的世界坐标。

另一方面，如果源坐标已经被投影，那么只需要第二个步骤。现在来看看各个情况。

### 资源数据为 WG384 经纬度

`gps-projected-camera`投影相机组件的`latLonToWorld(lat, lon)`方法直接将经度和纬度转换为世界坐标，第一步执行投影，然后根据投影坐标计算世界坐标。它将返回一个包含 x 值和 z值两个元素的世界坐标数组，允许开发者独立计算或指定 y 值坐标(高度)。

### 资源数据为球面墨卡托坐标

另一种情况是，增强的内容已经投影到球面墨卡托坐标，因此在添加到 AR.js 场景时就无需初步投影。例如，当 API 提供的是球面墨卡托的数据就可能发生这种情况。在这种情况下，我们仍然需要将球面墨卡托坐标转换为相对于原始GPS位置的世界坐标。`gps-projected-camera`拥有`originCoordsProjected`属性，它以球面墨卡托坐标表示原始GPS位置。这是一个长度为 2 的数组，分别包含从球形墨卡托原点开始计算的东方向和北方向。由此，我们可以从球面墨卡托坐标求出世界坐标:

- `xWorld = featureEasting - originCoordsProjected[0]`

以及

- `zWorld = -(featureNorthing - originCoordsProjected[1])`

其中`xWorld`和`zWorld`为增强内容的`x`和`z`坐标，`featureEasting`和`featureNorthing`为球面墨卡托坐标。注意我们取了 z 值的相反数，因为在 OpenGL 坐标中，向东面移动增加 x，增加高度会增加 y，但向北移动则会**减少** z 值。

