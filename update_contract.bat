@echo off
setlocal enabledelayedexpansion

:: Ask for the new contract address
set /p NEW_ADDRESS=Enter the new contract address: 

:: Path to Portal.jsx (adjust if your folder is different)
set FILE=src\pages\Portal.jsx

:: Backup the file just in case
copy "%FILE%" "%FILE%.bak"

:: Replace the contractAddress line dynamically
powershell -Command "(Get-Content '%FILE%') -replace 'const contractAddress = \".*\";', 'const contractAddress = \"%NEW_ADDRESS%\";' | Set-Content '%FILE%'"

echo Contract address updated to %NEW_ADDRESS%.

:: Git operations
git add .
git commit -m "Updated contract address to %NEW_ADDRESS%"
git push origin main

:: Deploy to Vercel
vercel --prod

echo Deployment complete!
pause
