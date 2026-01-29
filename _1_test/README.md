# Shader Learning Project

最简单的 C++ + OpenGL Shader 学习项目

## 项目结构

```
_1_test/
├── CMakeLists.txt          # CMake 构建配置
├── src/
│   └── main.cpp            # C++ 主程序
└── shaders/
    ├── vertex.glsl         # 顶点着色器
    └── fragment.glsl       # 片段着色器
```

## 项目说明

这是一个最基础的 OpenGL Shader 程序，展示了：

- **顶点着色器 (Vertex Shader)**：处理顶点位置和颜色
- **片段着色器 (Fragment Shader)**：处理像素的最终颜色

程序会显示一个彩色的四边形（由两个三角形组成）：
- 右上顶点：红色
- 右下顶点：绿色
- 左下顶点：蓝色
- 左上顶点：黄色

中间部分会自动进行颜色插值。

## 编译和运行

### 安装依赖（Ubuntu/Debian）

```bash
sudo apt-get install libglfw3-dev libglew-dev libglm-dev
```

### 编译

```bash
mkdir build
cd build
cmake ..
make
```

### 运行

```bash
./shader_app
```

关闭窗口退出程序。

## 学习建议

1. **修改 Vertex Shader**：
   - 尝试改变顶点位置计算
   - 添加时间变量进行动画

2. **修改 Fragment Shader**：
   - 尝试不同的颜色混合方式
   - 使用 vertexColor 进行计算

3. **扩展功能**：
   - 添加更多顶点和三角形
   - 使用纹理
   - 添加法线和光照计算
