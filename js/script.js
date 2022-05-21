const animItems = document.querySelector('._scrolled');

if(animItems.length > 0){
	window.addEventListener('scroll', scrollAnim)
	function scrollAnim(){
		for(let index = 0; animItems.length > index; index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight; 
			const animOffset = animItem.scrollTop
			const animStart = 4;
			

			let animPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight){
				animPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animOffset - animPoint) && pageYOffset < (animOffset - animItemHeight)){
			}else{
				animItem.classList.remove('_scrolled')
			}
		}
}
scrollAnim();
}
