<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

CModule::IncludeModule('iblock');

$type = (int)($_GET['type'] ?? '');

//if ($type === 7) {
define('IBLOCK_ID', 12);
$filter = [
    'IBLOCK_ID'   => IBLOCK_ID,
    'DEPTH_LEVEL' => 1
];
$firstRegions = [
    'Москва',
    'Московская',
    'Санкт-Петербург',
];
//} else {
//    define('IBLOCK_ID', 28);
//    $filter = [
//        'IBLOCK_ID'   => IBLOCK_ID,
//    'DEPTH_LEVEL' => 1
//    ];
//    $firstRegions = [
//        'Москва г',
//        'Московская обл',
//        'Санкт-Петербург г',
//    ];
//}
$res = CIBlockSection::GetList(array(), $filter, false, array('IBLOCK_ID', 'ID', 'NAME'));

$regions = array();
while($region = $res->GetNext())
{
    $regions[] = array(
        'name' => $region['NAME'],
        'id' => $region['ID']
    );
}
usort($regions, function ($a, $b) use ($firstRegions) {
    $aNameTmp = preg_replace( '/^(обл\. |г\. |р\.п\. |пос\. |с\. |д\. |пгт\. |аул |хутор |стан\. )/iu', '', $a['name']);
    $bNameTmp = preg_replace( '/^(обл\. |г\. |р\.п\. |пос\. |с\. |д\. |пгт\. |аул |хутор |стан\. )/iu', '', $b['name']);

    $aIndex = array_search($aNameTmp, $firstRegions, true);
    $bIndex = array_search($bNameTmp, $firstRegions, true);
    $aName = $aIndex === false ? $a['name'] : '_'.$aIndex;
    $bName = $bIndex === false ? $b['name'] : '_'.$bIndex;

    if ($aName === $bName) {
        return 0;
    }
    return ($aName < $bName) ? -1 : 1;
});

$dateMin = date('Y') - 101;
$dateMax = date('Y') - 16;

