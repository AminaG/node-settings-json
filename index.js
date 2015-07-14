var fs=require('fs');

module.exports.getSettings=function(options){
	var file=process.cwd() + '/settings.json'
	if (!fs.existsSync(file)){
		throw new Error("File not found")
	}
	var json=fs.readFileSync(file).toString();
	
	try{
		json=JSON.parse(json)
	}
	catch(e){
		throw "Cannot parse "  + file
	}
	if(options.required){
		for (var i=0;i<options.required.length;i++){
			if(json[options.required[i]]===undefined){
				console.log( "Required settings not found: " + options.required[i])
				throw "Required settings not found"
			}
		}
	}
	return json
}