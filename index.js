var express = require("express");
var app = express();
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

app.get("/test",function(req,res){

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: 'HK0iXSS8R1cv3K2zoWVgWPyviGbyTDTNbvGTZ8A_SzKg'
});

var params = {
  url:"https://www.gillettepepsicola.com/files/cache/26d31d739377b658df6f7c20d145a655_f561.jpg"
};

visualRecognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else{
    //Store the response into a string
    var results = JSON.stringify(response, null,2);
    //res.write(response.images.constructor.name + "\n");
    //res.write(response.images[0].classifiers.constructor.name + "\n");
    //res.end(response.images[0].classifiers[0].classes[0].score + "\n" );
    var class_col = response.images[0].classifiers[0].classes;
    for(i=0; i<class_col.length;i ++){
            res.write(class_col[i].class + "\t");
            res.write(class_col[i].score + "\n");
    }
            res.end("END");
    console.log(results);
  }
});

})


//var listener = app.listen(process.env.PORT,process.env.IP,function(){
var listener = app.listen(4000,process.env.IP,function(){
	//var listener = app.listen(process.env.PORT,process.env.IP,function(){
	console.log("server has started");
	 console.log('Listening on port ' + listener.address().port);
});