$countries = [];
$countriesTmp = GetCountryArray();
foreach ($countriesTmp['reference_id'] as $item => $id) {
    if ($id !== 1) {
        continue;
    }
    $countries[$id] = $countriesTmp['reference'][$item];
}
?>
<section class="registration-section">
    <div class="container">
        <div class="registration__title">
            <h2 class="section__title">Регистрация</h2>
        </div>

        <form id="information" class="information registration_form" onsubmit="return o2.registration.submit(this);">

            <input type="hidden" name="iblockId" value="<?=IBLOCK_ID?>">
            <input type="hidden" name="typeId" value="<?=$type?>">
            <input type="hidden" name="UF_DIRECTION" value="<?=$_SESSION['direction']?>">
            <!-- information__wrap -->
            <div class="information__wrap">

                <div class="information__title">
                    Основная информация
                </div>

                <div class="information__findings information__basic">

                    <label class="input__field">
                        <input id="name"  class="validation__element"
                               name="NAME" type="name" placeholder="Имя *" required
                               data-msg-required="Поле &quot;Имя&quot; не заполнено">
                        <span class="name-span">*</span>
                    </label>

                    <label class="input__field">
                        <input id="surname"  class="validation__element"
                               name="LAST_NAME" type="surname" placeholder="Фамилия *" required
                               data-msg-required="Поле &quot;Фамилия&quot; не заполнено">
                        <span class="surname-span">*</span>
                    </label>

                    <label class="input__field">
                        <input id="middle-name" name="SECOND_NAME" type="middle-name" placeholder="Отчество *" required class="validation__element"
                               data-msg-required="Поле &quot;Отчество&quot; не заполнено">
                        <span class="middle-span">*</span>
                    </label>

                    <label class="input__field">
                        <input id="data" name="PERSONAL_BIRTHDAY" type="text" placeholder="Дата рождения" onfocus="(this.type='date')"
                               onblur="if(this.value==''){this.type='text'}">
                    </label>

                </div>

            </div>
            <!-- information__wrap -->

            <!-- information__wrap -->
            <div class="information__wrap">

                <div class="information__title">
                    Контактная информация
                </div>

                <div class="input__field-wrap-width">

                    <div class="information__findings information__basic">


                        <label class="input__field">
                            <input id="email" name="EMAIL" type="email" required placeholder="E-mail/Логин *">
                            <span class="email-span">*</span>
                        </label>

                        <label class="input__field">
                            <input id="mobile-phone " name="HOME_PHONE" type="home-phone"
                                   placeholder="Мобильный телефон">

                        </label>


                    </div>

                    <div class="information__block">
                        <label class="input__field-width">
                            <input id="password" autocomplete="new-password"
                                   name="PASSWORD"
                                   required minlength="6" type="password" placeholder="Пароль *"
                                   data-msg-required="Поле &quot;Пароль&quot; не заполнено"
                                   data-msg-equalto="Пароль должен быть не менее 6 символов длиной">
                            <span class="password-span">*</span>
                        </label>

                        <label class="input__field-width">
                            <input id="confirm-password"
                                   autocomplete="new-password"
                                   name="CONFIRM_PASSWORD" type="password"
                                   placeholder="Подтвердите пароль *"
                                   required minlength="6"
                                   data-msg-required="Поле &quot;Подтвердите пароль&quot; не заполнено"
                                   data-msg-equalto="Указанные пароли не совпадают">
                        </label>
                    </div>

                </div>

            </div>
            <!-- information__wrap -->

            <!-- information__wrap -->
            <div class="information__wrap">

                <div class="information__title">
                    Данные о работе <br> и должности
                </div>

                <div class="input__field-wrap-width">
                    <label class="input__field-width input-company">
                        <input id="company-address" name="company-address" type="company-address" class="validation__element" placeholder="Адрес компании *" required>

                    </label>



                    <div class="information__findings information__basic">

                        <select class="select-drop js-select2 input__field select  _select-regions"
                                name="WORK_STATE"
                                required
                                data-msg-required="Поле &quot;Регион&quot; не заполнено"
                                onchange="o2.registration.selectRegion(this);">
                            <option disabled selected value>Выберите регион *</option>
                            <? foreach ($regions as $region) { ?>
                                <option value="<?= $region['id'] ?>"><?= $region['name'] ?></option>
                            <? } ?>
                        </select>

                        <select class="validation__select input__field select _select-cities"
                                name="WORK_CITY"
                                disabled
                                onchange="o2.registration.selectCity(this);"
                                data-msg-required="Поле &quot;Город&quot; не заполнено">
                            <option disabled selected value>&nbsp;</option>
                        </select>

                            <select class="validation__select input__field select _select-street"
                                    name="WORK_STREET"
                                    disabled
                                    onchange="o2.registration.selectStreet(this);"
                                    data-msg-required="Поле &quot;Район&quot; не заполнено">
                                <option disabled selected value>&nbsp;</option>
                            </select>

                            <select class="validation__select input__field select _select-clinics"
                                    name="WORK_COMPANY"
                                    disabled
                                    data-msg-required="Должно быть заполнено хотя бы одно из полей Место работы">
                                <option disabled selected value>&nbsp;</option>
                            </select>


                        <label class="input__field">
                            <input id="work-phone" name="WORK_PHONE" type="work-phone" placeholder="Рабочий телефон">
                        </label>

                        <label class="input__field">
                            <input id="work-company"name="UF_WORK_COMPANY_2" type="work-adress"
                                   placeholder="Место работы если нет в списке">
                        </label>

                            <label class="input__field">
                                <input id="work-position"name="WORK_POSITION" type="work-adress" required
                                       placeholder="Занимаемая должность *">
                            </label>

                            <label class="input__field">
                                <input id="work-speciality"name="PERSONAL_PROFESSION" type="work-adress" required
                                       placeholder="Специальность *">
                                <span class="speciality-span">*</span>
                            </label>


                        <label class="input__field">
                            <input id="specialization" name="UF_UNIVER" type="specialization"
                                   placeholder="ВУЗ ">
                        </label>


                    </div>
                </div>

            </div>
            <!-- information__wrap -->

            <!-- information__wrap -->
            <div class="information__wrap">

                <div class="information__title">
                    Домашний адрес
                </div>

                <div class="input__field-wrap-width">
                    <label class="input__field-width">
                        <input id="address" name="address" name="PERSONAL_STREET" placeholder="Улица, дом, квартира">
                    </label>

                    <div class="information__findings information__basic">


                        <label class="input__field">
                            <input id="index" name="index" name="PERSONAL_STREET" placeholder="Индекс">
                        </label>

                        <label class="input__field">
                            <input id="home-phone " name="home-phone" name="PERSONAL_PHONE" placeholder="Домашний телефон">
                        </label>


                    </div>
                </div>

            </div>
            <!-- information__wrap -->

            <!-- information__wrap -->
            <div class="information__wrap">

                <div class="information__title">
                    Откуда Вы узнали о сайте?
                </div>

                <div class="information__findings">

                    <select id="UF_WHERE_LEARN" class="input__field select information__block information__block--select" name="UF_WHERE_LEARN">
                        <option disabled selected value>&nbsp;</option>
                        <option>контактное лицо Эбботт</option>
                        <option>Мероприятие</option>
                        <option>По рекомендации</option>
                    </select>
                    <label id="inputHidden" class="input__field input--hidden">
                        <input id="fio" name="fio" name="FIO" placeholder="ФИО">
                    </label>
                </div>

            </div>
            <!-- information__wrap -->


            <div class="information__bot">


                <div class="information__code-checkbox">

                    <div class="information__code-checkbox-item">

                        <input type="checkbox" class="information-checkbox" id="checkbox" name="checkbox" value="yes"
                               checked="checked">
                        <label for="checkbox">
                            Я подтверждаю свое согласие на обработку персональных данных ООО «Эбботт
                            Лэбораториз» в соответствии с соглашением на использование персональных данных, с которым я
                            ознакомился
                        </label>

                    </div>

                    <div class="information__code-checkbox-item">

                        <input type="checkbox" class="information-checkbox" id="information-website"
                               name="information-website" value="yes" checked="checked">
                        <label for="information-website">
                            Я соглашаюсь с официальным уведомлением
                        </label>

                    </div>

                    <div class="information__code-checkbox-item">

                        <input type="checkbox" class="information-checkbox" id="information-website-two"
                               name="information-website-two" value="yes" checked="checked">
                        <label for="information-website-two">
                            Я согласен на получение рекламных и информационных сообщений от ООО «Эбботт Лэбораториз»
                            посредством использования телефонной и голосовой связи, электронной почты, SMS и
                            мессенджеров
                        </label>

                    </div>

                </div>

                <div class="btn__further-wrap">

                    <button class="btn__further registration_button">
                        зарегистрироваться
                    </button>
                    <div class="btn__further-modal">
                        <div class="btn__modal-content">
                            <div class="btn__modal-title">
                                Спасибо!
                            </div>
                            <div class="btn__modal-text">
                                Мы отправили на почту указанную при регистрации письмо для подтверждения аккаунта,
                                пожалуйста перейдите по ссылке и активируйте аккаунт
                            </div>
                            <div class="btn__modal-close">
                                <span>НА ГЛАВНУЮ</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </form>

    </div>
