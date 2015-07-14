Example of settings file (settings.json):

    {"moshe":"shalom","a":1}
    
  
  install
  
    npm i node-settings-json
    

Example of use:

   require('settings')
   settings.getSettings().moshe
   
   settings.getSettings({required:['moshe']}).a

