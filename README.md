# 중고홈짐사이트

플러그인설치
npm install @tailwindcss/forms

tailwind config에 적기

```
  plugins: [require('tailwindcss/forms')],
```

# prisma

# Prisma

1. Node.js and Typescript ORM(Object Relational Mapping)
   => JS or TS 와 데이터베이스 사이에 다리를 놓아줌 (기본적으로 번역기의 역할을 한다고 생각하면 됨)

2. Prisma를 사용하기 위해서는 먼저 Prisma에게 DB가 어떻게 생겼는지, 데이터의 모양을 설명해줘야 함 => schema.prisma

3. Prisma가 이런 타입에 관한 정보를 알고 있으면 client를 생성해줄 수 있음. client를 이용하면 TS로 DB와 직접 상호작용 가능, 자동완성 제공.

4. Prisma Studio : Visual Database Browser, DB를 위한 관리자 패널같은 것.

prisma 익스텐션설치

npx prisma init

```
//프리즈마폴더
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" //변경
  url      = env("DATABASE_URL")
}
```
