function getHtml(name1,url) {
    return `<div>
          Hi   <h3><a href="${url}">${name1}</a></h3>
   
        </div>`;
}
const text = getHtml("Svetlanna","https://github.com/Svetlanna/Ternary-operator");
//document.body.innerHTML = html;

document.body.innerHTML =text;
