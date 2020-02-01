function download(filename) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var body_background_color = 'white';
var body_color= 'purple';
var body_link_color = 'blue';

var paragraph_color = 'black';
var paragraph_size = '12px'

var list_color = 'green';

var output='<style>body{background-color:'+body_background_color+';color:'+body_color+';} a{color:'+body_link_color+';} p{color:'+paragraph_color+';font-size:'+paragraph_size+'} li{color:'+list_color+';}</style><body>My Website :)<br><a>example link</a><ul><li>ex list one</li><li>ex list two</li></ul></body>';

function refresh(){
output = '<style>body{background-color:'+body_background_color+';color:'+body_color+';} a{color:'+body_link_color+';} p{color:'+paragraph_color+';font-size:'+paragraph_size+'} li{color:'+list_color+';}</style><body>My Website :)<br><a href="https://data.whicdn.com/images/60318017/original.jpg" target="_blank" style="text-decoration:underline">example link</a><ul><li>ex list one</li><li>ex list two</li></ul><p> lorem ipsum, according to all known laws of aviation there is no way a bee should be able to fly. its wings are simply too small to get its fat little body off the ground</p></body>';
iframedoc.body.innerHTML = output;
}

function addcontent(){
iframedoc.body.innerHTML = '<style>body{background-color:'+body_background_color+';color:'+body_color+';} a{color:'+body_link_color+';} p{color:'+paragraph_color+';font-size:'+paragraph_size+'}</style><body>My Website :)'+"hypothetically this is new addcontent"+'</body>';
}

function update_bbcolor(jscolor) {
    body_background_color="#"+jscolor;
	refresh();
}
function update_bcolor(jscolor) {
    body_color="#"+jscolor;
	refresh();
}
function update_blink(jscolor) {
    body_link_color="#"+jscolor;
	refresh();
}function update_pcolor(jscolor) {
    paragraph_color="#"+jscolor;
	refresh();
}
function update_lcolor(jscolor) {
    list_color="#"+jscolor;
	refresh();
}

var iframe = document.getElementById('foo'),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;

iframedoc.body.innerHTML = '<style>body{background-color:'+body_background_color+';color:'+body_color+';} a{color:'+body_link_color+';} p{color:'+paragraph_color+';font-size:'+paragraph_size+'} li{color:'+list_color+';}</style><body>My Website :)<br><a href="https://data.whicdn.com/images/60318017/original.jpg" target="_blank" style="text-decoration:underline">example link</a><ul><li>ex list one</li><li>ex list two</li></ul><p> lorem ipsum, according to all known laws of aviation there is no way a bee should be able to fly. its wings are simply too small to get its fat little body off the ground</p></body>';
