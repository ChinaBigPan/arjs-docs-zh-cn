---
title: 首页
---

## Web AR 意味着什么?

[英文原地址](https://ar-js-org.github.io/AR.js-Docs/)

增强现实是一种可以在现实世界添加内容的技术。可以应用在多种设备：手持设备(如手机)、耳机、桌面等等。

对于手持设备(通常来说指的是摄像型设备)来说，“现实”就是从一个或多个摄像头捕捉到的影像，在显示到显示屏上时添加一些内容。

![image](/arjs-docs-zh-cn/images/arjs_gif_1.gif)

对于开发者来说，在 Web 端开发增强现实(从现在开始的“增强现实”)意味着避免了所有移动应用开发所消耗的精力和与应用商店相关的成本(验证、发布时间)。它还意味着 HTML、CSS 和 JavaScript 等许多开发和设计人员所熟知的技术获得了第二春。

这基本上意味着可以立即发布每个新版本，几乎可以实时修复 bug 或发布新特性，为践行多种可能性铺平了道路。

对于用户来说，这意味着只需访问一个网站就可以轻松获得 AR 体验。现在二维码早已屡见不鲜，扫一扫甚至都不需要打字就能访问 URL。更方便的是，用户不必再担心下载 AR 应用时的内存问题，更不必考虑随时更新的问题了。

## 为什么选择 AR.js ?

我们相信 Web 这样一个协作且无障碍的环境。我们也相信作为一种新的传播媒介，增强现实技术可以帮助人们以全新且令人兴奋的方式来看待现实。我们每天都能在各种应用中看到增强现实(AR)技术，艺术、教育、娱乐等等不一而足。

我们坚信这样一种强大的技术，能够帮助人们发挥他们的创造力，在某种程度上应该是免费的。如果可能的话，合作也是必要的。因此我们继续了 Jerome Etienne 的工作，将 AR 视作一种免费和开源的技术并带到网络上。

感谢您对此感兴趣，如果您愿意以任何方式合作的话，请[联系我们](https://twitter.com/nicolocarp)。

该项目目前托管于 GitHub，您可以在[这里](https://github.com/ar-js-org)找到它，您可以加入进来，全免费噢。

### AR 类型

AR.js 在增强现实方面提供了如下功能：

- **图像追踪**。当相机发现一幅2D图像时，可以在其上方或附近显示某些内容。内容可以是2D图像、gif、3D模型(也可以是动画)和2D视频。案例：艺术品、学习资料(书籍)、传单、广告等等。
- **基于位置的AR**。这种“增强现实”技术利用了真实世界的位置，在用户的设备上显示增强现实的内容。开发者可以利用该库使用户获得基于现实世界位置的体验。用户可以随意走动(最好是在户外)并通过智能手机看到现实世界中任何地点的 AR 内容。若用户移动和旋转手机，AR内容也会同步做出反应(这样一些AR内容就被“固定”到真实位置了，且会根据它们与用户的距离做出适当的变化)。这样的解决方案让我们做出交互式旅游向导成为可能，比如游客来到一个新的城市，游览名胜古迹、博物馆、餐馆、酒店等等都会更方便。我们也可以改善学习体验，如寻宝游戏、生物或历史学习游戏等，还可以将该技术用于情景艺术(视觉艺术体验与特定的现实世界坐标相结合)。
- **标记跟踪**。当相机发现一个标记时，可以显示一些内容(这与图像跟踪相同)。标记的稳定性不成问题，受限的是形状、颜色和尺寸。可以应用于需要大量不同标记和不同内容的体验，如：(增强书籍)、传单、广告等。

### 关键点

- **非常快：** 在手机上运行如丝般顺滑。
- **基于 Web：** 纯粹的 web 解决方案，因此无需安装。由 Three.js + A-Frame + jsartoolkit5 组成。
- **开源：** 完全开源免费。
- **标准：** 适用于任何使用 webgl 和 webrtc 的手机

## 引入依赖库

AR.js 从版本3开始采用了新的架构。

**AR.js 有两种互斥的结构。二者均有人维护。**

您可以根据需要的功能来决定引入的依赖库文件，想要使用的渲染库同理(A-Frame 或 Three.js)。

[jsartoolkit5]:https://github.com/artoolkitx/jsartoolkit5
[three.js]:https://threejs.org/
[A-Frame]:https://aframe.io/

AR.js 使用[jsartoolkit5][jsartoolkit5]进行跟踪，但是可以使用[three.js][three.js]或[A-Frame][A-Frame]显示增强的内容。

---

**AR.js 带有图像追踪和基于位置的 AR 功能**：

A-Frame 版：

```html
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js">
```

Three.js 版：

```html
<script src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-nft.js">
```

---

**AR.js 带有标记跟踪追和基于位置的 AR 功能**：

A-Frame 版：

```html
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js">
```

Three.js 版：

```html
<script src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar.js">
```

如果您想导入一个特定版本，您可以将`master`缓存任意您想要的版本号：

```html
<script src="https://raw.githack.com/AR-js-org/AR.js/3.0.0/aframe/build/aframe-ar-nft.js">
```

## 限制条件

下面是一些要求和已知的限制条件：

- 适用于任何使用 webgl 和 webrtc 的手机
- 标记相关的功能消耗很小，而图像追踪才是消耗 CPU 的大头。
- 很遗憾在 iOS 的 Chrome 上无法使用，因为目前 iOS 上的 Chrome 不支持摄像头访问。
- 在拥有多个摄像头的设备上，Chrome 可能在检测正确的摄像头方面存在问题。如果您发现 AR.js 打开的摄像头不对，请使用火狐浏览器。
- 要使用基于位置的功能，您的手机需要有 GPS 传感器。
- 请 iOS 用户仔细阅读所有 AR.js 的弹出层内容，因为在 iOS 上需要用户做出操作来激活地理位置。
- 基于位置的功能仅在 A-Frame 版中可用。

## 请一定使用 HTTPS

由于主要浏览器的限制，用户只能在 https 网站下才能访问手机的摄像头或摄像头 GPS 传感器。

您将看到的所有示例及所有的 AR.js web 应用通常都必须在服务器上运行。您可以使用本地服务器或在网页上部署静态 web 应用。

因此，切记始终在安全连接的服务器和本地主机上运行示例。[Github Pages](https://pages.github.com/)是在 https 下创建免费网站的好主意。

## 让我们开始吧

这里我们给出三个基本示例，各对应一个 AR 特性。

您也可以直接前往对应页面查看详细信息：

- [图像追踪](/arjs-docs-zh-cn/routes/image_tracking)
- [基于位置的AR](/arjs-docs-zh-cn/routes/location_based)
- [标记追踪](/arjs-docs-zh-cn/routes/marker_based)

### 图像追踪示例

[codepen示例]:https://codepen.io/nicolocarpignoli/pen/vYOeYKd

您可以在[这里][codepen示例]做各种尝试，下面也有一个示例。

请遵循以下几步:

- 用下面的代码创建一个新项目(或者打开[这个实例](https://ar-js-org.github.io/AR.js/aframe/examples/image-tracking/nft/)并直接进入最后一步)
- 在服务器运行
- 在手机上代开网站
- 扫描[这张照片](https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex-image-big.jpeg)，通过相机看到内容。

```html
<script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>

<style>
  .arjs-loader {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arjs-loader div {
    text-align: center;
    font-size: 1.25em;
    color: white;
  }
</style>

<body style="margin : 0px; overflow: hidden;">
  <!--图像加载前显示加载中...-->
  <div class="arjs-loader">
    <div>Loading, please wait...</div>
  </div>
  <a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <!--我们使用了 cors 代理来避免跨域问题-->
    <a-nft
      type="nft"
      url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
      smooth="true"
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5"
    >
      <a-entity
        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
        scale="5 5 5"
        position="50 150 0"
      >
      </a-entity>
    </a-nft>
    <a-entity camera></a-entity>
  </a-scene>
</body>
```

### 基于位置的 AR 示例

您可以尝试下[这个Codepen](https://codepen.io/nicolocarpignoli/pen/MWwzyVP)。它会检索您的位置，并在附近放置一串文本。

请按照如下步骤：

- 使用以下代码片段创建一个新项目，并使用您现在的纬度和经度替换`add-your-latitude`和`add-your-longitude`，不要使用`<>`。
- 在服务器上运行
- 在您的手机上激活 GPS 并导航到示例 URL。
- 环顾四周。您应该看到文字正在看着你，它出现在你要求的位置，即使你移动手机或旋转电话也没有问题。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>GeoAR.js demo</title>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
  </head>

  <body style="margin: 0; overflow: hidden;">
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-text
        value="This content will always face you."
        look-at="[gps-camera]"
        scale="120 120 120"
        gps-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>;"
      ></a-text>
      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
  </body>
</html>
```

### 标记跟踪示例

请按照如下步骤：

- 用下面的代码创建一个新项目(或者打开[这个实例](https://ar-js-org.github.io/AR.js/aframe/examples/marker-based/basic.html)，直接进入最后一步)
- 在服务器上运行。
- 在手机上打开网站。
- 扫描[这张照片](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)，通过相机看到内容。

```html
<!DOCTYPE html>
<html>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <!--我们导入了没有 NFT 的 Ar.js 版本，不过支持标记和基于位置的AR-->
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
  <body style="margin : 0px; overflow: hidden;">
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity
          position="0 0 0"
          scale="0.05 0.05 0.05"
          gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
```

### 高级知识

AR.js 通过 A-Frame 提供了两种与 web 页面交互的方式:直接与 AR 内容交互和与覆盖的 DOM 交互。

此外，在每个 AR.js web 应用的生命周期中都会触发多个自定义事件。

您可以在[UI和事件部分](/arjs-docs-zh-cn/routes/ui_and_event)

### AR.js 架构

AR.js 使用[jsartoolkit5][jsartoolkit5]进行跟踪，但是可以使用[three.js][three.js]或[A-Frame][A-Frame]显示增强的内容。

`three.js`文件夹包含了：

- AR.js 核心源代码，基于标记和图像追踪。
- 基于 three.js 的 AR.js 示例。
- 基于 AR.js 的 three.js 构建。
- 第三方架构功能(jsartoolkit5)。
- workers(用于图片追踪)。

当你发现以`-nft`后缀结尾的文件时，它们是图像跟踪版本限定文件。

A-Frame 版本的 AR.js 使用 three.js 作为其核心的一部分。AR.js 上的 A-frame 代码经简单包装后作为 HTML 上自定义组件。

`aframe`文件夹包含了：

- A-Frame 版 AR.js 的源码(基于标记和图像追踪组件的别名)。
- 基于位置的源代码。
- 基于 AR.js 的 A-Frame 构建。
- A-Frame 版 AR.js 的示例。

## 排忧解难、功能建议和社区

[来这里提issue](https://github.com/jeromeetienne/AR.js/issues)