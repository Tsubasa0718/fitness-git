const FormBtn = document.getElementById('js-form-btn');
const Toast = document.getElementById('js-toast');

FormBtn.addEventListener('click',(e)=>{
 e.preventDefault();
 if(!FormBtn.disabled){
    Toast.classList.add('active');
    FormBtn.disabled = true; // ボタンを無効化
    setTimeout(() => {
        Toast.classList.remove('active');
    }, 3000); // 3秒間トーストを表示
 }
})