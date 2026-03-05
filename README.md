# Media-bias-

Интерактивна уеб страница в стил **Ad Fontes** за българските медии (2025), базирана на доклада:

- `Проучване на български медии_ Точност и пристрастия (1).odt`

## Локален preview

```bash
python -m http.server 8000
```

Отвори: `http://localhost:8000`

## GitHub Pages preview (без "Not Found")

Вече има workflow за автоматичен deploy към GitHub Pages при push към `main`.

### Еднократна настройка в GitHub

1. Отиди в **Settings → Pages**.
2. В **Build and deployment** избери **Source: GitHub Actions**.
3. Push-ни промените към `main`.
4. Изчакай workflow-а `Deploy static site to GitHub Pages` да мине успешно.
5. Отвори URL-а на Pages (пример: `https://<username>.github.io/Media-bias-/`).

> Добавен е и `404.html` fallback, за да не виждаш празна „Not Found“ страница при директно отваряне на route в preview среда.

## Какво включва страницата

- Scatter chart с 50 медии, по оси:
  - X: пристрастие (либерално → център → консервативно / про-руско)
  - Y: надеждност (0-64)
- Филтри по:
  - търсене
  - тип медия
  - диапазон на надеждност
- Детайлен панел при избор на медия
