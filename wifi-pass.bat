@echo off
:p
@title WiFi Passwords :    created by TomsLider
@REM @mode 87,33
color 6
cls
echo. & echo.        
echo.    _              _   _______   ______   _______       ___      __      __     __
echo.   ^|.^|            ^|.^| ^|__   __^| ^|  ____^| ^|__   __^|     ^|   \    /  \    /  \   /  \
echo.    \ \  __  __  / /     ^| ^|    ^| ^|____     ^| ^|        ^| /\ \  / __ \  ^|      ^|
echo.     \ \ \ \/ / / /      ^| ^|    ^|  ____^|    ^| ^|        ^| \/ / ^| ^|__^| ^|  \__    \__
echo.      \ \ \  / / /       ^| ^|    ^| ^|         ^| ^|        ^|  _/  ^|  __  ^|     \      \
echo.       \ \/  \/ /      __^| ^|__  ^| ^|       __^| ^|__      ^| ^|    ^| ^|  ^| ^|      ^|      ^|
echo.        \__/\__/      ^|_______^| ^|_^|      ^|_______^|     ^|_^|    ^|_^|  ^|_^|  \__/   \__/
echo. & echo. & echo.
netsh wlan show network
echo. & echo. 
echo ================================================
echo. & echo. 
netsh wlan show profiles
echo. & echo.
echo Insert the network name :
set /p profile=">"
if "%profile%"=="" (goto :p)
cls
color 3
title Information about %profile%
netsh wlan show profiles "%profile%" key=clear 2>nul
if %errorlevel%==1 (goto :p)
echo =======================================================================
echo.
set /p save="Do you want to save this interface ? [y/n] > "
if %save%==y (set "save=" & goto Save)
if %save%==yes (set "save=" & goto Save)
if "%save%"=="" (goto :p)
goto :p

:Save
color a
netsh wlan show profiles "%profile%" key=clear> %profile%.txt
echo Your file has successfully saved...
set "profile="
timeout /t 3 /nobreak>nul
goto :p