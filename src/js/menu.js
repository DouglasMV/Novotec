const menu = document.getElementById("menu");

const menuUl = document.getElementById("menu-ul");

const btn = document.getElementById("menu-btn");

const main = document.getElementsByTagName("main");

const linkList = [
  {
    text: "Home",
    link: "index.html"
  },
  {
    text: "Aula 1: Web",
    link: "aula1.html"
  },
  {
    text: "Aula 2: Design",
    link: "aula2.html"
  },
  {
    text: "Aula 3: HTML",
    link: "aula3.html"
  },
  {
    text: "Aula 4: CSS Básico",
    link: "aula4.html"
  },
  {
    text: "Aula 5: CSS Cores",
    link: "aula5.html"
  }
];


linkList.forEach((item) => {
  let el = document.createElement('li');
  let a = document.createElement('a');
  let text = document.createTextNode(item.text);

  a.target = "_self";
  a.href = item.link;
  
  a.appendChild(text);
  el.appendChild(a);
  menuUl.appendChild(el);
});


/* Toggle Menu */

btn.onclick = () => {
  if(btn.innerText === "<") {
    btn.innerText = ">";
    menu.style.display = "none"
    main[0].style.padding = "20px 40px 20px 40px";
  } else {
    btn.innerText = "<";
    menu.style.display = "block";
    main[0].style.padding = "20px 40px 20px 290px";
  }
}
