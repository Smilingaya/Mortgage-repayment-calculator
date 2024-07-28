const yellRes=document.querySelector('#res');
const Res=document.querySelector('#res1');
const AmountInput=document.querySelector('#Amount');
const term=document.querySelector('#term');
const Rate=document.querySelector('#Rate');
const repayment=document.querySelector('#repayment');
const Interest=document.querySelector('#Interest');
const btn=document.querySelector('.btn-submit');
const resultCalculator1=document.querySelector('.result-calculator1');
const resultcalculator2=document.querySelector('.result-calculator2');
const Clear=document.querySelector('#Clear');
function onSubmit(e){
    e.preventDefault();
    if(AmountInput.value===''||term.value===''||Rate.value===''){
        AmountInput.classList.add('errore');
        term.classList.add('errore');
        Rate.classList.add('errore');
        document.querySelector('.Amountl').style.color='red';
        document.querySelector('.ratel').style.color='red';
        document.querySelector('.terml').style.color='red';
        resultCalculator1.style.display='grid';
        resultcalculator2.style.display='none';

        setTimeout(()=>GoToBegin(),5000)
    }else{
        let r=(Rate.value/100)/12;
        let n=term.value*12;
        r1=r+1;
        let s1= Math.pow(r1, n);
        let l1= AmountInput.value*r*s1;
        let l2=s1-1;
        let monthpay=l1/l2;
        monthpay=monthpay.toLocaleString('en-US')
        yellRes.textContent=`£${monthpay}`;
        let totalRepay=monthpay*n;
        Res.textContent=`£${totalRepay}`;
        resultCalculator1.style.display='none';
        resultcalculator2.style.display='flex';
    }
    

}

btn.addEventListener('click', onSubmit);

Clear.addEventListener('click',e=>{
AmountInput.value='';
term.value='';
Rate.value='';
resultCalculator1.style.display='grid';
    resultcalculator2.style.display='none';
});
repayment.addEventListener('click', e => {
    document.querySelectorAll('.Mortgage-Type').forEach(el => el.classList.remove('Mortgage-Type-active'));
    document.querySelector('.t1').classList.add('Mortgage-Type-active');
});

Interest.addEventListener('click', e => {
    document.querySelectorAll('.Mortgage-Type').forEach(el => el.classList.remove('Mortgage-Type-active'));
    document.querySelector('.t2').classList.add('Mortgage-Type-active');
});


function GoToBegin(){
    AmountInput.classList.remove('errore');
    term.classList.remove('errore');
    Rate.classList.remove('errore');  
    document.querySelector('.Amountl').style.color='hsl(200, 24%, 40%)';
    document.querySelector('.ratel').style.color='hsl(200, 24%, 40%)';
    document.querySelector('.terml').style.color='hsl(200, 24%, 40%)';
    //
}