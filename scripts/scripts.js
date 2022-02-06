
/*Получения данных с формы в футере и отправка их в locale Storage*/
let submitBtn = document.querySelector('#submit');
submitBtn.addEventListener ('click', function infoForm (){
    let forma = document.forms.forma;
    let userName = forma.elements.name.value;
    let userMail = forma.elements.mail.value;
    let userPhone = forma.elements.telephone.value;
    let userWebsite = forma.elements.website.value;
    let userMessage = forma.elements.message.value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('userMail', userMail );
    localStorage.setItem('userPhone', userPhone);
    localStorage.setItem('userWebsite', userWebsite);
    localStorage.setItem('userMessage', userMessage);
}
)

let burgerButton = document.querySelector('#burgerButton');
burgerButton.addEventListener('click', function(){
  console.log(1);
  let burgerMenu = document.querySelector('#burgerMenu');
  burgerMenu.classList.toggle('burger_menu_active');
})




/*SignUp*/
let singUpButton = document.querySelector('#singUpButton');
singUpButton.addEventListener('click', function(){
  let signUpForma = document.forms.signUpForma;
  let signUpName = signUpForma.elements.signUpName.value;
  let signUpMail = signUpForma.elements.signUpMail.value;
  let signUpPassword = signUpForma.elements.signUpPassword.value;

  localStorage.setItem('signUpName', signUpName);
  localStorage.setItem('signUpMail', signUpMail);
  localStorage.setItem('signUpPassword', signUpPassword);
})









/*Slider*/

//Стартовое значение номер 
let slideIndex = 1;

//функция для кнопки вперед
function nextSlide() {
  slideIndex += 1
  if(slideIndex > 3){
    slideIndex = 1;
  }
}
//Функция для кнопки назад
function previousSlide() {
  slideIndex -= 1
  if(slideIndex < 1){
    slideIndex = 3;
  }
}

// Ищем по id нужный нам елемент
let sliderImage = document.querySelector('#slider');
sliderImage.classList.add(`slide_show${slideIndex}`);



let previousButton = document.querySelector('#previousButton'); // Находим по id кнопку
previousButton.addEventListener ('click', function(){           // слушаем события кнопки и при срабатывании выполняется функция
  sliderImage.classList.remove(`slide_show${slideIndex}`)       // удаляем в елемента sliderImage клас `slide_show${slideIndex}`
  previousSlide();                                              // получаем результат срабатывания функции
  sliderImage.classList.add(`slide_show${slideIndex}`)          // Присваеваем елементу sliderImage клас `slide_show${slideIndex}` с новыми параметрами
})

let nextButton = document.querySelector('#nextButton');   
nextButton.addEventListener ('click', function(){
  sliderImage.classList.remove(`slide_show${slideIndex}`)
  nextSlide();
  sliderImage.classList.add(`slide_show${slideIndex}`)
})
  
