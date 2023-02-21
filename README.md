# The market.

### Demo: [Market](https://market-turell7.vercel.app/)

### Demo: [Market - Admin panel](https://admin-market-turell7.vercel.app/)

## Documentation:

### 1. Запуск приложения в режиме разработки:

#### 1.1 Для `server`:

- `cd server` - перейти в дерикторию server
- `npm run dev` - запустить приложение

#### 1.2 Для `admin-app`:

- `cd admin-app` - перейти в дерикторию product-app
- `npm run dev` - запустить приложение

#### 1.3 Для `product-app`:

- `cd product-app` - перейти в дерикторию admin-app
- `npm run dev` - запустить приложение

### 2. Git

![Image alt](https://github.com/Turell7/market/raw/main/admin-app/src/assets/maxresdefault.jpg)

#### 2.1 Ветви:

- `main` - главная ветвь
- `release/0.1.0` - ветвь с номером релиза, перед слиянием в main
- `dev` - ветвь разработки
- `feat-'name'` - ветвь для разработки фичи, name - имя фичи (пример: feat-example)

#### 2.2 Инструкция по работе с репозиторием:

- `git clone https://github.com/Turell7/market.git` - склонировали приложение на локальную машину
- `git checkout dev` - перешли в ветвь разработки
- `git checkout -b feat-example` - создаете ветвь для работы с фичей(задачей), вместо `example` подставляете краткое название фичи
- Работаете с фичей
- Если закончили работу с фичей и готовы ее добавить в проект, то
- `git add .` - фиксируете изменения
- `git commit -m "add features"` Делаете коммит
- `git checkout dev` - переходите в ветку `dev`
- `git pull` - обновляем локальную ветвь `dev` до актуальной версии
- `git checkout feat-example` перходим в ветвь с фичей
- `git merge dev` - делаем слияние с ветвью `dev`
- Исправляем конфликто, если он есть
- `git push --set-upstream origin feat-example` - пуште ветвь на Github
- Если фича закончена, на сайте GitHub отпраляете запрос на `pull request` в ветвь `dev`
- Если будут вопросы - задавайте, не стесняйтесть, мы все здесь учимся.

### 3. [Road Map](https://github.com/Turell7/market/wiki/Road-Map)

### 4. [Architecture](https://github.com/Turell7/market/wiki/Application-Architecture)
