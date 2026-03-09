@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

set "LOG_DIR=E:\pandownload1\ML\Police\Project\logs"

dir /b "%LOG_DIR%\*.log" > nul 2>&1
if errorlevel 1 (
    echo 无日志文件待清理
) else (
    del /F/S/Q "%LOG_DIR%\*.log" > nul
    if errorlevel 1 (
        echo 清理失败！请检查 bat 文件
    ) else (
        echo 所有日志文件已删除完成
    )
)
