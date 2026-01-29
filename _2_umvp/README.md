_2_umvp — 示例：顶点使用 vec3 并通过 uniform mat4 uMVP 传入 MVP 矩阵

构建：
mkdir build && cd build
cmake ..
make

运行：
./shader_app_umvp

说明：程序会将顶点作为 vec3 上传（x,y,z），每帧计算一个旋转的 MVP 矩阵并将其传入顶点着色器，演示如何在 C++ 端传递矩阵。