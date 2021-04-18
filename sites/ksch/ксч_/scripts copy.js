//
//
//
//
//

  
document.getElementById('bg').style.opacity="0";
var t;
var to=0;
var mlo = 0;
document.cookie = "max-age=36000000000000";
var oio;

function cookieTgDesh(kjis) {
	function countCookItems() {
		t=0;
		while (t<document.cookie.length){
			if (document.cookie[t]==";"){
				to++;
			}

			t++;
		}
		return to;
	}
	if (getCookie(kjis) === undefined) {
		return "0"
	}
	else{

	
	return getCookie(kjis)
	}
}




function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setCookie(name, value, options = {}) {

	options = {
	  path: '/',
	  // при необходимости добавьте другие значения по умолчанию
	  ...options
	};
  
	if (options.expires instanceof Date) {
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) {
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
	  if (optionValue !== true) {
		updatedCookie += "=" + optionValue;
	  }
	}
  
	document.cookie = updatedCookie;
  }

  function deleteCookie(name) {
	setCookie(name, "", {
	  'max-age': -1
	})
  }	

data = new Date();
hour = data.getHours();

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if( window.innerWidth <= 600 ){
   	// alert(1);

 } 


function onl(thThis) {
//toggle initialization
alert(1);
alert(thThis.getAttribute("toggle"));
	if (thThis.getAttribute("toggle") == 0) {
		alert(thThis.getAttribute("toggle"));
		thThis.firstElementChild.style.left='0%';
      thThis.firstElementChild.style.backgroundColor='#7c7c7c';
      thThis.firstElementChild.style.boxShadow='4px 0 10px -2px #7c7c7c';
      thThis.firstElementChild.style.transform='translate(5%, 5%)';
	}
	else if (thThis.getAttribute("toggle") == 1){
		thThis.firstElementChild.style.left='100%';
      thThis.firstElementChild.style.backgroundColor='#ff898d';
      thThis.firstElementChild.style.boxShadow='-4px 0 10px -2px #ff898d';
      thThis.firstElementChild.style.transform='translate(-105%, 5%)';
	}

	
}



var uslugi = {
  internet : {
	  
    vip: {
      price : '800',
      per : 'month',
      title : 'VIP—Интернет',
      disc : 'Для тех, кто качает много.',
	  toggled : cookieTgDesh('internet.0'),
	  categ : 'internet'
    },

    maxi: {
      price : '700',
      per : 'month',
      title : 'Maxi—Интернет',
      disc : 'Хватит на каждый день.',
      toggled : cookieTgDesh('internet.1'),
	  categ : 'internet'
    },

    ipv6 : {
	  price : '0',
	  per : 'month',
      title : 'Доступ к IPv6',
      disc : 'Более продвинутоее соеденение с интернетом.',
      toggled : cookieTgDesh('internet.2'),
	  categ : 'internet'
    },
    barandmauer : {
      price : '2',
      per : 'day',
      title : 'Брандмауэр',
      disc : 'Автоматическая проверка трафика на наличие угроз и защита ваших данных.',
      toggled : cookieTgDesh('internet.3'),
	  categ : 'internet'
    }
  },


  sales_for_calls : {
	mezhgorod : {
		price : '40',
		per : 'month',
		title : 'Выгодный межгород',
		disc : 'Единая цена на все номера России.',
		toggled : cookieTgDesh('sales_for_calls.0'),
		categ : 'sales_for_calls'
	  },
	  mezhcity : {
		price : '75',
		per : 'month',
		title : 'Выгодные международные звонки',
		disc : 'Звонки в любую страну мира по привлекательной цене.',
		toggled : cookieTgDesh('sales_for_calls.1'),
		categ : 'sales_for_calls'
	  },
  },


  smses : {
	sms100 : {
		price : '50',
		per : 'month',
		title : 'Пакет 100 SMS',
		disc : 'Отправляйте 100 сообщений по предоплаченной цене.',
		toggled : cookieTgDesh('smses.0'),
		categ : 'smses'
	  },
	  sms300 : {
		price : '100',
		per : 'month',
		title : 'Пакет 300 SMS',
		disc : 'Отправляйте 300 сообщений по предоплаченной цене.',
		toggled : cookieTgDesh('smses.1'),
		categ : 'smses'
	  },
	  mms10 : {
		price : '0',
		per : 'month',
		title : 'MMS пакет 10',
		disc : 'Стоимость подключения: 20 руб.',
		toggled : cookieTgDesh('smses.2'),
		categ : 'smses'
	  },
  },


  rouming : {
	zeroWithout : {
		price : '145',
		per : 'month',
		title : 'Ноль без границ',
		disc : 'Бесплатные звонки в поездках по миру.',
		toggled : cookieTgDesh('rouming.0'),
		categ : 'rouming'
	  },
	  bitGran : {
		price : '450',
		per : 'month',
		title : 'БИТ за границей',
		disc : 'Подойдет для просмотра почты и соцсетей.Если вы не пользуетесь интернетом за границей, плата за опцию не списывается',
		toggled : cookieTgDesh('rouming.1'),
		categ : 'rouming'
	  },
	  maxiGran : {
		price : '700',
		per : 'month',
		title : 'Макси БИТ за границей',
		disc : 'Рекомендуем для доступа к почте, общения в соцсетях, использования карт и навигации. Если вы не пользуетесь интернетом за границей, плата за опцию не списывается.',
		toggled : cookieTgDesh('rouming.2'),
		categ : 'rouming'
	  },
  },

  fun : {
	mtsAmedia : {
		price : '600',
		per : 'month',
		title : 'эМТС Amediateka',
		disc : 'Тысячи сериалов в русской озвучке и на английском языке с субтитрами.',
		toggled : cookieTgDesh('fun.0'),
		categ : 'fun'
	  },
	  matSport : {
		price : '60',
		per : 'month',
		title : 'эМТС спорт',
		disc : 'Пакет каналов для любителей спорта.',
		toggled : cookieTgDesh('fun.1'),
		categ : 'fun'
	  },
	  mult : {
		price : '0',
		per : 'month',
		title : 'Подписка “Мульт”',
		disc : '«Ми-ми-мишки», «Сказочный патруль» и еще 7000 серий любимых мультиков в детском онлайн-кинотеатре.',
		toggled : cookieTgDesh('fun.2'),
		categ : 'fun'
	  },
  },

  zero : {
	obesh : {
		price : '0',
		per : 'month',
		title : 'Обещанный платеж',
		disc : 'Даже если у вас ноль на счете, вы всегда сможете мгновенно пополнить свой баланс с помощью мобильного телефона.',
		toggled : cookieTgDesh('zero.0'),
		categ : 'zero'
	  },
	  popolMne : {
		price : '0',
		per : 'month',
		title : 'Пополни мне счет',
		disc : 'Отправляйте бесплатные сообщения с просьбой пополнить счет.',
		toggled : cookieTgDesh('zero.1'),
		categ : 'zero'
	  }
  }

}

