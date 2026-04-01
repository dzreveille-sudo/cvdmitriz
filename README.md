# Resume Portfolio Site

Готовый сайт-резюме на React + Vite + Tailwind CSS для публикации через GitHub Pages.

## Что менять

### Тексты
- `src/App.jsx`

### Имя репозитория
- `vite.config.js`

Замени:

```js
base: '/resume-portfolio/'
```

на имя своего репозитория на GitHub.

Пример:
- репозиторий `my-cv` → `base: '/my-cv/'`

### Фотографии
Сейчас стоят временные картинки по ссылкам.
Позже можно:
- заменить URL прямо в `src/App.jsx`
- или положить свои файлы в `public/` и подключать так:

```jsx
<img src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Фото" />
```

## Локальный запуск

```bash
npm install
npm run dev
```

## Публикация на GitHub Pages

1. Создай новый репозиторий на GitHub.
2. Залей туда все файлы из этого проекта.
3. Открой `Settings` → `Pages`.
4. В блоке `Build and deployment` выбери `Source: GitHub Actions`.
5. После пуша в `main` сайт соберётся и опубликуется автоматически.

Адрес будет таким:

```text
https://ТВОЙ-ЛОГИН.github.io/ИМЯ-РЕПОЗИТОРИЯ/
```
