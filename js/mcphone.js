var oHd_menu = byId('hd_menu'),
	oHd_nav = byId('hd_nav'),
	oHd_nav_mask = byId('hd_nav_mask'),
	oHd_con_search = byId('hd_con_search'),
	oHd_con_cart = byId('hd_con_cart'),
	oHd_nav_sh = byId('hd_nav_sh'),
	oHd_nav_shop = byId('hd_nav_shop'),
	oHd_nav_p = byId('hd_nav_p'),
	oHd_nav_pro = byId('hd_nav_pro'),
	oHd_nav_shop_txt = byId('hd_nav_shop_txt'),
	oHd_nav_pro_txt = byId('hd_nav_pro_txt');


function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

// 窗口大小改变
window.onresize = function(){
	oHd_nav_pro.className='hd_nav_pro hide';
	oHd_nav_p.style.backgroundColor='';
	oHd_nav_shop.className='hd_nav_shop hide';
	oHd_nav_sh.style.backgroundColor='';

	if(window.innerWidth>=768)
	{	
		oHd_nav_mask.className = 'hide';
		oHd_nav.className='hd_nav hide clearfix';
		oHd_con_search.className = 'hd_con_search iconfont';
		oHd_con_cart.className = 'hd_con_cart iconfont';
		oHd_nav_shop.className= 'hd_nav_shop hide';
		oHd_nav_p.className= 'hd_nav_p hide';
		wrap.style.backgroundColor="";
	}
	else if(window.innerWidth>=1200)
	{
		slider.children[0].children[0].src = '../img/mc08.jpg';
		slider.children[1].children[0].src = '../img/mc09.jpg';
	}
	else
	{

		index==0?wrap.style.backgroundColor="#ddd":wrap.style.backgroundColor="#444";
	}
}

// 菜单点击事件
oHd_menu.onclick = function ()
{	
	oHd_nav_mask.style.height = document.documentElement.clientHeight+'px';
	if(oHd_nav.className=='hd_nav hide clearfix')
	{
		document.documentElement.style.overflow = 'hidden';
		oHd_nav.className = 'hd_nav clearfix';
		oHd_nav_mask.className = 'hd_nav_mask';
		oHd_con_search.className = 'hide';
		oHd_con_cart.className = 'hide';
	}
	else
	{
		document.documentElement.style.overflow = '';
		oHd_nav.className = 'hd_nav hide clearfix';
		oHd_nav_mask.className = 'hide';
		oHd_con_search.className = 'hd_con_search iconfont';
		oHd_con_cart.className = 'hd_con_cart iconfont';
		oHd_nav_shop.className= 'hd_nav_shop hide';
		oHd_nav_pro.className= 'hd_nav_pro hide';
	}
}



oHd_nav_sh.onclick = function (ev)
{
	if(oHd_nav_shop.className=='hd_nav_shop hide')
	{
		oHd_nav_shop.className='hd_nav_shop';
		oHd_nav_pro.className='hd_nav_pro hide';
		if(window.innerWidth<768)
		{
			oHd_nav_shop.style.height = document.documentElement.clientHeight+'px';
		}
	}
	else
	{
		oHd_nav_shop.className='hd_nav_shop hide';
	}
	
	var oEvent = ev || event;	
	oEvent.stopPropagetion?oEvent.stopPropagetion():oEvent.cancelBubble = true;
}

oHd_nav_shop.onclick =function (ev)
{
	oHd_nav_shop.className='hd_nav_shop';

	var oEvent = ev || event;	
	oEvent.stopPropagetion?oEvent.stopPropagetion():oEvent.cancelBubble = true;
	
}

oHd_nav_pro.onclick =function (ev)
{
	oHd_nav_pro.className='hd_nav_pro';

	var oEvent = ev || event;	
	oEvent.stopPropagetion?oEvent.stopPropagetion():oEvent.cancelBubble = true;
	
}
	

oHd_nav_p.onclick = function (ev)
{
	if(oHd_nav_pro.className=='hd_nav_pro hide')
	{
		oHd_nav_pro.className='hd_nav_pro';
		oHd_nav_p.style.backgroundColor='#eee';
		oHd_nav_shop.className='hd_nav_shop hide';
		oHd_nav_sh.style.backgroundColor='';
		if(window.innerWidth<768)
		{
			oHd_nav_pro.style.height = document.documentElement.clientHeight+'px';
		}
	}
	else
	{
		oHd_nav_pro.className='hd_nav_pro hide';
		oHd_nav_p.style.backgroundColor='';
	}

	var oEvent = ev || event;	
	oEvent.stopPropagetion?oEvent.stopPropagetion():oEvent.cancelBubble = true;
}


