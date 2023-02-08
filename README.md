# The market.

## Documentation:

### 1. Запуск приложения в режиме разработки:

#### 1.1 Для `server`: в разработке

#### 1.2 Для `admin-app`:

- `cd admin-app` - перейти в дерикторию admin-app
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
- `git chekout -b feat-example` - создаете ветвь для работы с фичей(задачей), вместо `example` подставляете краткое название фичи
- Работаете с фичей
- `git push --set-upstream origin feat-example` - пушите ветвь на Github
- Если фича закончена отпраляете запрос на `pull request` в ветвь `dev`
- Если будут вопросы - задавайте, не стесняйтесть, мы все здесь учимся.

### 3. [Road Map](https://github.com/Turell7/market/wiki/Road-Map)

### 4. [Architecture](https://github.com/Turell7/market/wiki/Application-Architecture)