function checkPlat(parent) {
    for (let price in parent) {
        if (parent[price].price != '0') {
            return true;
        }
    }

    return false;
}
function checkBesplat(parent) {
    for (let price in parent) {
        if (parent[price].price == '0') {
            return true;
        }
    }

    return false;
}

function checkToggled(parent) {
    for (let toggled in parent) {
        if (parent[toggled].toggled == '1') {
            return true;
        }
    }

    return false;
}

function toggleIdF(efa) {
	if (efa == 0) {
		return "left: 0%; background-color: rgb(124, 124, 124); box-shadow: rgb(124, 124, 124) 4px 0px 10px -2px; transform: translate(5%, 5%); cursor: pointer;"
	}
	else if (efa == 1) {
		return "left: 100%; background-color: rgb(255, 137, 141); box-shadow: rgb(255, 137, 141) -4px 0px 10px -2px; transform: translate(-105%, 5%); cursor: pointer;"
	}
}
function sutF (wvw) {
	if (wvw == "day") {
		return "день"
	}
	else if (wvw == "month") {
		return "мес."
	}
}
var uslugiWCount = 2;
var i = 0;
var platShows=0;
var besShows=0;
var priobP='';
var priobB='';
var wfweougyc;
function uslugiCategorize(categ, ucThis) {
	mlo=1;
	$(".uslugiCategItem").css("backgroundColor","#cacaca");
	$(".uslugiCategItem").css("color","#414141");
	ucThis.style.backgroundColor="red";
	ucThis.style.color="white";
	document.getElementById('cows').innerHTML="";
	uslugiWCount = 2;
	platShows=0;
	priobP='';
	priobB='';
		besShows=0;
		wfweougyc=getRandomInRange(0, 100000000000000);
		wfweougyc2=getRandomInRange(0, 100000000000000);
	
	function uslCategF(categg) {
		
		if (checkBesplat(uslugi[categg]) == true) { //если есть бесплатные
			
			if(besShows==0){
				uslugiWCount -=1;
				document.getElementById('cows').innerHTML+=`<div id="a`+wfweougyc+`" class="uslugiBezPlat">
			 <div class="uslugaTitle">Бесплатные</div>`;
			 besShows++;
			 priobB=1;
			}
			 
			//uslugi.categg[Object.keys(uslugi.categg)[0]].price
			
			
			i=0;
			while (i< Object.keys(uslugi[categg]).length){
				if (uslugi[categg][Object.keys(uslugi[categg])[i]].price == "0") {
					document.getElementById("a"+wfweougyc).innerHTML+=`<div class="uslugaItem">
				<div class="uslugaName">`+uslugi[categg][Object.keys(uslugi[categg])[i]].title+`
					<div onclick="toggle(this)" tgId='`+categg+'.'+i+`' onload="alert(1)" toggle='`+uslugi[categg][Object.keys(uslugi[categg])[i]].toggled+`' class="toggle"><div style="`+toggleIdF(uslugi[categg][Object.keys(uslugi[categg])[i]].toggled)+`" class="toggleCir"></div></div>
				</div><br>
				<div class="uslugaDisc">`+uslugi[categg][Object.keys(uslugi[categg])[i]].disc+`</div>
			</div></div>`;
				}
				
	
			i++;
			}
			
		}
		if (checkPlat(uslugi[categg]) == true) {
			//если есть платные
			if(platShows==0){
				uslugiWCount -=1;
				
				 document.getElementById('cows').innerHTML+=`<div id="a`+wfweougyc2+`" class="uslugiPlat">
				 <div class="uslugaTitle">Платные</div>`;
				 platShows++;
				 priobP=1;
			}
			
			//uslugi.categg[Object.keys(uslugi.categg)[0]].price
			
			
			i=0;
			while (i< Object.keys(uslugi[categg]).length){
				if (uslugi[categg][Object.keys(uslugi[categg])[i]].price != "0") {
				document.getElementById("a"+wfweougyc2).innerHTML+=`<div class="uslugaItem">
				<div class="uslugaName">`+uslugi[categg][Object.keys(uslugi[categg])[i]].title+`
				<div class="uslugaPrice">`+uslugi[categg][Object.keys(uslugi[categg])[i]].price+` ₽/`+sutF(uslugi[categg][Object.keys(uslugi[categg])[i]].per)+`
				<div onclick="toggle(this)" tgId='`+categg+'.'+i+`' onload="alert(1)" toggle='`+uslugi[categg][Object.keys(uslugi[categg])[i]].toggled+`' class="toggle"><div style="`+toggleIdF(uslugi[categg][Object.keys(uslugi[categg])[i]].toggled)+`" class="toggleCir"></div></div>
			</div>
				</div><br>
				<div class="uslugaDisc">`+uslugi[categg][Object.keys(uslugi[categg])[i]].disc+`</div>
			</div></div>`;
				}
	
				i++;
			}
		}
	}
	
	if (categ == "all"){
		
		for (var indext = 0; indext < Object.keys(uslugi).length; indext++) {
			uslCategF(Object.keys(uslugi)[indext]);
			
		}
	}
	else {
		uslCategF(categ);
	}
	if (uslugiWCount == 1) {
		if(priobB == 1) {
			document.getElementById("a"+wfweougyc).style.width="100%";
		document.getElementById("a"+wfweougyc).style.position="relative";
		}
		if(priobP == 1) {
			document.getElementById("a"+wfweougyc2).style.width="100%";
		document.getElementById("a"+wfweougyc2).style.position="relative";
		}
	}
}







