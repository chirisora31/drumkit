
////////////🖱ボタンをマウスで押す/////////////

// 1、 ボタンのをlengthを使って出す。
var numberOfButtons = document.querySelectorAll(".drum").length;

// 2、ボタンがクリックされたらアラートが出るというのをForを使いループさせて７つどのボタンをおしても機能が発動するようにする。
// for の　フォームをおぼえておいて。 i を使って　i に1つづループのたび足していくことで全てに機能がもてるように。

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
//{}の中であればThisをつかってどの要素に対するってのを代用できる。　This = document.querySelectorAll(".drum")[i]を差す。　もう一回書かなくてもいいやん♪

    makeSound(buttonInnerHTML); 　//押されたボタンの文字によってmakeSound function が発動　（26行目）
  });
}




/////////////💻キーボードで押す/////////////
document.addEventListener("keydown", function(event){　　//addEventListenereventをすべてに対して(document)に当てる。
  　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//（evenｔ）をトリガーが行われた時に、keydownが発動しどのKeyが押されたか認識、

  makeSound(event.key);           //これでevent、keyが識別されたら、makeSoundが発動。
});


////♫makeSound機能///

function makeSound(key) { //(key)は（key）キーボードが押されることが、このファンクションのトリガーになるよっていみ。

  switch (key) { //文字（InnnerHTML）がWのとき、toｍ1を鳴らす。
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break; // ｗではなかった場合以下のcaseをrunする

    case "a": //コロン：からブレイク；のなかに書く。
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();


      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
      console.log(buttonInnerHTML);
  }

}
