/**
 * SPA(Single Page Application)
 *
 * 싱글 페이지 애플리케이션(single-page application, SPA, 스파)은
 * 서버로부터 완전한 새로운 페이지를 불러오지 않고 현재의 페이지를
 * 동적으로 다시 작성함으로써 사용자와 소통하는
 * 웹 애플리케이션이나 웹사이트를 말한다.
 * 이러한 접근은 연속되는 페이지들 간의 사용자 경험의 간섭을 막아주고
 * 애플리케이션이 더 데스크톱 애플리케이션처럼 동작하도록 만들어준다.
 * 
 * SPA에서 HTML, 자바스크립트, CSS 등
 * 필요한 모든 코드는 하나의 페이지로 불러오거나,
 * [1] 적절한 자원들을 동적으로 불러들여서 필요하면 문서에 추가하는데,
 * 보통 사용자의 동작에 응답하게 되는 방식이다.
 * 
 * 문서는 프로세스 중 어떠한 지점에서도 다시 불러들이지 않으며
 * 다른 문서로 제어권을 넘기지 않으나,
 * 위치 해시나 HTML5 히스토리 API를 사용하여
 * 애플리케이션 안에서 개개의 논리 문서의 인식 및 탐색을 제공할 수 있다.
 * [2] 싱글 페이지 애플리케이션과의 소통은
 * 뒷편에 있는 웹 서버와의 동적인 통신을 수반하기도 한다.
 * 
 * DOM Visualizer : http://bioub.github.io/dom-visualizer/

  
- Virtual DOM ())


리액트 앱 프로젝트 생성
  NPM(Node Package Manager)
  : Node.js의 패키지 관리 시스템(Gradle이 메이븐 리포지터리에서 라이브러리를  다운받는 것과 비슷한 개념)
    - NPM은 Node.js를 설치하면 함께 설치된다. npmjs(https://npmjs.com)
    - vscode 재시작/powershell or cmd
    - $ npm version
    - $ node -v
 
  YARN(https://yarnpkg.com/)
 
  ** 에러 해결
  npm WARN config global `--global`, `--local` are deprecated.
 
  [Windows PowerShell 관리자 권한 실행]
 
  Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
  npm install --global --production npm-windows-upgrade
  npm-windows-upgrade



 */

