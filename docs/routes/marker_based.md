---
title: 标记跟踪
---

# 标记跟踪（Marker Based）

[英文原地址](https://ar-js-org.github.io/AR.js-Docs/marker-based/)

标记有三种不同的类型：

- 标识
- 条形码
- 图案

要了解更多关于标记的信息，请阅读这两篇文章：

[文章1]:https://medium.com/chialab-open-source/ar-js-the-simpliest-way-to-get-cross-browser-ar-on-the-web-8f670dd45462
[文章2]:https://medium.com/chialab-open-source/how-to-deliver-ar-on-the-web-only-with-a-qr-code-e24b7b61f8cb

- [《ARjs基本的标记跟踪教程与标记说明(英)》][文章1]
- [《只用二维码提供 AR.js 体验(英)》][文章2]

**太长，不看！**

- 默认标识实际上用处不大。
- 条码标记是由矩阵自动生成的标记。通过上面的文章可以了解如何使用它们。如果您需要完整的条码标记列表，[点这个](https://github.com/nicolocarpignoli/artoolkit-barcode-markers-collection)
- 图案标记是自定义标记，从用户的传入图像创建(非常简单，对比度高)。

⚡️ 您可以使用[这个工具](https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)来创建自定义标记。它会生成图片扫描和一个`.patt`文件加载到 AR.js web 应用中，以便在程序运行时识别。

### 怎么选择图案标记的好图呢？

标记拥有黑色边框和高对比度形状。最近，我们还添加了黑色背景的白色边框标记，尽管经典的黑色边框很好用。

[文章3]:https://medium.com/chialab-open-source/10-tips-to-enhance-your-ar-js-app-8b44c6faffca

这里有一篇文章解释了如何选择好的图像来生成自定义标记：[《增强你的AR.js应用的10个技巧》][文章3]

### 标记追踪的参考API

## A-Frame 

`<a-marker/>`

| 属性 | 描述 | 默认值 | 组件映射 |
|:---:|:----:|:----:|----|
| type | 标记的类型 -  ['pattern', 'barcode', 'unknown' ] | | artoolkitmarker.type |
| size | 按米计的标记尺寸 || artoolkitmarker.size |
| url | 图案的URL - IIF类型="pattern" || artoolkitmarker.patternUrl |
| value | 条码的值 - IIF类型="barcode" || artoolkitmarker.barcodeValue |
| preset | 预设的参数 - ['hiro', 'kanji'] || artoolkitmarker.preset |
| emitevents | 派发`markerFound`和`markerLost`事件 - [`true`, `false`] || - |
| smooth | 开启/关闭 摄像头平滑 - [`true`, `false`] | `false` |- |
| smoothCount | 需要平滑跟踪的矩阵个数，more 意思是平滑但跟随的速度较慢 | 5 |- |
| smoothTolerance | 平滑跟踪的距离容差，如果矩阵的该值#在容差范围内，跟踪将保持不变。 | 0.01 |- |
| smoothThreshold | 平滑的阈值，如果矩阵平滑移动在阈值范围内则会保持静止。 | 2 |- |

## three.js

### threex-artoolkit

`threex.artoolkit`是 three.js 的扩展[artoolkit](https://github.com/artoolkitx/jsartoolkit5)

## 架构

`threex.artoolkit` 有三个类：
- `THREEx.ArToolkitSource`通过对图像的分析来进行位置跟踪。可以是网络摄像头、视频甚至是图像。
- `THREEx.ArToolkitContext`主引擎。它会找到图像资源中的标记位置。
- `THREEx.ArMarkerControls`控制标记的位置。使用了经典的[three.js controls API](https://github.com/mrdoob/three.js/tree/master/examples/js/controls)。它将确保您的内容正好在标记的顶部。

### THREEx.ArMarkerControls

```js
var parameters = {
  // size of the marker in meter
  size: 1,
  // type of marker - ['pattern', 'barcode', 'unknown' ]
  type: "unknown",
  // url of the pattern - IIF type='pattern'
  patternUrl: null,
  // value of the barcode - IIF type='barcode'
  barcodeValue: null,
  // change matrix mode - [modelViewMatrix, cameraTransformMatrix]
  changeMatrixMode: "modelViewMatrix",
  // turn on/off camera smoothing
  smooth: true,
  // number of matrices to smooth tracking over, more = smoother but slower follow
  smoothCount: 5,
  // distance tolerance for smoothing, if smoothThreshold # of matrices are under tolerance, tracking will stay still
  smoothTolerance: 0.01,
  // threshold for smoothing, will keep still unless enough matrices are over tolerance
  smoothThreshold: 2
};
```

### THREEx.ArToolkitContext

```js
var parameters = {
    // debug - true if one should display artoolkit debug canvas, false otherwise
    debug: false,
    // the mode of detection - ['color', 'color_and_matrix', 'mono', 'mono_and_matrix']
    detectionMode: 'color_and_matrix',
    // type of matrix code - valid iif detectionMode end with 'matrix' - [3x3, 3x3_HAMMING63, 3x3_PARITY65, 4x4, 4x4_BCH_13_9_3, 4x4_BCH_13_5_5]
    matrixCodeType: '3x3',
    // Pattern ratio for custom markers
    patternRatio: 0.5
    // Labeling mode for markers - ['black_region', 'white_region']
    // black_region: Black bordered markers on a white background, white_region: White bordered markers on a black background
    labelingMode: 'black_region',

    // url of the camera parameters
    cameraParametersUrl: THREEx.ArToolkitContext.baseURL + '../data/data/camera_para.dat',

    // tune the maximum rate of pose detection in the source image
    maxDetectionRate: 60,
    // resolution of at which we detect pose in the source image
    canvasWidth: 640,
    canvasHeight: 480,

    // enable image smoothing or not for canvas copy - default to true
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
    imageSmoothingEnabled : true,
}
```

### THREEx.ArToolkitSource

```js
var parameters = {
  // type of source - ['webcam', 'image', 'video']
  sourceType: "webcam",
  // url of the source - valid if sourceType = image|video
  sourceUrl: null,

  // resolution of at which we initialize the source image
  sourceWidth: 640,
  sourceHeight: 480,
  // resolution displayed for the source
  displayWidth: 640,
  displayHeight: 480
};
```

