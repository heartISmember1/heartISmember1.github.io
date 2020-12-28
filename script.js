function changeMe()
  {
    document.getElementById("changeImg").src = "images/" + getRandomImage();	
	document.getElementById("changeText").innerHTML = getRandomText();
  }
function getRandomImage() {
  var images = ["安田.jpg","永井.jpg","奥間_正式.jpg","岡田.png","近藤.jpg","今岡.jpg","佐藤.jpg","坂田.jpg","榊原.jpg","山本.jpg","山本_本気モード.jpg","舟橋.jpg","勝間.jpg","小畑.jpg","松井.jpg","神原.jpg","水口.jpg","清水.jpg","早川.jpg","糟谷.jpg","村上.jpg","村瀬.jpg","太田.jpg","中川.jpg","長谷川.jpg","坪内.jpg","都築.jpg","藤本.jpg","白谷.jpg","飯田.jpg","飯田圭.jpg","武藤.jpg","伏見.jpg","野村.jpg","野々山.jpg","鈴木誉人.jpg"];

  return images[Math.floor(Math.random() * images.length)];
}
function getRandomText() {
	var textArea = document.getElementById('area1').value;     // plain JavaScript
	var res = textArea.split("\n");
	return res[Math.floor(Math.random() * res.length)];
 }