function obeshOn() {
  $('.header').css( "top", "-10vh" );
  $('.bdyCont').css( "filter", "blur(5px)" );
  // $('.obesh').css( "filter", "blur(0px)" );
  document.getElementById('obesh').style.display="inline-block";
  document.getElementById('bg').style.display="inline-block";
  document.getElementById('bdy').style.overflow="hidden";
  setTimeout(function(){
    document.getElementById('obesh').style.opacity="1";
  document.getElementById('bg').style.opacity="1";
  }, 1);
  
}

function obeshOff() {
  // $('#bdy').css( "filter", "blur(0px)" );
  // $('#obesh').css( "filter", "blur(0px)" );
  $('.bdyCont').css( "filter", "blur(0px)" );
  $('.header').css( "top", "0vh" );
  document.getElementById('obesh').style.opacity="0";
  
  document.getElementById('bg').style.opacity="0";

  setTimeout(function(){
    document.getElementById('bg').style.display="none";
    document.getElementById('bdy').style.overflow="auto";
    document.getElementById('obesh').style.display="none";
  }, 200)
}
var kewjqfu;
var kewjqfuOld;
var ik1=0;
function obeshComiss(eveh4) {
  ik1=0;
  if (document.getElementById('obeshInp').value <= 0 || document.getElementById('obeshInp').value >= 300){
    document.getElementById('obeshComiss').innerHTML='<span id="bcId">Такого не бывает</span>';
  }
  else if (document.getElementById('obeshInp').value == ""){
    document.getElementById('obeshComiss').innerHTML='<span id="bcId">Введите сумму</span>';
  }
  else {
    kewjqfuOld = Number(document.getElementById('obeshInp').value);
    kewjqfu = Number(document.getElementById('obeshInp').value);
    if (kewjqfu <= 19) {kewjqfu+=5}
    else if (kewjqfu >= 20 && kewjqfu <= 49) {kewjqfu+=10}
    else if (kewjqfu >= 50 && kewjqfu <= 74) {kewjqfu+=20}
    else if (kewjqfu >= 75 && kewjqfu <= 99) {kewjqfu+=30}
    else if (kewjqfu >= 100 && kewjqfu <= 300) {kewjqfu+=70}
    document.getElementById('obeshComiss').innerHTML='Через 3 дня спишутся <span id="bcId">'+kewjqfu+'₽</span>';
    ik1=9;
  }

  function obeshSubmit() {
    if (ik1 == 9) {
         
      document.getElementById('obeshComiss').innerHTML='Загрузка<span id="bcId"></span>';
      document.getElementById('obeshImg').style.display='inline-block';
      setTimeout(function(){
        document.getElementById('obeshImg').style.opacity="1";
      }, 1);
      setTimeout(function(){
        document.getElementById('obeshImg').style.opacity="0";
      }, 500);
      setTimeout(function(){
        document.getElementById('obeshImg').style.display='none';
        eveh4.value='';
        document.getElementById('obeshComiss').innerHTML='Вам отправлено <span id="bcId">'+kewjqfuOld+'₽, поздравляем.</span>';
    },700);
  ik1=0;
  }
  }

  $('#obeshBtn').click(
    function(){
      obeshSubmit();
      
    },);


    $("#obeshInp").keyup(function(event){
      if(event.keyCode == 13){
          event.preventDefault();
          obeshSubmit();
      }
  });
}