oHd_nav_sh.onclick = function (ev)
{
	if(oHd_nav_shop.className=='hd_nav_shop hide')
	{
		oHd_nav_pro.className='hd_nav_pro hide';
		oHd_nav_p.style.backgroundColor='';
		oHd_nav_shop.className='hd_nav_shop';
		oHd_nav_sh.style.backgroundColor='#eee';
		if(window.innerWidth<768)
		{
			oHd_nav_shop.style.height = document.documentElement.clientHeight+'px';
		}
	}
	else
	{
		oHd_nav_shop.className='hd_nav_shop hide';
		oHd_nav_sh.style.backgroundColor='';
	}

	var oEvent = ev || event;	
	oEvent.stopPropagetion?oEvent.stopPropagetion():oEvent.cancelBubble = true;
	
}

document.onclick = function (ev)
{
	oHd_nav_shop.className='hd_nav_shop hide';
	oHd_nav_pro.className='hd_nav_pro hide';
	oHd_nav_sh.style.backgroundColor='';
	oHd_nav_p.style.backgroundColor='';
}


oHd_nav_shop_txt.onclick = function (ev)
{
	oHd_nav_shop.className='hd_nav_shop hide';
	oHd_nav_sh.style.backgroundColor='';

	var oEvent = ev || event;	
	oEvent.stopPropagetion?oEvent.stopPropagetion():oEvent.cancelBubble = true;
}

oHd_nav_pro_txt.onclick = function (ev)
{
	oHd_nav_pro.className='hd_nav_pro hide';
	oHd_nav_p.style.backgroundColor='';

	var oEvent = ev || event;	
	oEvent.stopPropagetion?oEvent.stopPropagetion():oEvent.cancelBubble = true;

}




// 轮播图

var timer = null,
	index = 0,
	pics = byId("slider").getElementsByTagName("li"),
	dots = byId("dots").getElementsByTagName("span"),
	wrap = byId('banner_wrap'),
	txt = byId('txt').children,
	len = pics.length,
	pre = byId("pre"),
	start = byId("start"),
	next = byId("next"),
	slider = byId("slider"),
	parm = true;

dots[0].className = "dots_active";

timer = setInterval(autoPlay,3000);

function autoPlay()
{
	index++;
	if(index>=len){
		index = 0;
	}
	changeImg();
}

function changeImg()
{
	for(var i=0;i<len;i++)
	{
		pics[i].className = "hide";
		txt[i].className = "txt_box hide";
		dots[i].className = "";
		txt[i].style.opacity = 0;
		txt[i].style.filter = 'alpha(opacity=0)';
		window.innerWidth>=768?txt[i].style.paddingLeft ='200px':txt[i].style.paddingLeft='';
	}
		pics[index].className = "";
		txt[index].className = "";
		dots[index].className = "dots_active";
		window.innerWidth>=768?startMove(txt[index],{opacity: 100,paddingLeft: 50}):startMove(txt[index],{opacity: 100});
		if(index==1 && window.innerWidth<768)
		{
			wrap.style.backgroundColor="#444";
		}
		else
		{
			if(window.innerWidth<768)
			{
				wrap.style.backgroundColor="#ddd";
			}
		}
}


wrap.onmouseover = function ()
{
	clearInterval(timer);
}
wrap.onmouseout = function ()
{
	if(parm)
	{
		timer = setInterval(autoPlay,3000);
	}
}


for(var i=0;i<len;i++)
{
	dots[i].index = i;
	dots[i].onclick = function ()
	{
		index=this.index;
		changeImg();
	}

}

next.onclick = function ()
{
	index++;
	if(index>=len){
		index=0;
	}
	changeImg();
}
pre.onclick=function ()
{
	index--;
	if(index<0)
	{
		index=len-1;
	}
	changeImg();
}
start.onclick = function ()
{
	clearInterval(timer);
	if(parm)
	{
		start.innerHTML = '&#xe610;';
		clearInterval(timer);
	}
	else
	{
		start.innerHTML = '&#xe834;';
	}
	parm=!parm;

}


function getStyle(obj,attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,json,fn)
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function()
	{
		var bStop = true;
		for(var attr in json)
		{
			var iCur;

			if(attr=='opacity')
			{
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				iCur = parseInt(getStyle(obj,attr));
			}

			var iSpeed = (json[attr]-iCur)/8;
			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

			if(iCur!=json[attr])
			{
				bStop = false;
			}
			if(attr=='opacity')
			{
				obj.style.filter = 'alpha(opacity='+(iCur+iSpeed)+')';
				obj.style.opacity = (iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr] = iCur+iSpeed+'px';
			}
		}

		if(bStop)
		{

			clearInterval(obj.timer);

				if(fn)
				{
					fn();
				}
		}


	},30)
}


function changeSliderImg()
{
	if(document.documentElement.clientWidth>=1200)
	{
		slider.children[0].children[0].src = '../img/mc08.jpg';
		slider.children[1].children[0].src = '../img/mc09.jpg';
	}
	else
	{
		slider.children[0].children[0].src = '../img/mc08.jpg';
		slider.children[1].children[0].src = '../img/mc09.jpg';
	}

	window.innerWidth>=768?wrap.style.backgroundColor="":wrap.style.backgroundColor="#ddd";
}
changeSliderImg();