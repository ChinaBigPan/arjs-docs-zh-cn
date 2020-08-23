---
title: 图像追踪
---

# 图像追踪 (Image Tracking)

[英文原地址](https://ar-js-org.github.io/AR.js-Docs/image-tracking/)

图像追踪使扫描图片、绘图或任何图像并在其上显示内容成为可能。

下面的所有示例都是 A-Frame 版的。如果您想看看 three.js 版的，请访问[这里](https://github.com/AR-js-org/AR.js/blob/master/three.js/examples/nft.html)

所有 A-Frame 版的示例都在[这里](https://github.com/AR-js-org/AR.js/tree/master/aframe/examples/image-tracking/)

## 开始

自然特征追踪(NFT，Natural Feature Tracking)是一种能够使用图像而非二维码或Hiro标识卡的技术。

[Web版]:https://carnaux.github.io/NFT-Marker-Creator/
[Node版]:https://github.com/Carnaux/NFT-Marker-Creator

该关键追踪图像中有趣的点并使用它们，它会估算相机的位置。这些有趣的点(也叫“图像描述符”)是使用`NFT Marker Creator` 创建的，这是一种创建 NFT 标志的工具。它有两个版本：[Web版][Web版](推荐)和[Node版][Node版]。

## 选好图

如果您想要更深入地理解标记的创建，请查阅[NFT Marker Creator的wiki](https://github.com/Carnaux/NFT-Marker-Creator/wiki/Creating-good-markers)。里面也解释了为什么某些图片比其他的效果更好。一个重要因素是图像的DPI：高DPI(300以上)会提供相当高的稳定性，而低DPI(如72)则要求用户保持静止且接近图像，否则追踪会产生延迟。

## 创建图片描述符

图片选好后，您就可以使用`NFT Marker Creator`的 Web 版或 Node 版了。

如果您使用的是node版本，下面是基本运行命令:

```shell
node app.js -i <path-to-the-img/image-name.jpg/png>
```

在这之后，您将在`output`文件夹中找到图像描述符文件。如果是 web 版本，那么生成器会自动从浏览器下载文件。

在这两种情况下，您都将得到三个文件作为图像描述符，分别是`.fset`、`.fset3`和`.iset`。它们在文件扩展名之前都有相同的前缀。那就是你将在AR.js web 应用中使用的图像描述符名称。例如:`trex.fset`、 `trex.fset3`、`trex.iset`，您的图像描述符名称就是`trex`。

## 渲染内容

```html
<!--导入 a-frame 然后导入带有图像追踪和/定位功能的 ar.js-->
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
  <!--在图像描述符加载前显示 loading，根据设备的计算力，加载可能需要一点时间。-->
  <div class="arjs-loader">
    <div>Loading, please wait...</div>
  </div>

  <!-- a-frame scene -->
  <a-scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <!-- a-nft是定义图像跟踪实体的锚点 -->
    <!-- 在 url 使用到图像描述符的路径之前创建 -->
    <!-- 路径应该以名称结束，无需扩展名。举例来说，如果文件是“pinball.fset”那么路径的结尾单次就是“pinball” -->
    <a-nft
      type="nft"
      url="<path-to-your-image-descriptors>"
      smooth="true"
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5"
    >
        <!-- 作为 a-nft 的子元素，您可以定义要显示的内容。下面是一个 GLTF 模型实体 -->
        <a-entity
            gltf-model="<path-to-your-model>"
            scale="5 5 5"
            position="50 150 0"
        >
        </a-entity>
    </a-nft>
    <!-- 静态摄像机，根据设备的运动参数进行移动 -->
    <a-entity camera></a-entity>
  </a-scene>
</body>
```

您可以前往[A-frame文档](https://aframe.io/docs/1.0.0/introduction/)来了解关于内容和可定制的一切。您可以添加几何图形、3D模型、视频和图像。你可以自定义它们的位置，比例，旋转等等。

其中唯一的自定义组件是`a-nft`，图像追踪的锚点。

### `<a-nft \>`

| 属性 | 描述 | 默认值 | 组件映射 |
|:---:|:----:|:----:|----|
| type | 标记的类型 | "nft" 唯一可用的值 | artoolkitmarker.type |
| url | 图片描述符的 url，无扩展名 || artoolkitmarker.descriptorsUrl |
| emitevents | 派发`markerFound`和`markerLost`事件 | `true`, `false` | - |
| smooth | 开启/关闭 摄像头平滑 | `true`, `false` |- |
| smoothCount | 需要平滑跟踪的矩阵个数，more 意思是平滑但跟随的速度较慢 | 5 |- |
| smoothTolerance | 平滑跟踪的距离容差，如果矩阵的该值#z在容差范围内，跟踪将保持不变。 | 0.01 |- |
| smoothThreshold | 平滑的阈值，如果矩阵平滑移动在阈值范围内则会保持静止。 | 2 |- |
| size | 标记的尺寸(按米计) || artoolkitmarker.size |

⚡️在图像追踪过程中，由于内容稳定性欠妥，我们建议采用`smooth`、`smoothCount`、`smoothTolerance`三种方法。平滑技术的应用让从3D模型到2D视频的内容更加稳定。