function perezvonOn() {
  $('.bdyCont').css( "filter", "blur(5px)" );
  $('.header').css( "top", "-10vh" );
  document.getElementById('perezvon').style.display="inline-block";
  document.getElementById('bg').style.display="inline-block";
  document.getElementById('bdy').style.overflow="hidden";
  setTimeout(function(){
    document.getElementById('perezvon').style.opacity="1";
  document.getElementById('bg').style.opacity="1";
  }, 1);
  
}

function perezvonOff() {
  $('.bdyCont').css( "filter", "blur(0px)" );
  $('.header').css( "top", "0vh" );
  document.getElementById('perezvon').style.opacity="0";
  
  document.getElementById('bg').style.opacity="0";

  setTimeout(function(){
    document.getElementById('bg').style.display="none";
    document.getElementById('bdy').style.overflow="auto";
    document.getElementById('perezvon').style.display="none";
  }, 200)
}

  var mkjn;
  var i=0;
  var i1=0;
  var uiCo=5;
  var luckyCount=0;
function perezvonInput(iuyttrj) {
  mkjn=iuyttrj.value;
  i=0;
  i1=0;
  console.log(mkjn);
  if ((mkjn.slice(1)*2)/2 == mkjn.slice(1)) {
    document.getElementById('perezvonComfirm').innerHTML='На номер <span id="perComNum">'+mkjn+'</span> cимволы отправится сообщение “Перезвони мне пожалуйста!”';
    if (mkjn.length > 10 &&mkjn.length < 15) {
              document.getElementById('perezvonComfirm').innerHTML='На номер <span id="perComNum">'+mkjn+'</span> отправится сообщение “Перезвони мне пожалуйста!”';

              if ((mkjn[0]*2)/2==mkjn[0] || mkjn[0]=='+' ) {
                document.getElementById('perezvonComfirm').innerHTML='На номер <span id="perComNum">'+mkjn+'</span> отправится сообщение “Перезвони мне пожалуйста!”';
                i1=9;
              }
              else {
                document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Нужны только цифры и плюс в началае.';
              }
      
            }
            else {
              document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Номер не подходит по колличеству цифр.';
      
            }
  } 
  else {
    document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Пиши, начиная с плюса или сразу номер. Но без букв и ещё каких–то символов.';
  }

    function perezvonSubmit() {
      if (i1 == 9) {
        document.getElementById('perezvonImg').style.display='inline-block';
        setTimeout(function(){
          document.getElementById('perezvonImg').style.opacity="1";
        }, 1);
        setTimeout(function(){
          document.getElementById('perezvonImg').style.opacity="0";
        }, 500);
        setTimeout(function(){
          document.getElementById('perezvonImg').style.display='none';
          iuyttrj.value='';
          document.getElementById('perezvonComfirm').innerHTML='Отправлено, поздравляем!';
          if (uiCo > 0) {
            if (uiCo == 5) {
              document.getElementById('uiCount').innerHTML='4 сообщения';
              uiCo=4;
            }
            else if (uiCo == 4) {
              document.getElementById('uiCount').innerHTML='3 сообщения';
              uiCo=3;
            }
            else if (uiCo == 3) {
              document.getElementById('uiCount').innerHTML='2 сообщения';
              uiCo=2;
            }
            else if (uiCo == 2) {
              document.getElementById('uiCount').innerHTML='1 сообщение';
              uiCo=1;
            }
            else if (uiCo == 1) {
              if (luckyCount == 1) {
                document.getElementById('ui').innerHTML='Вы выиграли в лотерею ещё одно сообщение! <span id="uiCount" class="uiCount"></span>';
              }
              else if (luckyCount >= 2 && luckyCount < 5) {
                document.getElementById('ui').innerHTML='Максимальная удача! Вы выиграли в лотерею ЕЩЁ одно сообщение! <span id="uiCount" class="uiCount"></span>';
              }else if (luckyCount >= 5) {
                document.getElementById('ui').style.color='rebeccapurple';
                document.getElementById('ui').innerHTML='Что..? <span id="uiCount" class="uiCount">У вас <inf></inf> сообщений.</span>';
              }
              uiCo=1;
              luckyCount++;
            }
          }
          
        }, 700);
      i1=0;}
    }

    $('#perezvonBtn').click(
      function(){
        perezvonSubmit();
      },);

      $("#perezvonInp").keyup(function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            perezvonSubmit();
        }
    });

      
  









//   if (mkjn.length>0){
//   if (mkjn[mkjn.length-1] == '0' || mkjn[mkjn.length-1] == '1' || mkjn[mkjn.length-1] == '2'|| mkjn[mkjn.length-1] == '3'|| mkjn[mkjn.length-1] == '4'|| mkjn[mkjn.length-1] == '5'|| mkjn[mkjn.length-1] == '6'|| mkjn[mkjn.length-1] == '7'|| mkjn[mkjn.length-1] == '8'|| mkjn[mkjn.length-1] == '9'|| mkjn[mkjn.length-1] == '+') {
//     if (mkjn[0] == '0' || mkjn[0] == '1' || mkjn[0] == '2' || mkjn[0] == '3'  || mkjn[0] == '4' || mkjn[0] == '5' || mkjn[0] == '6'  || mkjn[0] == '7' || mkjn[0] == '8' || mkjn[0] == '9'  || mkjn[0] == '+') {
//       if (mkjn.length > 10 &&mkjn.length < 15) {
//         document.getElementById('perezvonComfirm').innerHTML='На номер <span id="perComNum">'+mkjn+'</span> отправится сообщение “Перезвони мне пожалуйста!”';

