// menu
const SubItems = document.querySelectorAll('.has-sub-items');
SubItems.forEach((item) =>{
  item.addEventListener('click', ()=>{
    const InnerList = item.nextElementSibling
    const icon = item.querySelector('.sub-item-icon');

    if(InnerList.style.maxHeight) {
      InnerList.style.maxHeight = null;
    } else{
      InnerList.style.maxHeight = InnerList.scrollHeight + 'px';
    }

    if(icon){
      icon.classList.toggle('active');
    }
  })
})

// question
const AccordionBtns = document.querySelectorAll('.p-accordion__btn')
AccordionBtns.forEach((btn)=>{
btn.addEventListener('click', ()=>{
  const AccordionContent = btn.nextElementSibling;
  const AccordionIcon = btn.querySelector('.p-accordion__plus-icon');
  if (AccordionContent.style.maxHeight) {
   AccordionContent.style.maxHeight = null;
 } else {
   // Remove maxHeight only from the clicked content, keeping others open
   AccordionContent.style.maxHeight = AccordionContent.scrollHeight + 'px';
 }
 if(AccordionIcon){
  AccordionIcon.classList.toggle('active');
 }
})
})