# #100DaysOfCode #100ДнейКода
**My first 100 Days Of Code in Frontend**
|**Мои первые 100 дней кода в Фронтэнде**

##R1 - Round 1
##R1 - Попытка 1

С чего начинаю:

На даный момент я знакома с HTML, JS и CSS на уровне "могу сделать сайтик". Имею предыдущий бэкграунд в С++.

Зачем делаю:

Чтобы въехать в тот зоопарк технологий, который в 2018г. называется FrontEnd ¯ \ _ (ツ) _ / ¯.
Не просто въехать, а прямо вот чтобы страницы у меня получались правильными, современными, точными и легко поддерживались мной или не мной.


## 11.08.18, Saturday, Project started 

Гуглила. 
Поняла, что одни из bestpractices начинаются (у нас) с BEM.
BEM - методология Яндекса для быстрого создания фронтенд-решений и последующей комфортной их поддержки.
Название BEM возникло как сокращение от идеологии: разделение всех элементов страницы на Block-и и Element-ы, а также их Modifier-ы. 
(Названия отражают смысл и зависисмости - мне это понравилось ♥)
Коротко: если хочется быстро создавать, мало фиксить и легко переделывать/добавлять - в проекте нужен BEM.
(...или что-то аналогичное).
 
Решила выполнить тестовое задание студии CSSSR - оно на BEM, не прдполагает React, использует не BEMJSON, а популярный Jade.

Мысли: 
Очень много разных технологий - шаблонизаторов, транспиляторов, линтеров, сборщиков и других страшных слов. 
Глаза боятся, а руки делают.


## 12.08.18, Sunday, Day 2

### Склонировала CSSSR Demo project, основанный на BEM, отсюда:
```
git clone git@github.com:CSSSR/csssr-project-template.git new-project && cd new-project
```

Запустила. НЕ запустилось. Гуглила, в результате обновила Node.JS - запустилось.

# Хорошо, сейчас цель - создать страницу по макету.

За сегодня:
- въезжала в структуру папок проекта CSSSR Demo. Выгляедело не особо интеллектуально - 
добавляла и удаляла блоки из описания демо-страницы - \csssr-demo\app\blocks\index\index.jade. Что делать, мне надо "потыкать палочкой", чтобы понять интуитивно.
- ознакомилась с синтаксисами шаблонизаторов Jade (теперь называется Pug) и Stylus
- для тренировки добавила checkbox на демо-страницу с космонавтом: сначала добавила блок chekbox, миксин chekbox и описала его стиль. Потом включила этот миксин в 
демо-страницу.

Мысли: 
Несколько уронвей абстракции проще осознать глядя в браузере получающуюся веб-страницу.

## 13.08.18, Monday, Day 3

За сегодня:
- Поизучала из чего состоит макет тестового задания от CSSSR, открыла PSD, посмотрела слои. 
- Почитала, как включать JavaScript в BEM-проект, JS нет в демо-странице.
- Изменила демо-страницу в соответствии с PSD-макетом - размер, бортики в нужный цвет, текстура на странице - вот это вот все :-)

Мысли:
Пока спотыкаюсь на каждой простой задаче. 

## 14.08.18, Tuseday, Day 4

За сегодня:
- решила участвовать в #100DaysOfCode #100ДнейКода, записала предыдущие шаги
- экспортнула в SVG из макета все, что картинки

Мысли:
Узнала что существуют:
Brain.fm | musicforprogramming.net | producthunt.com/posts/focusmusic-fm | github.audio | focusmusic.fm
под которые многие рабоатют. Буду попробовать.


## 15.08.18, Wensday, Day 5

За сегодня:
- Пришлось поразбираться с SVG и темой SVG vs PNG, так как хотелось SVG-лого. Узнала, что имея лишь PSD-исходник нельзя получить true-масштабируемый-svg.
(А лишь экспортировать PNG-файл завернутый в SVG. Соответственно, масштабироваться такой SVG не будет.) Вывела pixelPerfect лого в PNG.
- Разобралась какие заданы скрипты tasks для gulp'a, просмотрела pipe'ы, которые выполняются при каждом обновлении файлов проекта.

Мысли:
Кривая обучения иногда  петляет
Если имеешь дело с форматом файла в первую очередь открой его в hex-редакторе


## 16.08.18, Thurthday, Day 6

За сегодня:
- Сделала Header, состоящий из лого, штампа и заголовка Дело

Мысли:
Начала понимать почти все слова в вакансиях по frontend

## 17.08.18, Friday, Day 7

