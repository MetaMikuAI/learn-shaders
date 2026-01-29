_4_Rocaille — ShaderToy "Rocaille" 本地运行示例

原始 ShaderToy： https://www.shadertoy.com/view/WXyczK  (作者 @XorDev)

说明：
- 尽量保持了 ShaderToy 上原始片段代码的结构与效果，但修正了潜在的未定义行为（初始化循环变量、明确嵌套循环），以确保在 OpenGL GLSL 330 中健壮运行。
- 顶点着色器使用 fullscreen quad，片段着色器接收 `iResolution` 与 `iTime` 两个 uniform。
- 可通过修改 `shaders/rocaille.frag` 中的循环次数（9 -> 5 等）来提升性能。

构建与运行：

cd _4_Rocaille
mkdir build && cd build
cmake ..
make
./shader_app_rocaille

注：效果会随时间变化（iTime），若希望复现 ShaderToy 的更多交互（iMouse/iChannel 等），可以扩展 uniform 并把额外通道数据传入。