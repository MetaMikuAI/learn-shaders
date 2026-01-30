_5 — Grid-only extraction from ShaderToy "sun & grid"

原始 ShaderToy: https://www.shadertoy.com/view/Wt33Wf  (Author: Jan Mróz, License: CC BY 3.0)

说明：
- 本示例只保留并复现了“地面网格（grid）”部分的渲染逻辑（并保留 ShaderToy 提供的地面坐标 remapping）。
- 可调参数：按键 B 增加 `battery`（影响网格强度与滚动），N 减少 `battery`。
- 鲜明的紫色格线与微弱雾效果接近原始视觉效果。

构建并运行：

mkdir build && cd build
cmake ..
make
./shader_app_grid

提示：修改 `shaders/grid_only.frag` 可调整网格密度、颜色和滚动速度。