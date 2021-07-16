document.getElementById("btn").addEventListener("click", function() {
    var text = document.getElementById("inp").value
    var result = document.getElementById("result")
    var cipher = rot13(text)
    result.textContent = cipher

})

function rot13(str) {
    var arr =[];
    let x=0;
    for(let i=0; i<str.length; i++)
    {
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
        var c = str.charCodeAt(i)
        if(c<78) c=c+13
        else (c=c-13)
        arr[x++] = String.fromCharCode(c) }
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) {
            var c = str.charCodeAt(i)
            if(c<110) c=c+13
            else (c=c-13)
            arr[x++] = String.fromCharCode(c)
        }
      else {
        arr[x++] = str.charAt(i)
      }
    }
     var strnew = arr.join("")
      return strnew;
 }

