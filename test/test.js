var fs=require('fs');
var settings=require('../index.js')
var assert=require('chai').assert
describe('test settings.json file',function(){
	it('settings.json not exists',function(){
		try{
		fs.unlinkSync(process.cwd() + '\\settings.json')
		}
		catch(er){}
		assert.throws(settings.getSettings.bind(null,{}))
	})
	it('required not found',function(){
		fs.writeFileSync(process.cwd()+'\\settings.json','{"exist":true}')
		assert.throws(settings.getSettings.bind(null,{required:['a','b']}),"Required settings not found")
	})
	it('right value',function(){
		fs.writeFileSync(process.cwd()+'\\settings.json','{"moshe":"shalom","a":1}')
		var func=settings.getSettings({})
		assert(func,'return non value')
		assert.equal(func.moshe,'shalom','test string')	
		assert.equal(func.a,1,'test number')	
	})
})