//       }
//       else {
//         document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Номер не подходит по колличеству цифр.';

//       }
//     }
//     else{
//       document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Пиши, начиная с плюса, или сразу номер. Но без букв.';
//     }
//   }
//   else {
//     document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Нужны только цифры и плюс в началае.';
//   }
// }


  
}


// while (i < mkjn.length) {
//   // if(mkjn[i-1] == '+') {
//   //   iuyttrj.value='';
//   // }

//   if (mkjn[i]!='0' && mkjn[i]!='1' && mkjn[i]!='2' && mkjn[i]!='3' && mkjn[i]!='4' && mkjn[i]!='5' && mkjn[i]!='6' && mkjn[i]!='7' && mkjn[i]!='8' && mkjn[i]!='9'){

//     document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Номер не подходит по символам.';
    
//   }
//   else {
//     document.getElementById('perezvonComfirm').innerHTML='На номер <span id="perComNum">'+mkjn+'</span> отправится сообщение “Перезвони мне пожалуйста!”';
//     if (mkjn.length <11 || mkjn.length >14) {
//       document.getElementById('perezvonComfirm').innerHTML='Невозможно отправить сообщение. Номер не подходит по колличеству.'
//     }
//     else {
//       document.getElementById('perezvonComfirm').innerHTML='На номер <span id="perComNum">'+mkjn+'</span> отправится сообщение “Перезвони мне пожалуйста!”'
//     // document.getElementById('perezvonComfirm').innerHTML='На номер <span id="perComNum">......</span> отправится сообщение “Перезвони мне пожалуйста!”'
//     }
//   }
//   i++;
// }

var tyhg;
var io1=0;
function popolInput(kwtceve) {
  io1=0;
  document.getElementById('popolSpan').innerHTML='или'
  tyhg=kwtceve.value;
  if (tyhg > 0 && tyhg <= 30000) {
    io1=9;
    document.getElementById('popolSpan').innerHTML='На счет будет переведено '+tyhg+'₽. Ок?';
  }else {
    document.getElementById('popolSpan').innerHTML='Так нельзя.';
  }

  function popolSubmit() {
    if (io1 == 9) {
      io1=0;
      document.getElementById('popolSpan').innerHTML='Загрузка';
      document.getElementById('popolImg').style.display='inline-block';
      setTimeout(function(){
        document.getElementById('popolImg').style.opacity="1";
      }, 1);
      setTimeout(function(){
        document.getElementById('popolImg').style.opacity="0";
      }, 1200);
      setTimeout(function(){
        document.getElementById('popolImg').style.display='none';
        kwtceve.value='';
        document.getElementById('popolSpan').innerHTML='Ошибка. Не удалось превратить воздух в '+tyhg+'₽. Повторите попытку.';
    },1400);
    setTimeout(function(){
      document.getElementById('popolSpan').innerHTML='или';
    }, 6000);

  }
  }

    $('#popolBtn').click(
      function(){
        popolSubmit();
      },);

      $("#popolInp").keyup(function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            popolSubmit();
        }
    });
}








function diagramColorShow(tt){
    console.log(tt.id);
    el='.'+tt.id+'Id';
    $('.sector').css('opacity', '0.1');
    $(el).css('opacity', '1');
    document.getElementById('contBox').style.opacity="0";
    setTimeout(function() {
    document.getElementById('contBox').style.opacity="1";
    document.getElementById('contBox').innerHTML='<div id="cb1">'+document.getElementById(tt.getAttribute('id')+'Name').innerHTML+'</div><div id="cb2">'+document.getElementById(tt.getAttribute('id')+'Pr').innerHTML+'</div>';
	},200);
    tt.onmouseout = function() {
        $('.sector').css('opacity', '1');
        document.getElementById('contBox').style.opacity="0";
        
        setTimeout(function() {
    document.getElementById('contBox').style.opacity="1";
    document.getElementById('contBox').innerHTML='<div id="cb1">Всего</div><div id="cb2">90₽</div>';
	},200);
    $(el).css('opacity', '1');
  };
}


function m1s(jii) {
  return jii.slice(1);
}






var fjw;
var maxValue = 25;
var container = $('.container');
 


var kwywk;

$('.sector').hover(
function(){
  document.getElementById('contBox').style.opacity="0";
  kwywk=this;
  setTimeout(function() {
    document.getElementById('contBox').style.opacity="1";
    document.getElementById('contBox').innerHTML='<div id="cb1">'+document.getElementById(kwywk.getAttribute('sectorId')+'Name').innerHTML+'</div><div id="cb2">'+document.getElementById(kwywk.getAttribute('sectorId')+'Pr').innerHTML+'</div>';
	},200);
  
  
    document.getElementById(this.getAttribute('sectorId')+'Fhf').style.opacity='0.8';
  
},
function(){
 
  document.getElementById('contBox').style.opacity="0";
  setTimeout(function() {
    document.getElementById('contBox').style.opacity="1";
    document.getElementById('contBox').innerHTML='<div id="cb1">Всего</div><div id="cb2">90₽</div>';
	},200);
  document.getElementById(this.getAttribute('sectorId')+'Fhf').style.opacity='0.3';
});

