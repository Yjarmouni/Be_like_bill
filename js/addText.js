
// Create default text into image

var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();
      var text="bill doesn't ask his\nfacebook friends to like\nhis profile picture.\n\nBill doesn't want\nto be ridiculous.";
      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0);
          context.font = "21px Verdana";
              var lines = text.split("\n");

    for (var i = 0; i < lines.length; i++) 
  		context.fillText(lines[i], 15, 150+(i*27));
      };
      imageObj.src = 'bill.jpg';



function editImage () {//draw the new text 

	var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();
      var text=document.getElementById("textArea").value;
      imageObj.setAttribute('crossOrigin', 'anonymous'); 		
      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0);
          context.font = "21px Verdana";
              var lines = text.split("\n");


    for (var i = 0; i < lines.length; i++) 
  		context.fillText(lines[i], 15, 150+(i*27));
      };
      imageObj.src = 'bill.jpg';

  }


  var downloadImg=function () {    // download the image
  	console.log("ok bye");
  	var canvas = document.getElementById('myCanvas');
 	var dt = canvas.toDataURL('image/png');
 	dt.crossOrigin = "Anonymous";
 	 var link = document.createElement('a');
    link.download = 'Be_like_bill.png';
    link.href =dt.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    link.click();
};
