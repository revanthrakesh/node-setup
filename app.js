const http=require("http")

http.createServer((req,res)=>{
	res.write("Today sir mood is angry")
	res.end()
}).listen(2000)