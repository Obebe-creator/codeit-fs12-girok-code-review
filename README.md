# 📘 Girok Code Review Study

> 💻 GitHub 기반 코드 리뷰 중심 학습 레파지토리
> 👥 TEAM Girok의 스터디 및 코드 리뷰 공간입니다

---

## 🌿 Branch Strategy

main 브랜치에는 리뷰가 완료되고 승인된 코드만 병합합니다.

개인 작업은 반드시 별도의 브랜치에서 진행합니다.

### 브랜치 네이밍 규칙

```
feat/{name}/{topic}
```

#### 예시

```
feat/ksh/array-method
feat/obebe/js-closure
```

### 작업 흐름

1. 브랜치 생성
2. 작업 후 Commit
3. Pull Request 생성
4. 코드 리뷰 진행
5. 승인 후 main 브랜치에 Merge

※ main 브랜치에서 직접 작업하지 않습니다.

## 📝 Commit Message Convention

- type과 subject 사이에는 콜론과 한 칸의 공백을 둡니다.
- subject는 한 줄로 작성합니다.
- 마침표를 사용하지 않습니다.
- 무엇을 했는지 명확하게 작성합니다.

### Type 목록

| Type     | 설명                                   |
| -------- | -------------------------------------- |
| feat     | 새로운 기능 추가                       |
| fix      | 버그 수정                              |
| refactor | 코드 리팩토링 (기능 변화 없음)         |
| style    | 코드 스타일 수정 (포맷팅, 세미콜론 등) |
| docs     | 문서 수정                              |
| test     | 테스트 코드 추가/수정                  |
| chore    | 설정, 빌드, 기타 변경                  |

---

### 예시

```
feat: 배열 map 메서드 정리
fix: null 예외 처리 추가
refactor: 중복 로직 함수 분리
docs: README 수정
```

---

## 🔍 Pull Request Convention

### PR 제목 형식

- type은 Commit Convention과 동일하게 사용합니다.
- 작업 내용을 한 줄로 명확하게 작성합니다.

#### 예시

```
[feat] 배열 map 메서드 정리
[refactor] 로그인 로직 개선
```

---

### PR 본문 작성 형식

작업 내용

구현 또는 수정한 내용

변경 이유

왜 이렇게 작성했는지에 대한 설명

리뷰 요청 포인트

중점적으로 봐줬으면 하는 부분

체크리스트

로컬 테스트 완료

컨벤션 준수

불필요한 코드 제거

## 🤝 Team Rule
