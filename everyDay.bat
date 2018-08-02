rem 根据当前日期获取，年月日串  
set yyyy=%date:~,4%  
set mm=%date:~5,2%  
set day=%date:~8,2%   
set "YYYYmmdd=%yyyy%%mm%%day%"  
rem 把年月日串中的空格替换为0  
set "YYYYmmdd=%YYYYmmdd: =%"  
rem 根据当前时间获取，时分秒串  
set hh=%time:~0,2%  
set mi=%time:~3,2%  
set ss=%time:~6,2%   
set "hhmiss=%hh%%mi%%ss%"  
set "hhmiss=%hhmiss: =%"  
rem 把时间串中的:替换为0  
set "hhmiss=%hhmiss::=%"  
rem 把时间串中的空格替换为0  
set "hhmiss=%hhmiss: =%"  
rem 根据日期时间生成文件名称，中间以-区分日期和时间部分  
set "blogname=%YYYYmmdd%-%hhmiss%"  
cd G:\网易\项目\jungang.github.io && G:
hexo new %blogname%  && npm run build



 
 
 
 
 
 