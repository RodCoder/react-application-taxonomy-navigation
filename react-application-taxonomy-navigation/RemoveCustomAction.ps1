$credentials = Get-Credential
Connect-PnPOnline "https://spinexltd.sharepoint.com" -Credentials $credentials

$context = Get-PnPContext
$web = Get-PnPWeb
$context.Load($web)
Execute-PnPQuery

Write-Host $web.UserCustomActions.Count()

Execute-PnPQuery
