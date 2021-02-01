$(".backtoindex").click(function () {
  window.history.back();
});

function changeRoom() {
  let selectValue = $("#selectRoom").val();
  switch (selectValue) {
    case "古代文獻":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("古代文獻");
      $(".verticalScrollitem .intro").css("opacity", "1");
      $(".verticalScrollitem .intro p").text(
        "〔唐〕魏徵，《隋書》（臺北：鼎文書局，1993），卷81，東夷傳，流求國。〔宋〕李復，《潏水集》，收入《欽定四庫全書》，集部三，別集類，第五卷。〔宋〕趙汝適，《諸蕃志》，收入《欽定四庫全書》，史部十一，地理類十，卷上，流求；毗舍耶。〔元〕汪大淵著，蘇繼廎校釋，《島夷誌略校釋》（北京：中華書局，1981第一版，2000二刷）。〔明〕胡宗憲，《籌海圖編》，收入《欽定四庫全書》，史部十一，地理類五，邊防之屬，卷2。〔明〕宋濂，《元史》（臺北：鼎文書局，1993），卷210，外夷三，三嶼、瑠求。〔明〕張燮，《東西洋考》，收入《欽定四庫全書》，史部十一‧地理類卷5。〔明〕鄭舜功，《日本一鑑》（上海：商務印書館據舊抄本影印，1939），〈桴海圖經〉，卷1。〔明〕陳侃《使琉球錄》，《臺灣文獻叢刊》第287種：使琉球錄三種，臺北：臺灣銀行經濟研究室，1970。〔明〕蕭崇業《使琉球錄》卷上，《臺灣文獻叢刊》第287種：使琉球錄三種.臺北：臺灣銀行經濟研究室，1970。〔明〕何喬遠，《閩書》，福州市：福建人民出版社，1994。〔明〕李廷機，〈報徐石樓〉，收於《明經世文編選錄》，臺北市：臺灣銀行經濟研究室，1971。〔明〕張燮，《東西洋考》，收入《欽定四庫全書》史部十一地理類。〔明〕《明實錄》（臺北：中央研究院歷史語言研究所，漢籍電子文獻）。"
      );
      break;
    case "視覺史料":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("視覺史料");
      $(".verticalScrollitem .year").css("display", "none");
      break;
    case "近人論著":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("近人論著");
      $(".verticalScrollitem .year").css("display", "none");
      break;
    case "報刊網頁":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("報刊網頁");
      $(".verticalScrollitem .year").css("display", "none");
      break;
    default:
      console.log("你選擇了其他東西");
  }
}
if (document.body.offsetWidth <= document.body.offsetHeight) {
  changeRoom();
}

checkWindowdirection();
$(window).resize(function () {
  if (document.body.offsetWidth >= document.body.offsetHeight) {
    $(".scrollitem").css("width", "5%");
    $(".scrolltitletext").css("opacity", "1");
    $(".title h1").text("圖書室");
    $(".title p").css("font-size", "3vmin");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
  } else {
    $(".scrolltitletext").css("opacity", "0");
  }
  if (document.body.offsetWidth <= document.body.offsetHeight) {
    changeRoom();
  }
  checkWindowdirection();
});
$(window).on("orientationchange", function (event) {
  if (document.body.offsetWidth >= document.body.offsetHeight) {
    $(".scrollitem").css("width", "5%");
    $(".scrolltitletext").css("opacity", "1");
    $(".title h1").text("圖書室");
    $(".title p").css("font-size", "3vmin");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
  } else {
    $(".scrolltitletext").css("opacity", "0");
  }
  if (document.body.offsetWidth <= document.body.offsetHeight) {
    changeRoom();
  }
  checkWindowdirection();
  console.log("Change Direction");
});

function checkWindowdirection() {
  if (document.body.offsetWidth >= document.body.offsetHeight) {
    $(".scrollitem1").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("古代文獻");
        TweenMax.to(".scrollitem1", 3, { width: "100%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem1", 3, { width: "5%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem2").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("視覺史料");
        TweenMax.to(".scrollitem2", 3, { width: "100%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem2", 3, { width: "5%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem3").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("近人論著");
        TweenMax.to(".scrollitem3", 3, { width: "100%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem3", 3, { width: "5%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem4").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("報刊網頁");
        TweenMax.to(".scrollitem4", 3, { width: "100%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem4", 3, { width: "5%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 1 });
      }
    );
  } else {
    $(".scrollitem1").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("古代文獻");
        TweenMax.to(".scrollitem1", 3, { width: "100%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem1", 3, { width: "10%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem2").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("視覺史料");
        TweenMax.to(".scrollitem2", 3, { width: "100%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem2", 3, { width: "10%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem3").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("近人論著");
        TweenMax.to(".scrollitem3", 3, { width: "100%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem3", 3, { width: "10%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem4").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("報刊網頁");
        TweenMax.to(".scrollitem4", 3, { width: "100%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem4", 3, { width: "10%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 1 });
      }
    );
  }
}