var toggleId;
function toggle(toggleThis) {
  toggleId=toggleThis.getAttribute('toggle');
  if (toggleId == 1) {
      toggleId=0;
      toggleThis.removeAttribute('toggle');
      toggleThis.setAttribute('toggle', '0');
      toggleThis.firstElementChild.style.left='0%';
      toggleThis.firstElementChild.style.backgroundColor='#7c7c7c';
      toggleThis.firstElementChild.style.boxShadow='4px 0 10px -2px #7c7c7c';
      toggleThis.firstElementChild.style.transform='translate(5%, 5%)';
      toggleThis.firstElementChild.style.cursor='progress';
      setTimeout(function() {toggleThis.firstElementChild.style.cursor='pointer';
      toggleThis.parentNode.parentNode.style.opacity='0.4';}, 800);


  }
  else if (toggleId == 0) {
    toggleId=1;
    toggleThis.removeAttribute('toggle');
      toggleThis.setAttribute('toggle', '1');
      toggleThis.firstElementChild.style.left='100%';
      toggleThis.firstElementChild.style.backgroundColor='#ff898d';
      toggleThis.firstElementChild.style.boxShadow='-4px 0 10px -2px #ff898d';
      toggleThis.firstElementChild.style.transform='translate(-105%, 5%)';
      toggleThis.firstElementChild.style.cursor='progress';
      setTimeout(function() {toggleThis.firstElementChild.style.cursor='pointer';
      toggleThis.parentNode.parentNode.style.opacity='1';}, 800);
  }
  setCookie(toggleThis.getAttribute('tgid'), toggleId);
  // alert(toggleThis.parentNode.parentNode.getAttribute('class'));
}

function uslugiChange(usChId) {
  if (usChId == 1) {
    document.getElementById('myUslugi').removeAttribute('onclick');
    document.getElementById('notMyUslugi').setAttribute('onclick', 'uslugiChange(2)');

    document.getElementById('myUslugi').style.opacity='1';
    document.getElementById('notMyUslugi').style.cursor='pointer';
    document.getElementById('myUslugi').style.boxShadow='0px 3px 0 -0.5px #ff313199';
    document.getElementById('notMyUslugi').style.opacity='0.5';
    document.getElementById('notMyUslugi').style.boxShadow='none';
    document.getElementById('myUslugi').style.cursor='default';

	document.getElementById('uslugiListCont').style.display='inline-block';
	
	document.getElementById('uslugiListCont2').style.display='none';
	setTimeout(function(){
		document.getElementById('uslugiListCont2').style.opacity='0';
	document.getElementById('uslugiListCont').style.opacity='1';
	},1);
  }
  else {
	  if (mlo == 0){
		uslugiCategorize("all", document.getElementById("uscatAll"))
	  }
    document.getElementById('notMyUslugi').removeAttribute('onclick');
    document.getElementById('myUslugi').setAttribute('onclick', 'uslugiChange(1)');

    document.getElementById('myUslugi').style.opacity='0.5';
    document.getElementById('myUslugi').style.boxShadow='none';
    document.getElementById('notMyUslugi').style.cursor='default';
    document.getElementById('notMyUslugi').style.opacity='1';
    document.getElementById('myUslugi').style.cursor='pointer';
    document.getElementById('notMyUslugi').style.boxShadow='0px 3px 0 -0.5px #ff313199';

	document.getElementById('uslugiListCont').style.display='none';
	
	document.getElementById('uslugiListCont2').style.display='inline-block';
	setTimeout(function(){
		document.getElementById('uslugiListCont2').style.opacity='1';
	document.getElementById('uslugiListCont').style.opacity='0';
	},1);
  }
}

function usCodesDGet(wdww) {
	if (wdww ==  0) {
		usCodesD=usCodes.a;
	}
	else if (wdww ==  1) {
		usCodesD=usCodes.b;
	}
	else if (wdww ==  2) {
		usCodesD=usCodes.c;
	}
	else if (wdww ==  3) {
		usCodesD=usCodes.d;
	}
	else if (wdww ==  4) {
		usCodesD=usCodes.e;
	}
	else if (wdww ==  5) {
		usCodesD=usCodes.f;
	}
}
var par1;
var par3;
var siome;
var siomeP;
var siomeArr;
var siomeArrCo;
var siomeArr2;
var siomeArrCo2;
function doubleCheckPlat(par) {
	siome=0;
	siomeP=0;
	par1=0;
	par3=0;
	siomeArr=[''];
	siomeArrCo=0;
	siomeArr2=[''];
	siomeArrCo2=0;

	// Object.values(par).length
	// var par1= Object.keys(par)[0]; var par3 = Object.keys(par[par1])[0]; par[par1][par3]
	for (let index = 0; index < Object.keys(par).length; index++) {
		par1=Object.keys(par)[index];
		
		for (let indexx = 0; indexx < Object.keys(par[par1]).length; indexx++) {
			par3=Object.keys(par[par1])[indexx];
			if (par[par1][par3].price != "0" && par[par1][par3].toggled == "1"){
				siome++;
				siomeP+=Number(par[par1][par3].price);
				siomeArr[siomeArrCo]=par[par1][par3].price;
				siomeArrCo++;
				siomeArr2[siomeArrCo2]=par[par1][par3].categ;
				siomeArrCo2++;
				// siomeArr[indexx];
			}
		}
	}
	
	if (siome > 0) {
		return true
	}
	return false
}
function doubleCheckBesplat(par) {
	siome=0;
	par1=0;
	par3=0;
	// Object.values(par).length
	// var par1= Object.keys(par)[0]; var par3 = Object.keys(par[par1])[0]; par[par1][par3]
	for (let index = 0; index < Object.keys(par).length; index++) {
		par1=Object.keys(par)[index];
		for (let indexx = 0; indexx < Object.keys(par[par1]).length; indexx++) {
			par3=Object.keys(par[par1])[indexx];
			if (par[par1][par3].price == "0" && par[par1][par3].toggled == "1"){
				siome++;
			}
		}
	}
	if (siome > 0) {
		return true
	}
	return false
}

