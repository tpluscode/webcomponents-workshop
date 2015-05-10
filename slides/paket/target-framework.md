## Nuget Issues
### Solution to: Multi-target projects

Add all available references to csproj with conditionals

``` xml
<When Condition="$(TargetFrameworkIdentifier) == '.NETFramework' And ($(TargetFrameworkVersion) == 'v4.0')">
  <ItemGroup>
    <Reference Include="Newtonsoft.Json">
      <HintPath>..\packages\Newtonsoft.Json\lib\net40\Newtonsoft.Json.dll</HintPath>
      <Private>True</Private>
      <Paket>True</Paket>
    </Reference>
  </ItemGroup>
</When>
```