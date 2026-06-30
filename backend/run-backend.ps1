# PowerShell script to download Maven locally if needed and run the Spring Boot app

$MavenVersion = "3.9.6"
$MavenDirName = "apache-maven-$MavenVersion"
$MavenZip = "maven.zip"
$MavenUrl = "https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/$MavenVersion/apache-maven-$MavenVersion-bin.zip"
$LocalMavenPath = Join-Path $PSScriptRoot $MavenDirName
$BinPath = Join-Path $LocalMavenPath "bin\mvn.cmd"

if (-not (Test-Path $BinPath)) {
    Write-Host "Local Maven not found. Downloading Maven $MavenVersion..." -ForegroundColor Yellow
    
    # Download Maven zip using curl.exe
    curl.exe -L -o $MavenZip $MavenUrl
    
    Write-Host "Extracting Maven..." -ForegroundColor Yellow
    # Extract to local folder
    Expand-Archive -Path $MavenZip -DestinationPath $PSScriptRoot -Force
    
    # Clean up zip
    Remove-Item $MavenZip -Force
    Write-Host "Maven set up successfully at $LocalMavenPath!" -ForegroundColor Green
} else {
    Write-Host "Using existing local Maven installation." -ForegroundColor Green
}

# Run Spring Boot App using local Maven
Write-Host "Starting Spring Boot application..." -ForegroundColor Cyan
& $BinPath spring-boot:run