var usCodes = {
	'a' : "internet",
	'b' : "sales_for_calls",
	'c' : "smses",
	'd' : "rouming",
	'e' : "fun",
	'f' : "zero",
}
var nkjus;
var nkjus2;
var uedgwtC=0;

function ijket() {
	uedgwtC=0;
	nkjus=0;
	nkjus2=0;
	uslugiWCount = 2;
	if (document.getElementById("notMyUslugi").getAttribute("onclick") == "uslugiChange(2)") {
		// document.getElementById("uslugiListCont").innerHTML="";
		t=0;
	while (t <= 5){ 
		usCodesDGet(t);
		if (checkBesplat(uslugi[usCodesD]) == true && doubleCheckBesplat(uslugi) == true) { //если есть бесплатные

			if (nkjus == 0) {
				uslugiWCount -=1;
			wfweougyc=getRandomInRange(0, 100000000000000)
			
			 document.getElementById('uslugiListCont').innerHTML+=`<div id="a`+wfweougyc+`" class="uslugiBezPlat">
			 <div class="uslugaTitle">Бесплатные</div>`;
			 nkjus=1;
			}
			
			//uslugi.usCodesD[Object.keys(uslugi.usCodesD)[0]].price
			
			
			i=0;
			while (i< Object.keys(uslugi[usCodesD]).length){
				if (uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].price == "0" && uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled == "1") {
					document.getElementById("a"+wfweougyc).innerHTML+=`<div class="uslugaItem">
				<div class="uslugaName">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].title+`
					<div onclick="toggle(this)" tgId='`+usCodesD+'.'+i+`' onload="alert(1)" toggle='`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled+`' class="toggle"><div style="`+toggleIdF(uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled)+`" class="toggleCir"></div></div>
				</div><br>
				<div class="uslugaDisc">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].disc+`</div>
			</div></div>`;uedgwtC++;
				}
				
	
			i++;
			
			}
			
		}
	t++;}
	t=0;
	while (t <= 5){ 
		usCodesDGet(t);
		if (checkPlat(uslugi[usCodesD]) == true && doubleCheckPlat(uslugi) == true) {
			//если есть платные
			if (nkjus2 == 0 && checkPlat(uslugi[usCodesD]) == true) {
			uslugiWCount -=1;
			wfweougyc=getRandomInRange(0, 100000000000000)
			
			 document.getElementById('uslugiListCont').innerHTML+=`<div id="a`+wfweougyc+`" class="uslugiPlat">
			 <div class="uslugaTitle">Платные</div>`
			//uslugi.usCodesD[Object.keys(uslugi.usCodesD)[0]].price
			nkjus2=1;	
			}
			
			i=0;
			while (i< Object.keys(uslugi[usCodesD]).length){
				if (uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].price != "0" && uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled == "1") {
				document.getElementById("a"+wfweougyc).innerHTML+=`<div class="uslugaItem">
				<div class="uslugaName">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].title+`
				<div class="uslugaPrice">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].price+` ₽/`+sutF(uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].per)+`
				<div onclick="toggle(this)" tgId='`+usCodesD+'.'+i+`' onload="alert(1)" toggle='`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled+`' class="toggle"><div style="`+toggleIdF(uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled)+`" class="toggleCir"></div></div>
			</div>
				</div><br>
				<div class="uslugaDisc">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].disc+`</div>
			</div></div>`;uedgwtC++;
				}
	
				i++;
				
			}
		}
	t++;}
		if (uedgwtC == 0) {
			document.getElementById('uslugiListCont').innerHTML="<div id='uslugiNone'>У вас ничего не подключено. Можете выбрать в соседнем меню и обновить страницу.<div>"
		}





	}
	if (uslugiWCount == 1) {
		document.getElementById("a"+wfweougyc).style.width="100%";
		document.getElementById("a"+wfweougyc).style.position="relative";
	}
}

function onlTg(yui) {
	return document.getElementById('bdy').getAttribute('pageId');
}

function siomeDesh() {
	for (let index = 0; index < siomeArr2.length; index++) {
		if (siomeArr2 == 'internet') {
			siomeArr2[index]='Интернет';
		}
		if (siomeArr2 == 'sales_for_calls') {
			siomeArr2[index]='Скидки на звонки';
		}
		if (siomeArr2 == 'smses') {
			siomeArr2[index]='Сообщения';
		}
		if (siomeArr2 == 'rouming') {
			siomeArr2[index]='Роуминг';
		}
		if (siomeArr2 == 'fun') {
			siomeArr2[index]='Развлечения';
		}
		if (siomeArr2 == 'other') {
			siomeArr2[index]='Другое';
		}
		
	}
}

var stataColors = ['7e23ff', 'ff5ae3', 'ff5a5a', 'ffbd5a', '64ff5a', '5affd9','5abbff',]

var stataLinksShow=0;
function ijketC() {
	stataLinksShow=0;
	
	doubleCheckPlat(uslugi);
	sch =Number(substr(document.getElementById('billT').innerHTML,  0, -1));
	document.getElementById('billT').innerHTML=String(sch-siomeP)+'₽';
	

	
	var jfuwkf = document.getElementById('lineLineInt').offsetWidth;
var jfuwkf1 = (jfuwkf/100)*document.getElementById('slpInt').firstElementChild.innerHTML;
document.getElementById('lineLineInt').style.width=jfuwkf1+'px';

jfuwkf = document.getElementById('lineLineMin').offsetWidth;
jfuwkf1 = (jfuwkf/100)*document.getElementById('slpMin').firstElementChild.innerHTML;
document.getElementById('lineLineMin').style.width=jfuwkf1+'px';

jfuwkf = document.getElementById('lineLineSms').offsetWidth;
jfuwkf1 = (jfuwkf/100)*document.getElementById('slpSms').firstElementChild.innerHTML;
document.getElementById('lineLineSms').style.width=jfuwkf1+'px';


	uedgwtC=0;
	nkjus=0;
	nkjus2=0;
	uslugiWCount = 2;
		// document.getElementById("uslugiListCont").innerHTML="";
		t=0;
	while (t <= 5){ 
		usCodesDGet(t);
		if (checkBesplat(uslugi[usCodesD]) == true && doubleCheckBesplat(uslugi) == true) { //если есть бесплатные

			if (nkjus == 0) {
				uslugiWCount -=1;
			wfweougyc=getRandomInRange(0, 100000000000000)
			
			 document.getElementById('uslugiListCont').innerHTML+=`<div id="a`+wfweougyc+`" class="uslugiBezPlat">
			 <div class="uslugaTitle">Бесплатные</div>`;
			 nkjus=1;
			}
			
			//uslugi.usCodesD[Object.keys(uslugi.usCodesD)[0]].price
			
			
			i=0;
			while (i< Object.keys(uslugi[usCodesD]).length){
				if (uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].price == "0" && uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled == "1") {
					document.getElementById("a"+wfweougyc).innerHTML+=`<div class="uslugaItem">
				<div class="uslugaName">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].title+`
					
				</div><br>
				<div class="uslugaDisc">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].disc+`</div>
			</div></div>`;uedgwtC++;
				}
				
	
			i++;
			
			}
			
		}
	t++;}
	t=0;
	while (t <= 5){ 
		usCodesDGet(t);
		if (checkPlat(uslugi[usCodesD]) == true && doubleCheckPlat(uslugi) == true) {
			//если есть платные
			if (nkjus2 == 0 && checkPlat(uslugi[usCodesD]) == true) {
			uslugiWCount -=1;
			wfweougyc=getRandomInRange(0, 100000000000000)
			
			 document.getElementById('uslugiListCont').innerHTML+=`<div id="a`+wfweougyc+`" class="uslugiPlat">
			 <div class="uslugaTitle">Платные</div>`
			//uslugi.usCodesD[Object.keys(uslugi.usCodesD)[0]].price
			nkjus2=1;	
			}
			
			i=0;
			while (i< Object.keys(uslugi[usCodesD]).length){
				if (uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].price != "0" && uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].toggled == "1") {
				document.getElementById("a"+wfweougyc).innerHTML+=`<div class="uslugaItem">
				<div class="uslugaName">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].title+`
				<div class="uslugaPrice">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].price+` ₽/`+sutF(uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].per)+`
				
			</div>
				</div><br>
				<div class="uslugaDisc">`+uslugi[usCodesD][Object.keys(uslugi[usCodesD])[i]].disc+`</div>
			</div></div>`;uedgwtC++;
				}
	
				i++;
				
			}
		}
	t++;}
		if (uedgwtC == 0) {
			document.getElementById('uslugiListCont').innerHTML="<div id='uslugiNone'>У вас ничего не подключено. Можете выбрать в соседнем меню и обновить страницу.<div>"
		}





	
	if (uslugiWCount == 1) {
		document.getElementById("a"+wfweougyc).style.width="100%";
		document.getElementById("a"+wfweougyc).style.position="relative";
	}
}


function profileChange(pcThis) {
	$('.profilechange').css('display','block');
	document.getElementById('bg').style.display='block';
	setTimeout(function(){
		document.getElementById('bg').style.opacity='0.4';
		
	$('.profilechange').css('opacity','1');
	$('.profilechange').css('border-radius','13px');
	$('.profilechange').css('right','3%');
	$('.profilechange').css('top','10vh');
	},1);
	$('#bg').click(
		function(){
			profileChangeOff();
		  
		},);
}

function profileChangeOff(pcThis) {
	document.getElementById('bg').style.opacity='0';
	$('.profilechange').css('opacity','0');
	$('.profilechange').css('border-radius','50%');
	$('.profilechange').css('right','-27%');
	$('.profilechange').css('top','-20vh');
	setTimeout(function(){
		$('.profilechange').css('display','none');
		document.getElementById('bg').style.display='none';
	}, 800);
}
