console.log("this file is loaded");
$.ajax({
type:"GET",
url:"https://api.myjson.com/bins/tls49",
dataType:"json",
success:function(response){
  ///console.log("Data from server",response);

 var data=formObject(response);
 constructDOM(data);
},
error:function(err){
  console.log("the error is",err);
}

});
/*{
  language":"",
  "movies":[]
}*/
function formObject(response){
var flags=[], categoryObject=[];
var len=response.length;

for(i=0;i<len;i++){
  var movie=response[i];
  var index=flags.indexOf(movie.language);
//  console.log(response[i]);
  //console.log("language",response[i].language);
  if(index>=0){
    categoryObject[index].movies.push(movie);
    continue;
  }

  else{
    flags.push(movie.language);
  }
  var objectschema={
    "category":movie.language,
    "movies":[]
  }


objectschema.movies.push(movie);
categoryObject.push(objectschema);

  console.log("obsc",objectschema);
}
console.log(flags);
return categoryObject;
}
function constructDOM(data){
  var categoryContent=[];
for(i=0;i<data.length;i++){
  var category1=data[i];
  console.log("constructDOM",category1);
  var categoryTilte=$('<h3 class="categoryName">'+ category1.category +'</h3>');
  categoryContent.push(categoryTilte);

}
  $('section.content').html(categoryContent);
}
