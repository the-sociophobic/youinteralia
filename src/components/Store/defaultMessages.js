const defaultMessages = {
  Header: {
  },

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
  },
  Privacy: [
    <>
      Политика в отношении обработки персональных данных:
      <br /><br />
      1. Общие положения
      <br />
      Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Михайловым Иваном Сергеевичем (далее – Оператор).
      <br />
      1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
      <br />
      1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта youinteralia.com.
      <br /><br />

      2. Основные понятия, используемые в Политике
      <br />
      2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;
      <br />
      2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);
      <br />
      2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу youinteralia.com;
      <br />
      2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;
      <br />
      2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;
      <br />
      2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;
      <br />
      2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;
      <br />
      2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта youinteralia.com;
      <br />
      2.9. Пользователь – любой посетитель веб-сайта youinteralia.com;
      <br />
      2.10. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;
      <br />
      2.11. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;
      <br />
      2.12. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;
      <br />
      2.13. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.
      <br /><br />
      
      3. Оператор может обрабатывать следующие персональные данные Пользователя
      <br />
      3.1. Фамилия, имя, отчество;
      <br />
      3.2. Номер телефона;
      <br />
      3.3. Адрес электронной почты;
      <br />
      3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
      <br />
      3.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.
      <br /><br />
      
      4. Цели обработки персональных данных
      <br />
      4.1. Цель обработки персональных данных Пользователя — заключение, исполнение и прекращение гражданско-правовых договоров; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте youinteralia.com; уточнение деталей заказа.
      <br />
      4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты help@youinteralia.com с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
      <br />
      4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
      <br /><br />
      
      5. Правовые основания обработки персональных данных
      <br />
      5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте youinteralia.com. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.
      <br />
      5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
      <br /><br />
      
      6. Порядок сбора, хранения, передачи и других видов обработки персональных данных
      <br />
      Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
      <br />
      6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
      <br />
      6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.
      <br />
      6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора help@youinteralia.com с пометкой «Актуализация персональных данных».
      <br />
      6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора help@youinteralia.com с пометкой «Отзыв согласия на обработку персональных данных».
      <br /><br />
      
      7. Трансграничная передача персональных данных
      <br />
      7.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.
      <br />
      7.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.
      <br /><br />
      
      8. Заключительные положения
      <br />
      8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты help@youinteralia.com.
      <br />
      8.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
      <br />
      8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу youinteralia.com/privacy/.
    </>,
    <>
      Personal data processing policy:
      <br /><br />
      1. General Provisions
      <br />
      This personal data processing policy has been drawn up in accordance with the requirements of the Federal Law of July 27, 2006. No. 152-ФЗ "On personal data" and determines the procedure for processing personal data and measures to ensure the security of personal data taken by Ivan Sergeevich Mikhailov (hereinafter referred to as the Operator).
      <br />
      1.1. The operator sets as its most important goal and condition for the implementation of its activities the observance of human and civil rights and freedoms when processing their personal data, including the protection of the rights to privacy, personal and family secrets.
      <br />
      1.2. This Operator's policy regarding the processing of personal data (hereinafter referred to as the Policy) applies to all information that the Operator can obtain about visitors to the website youinteralia.com.
      <br /><br />

      2. Basic concepts used in the Policy
      <br />
      2.1. Automated processing of personal data - processing of personal data using computer technology;
      <br />
      2.2. Blocking of personal data - a temporary cessation of the processing of personal data (unless the processing is necessary to clarify personal data);
      <br />
      2.3. Website - a set of graphic and information materials, as well as computer programs and databases, ensuring their availability on the Internet at the network address youinteralia.com;
      <br />
      2.4. Personal data information system - a set of personal data contained in databases, and information technologies and technical means ensuring their processing;
      <br />
      2.5. Depersonalization of personal data - actions as a result of which it is impossible to determine, without the use of additional information, the belonging of personal data to a specific User or other subject of personal data;
      <br />
      2.6. Processing of personal data - any action (operation) or a set of actions (operations) performed using automation tools or without using such tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (update, change), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data;
      <br />
      2.7. Operator - a state body, municipal body, legal entity or individual, independently or jointly with other persons organizing and (or) carrying out the processing of personal data, as well as determining the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data;
      <br />
      2.8. Personal data - any information relating directly or indirectly to a specific or identifiable User of the website youinteralia.com;
      <br />
      2.9. User - any visitor to the website youinteralia.com;
      <br />
      2.10. Provision of personal data - actions aimed at disclosing personal data to a certain person or a certain circle of persons;
      <br />
      2.11. Dissemination of personal data - any actions aimed at disclosing personal data to an indefinite circle of persons (transfer of personal data) or at acquaintance with the personal data of an unlimited number of persons, including the disclosure of personal data in the media, posting on information and telecommunication networks or providing access to personal data in any other way;
      <br />
      2.12. Cross-border transfer of personal data - transfer of personal data to the territory of a foreign state to the authority of a foreign state, to a foreign individual or foreign legal entity;
      <br />
      2.13. Destruction of personal data - any actions as a result of which personal data are destroyed irrevocably with the impossibility of further restoring the content of personal data in the personal data information system and (or) material carriers of personal data are destroyed.
      <br /><br />
      
      3. The operator can process the following personal data of the User
      <br />
      3.1. Full Name;
      <br />
      3.2. Phone number;
      <br />
      3.3. E-mail address;
      <br />
      3.4. Also, the site collects and processes anonymized data about visitors (including cookies) using Internet statistics services (Yandex Metrica and Google Analytics and others).
      <br />
      3.5. The above data hereinafter in the text of the Policy are united by the general concept of Personal data.
      <br /><br />
      
      4. Purposes of personal data processing
      <br />
      4.1. The purpose of processing the User's personal data is the conclusion, execution and termination of civil contracts; providing the User with access to services, information and / or materials contained on the website youinteralia.com; clarification of order details.
      <br />
      4.2. The Operator also has the right to send the User notifications about new products and services, special offers and various events. The user can always refuse to receive informationcommunication messages by sending an e-mail to the Operator at help@youinteralia.com marked “Refusal of notifications about new products and services and special offers”.
      <br />
      4.3. Anonymized data of Users collected using Internet statistics services are used to collect information about the actions of Users on the site, improve the quality of the site and its content.
      <br /><br />
      
      5. Legal basis for the processing of personal data
      <br />
      5.1. The Operator processes the User's personal data only if it is filled in and / or sent by the User independently through special forms located on the website youinteralia.com. By filling out the appropriate forms and / or sending his personal data to the Operator, the User agrees with this Policy.
      <br />
      5.2. The Operator processes anonymized data about the User if it is allowed in the settings of the User's browser (the storage of cookies and the use of JavaScript technology are enabled).
      <br /><br />
      
      6. The procedure for collecting, storing, transferring and other types of processing of personal data
      <br />
      The security of personal data processed by the Operator is ensured through the implementation of legal, organizational and technical measures necessary to fully comply with the requirements of the current legislation in the field of personal data protection.
      <br />
      6.1. The operator ensures the safety of personal data and takes all possible measures to exclude access to personal data of unauthorized persons.
      <br />
      6.2. The User's personal data will never, under any circumstances, be transferred to third parties, except in cases related to the implementation of the current legislation.
      <br />
      6.3. In the event of inaccuracies in personal data, the User can update them independently by sending a notification to the Operator at the Operator's e-mail address help@youinteralia.com marked "Updating personal data".
      <br />
      6.4. The period for processing personal data is unlimited. The user can at any time revoke his consent to the processing of personal data by sending a notification to the Operator by e-mail to the Operator's email address help@youinteralia.com marked “Withdrawal of consent to the processing of personal data”.
      <br /><br />
      
      7. Cross-border transfer of personal data
      <br />
      7.1. Before starting the cross-border transfer of personal data, the operator must make sure that the foreign state, to whose territory it is supposed to transfer personal data, provides reliable protection of the rights of subjects of personal data.
      <br />
      7.2. Cross-border transfer of personal data on the territory of foreign states that do not meet the above requirements can be carried out only if there is a written consent of the subject of personal data for the cross-border transfer of his personal data and / or execution of an agreement to which the subject of personal data is a party.
      <br /><br />
      
      8. Final provisions
      <br />
      8.1. The user can get any clarification on issues of interest regarding the processing of his personal data by contacting the Operator via email help@youinteralia.com.
      <br />
      8.2. This document will reflect any changes in the personal data processing policy by the Operator. The policy is valid indefinitely until it is replaced by a new version.
      <br />
      8.3. The current version of the Policy is freely available on the Internet at youinteralia.com / privacy /.
    </>
  ],
}


export default defaultMessages