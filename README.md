# School-IT 2018

# Windows:


**_НАСТРОЙКА БАЗЫ ДАННЫХ_** 
1) Установить **PostgreSQL 9.4**+ <br>
2) Открыть **psql** и зайти под пользователем **_postgres_** в БД _**postgres**_ <br>
Если не получается - измените пароль пользователя **_postgres_** (Google в помощь)<br>
3) В строку **`postgres=#`** скопировать и вставить текст из файла _`create_for_postgres.sql`_ , выйти <br>
4) Открыть **psql** и зайти под пользователем **_client_** в БД _**project**_ <br>
5) В строку **`project=>`** скопировать и вставить текст из файла _`create_for_client.sql`_, затем из файла _`insert.sql`_ <br><br>
(перед обновлением или для удаления базы данных или пользователя **_client_** зайти под пользователем **_postgres_** в БД _**postgres**_ и скопировать текст из файла _`delete.sql`_) <br><br><br>

_**НАСТРОЙКА СЕРВЕРА**_
1) Сделать **git clone** <br>
2) Создать локальный сервер **localhost** (я сделал с помощью расширения **Localhost Detector** для **Google Chrome**) <br>
3) Установить **nodejs** и модули для него: <br>
Нажмите _**Win+R**_, введите **cmd**. Откроется командная строка, перейдите в папку с проектом и введите: <br><br>
**`~\School-IT> npm install nodejs -g`** <br>
**`~\School-IT> npm install http --save`** <br>
**`~\School-IT> npm install pg-promise --save`** <br>
**`~\School-IT> npm install json --save`** <br>
4) В том же окне вводите: <br>
**`~\School-IT> node server.js`** <br>
После этого откройте браузер и введите в адресной строке _**http://localhost:8888**_ и наблюдайте результат запроса в командной строке
