const btn = document.querySelector(".main");
     
var images = ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2R8ZW58MHx8MHx8fDA%3D", "https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"];

var lenth = images.length-1;

// Throttling Function
const throttleFunction=(func, delay)=>{
 
  let prev = 0; 
  return (...args) => {
    let now = new Date().getTime(); 
 
    if(now - prev> delay){ 
      prev = now;
      return func(...args);  
    }
  }
}

btn.addEventListener("mousemove", throttleFunction((e)=>{

    var div = document.createElement("div");
    div.classList.add("imgDiv");
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";

    var imgInd = Math.floor(Math.random()*lenth);

    var img = document.createElement("img");
    img.setAttribute("src", images[imgInd]);
    div.appendChild(img); 

    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power2,
        duration: .6,
    });

    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2,
    }); 

    setTimeout(function(){
        div.remove();
    }, 2000)
 
}, 200));