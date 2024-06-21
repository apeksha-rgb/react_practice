//define the function  : custom Render
// function  customRender(reactElement,container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.prop.href)
//     domElement.setAttribute('target',reactElement.prop.target)

//     container.appendChild(domElement)
// }
//modified render function
function customRenderModular(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const p in reactElement.prop ) {
        if(p ==='children') continue;
        domElement.setAttribute(p,reactElement.prop[p])
    }
    container.appendChild(domElement)
}


// 3-lets  see how react sees it : it tries to make tree outof it 
const reactElement = {
    type : "a",
    prop: {
        href: "https://google.com",
        target:"_blank",

    },
    children: "click me to visit  google"
}

// 0-grab the root
const mainContainer = document.querySelector("#root")

// 1-render the element
//suppose you have to render <a> tag
// customRender(reactElement,mainContainer)
customRenderModular(reactElement,mainContainer)