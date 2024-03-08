$(function(){
	// ===================== 페이드 인아웃 슬라이딩 
	
		// $(".sliderList").children("div:gt(0)").hide();  // .gt(0) -> 첫번째 요소 이후 요소 선택 
		
		var x = 0;		
		setInterval(function(){
					var next = (x + 1) % 3;				
				 $(".sliderList").find("div").eq(x).fadeOut();// .fadeOut(); 서서히 사라짐  // .eq(변수) -> 지정한 변수만 선택 
				 $(".sliderList").find("div").eq(next).fadeIn(); // .fadeIn(); 서서히 나타짐	
				 x = next;					
		 },2000); // 3초
		 
		 
		 
		 /* 
		 
		 ​

페이드인아웃 스크립트 설명!! 

​

$(".sliderList").children("div:gt(0)").hide();

.sliderList의 3명 자식 div중에서 gt(0)..첫번째 이미지 이상 요소인 

두번째, 세번째 이미지 hide로 숨겨놨다 

​

var x = 0;

x 는 0 

​

페이드효과 3초에 한번씩 돌아가게 할것이므로, 

setInterval로 반복하여 실행해줄것인데, 

​

.sliderList의 div를 찾아 첫번째 박스인 x를 사라지게 하고 

$(".sliderList").find("div").eq(x).fadeOut();

​

.sliderList의 div를 찾아 두번째 박스인 next를 나타나게 한다. 


$(".sliderList").find("div").eq(next).fadeIn();

​

var next는, 두번째 나오는 이미지이다. 

var next = (x + 1) % 3;

​

계속 더하니까, +1 하면, 세번째 이미지가 나온다. 

그다음 나와야 할 이미지가 네번째이면 안되고 첫번째 이미지가 나와야 하니까,

% (나머지)...3으로 나눴을때 나머지를 잡아주면, 0이니까 해결된다. 

​

x = next; 

3초 후에, 슬라이드가 한번 완료되면 next에 들어있던 1을 x에 넣어줌.

*/
		 	// console.log(x); -> 콘솔창에서 확인 
			// setInterval : 일정시간동안 반복하여 실행
			
			// .fadeOut(); 서서히 사라짐
			// .fadeIn(); 서서히 나타짐	
			
			
			// .slideDown > 선택 요소를 말아내리듯 노출
			// .slideUp > 선택 요소를 말아올리듯 숨김
			// .gt(0) -> 첫번째 요소 이후 요소 선택 
			// .eq(변수) -> 지정한 변수만 선택 
			// .on 이벤트 등록 메서드
			// .addClass 선택한 요소에 새클래스 생성
			// .removeClass 선택한 요소에 지정한 클래스 삭제
			// .siblings 선택한 요소를 기준으로 형제 요소들 모두 선택
			
			// var next = (x + 1) % 3;
					// 0 + 1 = 1
					// 1 + 1 = 2
					// 2 + 1 = 3/0
			

	// ===================== 아코디언메뉴 
	
			$(".accordion-menu>ul>li").hover
				(function(){
						$(this).find(".submenu").stop().slideDown(500);
				},
				function(){
						$(this).find(".submenu").stop().slideUp(500);
				}
				);	
				
				
				
				/* 
		var menu = $('.accordion-menu>ul>li');
        var submenu = $('.submenu');
		
        submenu.hide();
        menu.click(function(){
            var clickDt = $(this); // this : (allDt) 이벤트가 발생된 요소
            var choiceDd = menu.next();
            if(choiceDd.css('display')=='none'){
               submenu.slideUp(500);  // .hide();
               choiceDd.slideDown(500); // .show();
            }
        */
		
		
		
		
		
	// ===================== 텝메뉴			

				$("h2").on("click",function(){
					$(this).addClass('on')
					.siblings('h2').removeClass('on');
				});
	// ===================== 레이어 팝업
	
				$(".layerPopup").on("click",function(){
						
						$("#popup").fadeIn();
				});
				
				
				$(".close").on("click",function(){      
						$("#popup").fadeOut();
				});	
});