</section>

<section class="law">

    <div class="container">
        <p>
            В соответствии со статьей 9 Федерального закона от 27 июля 2006 года N° 152-ФЗ «О персональных данных»
            предоставляю своей волей и в своем интересесогласие ООО «Эбботт Лэбораториз», расположенному по адресу:
            125171, Москва, Ленинградское шоссе, д.16А, строение 1, на обработку моих персональных данных, указанных в
            настоящей анкете с использованием средств автоматизации или без использования таких средств в целях участия
            в информационно-образовательных мероприятиях и (или) программах, проводимых ООО «Эбботт Лэбораториз» или
            уполномоченным ООО «Эбботт Лэбораториз» лицом с использованием сайтов в Информационно-телекоммуникационной
            сети Интернет и (или) мобильных приложений, а также получения по телефону, почте и (или) электронной почте
            приглашений на участия в информационно-образовательных мероприятиях и (или) программах, информации
            образовательного характера, новостных и аналитических материалов о событиях и фактах, происходящих в ООО
            «Эбботт Лэбораториз» и (или) в сфере здравоохранения, своевременного информирования Заявителя о показателях
            качества, эффективности и безопасности лекарственных средств, медицинских изделий и продуктов питания
            производства группы компаний Abbott (далее «Abbott»), а также для целей предоставления Заявителю иной
            информации о лекарственных средствах, медицинских изделиях и продуктах питания производства Abbott, в том
            числе информации рекламного характера, а также на трансграничную передачу персональных данных на территорию
            Великобритании.

        </p>

        <p>
            Перечень действий с персональными данными: сбор, запись, систематизация, накопление, комбинирование,
            хранение, уничтожение, извлечение, изменение, уточнение, извлечение передача третьим лицам в ООО "Проксима
            Рисерч" (123610, г. Москва, Краснопресненская наб., д.12, офисное здание 1, подъезд №3, офис 506а), а также
            ООО «Юник» (129085, г. Москва, Звёздный бульвар, д.21, стр.1, эт.3, пом.I, оф.315), ООО «Вебинар Технологии»
            (127055 Москва, Приютский пер., д. 3, стр. 1), ООО «Н-ТЕХ» (197101, г. Санкт-Петербург, ул. Большая
            Монетная, д. 26, лит. А, пом. 25), ООО «Визевен» (125047, г. Москва, 4-ый переулок, д.4 БЦ «Лесная Плаза»
            оф. 490), а также трансграничная передача персональных данных на территорию Великобритании.
        </p>

        <p>
            Принятие решений, затрагивающих интересы владельца персональных данных, на основании исключительно
            автоматизированной обработки персональных данных ООО «Эбботт Лэбораториз» не производит.
        </p>

        <p>
            Настоящее согласие действует со дня его подписания в течение двадцати лет либо до даты достижения цели
            обработки персональных данных, либо до дня отзыва в письменной форме.
        </p>

        <p>
            Настоящее согласие может быть отозвано субъектом персональных данных в электронном виде путем прохождения по
            ссылке для отписки от рассылки в полученной рассылке или путем направления на юридический адрес ООО «Эбботт
            Лэбораториз» сообщения об отзыве согласия на обработку ПДн в письменной форме на бумажном носителе.
            Ознакомьтесь с соглашением на использование персональных данных компанией Abbott, нажав на эту ссылку
            Ознакомьтесь с официальным уведомлением, нажав на эту ссылку
        </p>

        <p class="law__link">
            Ознакомьтесь с соглашением на использование персональных данных компанией Abbott, нажав на эту <a href="#">ссылку</a>
        </p>

        <p class="law__link">
            <a href="#">Ознакомьтесь с официальным уведомлением, нажав на эту ссылку</a>
        </p>

    </div>

</section>

<div id="show_modal_error">
    <div class="text-blue"></div>
</div>
