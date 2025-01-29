// 表示関数

const ShowModal = (selector, duration = 1000) =>{
    const modal = document.querySelector(selector);
    if(modal){
        modal.style.display = 'block';
        modal.style.opacity = '0';
        setTimeout(()=>{
            modal.style.opacity = '1';
            modal.style.transition = 'opacity ${duration}ms';
        },10)
    }
}
const HideModal = (selector, duration = 1000) =>{
    const modal = document.querySelector(selector);
    if(modal){
        modal.style.opacity = '0';
    modal.style.transition = `opacity ${duration}ms`;
        setTimeout(()=>{
            modal.style.display = 'none';

        },duration)
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
     // 2秒後にモーダルを表示
     setTimeout(() => {
        ShowModal('.c-modal', 200);
    }, 500);

    const CloseIcon = document.querySelector('.c-modal__close-icon');
    CloseIcon.addEventListener('click', ()=>{
        HideModal('.c-modal',200)
    })
})