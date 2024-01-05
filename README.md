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

## PlanetScale 이란 ?

데이터베이스를 제공해주는 Severless 데이터베이스 플랫폼
(Severless 서버가 없다는 게 아니라 서버를 우리가 유지할 필요가 없음)
planetscale.com

# Vitess

Vitess는 MySQL을 스케일링하기 위한 데이터베이스 클러스터링 시스템
인터넷에서 가장 큰 사이트를 호스팅하는 강력한 오픈 소스 기술입니다.
https://vitess.io/

Vitess를 사용하는 이유

1. 수평 스케일
2. 고가용성 (Vitess의 기본 복제본 구성은 예기치 않은 이벤트가 발생할 때 기본에서 복제본으로 원활한 장애 조치를 허용합니다.)
3. MySQL 호환
4. 쿠버네티스 네이티브
5. 구체화된 뷰
6. 온라인 스키마 마이그레이션

윈도우 다운방법

scoop.sh

# Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time

# irm get.scoop.sh | iex

-- 에러시 아래 명령러 실행



# scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git

# scoop install pscale mysql

# pscale 명령어로 설치 잘된지확인가능

# pscale auth login

- 사이트 뜨면 터미널에있는거랑같은지확인후 컨펌

# pscale region list

- 나라확인

# pscale database create 프로젝트이름 --region gcp-asia-northeast3

신용카드에러뜨면 사이트에서 신용카드 등록후 다시만들면됨 (어려우면 그냥 사이트에서 만들어도 상관없음)

# pscale connect market(프로젝트이름)

실행

# DATABASE_URL="mysql://127.0.0.1:61881/market"

- 이런식으로 env파일 수정

```
datasource db {
  provider     = "mysql"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
}
```

외래키 사용을 위해 relationMode = "prisma" 추가

# npx prisma db push

터미널에 추가완료 !

# npx prisma studio

명령어를 통해 테이블확인가능

# npm i @prisma/client

설치하고 client 파일만들어서 import

# npx prisma generate

확인해보기