За сегодня:
- Сделала блок General info на странице: PixelPerfect, кастомный шрифт в проекте, Jade+Stylus

Мысли:
Использовать инструменты для минифицирования кол-ва букв и движений мышью -
CSS -> Stylus http://beautifytools.com/css-to-stylus-converter.php
PixelPerfect Chrome Plugin
Подгон отступов в Chrome debug

## 18.08.18, Saturday, Day 8

За сегодня:
- Сделала блок Skills info (text part, 1/2 checkbox part) на странице: Jade+Stylus, семантическая верстка

Мысли:
Нет, арбайтен

## 19.08.18, Saturday, Day 9

За сегодня:
- Сделала блок Skills info - checkbox part на странице: Jade+Stylus, семантическая верстка, pixel-perfect

Мысли:
Режим наше все


## 20.08.18, Monday, Day 10

За сегодня:
- ссылка на blog (+b и +e заменяют '<>' на спецсимволы, поэтому ссылку вставляем внутрь элемента табуляцией)
- добавила уже описанные fields и checkboxes
- описала элемент radio
- замениа среду на Visual Studio Code
- пробую работать со вторым экраном на ноуте, чтобы видеть измемения сразу при сохранении

Мысли:
- изучать Lo-dash:
"Whereas jQuery is the Swiss Army knife of DOM, Lodash is the equivalent of the Batman’s utility belt for Javascript."
(взято с https://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting)

## 21.08.18, Tuesday, Day 11

За сегодня:
- частично описала JS-слайдер, далее нужны event's и настройка CSS
- создала проект Delo: обновила проект на текущий CSSSR-Demo Project и добавила к нему папку app моего проекта Demo
Таким образом решилась проблема с линтером Stylus при обновлении файлов .styl на лету - теперь меняю .styl, сохраняю и сразу вижу результат в браузере.

Мысли:
Увидев, что расстояния у range-слайдера неодинаковые, начала понимать, почему тестовое задание называется квест :-)

## 22.08.18, Tuesday, Day 12

За сегодня:
- немного читала документацию по массивам JS, чтобы заменить for в table
Мысли:
-

## 23.08.18, Tuesday, Day 13

За сегодня:
- отрисовала слайдер
- пыталась понять как работатаь с JS и подключить событие слайдера
Мысли:
- я в этом никогда не разберусь
- поставила приложение-справочник по ECMA Script 6/7

## 24.08.18, Friday, Day 14

За сегодня:
- cоздала все контролы и блоки на странице
- выровняла автоматом
Осталось: выравнивание вручную, создать JS поведения контролов (слайдер, автодобавление полей)

Читала:
ES6
- Строковые шаблоны и разделители
- let, const и блочная область видимости

Мысли:
- читала биографию Элбакян и Скай-хаб - ничего-то в жизни не гарантируют ни способности, ни образование, ни IT, ни страсть к своему делу

## 25.08.18, Saturday, Day 15

За сегодня:
- оформила export и import из js-блока по commonjs | промежуточный р-т есть
- не работает: функция из app.js из Jade не вызывается (js в Jade при этом работает, но не видит того, что в app.js)

Мысли:
- изучать commonjs
- ходили на 42!, научная журналистика - это во многом худ.приемы -  помогают писать хороший текст

## 26.08.18, Sanday, Day 16

За сегодня:
- подключила событие change слайдера через jquery в app.js (из jade-описания блока js-функции вызывать можно, но не нужно)

Мысли:
- изучать jquery

## 27.08.18, Monday, Day 17

Мигрень

## 28.08.18, Tuesday, Day 18

За сегодня:
- набросала функциоанльность "неравномерного" слайдера через jquery

Мысли:
- до полного понимания еще далеко, но принципиальные моменты прояснились - откуда получаются js, html и css страницы и как собирается проект.

## 29.08.18, Wensday, Day 19-20

За сегодня:
- доделала слайдер
- написала основу для radio

Мысли:
- узнала про css: input:checked + .label, назначение input и label используя for
Изучать:
- css :befor, :after
- bem - js

## 30.08.18, Friday, Day 21

За сегодня:
- написала radio

## 31.08.18, Friday, Day 22

За сегодня:
- доделан черновик страницы - все работает, недоточена точность верски в конце (индивидуальные group блоки) и вольное наращивание кол-ва строк при наборе (? через добавление/удаление parent li списка из JS)

Изучать:
- css3!!! пока все время сюрпризы

## 1.09.18, Friday, Day 23 -! школа
## 2.09.18, Friday, Day 23

За сегодня:
- доделан черновик страницы 2 => доточена точность верски в конце 

