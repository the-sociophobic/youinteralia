import ExternalLink from 'components/ExternalLink'

import RomanSVG from 'img/artists/Roman.svg'
import RomanPNG from 'img/artists/Roman.jpg'
import OlgaSVG from 'img/artists/Olga.svg'
import OlgaPNG from 'img/artists/Olga.jpg'
import * as IvanJSON from 'img/artists/Ivan.json'
import * as AlenaJSON from 'img/artists/Alena.json'

import MartinaSVG from 'img/artists/Martina.svg'
import MartinaPNG from 'img/artists/Martina.jpg'
import CarlaSVG from 'img/artists/Carla.svg'
import CarlaPNG from 'img/artists/Carla.jpg'
import AndreaSVG from 'img/artists/Andrea.svg'
import AndreaPNG from 'img/artists/Andrea.jpg'
import FrancoiseSVG from 'img/artists/Francoise.svg'
import FrancoisePNG from 'img/artists/Francoise.jpg'


const artists = [
  {
    city: "spb",
    name: ["Алена Терешко", "Alena Tereshko"],
    title: ["Остров и гавань", "The island and the harbour"],
    lat: 59.90469616806995,
    lng: 30.217547243741553,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Alena.mp3",
    json: AlenaJSON,
    aboutArtist: [
      <>
        Алена Терешко родилась в 1986 году городе Ишим, Тюменской области, жила в Челябинске, Санкт-Петербурге.  Училась в Санкт-Петербургской Художественно-Промышленной Академии им. Штиглица и школе молодого художника Про Арте. Окончила в 2013 году. Работаю с перформансом, видео, графикой. Часто объектом моих исследований является тело. Меня интересуют традиции и современность, изображение и восприятие, вообще противоположные категории и их точки соприкосновения. Принимала участие в выставках в России и за рубежом.
        <br /><br />
        <ExternalLink newTab to="http://alenatereshko.com/">alenatereshko.com</ExternalLink>
      </>,
      <>
        Alena Tereshko was born in 1986 in the city of Ishim, Tyumen region. Lived in Chelyabinsk and now is based in St. Petersburg. Alena studied at The Saint Petersburg Stieglitz State Academy of Art and Design and at the “School for Young Artists” programme of The Pro Arte Foundation. Her art practice is quite diverse, as she works with performance art, video, and graphics. Often, in her artistic research she focuses on a body and its representation. Alena is particularly interested in the intertwinement of contemporaneity and tradition, in the relation between images and perception and generally, in opposite categories and their points of contact. She has participated in numerous exhibitions in Russia and abroad.
        <br /><br />
        <ExternalLink newTab to="http://alenatereshko.com/">alenatereshko.com</ExternalLink>
      </>,
    ],
    aboutRoute: [
      "Остров и гавань\n\nНа Канонерском острове есть заброшенная территория. Руина имеет интересный переходный статус: территория без функции, или потерявшая свою функцию, которую  «осваивают» и присваивают люди, животные и растения, каждый может стать ее временным обладателем, вмешаться в нее.",
      "The island and the harbour\n\nThere is an abandoned area that has been falling apart for years on the Kanonersky Island in St.Petersburg. Being a ruin, the place has an interesting transitional status: it is a functionless territory, or the one that was deprived of its function. It is the place that belongs to everyone in a way and is explored, appropriated or occupied by people, animals and plants. Anyone can become its temporary owner, interfere with it.",
    ],
  },
  {
    city: "spb",
    name: ["Роман Осминкин", "Roman Osminkin"],
    title: ["Что ты чувствуешь?", "What do you feel?"],
    lat: 59.93600763837134,
    lng: 30.286153729146147,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Roman.mp3",
    svg: RomanSVG,
    png: RomanPNG,
    aboutArtist: [
      <>
        Роман Сергеевич Осминкин — поэт, перформер, теоретик искусства, куратор, кандидат искусствоведения. Член Союза писателей С-Петербурга с 2007. Редактор онлайн портала о современном искусстве КРАПИВА. Член редколлегии журнала «Транслит» и «Метажурнал».Автор книг «Товарищ-вещь» (2010), «Товарищ-слово» (2012), «Тексты с внеположными задачами» НЛО, 2015, «Not A Word About Politics!», Cicada Press, 2016. Идеолог и вокалист музыкального проекта «ТЕХНО-ПОЭЗИЯ», участник группы «Лаборатория поэтического акционизма». Победитель турниров СЛЭМ С-Пб 2006, 2010, фестивалей видео-поэзии “Пятая нога” 2010, 2016.Исследователь коллективного перформанса (community based, партиципаторные и перформативные практики в современном искусстве). Преподает в Школе вовлеченного искусства Что делать: и Московской Школе Новой Литературы (курс «Поэтический материализм»).Прочитать диссертацию Романа Сергеевича: «Коллективные формы художественного перформанса в России начала ХХI века» можно по ссылке.
        <br /><br />
        <ExternalLink newTab to="https://disser.herzen.spb.ru/Preview/Vlojenia/000000610_Disser.pdf">читать диссертацию</ExternalLink>
      </>,
      <>
        Roman Osminkin is a Saint Petersburg based poet, art-theorist, playwright, short-story writer, performer and video-artist. Holds a PhD in Art History. Member of the St.Petersburg Writers Union since 2007. Teaches at the School of Engaged Art (Chto Delat) and Moscow School of New Literature. Member of the editorial board of the «Translit» and media about art «K.R.A.P..I.V.A.». Author of poetry and short prose books ‘Comrade-Thing’ (Kraft, 2010), ‘Comrade-Word’ (Kraft, 2012), ‘Texts with external objectives’ (NLO, 2015), ‘Not A Word About Politics!’ (Cicada Press, NY, 2016). Poetry and prose published in New Literary Observer (Russia), N+1 Magazine (New-York); Kapital (Slovakia), Schreibheft (Deutsch); Poetry Anthology: Nieuwe poëzie uit Rusland #4, «The Animated Reader» (New Museum’s 2015 Triennial), Třídit slova. Literatura a konceptuální tendence 1949–2015. Osminkin’s writings have been translated into English, Dutch, Italian, German, Polish, Czech, Ukrainian, Slovenian and Finnish.
      </>,
    ],
    aboutRoute: [
      "Что ты чувствуешь?\n\nЭто получасовая запись состоит из восьми поэтических текстов, скомпонованных вместе в определенной последовательности, которую я бы обозначил как доверительную манипуляцию. Надевая наушники, вы добровольно принимаете правила предложенной поэтической игры по отстраиванию своей субъектности посредством перформативных инструкций. Тексты работают в режиме настоящего времени как пространственно-временные паттерны звучащей речи и объединены континуальностью общего саунддизайна. Поэтому, они открыты для прослушивания потенциально в любом месте и времени. Главный их вопрос: «что ты чувствуешь?» — может быть воспринят как прямой вызов к вашей перцепции, так и как спекулятивное вопрошание к вашему политическом воображению.",
      "What do you feel?\n\nThis recording consists of eight poetic texts put together in a certain sequence, which I would describe as a confidential manipulation. By putting on your headphones, you voluntarily accept the rules of the proposed poetic game of asserting your subjectivity through performative instructions. The texts work in the present time mode as spatio-temporal patterns of sounding speech and are united by the continuality of a common sound design. Therefore, they can be listened to anywhere and at any time, potentially. Their main question is: «What do you feel?» — can be perceived as a direct challenge to your perception, and as a speculative enquiry into your political imagination.",
    ],
  },
  {
    city: "spb",
    name: ["Иван Курбаков", "Ivan Kurbakov"],
    title: ["Северные полмира", "Appear in the northern hemisphere"],
    lat: 59.94572683679983,
    lng: 30.37266762914453,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Ivan.mp3",
    json: IvanJSON,
    aboutArtist: [
      <>
        Иван Курбаков — писатель, музыкант, кинорежиссер. Живет в Москве.
        <br/>
        Учился в Литературном институте (семинар поэзии И. Ростовцевой, 2006-2011), окончил факультет кинорежиссуры Московской школы нового кино (2013-2016). Стихи и эссе публиковались в журнале [Транслит], «Лиterraтура», «Здесь», на портале Syg.ma. Автор книг стихов «Путь поет» (издательство Арго-Риск, 2019), «Сады и молнии» (издательство «всегоничего», 2020). Соредактор альманаха-огня.
        <br/>
        Среди сольных и совместных музыкальных проектов: Ian Kubra (cd «current double, hermetic songs» 2018); mpala garoo (кассетные релизы, винил «ou du monde» 2012, «vaya adelante» cd 2019); kon tiki gemini (кассетные релизы); «Линга Шарира» и др. Записи выходили в США, Канаде, Бельгии, Бразилии, Голландии.
        <br/><br/>
        почитать:<br/>
        <ExternalLink newTab to="https://syg.ma/@ian-kubra-1">syg.ma</ExternalLink>
        <ExternalLink newTab to="http://wordorder.ru/catalog-ru/poeziya/sady-i-molnii/">wordorder.ru</ExternalLink>
        <ExternalLink newTab to="https://greza.space/poslepoludennyj-otdyh-budushhego/">greza.space/</ExternalLink>
        <ExternalLink newTab to="http://fajro.online/index.html">fajro.online</ExternalLink>
        <br/>послушать:<br/>
        <ExternalLink newTab to="https://soundcloud.com/jungletriangle">soundcloud.com</ExternalLink>
        <ExternalLink newTab to="https://iankubra.bandcamp.com/ ">bandcamp.com: iankubra</ExternalLink>
        <ExternalLink newTab to="https://aestastantra.bandcamp.com/">bandcamp.com: aestastantra</ExternalLink>
        <ExternalLink newTab to="https://aguirrerecords.bandcamp.com/album/ou-du-monde">bandcamp.com: aguirrerecords, ou-du-monde</ExternalLink>
        <ExternalLink newTab to="https://shimmeringmoodsrecords.bandcamp.com/album/current-double-hermetic-songs">bandcamp.com: shimmeringmoodsrecords current-double-hermetic-songs</ExternalLink>
        <ExternalLink newTab to="https://shimmeringmoodsrecords.bandcamp.com/album/vaya-adelante">bandcamp.com: shimmeringmoodsrecords vaya-adelante</ExternalLink>
        <br/>посмотреть:<br/>
        Pleroma (feature 54 min)<br/>
        <ExternalLink newTab to="https://vimeo.com/128005569">vimeo.com/128005569</ExternalLink>
        <ExternalLink newTab to="https://vimeo.com/suncalpa">vimeo.com/suncalpa</ExternalLink>
        <ExternalLink newTab to="https://www.youtube.com/user/oudumonde">youtube</ExternalLink>
      </>,
      <>
        Ivan Kurbakov is a Moscow-based writer, musician, and a film director.
        <br/>
        He studied at the Literary Institute (I. Rostovtseva's Poetry Seminar, 2006-2011) in Moscow and at the director’s laboratory of the Moscow School of New Cinema (2013-2016). Ivan’s poems and essays were published in the magazine [Translit], «Лиterraтура», «Здесь», as well as at Syg.ma. He is an author of books of poems «Путь поет»  (Argo-Risk publishing house, 2019), «Сады и молнии» (vsegonichego publishing house, 2020) and is a co-editor of the almanac-fire (http://fajro.online/).
        <br />
        Ivan’s solo and collaborative music projects include: Ian Kubra (CD «current double, hermetic songs» 2018); mpala garoo (cassette releases, vinyl «ou du monde» 2012, «Vaya Adelante» CD 2019); kon tiki gemini (cassette releases); «Линга Шарира», etc. Recordings were released in the United States, Canada, Belgium, Brazil, and the Netherlands.
        <br/><br/>
        something to read:<br/>
        <ExternalLink newTab to="https://syg.ma/@ian-kubra-1">syg.ma</ExternalLink>
        <ExternalLink newTab to="http://wordorder.ru/catalog-ru/poeziya/sady-i-molnii/">wordorder.ru</ExternalLink>
        <ExternalLink newTab to="https://greza.space/poslepoludennyj-otdyh-budushhego/">greza.space/</ExternalLink>
        <ExternalLink newTab to="http://fajro.online/index.html">fajro.online</ExternalLink>
        something to listen:<br/>
        <ExternalLink newTab to="https://soundcloud.com/jungletriangle">soundcloud.com</ExternalLink>
        <ExternalLink newTab to="https://iankubra.bandcamp.com/ ">bandcamp.com: iankubra</ExternalLink>
        <ExternalLink newTab to="https://aestastantra.bandcamp.com/">bandcamp.com: aestastantra</ExternalLink>
        <ExternalLink newTab to="https://aguirrerecords.bandcamp.com/album/ou-du-monde">bandcamp.com: aguirrerecords, ou-du-monde</ExternalLink>
        <ExternalLink newTab to="https://shimmeringmoodsrecords.bandcamp.com/album/current-double-hermetic-songs">bandcamp.com: shimmeringmoodsrecords current-double-hermetic-songs</ExternalLink>
        <ExternalLink newTab to="https://shimmeringmoodsrecords.bandcamp.com/album/vaya-adelante">bandcamp.com: shimmeringmoodsrecords vaya-adelante</ExternalLink>
        something to watch:<br/>
        Pleroma (feature 54 min)<br/>
        <ExternalLink newTab to="https://vimeo.com/128005569">vimeo.com/128005569</ExternalLink>
        <ExternalLink newTab to="https://vimeo.com/suncalpa">vimeo.com/suncalpa</ExternalLink>
        <ExternalLink newTab to="https://www.youtube.com/user/oudumonde">youtube</ExternalLink>
      </>,
    ],
    aboutRoute: [
      "Северные полмира\n\nСеверные полмира — это полубессознательная скоропись, мантра балансирующая на грани неразборчивого утробного письма и высушенной под солнцем сознания речи, в которой воображаемый адресат то слишком ясен, то практически неразличим. Письмо — это атанор, где личное рано или поздно уходит в универсальное. Речь же слышит время, пока ее произносят. Можно говорить и о тщетном усилии добиться от памяти отчетливости в различении/различии времени и пространства, любви и влюбленности, звука и запаха, образа и его отсутствия. Как и малоизвестный сейчас сирийский город Пальмира, расположенный между Дамаском и Евфратом, почти случайно употребленный кем-то из писателей для сравнения с Петербургом — был оазисом в пустыне, поражавшим архитектурной строгостью, так и охваченные метафизическим волнением письма и монологи суть оазисы-миражи, возникающие в восприятии того, кто зеркально охвачен им же.\nГород, сама этимология которого связана с границами, огороженностью пространства, остается жив благодаря человеческим встречам, а не благодаря незыблемости своей архитектуры. Город это волнение людей, короткие замыкания; пригород — транзитивная поэзия, переход (даже этот переход гласных одна в другую, Пальмира — полмира, связан с неустойчивостью границ, с людьми как переносчиками этой безграничности ) и загород —  воздушность путей, перемирие дня и ночи, их длинное размыкание, сон равнин.",
      "Appear in the northern hemisphere\n\n«Appear in the northern hemisphere» is a semi-conscious rapid writing, a kind of mantra oscillating between an illegible writing coming as if from the insides and a speech dried by the sun of consciousness in which the imaginary addressee is sometimes too clear, sometimes almost indistinguishable. Writing is an athanor, where the personal becomes the universal sooner or later, yet the speech gives ear to time while it is being uttered. In a way, «Appear in the northern hemisphere» is a futile effort to recall clearly what is the difference between time and space, love and infatuation, sound and smell, an image and its absence.",
    ],
    multiplePoints: [
      [59.941439911759005, 30.378147371736343],
      [59.98991782948842, 30.29871865800439],
      [59.88594781377505, 29.90860734476646],
      [59.93690676201163, 30.327679959079195],
      [59.93625258802117, 30.34218530100089],
      [59.98347286266922, 30.256000170018748],
      [59.929659218715344, 30.35468710206001],
      [59.770907947889164, 30.326146008102235],
      [60.103380870080954, 29.949332189067214],
      [59.68044767245007, 30.443729571015865],
      [59.91916513705325, 30.329058088330708],
    ]
  },
  {
    city: "spb",
    name: ["Ольга Житлина", "Olga Jitlina"],
    title: ["Égalité", "Égalité"],
    lat: 59.92811584324123,
    lng: 30.346385042008638,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Olga.mp3",
    svg: OlgaSVG,
    png: OlgaPNG,
    aboutArtist: [
      <>
        Ольга Житлина (1982, Ленинград) — художница, автор перформансов и театральных постановок, основательница и редактор Агентства Утопических Новостей, газеты «Насреддин в России». В 2011 г. в соавторстве с правозащитником А. Якимовым создала настольную игру о трудовой миграции «Россия — страна возможностей». С 2014 г. вместе с художницей Анной Терешкиной и группой трудовых мигрантов и представителей творческих профессий занимается проектом «Конкурс шутки Ходжи Насреддина». С 2015 г. сотрудничает с группой беженцев-активистов «Лампедуза» в Гамбурге и оперной певицей Юлией Авериной, объединив их в спектакле «Перевод» по повести А. Платонова «Джан». Лауреат молодежной премии Henkel (2012) и премии им. Леи и Ханса Грундиг (2015).
        <br />
        <ExternalLink newTab to="https://olgajitlina.info">olgajitlina.info</ExternalLink>
        <br /><br />
        Голос:<br />
        Влада Миловская (род. 1990, Ленинград) — перформерка, актриса. Участница независимой художественной лаборатории «ВОКРУГ ДА ОКОЛО». Преподавательница СПБШНК (курс «Работа режиссера с актером»).
        <br /><br />
        Монтаж звуков:<br />
        Лейла Алиева — singer-songwriter, актриса, участница лаборатории “Вокруг да около”, выпускница факультета искусств и гуманитарных наук СПбГУ. Музыкальные работы: дебютный альбом “Плоды побегов”; 2018, СПб, сингл “Муза”; 2020, Петербург. Звукорежиссура: “Спектакль в коробочке” 2020, СПб. Тифлокомментарий к картинам Айвазовского и Брюллова для Русского музея, 2020, СПб.
        <br /><br />
        Запись звуков:<br />
        Игнат Хлобыстин (род. 1995, Санкт-Петербург) — музыкант-флейтист. Студент консерватории четвертого курса, лауреат международных конкурсов. Исполняет классическую, современную академическую и импровизационную музыку. Закончил школу импровизационной музыки при Галерее экспериментального звука (сейчас Музей звука). Участник Санкт-Петербургского оркестра импровизации и трио «Печальная свадьба».
      </>,
      <>
        Olga Jitlina (b. 1982, Leningrad) is a graphic and performance artist, author of theater productions, a founder and an editor of the Utopian News Agency and of the Nasreddin in Russia newspaper. In 2011, together with human rights advocate Andrey Yakimov she co-authored a board game about labor migration called “Russia is the Country of Possibilities”. Since 2014, Jitlina, another artist—Anna Tereshkina, a group of labor migrants, and representatives of creative professions have been working on the project Hodja Nasreddin Joke Contest, resulting in the publication of several issues of the newspaper Nasreddin in Russia, and in the realization of the project Mobile Discotheque (the latter co-authored with the Basque artist Jon Irigoyen). Since 2015, Jitlina has been collaborating with the Lampedusa in Hamburg group of refugee activists and opera singer Yulia Averina, bringing them together in the theatrical performance Translation based on Andrey Platonov’s novella Dzhan. Winner of the Henkel Young Artists Prize (2012) and the Lea and Hans Grundig Prize (2015).
        <br />
        <ExternalLink newTab to="https://olgajitlina.info">olgajitlina.info</ExternalLink>
        <br /><br />
        Voice:<br />
        Vlada Milovskaya (b. 1990, Leningrad) is a performer and actress. Participant of the<br />
        independent art laboratory VOKRUG DA OKOLO. Teacher at St. Petersburg School of<br />
        New Cinema (Director’s Work with Actor course).<br />
        <br /><br />
        Sound editing:<br />
        Leila Alieva — a musical performer, an actress. Graduated at the Faculty of Liberal Arts and Sciences, St. PetersburgState University, Bard College NY. The selected projects: <br />
        leila alieva. “Plody pobegov”. A debut album release. Saint Petersburg, Russia 2018<br />
        leila alieva. “Muza” Single release.Saint Petersburg, Russia 2020<br />
        Sound-design “Play in the Box” 2021<br />
        “Typhlo commentary on paintings by Aivazovsky and Bryullov” for Russian State Museum, 2021
        <br /><br />
        Sound recording:<br />
        Ignat Khlobystin (b. 1995, St. Petersburg) is a flautist, fourth-year student of the<br />
        Conservatoire, laureate of international competitions. Khlobystin performs classical,<br />
        contemporary academic and improvisational music. He graduated from the School of<br />
        Improvisational Music at the Gallery of Experimental Sound (currently Museum of Sound).<br />
        Member of the St. Petersburg Orchestra of Improvisation and the Pechalnaya Svadba<br />
        (Sad Wedding) trio.
      </>,
    ],
    aboutRoute: [
      "Égalité\n\nÉgalité — аудио-спекталь по первой части рассказа Ольги Житлиной «Адар». В ней описывается встреча и неожиданный момент родства в отчаянии с бездомным. Адресат рассказа двоится: это то оставшийся без крова человек, то отдаляющийся возлюбленный. В некотором смысле этот письмо бездомному. Говорение от первого лица в спектакле также не происходит из статичной точки. Героиня, как бродяга, блуждает по городу, впадая то в отчаяние, то в радостное возбуждение. То занимая позицию власти, то теряя почву под ногами.",
      "Égalité\n\nÉgalité is an audio-performance based on the first part of Olga Zhitlina story “Adar”. It describes a meeting with the homeless and an unexpected moment of closeness in despair. The addressee of the text is twofold: it is either a homeless person, or a distant lover. In a sense, this is a letter to the homeless. The person who starts speaking in the play also does not come from a static position. The heroine, like a tramp, wanders around the city, while falling into despair or into joyful excitation, either taking a position of power or losing ground underfoot.",
    ],
  },

  {
    city: "gen",
    name: ["Андреа Мариони", "Andrea Marioni"],
    title: ["Sideways were open", "Sideways were open"],
    lat: 46.209541163964876,
    lng: 6.1419300354337535,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Andrea.mp3",
    svg: AndreaSVG,
    png: AndreaPNG,
    aboutArtist: [
      <>
        Андреа Мариони родился в 1986 году, живет и работает в Биль-Бьене.<br />
        Мои практики работают как полифония: я ищу коллизии и столкновения между формами и понятиями, которые иногда превращаются в гармонии или в диссонансы. Меня интересует современное понятие «пограничной политики» (border politics) и то, как оно «работает» через объекты, отражая как общность, так и отчуждение. Я использую в основном «дешевый материал»: от мусора до повседневных бытовых предметов, также модифицирую и включаю их в свои художественные произведения. Еще одно эстетика, которая важна для меня, вдохновлена «детским творчеством» и «игрушкам», которые, по моему мнению, передают ироническую силу (или силу иронии), а не угрозу. Концептуально, мои работы состоят из следов коллективного подсознания, вытесненных воспоминаний и воплощенных табу.<br />
        <br />
        Личный сайт: <ExternalLink newTab to="http://marioniandrea.art">marioniandrea.art</ExternalLink> <br />
        Кураторский проект: <ExternalLink newTab to="http://lumpenstation.art">lumpenstation.art</ExternalLink>
      </>,
      <>
        Born in 1986, lives and works in Bienne.<br />
        <br />
        My practices work like polyphonies: I look for collisions and clashes between forms and concepts which turn sometimes into harmonies or into dissonances. In general, I am interested in the contemporary notion of «border politics» and how it works through objects and oscillates between community and alienation. I use mostly «cheap material»: from trash to daily domestic goods and modify and incorporate them in the artwork. Another aesthetics that is important for me comes from «Childish art craft» and «Toys» which, to me, convey ironic power (or power of irony) rather than a violent threat. My works are composed conceptually of leftovers of the collective subconscious, repressed memories and embodied tabu. <br />
        <br />
        Personal website: <ExternalLink newTab to="http://marioniandrea.art">marioniandrea.art</ExternalLink> <br />
        Artist curator: <ExternalLink newTab to="http://lumpenstation.art">lumpenstation.art</ExternalLink>
      </>,
    ],
    aboutRoute: [
      <>
        Sideways were open<br /><br />
        не конфликт поколений, а разрыв между ними<br />
        я полон ненависти и любви.<br />
        вечеринка закончилась<br />
        и атмосфера напоминала похороны.<br />
        разве можно назвать неуважением<br />
        когда кто-то<br />
        видит личное в разделяемом.<br />
        жизнь сделает нас серьезными в любом случае.<br />
        Женева в трансформации между двумя эпохами.<br />
        несколько перенесенных<br />
        операций на всей ее анатомии.<br />
        с открытым сердцем.<br />
        ради забавы мне нравится думать,<br />
        что Женева принадлежит мне.<br />
        Я немного эгоцентричен в этом своем поведении.<br />
        Женева — это открытое программное обеспечение<br />
        для всех.
      </>,
      <>
        Sideways were open<br /><br />
        it wasn’t a generational clash, but a generational gap<br />
        my hate and love feeling.<br />
        the party was over <br />
        and the atmosphere was like a funeral.<br />
        it is not a lack of respect for others, <br />
        when someone proposes <br />
        a personal gaze on the common.<br />
        the seriousness of life, will come anyway.<br />
        a Geneva in transformation between two eras.<br />
        there were several open-heart<br />
        operations on its entire anatomy.<br />
        for fun I like to think,<br />
        that Geneva belongs to me.<br />
        I am a bit egocentric in this behaviour.<br />
        Geneva is a software<br />
        for everyone.
      </>,
    ],
  },
  {
    city: "gen",
    name: ["Карла Демьер", "Carla Demierre"],
    title: ["Writing around", "Writing around"],
    lat: 46.225952859615674,
    lng: 6.141753032514459,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Carla.mp3",
    svg: CarlaSVG,
    png: CarlaPNG,
    aboutArtist: [
      <>
        Карла Демьер, родилась в 1980 году, изучала искусство в Женеве и художественное письмо (creative writing) в Монреале. В своей практике она работает с перформансом, письмом и звуком. Ее тексты смешивают поэзию и повествование, экспериментирование с формой и документальный монтаж. Последние книги Карлы: «Кто там?» (Qui est là?) — сборник рассказов о записи голоса и призраках (Art & Fiction, 2020) и «Авторадио» (Autoradio) — визуальная поэзия, созданная на печатной машинке (ред. Héros-Limite, 2019). С 2012 года она преподает художественное письмо в Женевском университете искусства и дизайна. Кроме того, Карла курирует литературные проекты в Женеве, среди которых ридинги Spoken worlds в Центре современного искусства в Женеве или подкаст-проект «Время чаепития» (L’Heure du thé) в арт-центре Le Grütli.
        <br /><br />
        <ExternalLink newTab to="http://www.carlademierre.ch">carlademierre.ch</ExternalLink>
      </>,
      <>
        Carla Demierre, born in 1980, studied art in Geneva and creative writing in Montreal. Her practice unfolds between printed, performed and recorded forms. Her texts mix poetry and narrative, formal experimentation and documentary cut-up. Her more recent books are «Qui est là?», collected stories about voice recording and ghosts (Art & Fiction, 2020) and «Autoradio», visual and typewriting poetry, (ed. Héros-Limite, 2019). Since 2012, she teaches creative writing at the Geneva University of art and design. She curates literary projects in Geneva, among which Spoken worlds readings at Center of contemporary art, or the podcast project L’Heure du thé at Le Grütli.
        <br /><br />
        <ExternalLink newTab to="http://www.carlademierre.ch">carlademierre.ch</ExternalLink>
      </>,
    ],
    aboutRoute: [
      <>
        Writing around
        <br /><br />
        Я преподаю художественное письмо (creative writing) в Женевском университете искусства и дизайна. Весной 2020-го я не могла ничего писать, и мне было интересно, как же это удается моим студентам. Чтобы продолжать делать хоть что-то, я начала посылать им письма каждую неделю. Для writing around я записала некоторые из этих писем, сидя в своем гардеробе за занавеской с принтом патагонской флоры. Пока я сидела в шкафу, выяснилось, что там живет большой паук.<br />
        Примерно тогда же, когда мне не давалось письмо, — весной 2020-го,  я проводила много времени на своем балконе, наблюдая за птицами, кружащими вокруг эвкалипта напротив. Затем я стала различать крики птиц, доносящиеся из динамиков, во время наших разговоров со студентами. И тут я поняла, что мы вместе, что мы живем в одном пространстве и времени, даже, если сегодняшняя реальность хочет убедить нас, что это не так.
      </>,
      <>
        Writing around
        <br /><br />
        I teach creative writing at Geneva University of art and design. During the spring of 2020, I have not been able to write anything and I wondered how my students could do so. In order to keep doing something, I started sending them letters every week. For this sound walk, I’ve recorded some of them in my wardrobe behind a curtain with patagonian vegetation prints. Doing so, I discovered a big spider living there. Last spring, I spent a lot of time sitting in my balcony looking at birds spinning around an eucalyptus tree. Then, I started noticing bird calls behind students' voices when we were talking, and this made me feel like we were living in the same space and time, contrary to appearances.
      </>,
    ],
  },
  {
    city: "gen",
    name: ["Мартина Махлер", "Martina Mächler"],
    title: ["капля падает на пол спальни", "blob drops on a bedroom floor"],
    lat: 46.2,
    lng: 6.12,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Martina.mp3",
    svg: MartinaSVG,
    png: MartinaPNG,
    aboutArtist: [
      <>
        Мартина Махлер (1991) получила степень бакалавра искусств в Цюрихском университете искусств (ZHdK). Затем в течение одного года училась на магистерской программе Art Praxis в Dutch Art Institute (ArtEZ) в Арнеме (Нидерланды). В своих преимущественно процессуальных перформативных проектах Мартина Махлер фокусируется на современных условиях труда, анализируя технические и психологические инструменты контроля и дисциплинирования субъекта.<br />
        <br /><br />
        <ExternalLink newTab to="http://www.martinamaechler.com">martinamaechler.com</ExternalLink>
      </>,
      <>
        Martina Mächler (*1991) completed a BFA in Fine Arts at Zurich University of the Arts (ZHdK). She then studied for one year in the MA Art Praxis at the Dutch Art Institute (ArtEZ) in Arnhem(NL). In her mostly processual performative projects, Martina Mächler is focussing on modern working conditions, looking at technical and psychological means of control and disciplining of the self. 
        <br /><br />
        <ExternalLink newTab to="http://www.martinamaechler.com">martinamaechler.com</ExternalLink>
      </>,
    ],
    aboutRoute: [
      <>
        Капля падает на пол спальни<br /><br />
        Аудиотекст о шкафе. Отправная точка маршрута чисто символическая, но близость к воде не помешает. Запись была сделана для прослушивания в наушниках, во время передвижения по городскому пространству. (Если вы дома и не можете или не хотите двигаться, я вам предлагаю открыть окно или балконную дверь, чтобы впустить уличные звуки, лечь в удобное положение и закрыть глаза.)
      </>,
      <>
        blob drops on a bedroom floor<br /><br />
        An audio text about a closet. The starting point of this route is merely symbolic, closeness to water is recommended. The recording was made to be listened to on headphones, while moving in space. (If you can’t or don’t feel like moving in space physically, I suggest lying in a comfortable position, with your eyes closed and either a window or balcony door opened, in order to let in different sounds, if it’s warm enough.)
      </>,
    ],
  },
  {
    city: "gen",
    name: ["Франсуаз Карако", "Françoise Caraco"],
    title: ["Чемодан на колесиках", "Trolley suitcase"],
    lat: 46.21155495277451,
    lng: 6.14402314095441,
    src: "http://cdn.tochkadostupa.spb.ru/the_sociophobic/youinteralia/audio/Francoise.mp3",
    svg: FrancoiseSVG,
    png: FrancoisePNG,
    aboutArtist: [
      <>
        Франсуаз Карако (р. 1972) — художница из Цюриха, Швейцария. Основой ее художественных работ являются исследования семейных историй, событий и мест, пропитанных духом истории.\nСвидетельства очевидцев, а также отрывки из собранного документального материала, звукового в том числе, уже несколько лет формируют ее художественную практику. Помимо прочего, Франсуаз уже долгое время занимается историей своей семьи. Ее интерес заключается в вопросе конструирования памяти на пересечениях индивидуального опыта и коллективного прошлого. В своих аудио и видео работах или перформансах Карако переплетает факты и вымысел, и стремится затронуть темы и обстоятельства, актуальные для сегодняшнего дня.
        <br /><br />
        <ExternalLink newTab to="http://www.francoise.caraco.ch">
          francoise.caraco.ch
        </ExternalLink>
      </>,
      <>
        Françoise Caraco, born in 1972, is a visual artist, living in Zurich, Switzerland. The basis of her artistic works is research into family histories, historical events and places steeped in history.\nThe voices of contemporary witnesses, as well as excerpts from compiled documentary material and sound, have formed her artistic work for several years now. Françoise Caraco has been dealing with her own family history for years. Her interest lies in the construction of memory in its reverberations between individual experiences and the collective past. Caraco interweaves facts and fiction in her audio and video works or performances, thereby bringing them to reflect current themes or circumstances.
        <br /><br />
        <ExternalLink newTab to="http://www.francoise.caraco.ch">
          francoise.caraco.ch
        </ExternalLink>
      </>,
    ],
    aboutRoute: [
      "Чемодан на колесиках\n\nМоя прогулка по Женеве основана на воспоминаниях юности, которую я провела в этом городе. Эти воспоминания переплетаются с дневниковыми записями моего дедушки и недавно обнаруженными документам об иммиграции сюда моего прадеда и его семьи.\nМаршрут начинается на железнодорожной станции, я иду вдоль берега озера через центр города к северу от реки, затем прохожу несколько кварталов на юге и, прежде чем вернуться на вокзал, поднимаюсь на холм к северо-западу от него и уже оттуда двигаюсь обратно, — в сторону жд путей. Все это время, следуя своему маршруту через город, я тащу за собой чемодан на колесиках. Он хорош как для поездок, так и для хранения воспоминаний. Я собрала и упаковала в него все необходимое для моего путешествия и моей художественной работы.\n\nМеня интересуют пространства мысли, которые открываются передо мной во время прогулки по городу. Словно фотографически, я регистрирую моменты погружения в свои собственные и рассказанные воспоминания и перевожу их в письмо. В проекте я сплетаю нарратив из мыслей, воспоминаний и звуков города, которые я записала во время прогулки по Женеве.",
      "Trolley suitcase\n\nOn the walk through Geneva, I have followed a route to my youthful memories of this city, along lines written down by my grandfather and some contemporary documents about my great-grandfather and his family in connection with their immigration to this city.\nThe tour starts at the train station and I walk along the lakeshore, through the area of the inner city north of the river, then the part of the city south of the river, and before returning to the train station, I walk up a hill northwest of the train station, and walk from there up to the bottom of the train station.\nAll the while, walking my chosen route through this city, I drag a trolley suitcase behind me. It stands for travelling itself, but also for carrying memories. The necessary utensils are gathered in the suitcase, for the journey and my artistic exploration.\nI am interested in spaces of thought that open up to me while walking or at the chosen places in the city. With a photographic eye, I observe moments of immersion in my own and narrated memories and transfer my thoughts into written language. During my walk through Geneva, I also recorded different city sounds with my recorder.\nFor the audio piece, I weave these spaces of thought into a narrative voice that is underlaid with recorded city sounds.",
    ],
  },
]


export default artists