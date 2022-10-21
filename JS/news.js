const req = new Request("http://localhost:5500/Q3/file.json"); 
fetch(req)
  .then((res) => res.json())
  .then((newsData) => {
    const parentDiv = document.getElementsByClassName("container")[0];
    newsData.articles.forEach((news,i) => {
      const wrappingDiv = document.createElement("div");
      wrappingDiv.style.padding = "10px";
      let text = news.title.length <= 75 ? news.title : news.title.substr(0, 75) + " . . .";
      wrappingDiv.innerHTML=`
          <button class="btn btn-info bg-success " style="width:800px" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample${i}" aria-expanded="false" aria-controls="collapseWidthExample${i}">
            ${text}
          </button>
          <br>
          <div>
            <div class="collapse collapse-vertical " id="collapseWidthExample${i}">
              <div class="card card-body" style="width: 800px;">
                  ${news.content}
                  <br><br>
                  Source:-<a href="${news.url}" target="_blank">${news.url}</a>
                  <br>
                  Published at:- ${new Date(news.publishedAt).toString()}
              </div>
          </div>
        </div>`
      parentDiv.appendChild(wrappingDiv);
    });
  })
  .catch((err) => {
    console.error(err);
  });


list=[
  {
    src:"https://static.toiimg.com/thumb/msid-70357330,width-400,resizemode-4/70357330.jpg",
    url:"https://www.iiit.ac.in/"
  },
  {
    src:"https://static.toiimg.com/thumb/resizemode-4,msid-80995671,width-1200,height-900/80995671.jpg",
    url:"https://unacademy.com/"
  },
  {
    src:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/zmrjaalxfjbnmygrj2kh",
    url:"https://pizzaonline.dominos.co.in/?src=google_sem_brand&utm_source=google&utm_medium=cpc&utm_campaign=Brand%20-%20Pan%20India%20-%20Desktop%20-%20Exact%20-%202016%20-%20[S]&utm_term=[domino%27s%20pizza]&gclid=Cj0KCQjwhY-aBhCUARIsALNIC079ue5Gqz-FF6zrqRPGOYfo731WRbmu7Q_yQ1nVJ08w6DW2CmL0l5kaAi5UEALw_wcB"
  },
  {
    src:"https://m.media-amazon.com/images/I/417upY9sfxL._UL1000_.jpg",
    url:"https://www.amazon.in/Nike-Vision-Multi-Color-University-Running-DQ7630-001/dp/B09W2VZ2JY/ref=sxin_36_slsr_d_i_fs4star_fa_1_B09W2VZ2JY?adgrpid=58344902309&content-id=amzn1.sym.86f966cb-cf80-4eda-a765-89e42fae403a%3Aamzn1.sym.86f966cb-cf80-4eda-a765-89e42fae403a&cv_ct_cx=nike+shoes&ext_vrnc=hi&gclid=Cj0KCQjwhY-aBhCUARIsALNIC04yX99Be1IH72V75cj-Em8dbojwj09GG4AL3y4AWbZ-iRGSAI-l2dsaAvFeEALw_wcB&hvadid=590511899196&hvdev=c&hvlocphy=9062140&hvnetw=g&hvqmt=b&hvrand=8959412999236404429&hvtargid=kwd-298028360384&hydadcr=15690_2268039&keywords=nike+shoes&pd_rd_i=B09W2VZ2JY&pd_rd_r=595e3a83-3400-4448-89b9-59499099f92f&pd_rd_w=82HwK&pd_rd_wg=rP1N6&pf_rd_p=86f966cb-cf80-4eda-a765-89e42fae403a&pf_rd_r=6R8BN2N1TBJJXV3Y7KXV&psc=1&qid=1665406061&qu=eyJxc2MiOiIxMS4xOCIsInFzYSI6IjEwLjk1IiwicXNwIjoiOC45NSJ9&sr=1-2-41e0d225-3819-4755-898e-7f0f48633b47"
  },
  {
    src:"https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg",
    url:"https://www.flipkart.com/microsoft-xbox-stereo-wired-gaming-headset/p/itm550f31ac69096?gclid=Cj0KCQjwhY-aBhCUARIsALNIC079ihSeTKP25JClqI65nPwIBwwnENOmsF4M06AYE0JrMfzIqwTq_80aAr8qEALw_wcB&pid=ACCG7RZ9HRHXCDZG&lid=LSTACCG7RZ9HRHXCDZGBAPHIH&marketplace=FLIPKART&cmpid=content_headphone_13959857976_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,536336469819,,,,c,,,,,,,&ef_id=Cj0KCQjwhY-aBhCUARIsALNIC079ihSeTKP25JClqI65nPwIBwwnENOmsF4M06AYE0JrMfzIqwTq_80aAr8qEALw_wcB:G:s&s_kwcid=AL!739!3!536336469819!!!g!1691936595567!&gclsrc=aw.ds"
  },
  {
    src:"https://media.fashionnetwork.com/m/8dd2/c955/8635/c3bb/f5d2/2bad/ed8f/9563/2eed/e5e7/e5e7.jpg",
    url:"https://www.myntra.com/?utm_source=perf_google_search_brand&utm_medium=perf_google_search_brand&utm_campaign=Search_Brand_Myntra_Brand_India_BM_TROAS_SOK&gclid=Cj0KCQjwhY-aBhCUARIsALNIC050hicyBQCQQwTIZlHNleycjWk6i1MnQiMXMrkXEelDpHIBxIUc5N8aAtnqEALw_wcB"
  }
]
let x=0,y=3;
setInterval(() => {
  x=(x+1)%6;
  y=(y+1)%6;
  let ig1 = document.getElementById("img1");
  let ig2 = document.getElementById("img2");
  ig1.src = list[x].src;
  ig2.src = list[y].src;
  ig1.onclick = () => {
    window.open(list[x].url);
  };

  ig2.onclick = () => {
    window.open(list[y].url);
  };
}, 1500);