## 3.09.18, Friday, Day 24

За сегодня:
- сделан черновик JS добавления и удаления строк

## 4.09.18, Friday, Day 25

За сегодня:
- доделано добавление и удаление строк на JS

## 5.09.18, Friday, Day 26

За сегодня:
- вся страница подправлена и работает на Firefox & Chrome & IE и Chrome Mobile Full version

## 6.09.18, Friday, Day 26

За сегодня:
- верстала мобильную версию - сделала хидер, колонки чекбоксов, поля ввода, начала слайдер

Узнала:
- flexbox
- pug +mobile() и +from-width(_n_px)
- почитала pug app.styl
- читала "план..", оттуда взяла flexbox'ы

## 7.09.18, Friday, Day 27

За сегодня:
- доделала мобильную версию: сделала слайдер, радио-кнопки

## 8-9.09.18 Выходные и прогулки
## 10.09.18, Friday, Day 27

За сегодня:
- книга по Реакт, в основном ES6
- РегЭкспы - статья, онлайн-тесты
https://tproger.ru/articles/regexp-for-beginners/?utm_source=grf-eng&utm_medium=partner&utm_campaign=giraff.io
https://regex101.com/

## 11.09.18, Friday, Day 28

За сегодня:
- jquery-обработчики => ES6
- статья про замыкания

## 12.09.18, Friday, Day 29

За сегодня:
- читала отзывы по бэм, смотрела какие еще есть решения, нашла реакт для бэм от альфабанка cn-decorator
(успела мало, мигрень)

## 13.09.18, Friday, Day 30

За сегодня:
- поставила Prettier и Indent Rainbow для VSCode
- Настроила .prettierrc на одинарные кавычки, а .eslintrc на пробел в конструкции } else {, которую предлагает prettier
- AMD, Common JS, ES6 classes + Webpack в примерах

## 14.09.18, Friday, Day 31

За сегодня:
- написала класс Slider на JS ES6
- написала модуль slider.js, экспортировала объект слайдера и подключила в app.js
(работает)
- заменила switch-case на выбор из массива
- переделала стили в slider, чтобы добавить hidden как модификатор. Лучше!

## 15.09.18, Friday, Day 32

За сегодня:
- вынесла код radio и checkbox'ов в кнопки
- вынесла код about :inputs в модуль

## 17-19.09.18, Friday, Day 32-34

- читала про тесты в js
- выбрала ava
- настроила работу npm test с ava в проекте
- написала 1 юнит-тест

## 20.09.18, Friday, Day 35
Изучать! Илья Кантор, Дэвид Фланаган, Кайл Симпсон
- настроила *.js и *.test.js, а именно разнесла по модулям ф-ть слайера

## 21.09.18, Friday, Day 36
- настроила относительные пути в ava-тестах
- написала 9 асинхронных юнит-тестов на ava
- запустила пробный e2e ava-тест на selenium

## 26.09.18, Wensday, Day 37
- написала action seq. для e2e ava-теста на selenium для слайдера
- написала action seq. e2e ava-теста на selenium для текстового поля

## 27.09.18, Thursday, Day 38
- дописала e2e ava-тест на selenium для слайдера - проверяет позицинирование на нестандартные тики
- написала e2e ava-тест на selenium для группы about input'ов - проверяет добавление строк, когда текст не помещается в исходных полях
- написала e2e ava-тест на selenium для всех checkbox'ов на странице - проверяет включение и выключение аттрибута 'checked' по нажатию

## 28.09.18, Friday, Day 39
- drag'n'drop & animate в jquery

## 01.10.18, Monday, Day 40
- Закончила тест Мешок: Animate в JQuery

<<>> Простудилась <<>>

## 04.10.18, Thursday-Friday, Day 41
- Закончила тест Кликабельная Карта: SVG

## 05.10.18, Friday, Day 42
- Закончила тест Слайдер на Карте: Vanilla JS

## 07.10.18, Sanday, Day 43
- Закончила тест Часы: анимация в CSS и на Canvas (+ рекурсия при отрисовке)

## 08.10.18, Monday, Day 45
- просматривала вакансии, сопостовляла с возможным резюме

## 09.10.18, Tuesday, Day 46
- читала теорию:
ООП в JS: прототипное наследование и экстеншоны
типы данных (числа, строки, bool и функции)

## 09.10.18, Wensday, Day 47
- Нарисовала прототип вставки работ в резюме

## 09.10.18, Wensday, Day 48
- Поправила резюме-дело
- Создала новый блок Работы в Деле

