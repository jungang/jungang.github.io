rem ���ݵ�ǰ���ڻ�ȡ�������մ�  
set yyyy=%date:~,4%  
set mm=%date:~5,2%  
set day=%date:~8,2%   
set "YYYYmmdd=%yyyy%%mm%%day%"  
rem �������մ��еĿո��滻Ϊ0  
set "YYYYmmdd=%YYYYmmdd: =%"  
rem ���ݵ�ǰʱ���ȡ��ʱ���봮  
set hh=%time:~0,2%  
set mi=%time:~3,2%  
set ss=%time:~6,2%   
set "hhmiss=%hh%%mi%%ss%"  
set "hhmiss=%hhmiss: =%"  
rem ��ʱ�䴮�е�:�滻Ϊ0  
set "hhmiss=%hhmiss::=%"  
rem ��ʱ�䴮�еĿո��滻Ϊ0  
set "hhmiss=%hhmiss: =%"  
rem ��������ʱ�������ļ����ƣ��м���-�������ں�ʱ�䲿��  
set "blogname=%YYYYmmdd%-%hhmiss%"  
cd G:\����\��Ŀ\jungang.github.io && G:
hexo new %blogname%  && npm run build



 
 
 
 
 
 