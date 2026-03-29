@REM Maven Wrapper script for Windows
@REM Downloads Maven if not present, then runs it

@echo off
setlocal

set MAVEN_WRAPPER_PROPERTIES=.mvn\wrapper\maven-wrapper.properties
set MAVEN_HOME=%USERPROFILE%\.m2\wrapper\dists

if not exist "%MAVEN_WRAPPER_PROPERTIES%" (
    echo Error: Could not find %MAVEN_WRAPPER_PROPERTIES%
    exit /b 1
)

for /f "tokens=1,* delims==" %%a in ('findstr "distributionUrl" "%MAVEN_WRAPPER_PROPERTIES%"') do set DIST_URL=%%b

for %%i in ("%DIST_URL%") do set DIST_FILENAME=%%~ni
set MAVEN_DIR=%MAVEN_HOME%\%DIST_FILENAME%

if not exist "%MAVEN_DIR%" (
    echo Downloading Maven from %DIST_URL%...
    mkdir "%MAVEN_DIR%" 2>nul
    powershell -Command "Invoke-WebRequest -Uri '%DIST_URL%' -OutFile '%MAVEN_DIR%\maven.zip'"
    powershell -Command "Expand-Archive -Path '%MAVEN_DIR%\maven.zip' -DestinationPath '%MAVEN_DIR%' -Force"
    del "%MAVEN_DIR%\maven.zip"
)

for /r "%MAVEN_DIR%" %%f in (mvn.cmd) do (
    if exist "%%f" (
        "%%f" %*
        exit /b %ERRORLEVEL%
    )
)

echo Error: Could not find mvn.cmd in %MAVEN_DIR%
exit /b 1
