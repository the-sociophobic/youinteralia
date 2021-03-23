const defaultMessages = {
  Header: {
  },

  names: ['Алина Белишкина, Валерия Мостовая ©, 18+', 'Alina Belishkina, Valeria Mostovaya ©, 18+'],

  Help: {
    text: ["Вы можете увеличивать и уменьшать масшатб карты, чтобы увидеть всех художников", "You can zoom map in and out to find all the points"],
    button: ["Понятно", "Got it"],
  },

  Menu: {
    about: ["о проекте", "about the project"],
    artists: ["художники и маршруты", "artists and routes"],
    archive: ["архив", "archive"],
    participate: ["участвовать", "participate"],
  },
  Artist: {
    routeInfo: ["о проекте", "about the project"]
  },
  Marker: {
    popup: ["«северные полмира».\nпродолжение", "«appear in the northern hemisphere».\ncontinue"],
  },
  About: {
    first: {
      title: ["идея", "idea"],
      body: ["съешь ещё этих мягких французских булок, да выпей чаю", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."],
    },
    second: {
      team: ["команда", "team"],
      curators: ["кураторы:", "curators:"],
      designer: ["дизайнер:", "designer:"],
      developer: ["разработчик:", "developer:"],
      sponsor: ["спосор:", "sponsor:"],

      alina: ["aлина белишкина", "alina belishkina"],
      lera: ["лера мостовая", "lera mostovaya"],
      arina: ["арина поздняк", "arina pozdnyak"],
      lev: ["лев васильев", "lev vasilyev"],
    }
  },
  Participate: {
    desc: [
      <>
        Первая часть проекта, в которой к участию‎ были приглашены художники из Швейцарии и России — завершена! Теперь мы предлагаем всем желающим оставить свои аудиосообщения на картах Петербурга или Женевы.
        <br />
        <br />
        <b>Что делать:</b>
        <br />
        <br />
        1. Написать текст в форме письма, или выбрать уже существующий текст, распространяемый по лицензии creative commons и/или написанный автором, умершим более 70-и лет назад.
        <br />
        Мы предполагаем, что текст будет написан от первого лица и адресован "тебе”. При этом, “ты” — не обязательно человек. Письмо может содержать обращение  к животному, растению, месту, или событию, например. Никаких ограничений нет, — то, каким содержанием наполнить “тебя” — ваше художественное решение.
        <br />
        <br />
        2. Озвучить текст своим голосом, или пригласить для озвучки другого человека. Продолжительность записи любая, но не более 30 мин. 
        <br />
        <b>Формат готового аудиофайла: mp3</b>
        <br />
        <br />
        3. Отметить место в городе (Санкт-Петербург или Женева), которое, на ваш взгляд, больше всего соответствует содержанию или звучанию текста. Представьте, где должен находиться слушатель вашего сообщения и отметьте это место точкой в google maps, сделайте скриншот и прикрепите к форме справа. 
        <br />
        <b>Формат файлов: png, jpeg, jpg</b>
        <br />
        <br />
        Не забудьте указать свое имя и email. 
        <br />
        Когда ваша заявка пройдет техническую модерацию, вы сможете найти свое сообщение на карте города.
        <br />
        <br />
        <b>PS:</b> Пожалуйста, обратите внимание, что участие не предполагает финансового или иного вознаграждения.  
        <br />
        <br />
        <small>
          Вам будет отказано в размещении сообщения, если оно содержит угрозы, ругательства, расистские или ксенофобские замечания, дискриминацию по признаку возраста, состояния здоровья, пола, гендера, религии, этнической или расовой принадлежности. 
        </small>
      </>,
      <>
        The first part of the project, in which artists from Switzerland and Russia were invited for participation, is completed.
        <br />
        Now we welcome everyone (artists and non-artists alike) to upload their audio messages to the maps of St. Petersburg or Geneva.
        <br />
        <br />
        <b>What to do:</b>
        <br />
        <br />
        1. Write a text in the form of a letter, or select a text distributed under a creative commons license and / or written by an author who died more than 70 years ago.
        <br />
        The text should be written in the first person and should address you.
        <br />
        By you we don’t necessarily mean a human being. A letter may be addressed to an animal, a plant, a place, or an event, for example.
        <br />
        <br />
        2. Voice the text yourself, or invite another person to do it. The recording can be of any length, but not longer than 30 minutes.
        <br />
        <b>Format of the audio file: mp3</b>
        <br />
        <br />
        3. Mark the place in the city (St. Petersburg or Geneva) which, in your opinion, corresponds to the letter’s content or to the way it sounds. In other words, imagine the most suitable place for listening of your message and mark it on google maps, take a screenshot and attach it to the form on the right.
        <br />
        <b>File format: png, jpeg, jpg</b>
        <br />
        Don't forget to include your name and email address.
        <br />
        After our moderator checks your message out, you will find it posted.
        <br />
        <br />
        <b>PS:</b> Please note that participation is strictly voluntary and is not financially or otherwise rewarded.
        <br />
        <br />
        <small>
          You will be denied participation if your message contains hate speech, threats, racist or xenophobic remarks, discrimination based on age, health, gender, religion, ethnicity or race.
        </small>
      </>,
    ],
    form: {
      name: ["имя*", "name*"],
      email: ["email*", "email*"],
      city: ["город*", "city*"],
      citySaintPetersbourg: ["Санкт-Петербург", "Saint-Petersbourg"],
      cityGeneva: ["Женева", "Geneva"],
      location: ["место*", "location*"],
      upload: ["загрузите свой маршрут", "upload your route"],
      // link: ["или отправьте свою ссылку", "or paste the link here"],
      link: ["ссылка на аудиофайл*", "link to audiofile*"],
      submit: ["отправить", "submit"],
      agree: ["нажмая на кнопку, вы соглашаетесь с политикой конфиденциальности", "by clicking submit button you agree with our privacy policy.\n*required field"],
    }
  },
  Thanks: {
    text: ["Спасибо за ваше участие! Мы постараемся опубликовать ваш материал как можно скорее. Следите за обновлениями на сайте!", "Thanks for participation! We'll try to post your route as soon ass possible! Keep an eye on updates!"],
    back: ["обратно", "back"]
  },
  Player: {
    loading: ["загрузка", "loading"],
  },
  Archive: {
    title: ["архив", "archive"],
    desc: [
      <>
        Архив, с одной стороны, задает контекст прочтения проектов, созданных для «You, inter alia» и вместе с тем, — функционирует как модель для сборки, позволяющая устанавливать случайные и аффективные связи между самыми разными материалами предоставленными художниками. Другими словами, в этом разделе вы обнаружите все то, что прямо или косвенно «поддерживает» художественные высказывания и, таким образом, создает расширенное поле интерпретаций произведений в их единичности и множественности.
        <br />
        Функция архива заключается не только в прояснении (или, напротив, в затуманивании) смыслового поля представленных работ, но и в раскрытии перформативного измерения любого документа, фрагмента памяти, текста, звука, их обращенности к будущему и возможности его «пере-придумать» сообща.
        <br /><br />
        __________
        <br /><br />
        <small className='small'>
          Архив составлен из отобранных художниками материалов, которые или непосредственно связаны с их проектами для youinteralia, или раскрывают их практику в целом.
          <br />
          Вы можете сортировать архив по одному тэгу или их комбинации, а также нажать на имя художницы или художника и увидеть все материалы, которыми она или он решил(а) поделиться с нами.
        </small>
      </>,
      <>
        Archive provides a contextualisation of the projects created by the artists for «You, interalia», and at the same time acts as a constellation of materials, which allows for contingent and affective connections between thought and work processes of different art practitioners to be made. In a way, it resembles an exhibition or an exposition of ‘behind-the-scenes’ of each particular artistic enunciation and as such it creates an expanded interpretative framework for the artworks in their singularity and plurality alike.
        <br />
        Therefore, the function of the archive is two-fold: not only it consists in the presentation of the recorded memories, past ideas or commentaries, it further (possibly, hopefully) reveals a performative potential of any document thus enabling it to become a script for the future.
        <br /><br />
        __________
        <br /><br />
        <small className='small'>
          The archive is compiled from materials sent by the artists, which are either directly related to their projects published at youinteralia, or provide a broad outlook on their practice.
          <br />
          You are invited to browse the archive by one tag or a combination of them, or to click the artist's name to see all the materials that she or he shared with us.
        </small>
      </>
    ],
    browse: ["поиск по тегам", "browse archive by tags"],
    nothing: ["ничего не найдено", "no items found"],
    findOut: ["Ничего не найдено. Узнать о художнице по ссылке", "no result. find out about artist below"],
    readPDF: ['Читать PDF', 'Open PDF'],
  },
  Privacy: [
    <>
      Политика в отношении обработки персональных данных<br />
      1. Общие положения<br />
      Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Белишкиной Алиной Юрьевной и Мостовой Валерией Владимировной (далее – Оператор).<br />
      1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.<br />
      1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта http://youinteralia.com.<br />
       <br />
      2. Основные понятия, используемые в Политике<br />
      2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;<br />
      2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);<br />
      2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу http://youinteralia.com;<br />
      2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;<br />
      2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;<br />
      2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;<br />
      2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;<br />
      2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта http://youinteralia.com;<br />
      2.9. Пользователь – любой посетитель веб-сайта http://youinteralia.com;<br />
      2.10. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;<br />
      2.11. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;<br />
      2.12. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;<br />
      2.13. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.<br />
       <br />
      3. Оператор может обрабатывать следующие персональные данные Пользователя<br />
      3.1. Фамилия и Имя;<br />
      3.2. Электронный адрес;<br />
      3.3  Аудиозапись голоса;<br />
      3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).<br />
      3.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.<br />
       <br />
      4. Цели обработки персональных данных<br />
      4.1. Цель обработки персональных данных Пользователя — информирование Пользователя посредством отправки электронных писем; размещение аудиозаписи голоса на сайте.<br />
      4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты youinteralia@gmail.com с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».<br />
      4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.<br />
       <br />
      5. Правовые основания обработки персональных данных<br />
      5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте http://youinteralia.com. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.<br />
      5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).<br />
       <br />
      6. Порядок сбора, хранения, передачи и других видов обработки персональных данных<br />
      Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.<br />
      6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.<br />
      6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.<br />
      6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора youinteralia@gmail.com с пометкой «Актуализация персональных данных».<br />
      6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора youinteralia@gmail.com с пометкой «Отзыв согласия на обработку персональных данных».<br />
       <br />
      7. Трансграничная передача персональных данных<br />
      7.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.<br />
      7.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.<br />
       <br />
      8. Заключительные положения<br />
      8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты youinteralia@gmail.com.<br />
      8.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.<br />
      8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу http://youinteralia.com/privacy.
    </>,
    <>
      At You, Inter Alia, accessible from youinteralia.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by You, Inter Alia and how we use it. <br />
      If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. <br />
      This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in You, Inter Alia. This policy is not applicable to any information collected offline or via channels other than this website. <br />
      Consent <br />
      By using our website, you hereby consent to our Privacy Policy and agree to its terms. <br />
      Information we collect <br />
      The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. <br />
      We may process the following personal data of the User:  <br />
      1. Your name and surname <br />
      2. Email address <br />
      3. Recorded voice <br />
      4. The contents of the message and/or attachments you may send us, and any other information you may choose to provide. <br />
 <br />
      How we use your information <br />
      We use the information we collect in various ways, including to: <br />
      Provide, operate, and maintain our website <br />
      Improve, personalize, and expand our website <br />
      Understand and analyze how you use our website <br />
      Develop new products, services, features, and functionality <br />
      Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes <br />
      Send you emails <br />
      Find and prevent fraud <br />
 <br />
      Log Files <br />
      You, Inter Alia follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. <br />
 <br />
      Cookies and Web Beacons <br />
      Like any other website, You, Inter Alia uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. <br />
      For more general information on cookies, please read "What Are Cookies" from Cookie Consent. <br />
 <br />
      Advertising Partners Privacy Policies <br />
      You may consult this list to find the Privacy Policy for each of the advertising partners of You, Inter Alia. <br />
      Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on You, Inter Alia, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. <br />
      Note that You, Inter Alia has no access to or control over these cookies that are used by third-party advertisers. <br />
 <br />
      Third Party Privacy Policies <br />
      You, Inter Alia's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. <br />
      You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. <br />
      CCPA Privacy Rights (Do Not Sell My Personal Information) <br />
      Under the CCPA, among other rights, California consumers have the right to: <br />
      Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. <br />
      Request that a business delete any personal data about the consumer that a business has collected. <br />
      Request that a business that sells a consumer's personal data, not sell the consumer's personal data. <br />
      If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us. <br />
 <br />
      GDPR Data Protection Rights <br />
      We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: <br />
      The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service. <br />
      The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. <br />
      The right to erasure – You have the right to request that we erase your personal data, under certain conditions. <br />
      The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions. <br />
      The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions. <br />
      The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions. <br />
      If you make a request, we have one month to respond to you. If you would like to contact us please send us letter to youinteralia@gmail.com.
    </>
  ],
}


export default defaultMessages