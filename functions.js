console.log('func started')

function setup(){
console.log("setup started")
  const urlHref = window.location.href
  const urlHost = window.location.host
  const urlPathname = window.location.pathname
  if(urlHref == 'https://www.tvpassport.com/tv-listings'){
    console.log("through if")
      let channelNums = [2,3,4,5,6,7,8,9,11,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,68,69,70,71,72,73,74,75,77,80,84,90,92,98,102,103,104,105,106,107,108,111,112,113,116,117,118,119,121,122,123,125,126,132,143,159,160,162,165,166,167,168,169,170,171,172,175,176,181,188,194,201,202,203,204,205,206,211,225,226,251,258,264,293,300,301,320,323,325,400,442,461,472,480,483,487,496,511,531,551,571,581,630,827,953,1200,1203,1206,1209,1212,1221,1224,1226,1228,1230,1231,1232,1256,1277,1280,1357,1358,1390]
    document.querySelectorAll(".channel_col").forEach(e => {
      let text = e.innerText
      let arr = text.split(" ")
      if (channelNums.includes(Number(arr[arr.length-1]))) {e.children[0].style.backgroundColor = "palegreen"}
    })
  }
  if (urlHost == "m.youtube.com") {
    if (document.querySelector("#pip-button")) document.querySelector("#pip-button").remove()
    let controls = document.body
    let button = document.createElement("button")
    button.classList = "icon-button"
    button.id = "pip-button"
    button.innerText = "P i P"
    button.style = "color:white; background:#404040; height:10vw;width:10vw;border-radius:5vw;position:fixed;right:0;bottom:0;"
    button.onclick = "function(){console.log('test')}"
    controls.insertAdjacentElement("beforeend",button)
  }
}
