# Randle Auto Mobile

iPhone과 iPad의 Safari에서 Randle 자동 진행과 인간 인증을 처리하는 설치용 Userscript입니다. PC 서버나 쿠키 복사가 필요하지 않습니다.

## 설치

1. App Store에서 [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)를 설치합니다.
2. Userscripts 앱을 한 번 열어 스크립트 저장 폴더를 설정합니다.
3. iOS 설정의 **Safari → 확장 프로그램 → Userscripts**에서 확장을 켜고 `randle.lixx.kr` 접근을 허용합니다.
4. Safari에서 [randle-mobile.user.js](https://raw.githubusercontent.com/pigeo-on2/randle-mobile-installer/main/randle-mobile.user.js)를 엽니다.
5. Safari 확장 메뉴에서 Userscripts를 열고 설치합니다.
6. `https://randle.lixx.kr/play`에 로그인하고 새로고침한 뒤 오른쪽 아래 **R** 버튼을 누릅니다.

## 동작

- Safari의 현재 로그인 세션을 사용하며 쿠키 값을 읽거나 표시하지 않습니다.
- 인간 인증 자동 풀이가 기본으로 켜져 있으며 `bridge`, `palette`, `difference`, `lock`, `recipe`, `tower`, `scale` 유형은 이미지를 판독합니다.
- 지원하지 않는 유형은 같은 문제에서 이미 시도한 답을 기억하며 진행 상태를 탐색합니다.
- 자동 풀이를 끄면 인증 문제를 화면 최상단에 표시하고 `도착`, `임시 보관` 같은 위치 이름을 보여 줍니다.
- 답변이 만료되거나 거절되면 최신 문제를 다시 불러오고 같은 실행을 계속합니다.
- 서버가 Safari 게임 연결을 일시적으로 거절해도 재연결한 뒤 숨겨진 인간 인증부터 처리합니다.
- 최대 10,000라운드와 RP 기대값, 중복 유지, 즉시 확정 전략을 제공합니다.

iOS는 Safari가 백그라운드로 이동하거나 기기가 잠기면 웹 실행을 정지할 수 있습니다. 실행 중에는 Randle 탭을 화면에 열어 두세요.

`randle-mobile.user.js`는 필요한 protobuf.js 런타임을 포함한 단일 설치 파일입니다. 해당 런타임의 BSD 라이선스는 [LICENSE-protobufjs](./LICENSE-protobufjs)에 있습니다.
