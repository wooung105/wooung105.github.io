# Wooung

Astro로 만든 개인 블로그입니다. Markdown으로 글을 작성하고 GitHub Pages에 정적 사이트로 배포합니다.

## 로컬에서 실행하기

Node.js 22.23.4 이상이 필요합니다. Node.js 24 LTS를 권장합니다.

```sh
npm install
npm run dev
```

터미널에 표시된 주소에서 사이트를 확인할 수 있습니다. `npm run build`로 배포용 파일을 만들고 `npm run preview`로 결과를 미리 볼 수 있습니다.

## 글 작성하기

`src/content/blog/`에 Markdown 파일을 추가합니다. 파일 이름이 글 주소가 됩니다. 예를 들어 `my-post.md`는 `/posts/my-post/`에서 볼 수 있습니다.

```md
---
title: "글 제목"
description: "글 목록과 검색 결과에 표시할 설명"
date: 2026-10-30
tags: [Astro, 개발]
category: "개발"
draft: false
---

본문을 작성합니다.
```

`/blog/`에서 카테고리별로 글을 볼 수 있습니다. `category`에는 `개발`, `CTF/Wargame`, `BugbBounty`, `블로그/기술문서`, `논문/컨퍼런스`, `공모전/자격증` 중 하나를 입력하세요. 생략한 글은 `전체` 목록에 표시됩니다. 태그(`tags`)는 카테고리와 별도로 자유롭게 지정할 수 있습니다.

원형 썸네일은 `public/images/`에 이미지를 넣고 `thumbnail: "/images/파일명.png"`로 지정합니다. 생략하면 기본 토끼 이미지가 표시됩니다.

연재 글은 frontmatter에 같은 `series` 이름을 추가하면 시리즈 페이지에 날짜순으로 묶입니다. `series`는 선택 사항이며, 이름에 슬래시는 사용할 수 없습니다.

```yaml
series: "블로그 만들기"
```

`draft: true`인 글은 목록과 배포 결과에서 제외됩니다. 태그 페이지는 발행된 글을 기준으로 자동 생성됩니다. 블로그 이름과 소개는 `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `src/pages/about.astro`에서 바꿀 수 있습니다.

## GitHub Pages 배포

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다. 이후 `main` 브랜치에 변경 사항을 푸시하면 `.github/workflows/deploy.yml`이 사이트를 빌드하고 배포합니다. 수동 실행도 Actions 탭에서 가능합니다.

현재 사이트 주소는 `https://wooung105.github.io`로 설정되어 있습니다. 다른 주소를 사용한다면 `astro.config.mjs`의 `site`를 수정하세요. 다른 이름의 프로젝트 저장소에 배포할 때는 저장소 이름에 맞는 `base`와 내부 링크 설정도 필요합니다.
