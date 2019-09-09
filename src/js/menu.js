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
    text: "Projeto Integrador",
    link: "projeto.html"
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
  },
  {
    text: "Aula 6: VS Code",
    link: "aula6.html"
  },
  {
    text: "Aula 7: Git e GitHub",
    link: "aula7.html"
  },
  {
    text: "Aula 8: Box Model",
    link: "aula8.html"
  },
  {
    text: "Aula 9: Unidades",
    link: "aula9.html"
  },
  {
    text: "Aula 10: Layout",
    link: "aula10.html"
  },
  {
    text: "Aula 11: Seletores",
    link: "aula11.html"
  },
  {
    text: "Aula 12 - Opacity",
    link: "aula12.html"
  },
  {
    text: "Aula 13 - Shadow",
    link: "aula13.html"
  },
  {
    text: "Aula 14 - Column",
    link: "aula14.html"
  },
  {
    text: "Aula 15 - Scroll-behavior",
    link: "aula15.html"
  },
  {
    text: "Aula 16 - Background",
    link: "aula16.html"
  },
  {
    text: "Aula 17 - Transform",
    link: "aula17.html"
  },
  {
    text: "Aula 18 - Transition",
    link: "aula18.html"
  },
  {
    text: "Aula 19 - Animation",
    link: "aula19.html"
  },
  {
    text: "Aula 20 - Design Responsivo",
    link: "aula20.html"
  }
];

menuUl.appendChild(document.createElement('div'));


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
  if(btn.innerText === "X") {
    btn.innerText = "☰";
    menu.style.display = "none"
    main[0].style.padding = "20px 60px 20px 60px";
  } else {
    btn.innerText = "X";
    menu.style.display = "block";
    main[0].style.padding = "20px 70px 20px 320px";
  }
}
