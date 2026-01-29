cmake_minimum_required(VERSION 3.10)
project(ShaderLearning)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 查找所需的包
find_package(OpenGL REQUIRED)
find_package(glfw3 REQUIRED)
find_package(GLEW REQUIRED)

# 创建可执行程序
add_executable(shader_app
    src/main.cpp
)

# 链接库
target_link_libraries(shader_app
    OpenGL::OpenGL
    glfw
    GLEW::GLEW
)

# 设置包含目录
target_include_directories(shader_app PRIVATE
    ${GLEW_INCLUDE_DIRS}
)

# 创建 shaders 目录符号链接（用于运行时访问）
add_custom_command(TARGET shader_app POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
    ${CMAKE_SOURCE_DIR}/shaders
    ${CMAKE_BINARY_DIR}/shaders
    COMMENT "Copying shaders to build directory"
)
