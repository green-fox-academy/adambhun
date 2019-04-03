'use strict';

let httpRequest = new XMLHttpRequest();
const call = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&fq=headline&fq=snippet&fq=pub_date&api-key=Yj5VP94mNwavL7u5fPldNh3yAozLSYPY";
let payload = "";


httpRequest.open('GET', call, true);
httpRequest.send(null);

httpRequest.onload = () => {
  payload = JSON.parse(httpRequest.responseText);
  console.log(payload);
  
    let lst = document.createElement("li");
    lst.innerHTML = payload.response.docs[0].headline.main;
    let lst2 = document.createElement("li");
    lst2.innerHTML = payload.response.docs[0].snippet;
    let lst3 = document.createElement("li");
    lst3.innerHTML = payload.response.docs[0].pub_date;
    let lnk = document.createElement("a");
    lnk.href = payload.response.docs[0].web_url;
    lnk.innerHTML = 'link to article';
    document.querySelector("body").appendChild(lst);
    document.querySelector("body").appendChild(lst2);
    document.querySelector("body").appendChild(lst3);
    document.querySelector("body").appendChild(lnk);
}