function actionCalcnazbp(obj) {
    var error=false;
    $('input').removeAttr('style');
    var CALC_GIP=$('select[name="CALC_GIP"]').val();
    var CALC_AGE=$('input[name="CALC_AGE"]').val();
    if(!CALC_AGE){
        error=true;
        $('input[name="CALC_AGE"]').css('border','1px solid red');
    }
    var CALC_ACT=$('input[name="CALC_ACT"]').val();
    if(!CALC_ACT){
        error=true;
        $('input[name="CALC_ACT"]').css('border','1px solid red');
    }
    var CALC_ALT=$('input[name="CALC_ALT"]').val();
    if(!CALC_ALT){
        error=true;
        $('input[name="CALC_ALT"]').css('border','1px solid red');
    }
    var CALC_VAL_TROMB=$('input[name="CALC_VAL_TROMB"]').val();
    if(!CALC_VAL_TROMB){
        error=true;
        $('input[name="CALC_VAL_TROMB"]').css('border','1px solid red');
    }
    var CALC_IMT=$('input[name="CALC_IMT"]').val();
    if(!CALC_IMT){
        error=true;
        $('input[name="CALC_IMT"]').css('border','1px solid red');
    }
    var CALC_ALB=$('input[name="CALC_ALB"]').val();
    if(!CALC_ALB){
        error=true;
        $('input[name="CALC_ALB"]').css('border','1px solid red');
    }
    if(!error){


       const $parm_1=-1.675;
       const $parm_2=0.037;
       const $parm_3=0.094;
       const $parm_4=1.13;
       const $parm_5=0.99;
       const $parm_6=0.013;
       const $parm_7=0.66;
        const $RESULTS=Math.round($parm_1+$parm_2-parseFloat(CALC_AGE)+$parm_3-parseFloat(CALC_IMT)+$parm_4*parseFloat(CALC_GIP)+$parm_5*parseFloat(CALC_ACT)/parseFloat(CALC_ALT)-$parm_6*parseFloat(CALC_VAL_TROMB)-$parm_7*(parseFloat(CALC_ALB)/10));
        if($RESULTS<-1.455){
            $RESULTS_TEXT='F0-F2';
        }else if($RESULTS>0.675){
            $RESULTS_TEXT='F3-F4';
        }else {
            $RESULTS_TEXT = 'Неопределенный показатель';
        }
            $('.product__video__total').removeClass('hidden').html(
                `
            <div class="form-tile calculator-total">
                <div class="item">
                    <div class="calculator-result">
                        <span class="point-total">NAFLD Score ${$RESULTS.toFixed(3)}</span>
                        <div class="result-details">
                            <div class="field-item">
                                <label class="label">Стадии фиброза по шкале METAVIR:</label>
                                <div class="input-field">
                                    <span class="result-label">${$RESULTS_TEXT}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);

    }else{
        setTimeout(function () {
            $('.calc_nazbp .product__video__calculate').removeClass('hidden');
        },100);

    }
}

let calc_height = 0
let calc_weight = 0

const rangeInput = document.querySelector("#rangeSlider");
const rangeLabel = document.querySelector(".rangeLabel");

if (rangeInput) {
    rangeInput.addEventListener("input", event => {
        const value = Number(rangeInput.value) / 100;
        calc_height = Math.round(value * 250)
        rangeLabel.innerHTML = Math.round(value * 250);
        calculateBMI()
    });
}

const rangeInputTwo = document.querySelector("#rangeSliderTwo");
const rangeLabelTwo = document.querySelector(".rangeLabelTwo");

if (rangeInputTwo) {
    rangeInputTwo.addEventListener("input", event => {
        const value = Number(rangeInputTwo.value) / 100;
        calc_weight = Math.round(value * 150)
        rangeLabelTwo.innerHTML = Math.round(value * 150);
        calculateBMI()
    });
}

function calculateBMI () {
    let $form = $('.tab-two__inner');
    let bmi = Math.round( calc_weight / (calc_height * calc_height / 100000)) / 10;
    $form.find('.tab-two__inner-text span').html(bmi);
    $form.find('.tab-two__inner-title').removeClass('lack normal excess obesity');

    let degree, label;
    if(bmi < 18.5) {
        degree = 'lack';
        label = 'Недостаток веса';
    } else if (bmi < 24.99) {
        degree = 'normal';
        label = 'Нормальный вес';
    } else if (bmi < 40) {
        degree = 'excess';
        label = 'Излишний вес';
    } else {
        degree = 'obesity';
        label = 'Ожирение III степени';
    }

    $form.find('.tab-two__inner-title').addClass(degree).html(label);
}
if (document.querySelector('.tab__check-btn .btn--color-promo')) {
    $(".tab__check-btn .btn--color-promo").click(function(){
        console.log('hehehehe')
        let grade = 0;
        $(".calculator-child-piu .select-drop").each(function(){
            grade += Number($(this).val());
        })
        $(".calculator-child-piu .calculator-total__title__circle").text(grade);
        if (grade>=5 && grade<=6) {
            $(".calculator-child-piu .calculator-total__title__class").text("А");
            $(".calculator-child-piu .calculator-total__title__age").text("15-20 лет");
            $(".calculator-child-piu .calculator-total__title__percent").text("10%");
        } else if (grade>=7 && grade<=9) {
            $(".calculator-child-piu .calculator-total__title__class").text("B");
            $(".calculator-child-piu .calculator-total__title__age").text("до 10 лет");
            $(".calculator-child-piu .calculator-total__title__percent").text("30%");
        } else {
            $(".calculator-child-piu .calculator-total__title__class").text("C");
            $(".calculator-child-piu .calculator-total__title__age").text("1-3 года");
            $(".calculator-child-piu .calculator-total__title__percent").text("82%");
        }
        $(".calculator-child-piu .product__video__total").removeClass("hidden");
    })
    $(".calculator-child-piu .product__video__total button").click(function(){
        $(".calculator-child-piu .product__video__total").addClass("hidden");
        $(".calculator-child-piu .btn--color-promo").removeClass("hidden");
    })
}