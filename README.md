# Сервис для работы с пользователями

Использовать данный репозиторий как шаблон для всех приложений.

## Команды запуска


```bash
yarn start - запуск приложения
yarn start:dev - запуск приложения в режиме development
yarn build - собрать приложение
yarn test - запустить тесты
```

## Команды для миграций данных в БД


```bash
yarn db:create database/migrations/migration-name - создание пустой миграции
yarn db:generate database/migrations/migration-name - сгенерировать миграцию
yarn db:migrate database/migrations/migration-name - выполнить миграции
yarn db:revert - откатить последнюю миграцию
```


## Соглашение коммитов

В качестве соглашения по умолчанию Commitlint использует Соглашение о коммитах. В соответствии с этим Соглашением, сообщения коммитов должны иметь следующую структуру:

```
<тип>[необязательный контекст]: <описание>
[необязательное тело]
[необязательная(ые) сноска(и)]
```

Например, если я исправил баг, имеющий отношение к UI, сообщение коммита может быть таким:
```
fix(ui): Button was not showing up properly on mobile view.
```