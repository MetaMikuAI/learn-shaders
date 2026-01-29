cmake_minimum_required(VERSION 3.10)
project(ShaderToy_Rocaille)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(OpenGL REQUIRED)
find_package(glfw3 REQUIRED)
find_package(GLEW REQUIRED)

add_executable(shader_app_rocaille
    src/main.cpp
)

target_link_libraries(shader_app_rocaille
    OpenGL::OpenGL
    glfw
    GLEW::GLEW
)

target_include_directories(shader_app_rocaille PRIVATE
    ${GLEW_INCLUDE_DIRS}
)

add_custom_command(TARGET shader_app_rocaille POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
    ${CMAKE_SOURCE_DIR}/shaders
    ${CMAKE_BINARY_DIR}/shaders
    COMMENT "Copying shaders to build directory"
)
