# AR.js 中文文档

[这里](https://chinabigpan.github.io/arjs-docs-zh-cn/)

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
