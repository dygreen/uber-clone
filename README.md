# Uber App

> [개인 프로젝트]
>
> : Uber App Clone
>
>
> <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB"> <img src="https://camo.githubusercontent.com/d89869c250e2d65d533d2c0171986c2fbcf5baabe585d06be6e4826fa2b77f11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d506f737467726553514c2d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d706f737467726573716c26636f6c6f723d343136394531" alt="postgresql" data-canonical-src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&amp;logoColor=white&amp;logo=postgresql&amp;color=4169E1" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/2f9bfa35e9e5cc19903ca5e230e55a02c7a816eaea34aceb8a1deddfe4b513ba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4578706f2d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d6578706f26636f6c6f723d303030303230" alt="expo" data-canonical-src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&amp;logoColor=white&amp;logo=expo&amp;color=000020" style="max-width: 100%;">

## _Service Info_
- UI
  - **splash**
  - **welcome** (without Login) : Swiper 적용
  - **home** (with Login) : 
    - 사용 내역 확인
    - 현재 사용자 위치 표시 (google Maps) (with `zustand`)
    - 예약
      1. 출발지 / 도착지 입력
      2. 운전기사 찾기 및 선택
      3. 결제 (Stripe)
- [Clerk](https://clerk.com/) : 회원가입/로그인 로직 적용
- [Neon](https://neon.tech) : 데이터베이스 (Severless PostgreSQL)
  - `/(api)/user` (/app/(api)/user+api.ts) : 회원가입 시 데이터베이스에 user 정보 저장 
- [Stripe](https://stripe.com/) : 결제 처리 로직 적용

## _API Info_
- maps API : [Geoapify](https://myprojects.geoapify.com/)
- google API : [console.cloud.google](https://console.cloud.google.com/)