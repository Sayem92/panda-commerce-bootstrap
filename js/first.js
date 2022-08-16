//--------------------------------------    1     -------------------------------
//javascript file connect checking.
console.log('hi first file');

//--------------------------------------    2     -------------------------------
//all h2 tag ar color lightblue kora hoice.
const allh2= document.getElementsByClassName("h2-color");
for (const h2 of allh2){
    h2.style.color='lightblue'
};

//---------------------------------------       3      --------------------------------
//backpack section ar background color tomato kora hoice .
const  backPackSection= document.getElementById('backpack');
backPackSection.style.backgroundColor='tomato';

//---------------------------------------      4    ------------------------------
//all card ar border radius 30px kora hoice.
const allCard=document.getElementsByClassName('card');
for(const card of allCard){
    card.style.borderRadius='30px'
};

//------------------------------------------    5   ---------------------------------
//shoes 1 number ar button a click kolle output nijer console log asbe.
// shoes ar potom button a add kora hoice 
function madeNew(){
     console.log('This is question number 5 ar new function.')
};


//------------------------------------------    6    ----------------------------------
// page ar buy now button a click kolle page teke out hoyhe jabe mane nai.
// carosel ar button gula delete hoy na == button gula upore arekta jinis aice tai click hoy na tai remove hoy na - w-100 den kaj hobe
 const allButton= document.getElementsByClassName('panda-btn-buy-now');
 for( const button of allButton){
     button.addEventListener('click',function(event){
     event.target.remove()
     
     });
 };
//------------------------------------------    7   ----------------------------------
// input field a email sudu likle submit button disabled hobe naile na.
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const text= event.target.value;
    const submitButton= document.getElementById('button-submit');
    if(text == 'email'){
        submitButton.removeAttribute('disabled');
    }
    else{
        submitButton.setAttribute('disabled',true);
    }
});
//------------------------------------------    8    ----------------------------------
// mouse nile new pic and mouse out kolle ager pic show korbe---bag-1 a kaj hoice
function setNewImg(){
    document.getElementById('bag1').src = 'images/bags/bag7.jpg'
}
function setOldImg(){
    document.getElementById('bag1').src = 'images/bags/bag-1.png'
}
//------------------------------------------   9   ----------------------------------
// double click kolle subscribe oitar je kunu jaygay background color will chage.
const subscribers=  document.getElementById('subscribe')
        subscribers.addEventListener('dblclick',function(){
         subscribers.style.backgroundColor= 'aqua'
})