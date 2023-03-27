// build.js
import * as fs from 'fs';
import path from 'path';
import baekjunTemplate from './components/baekjunTemplate.js';
import programmersTemplate from './components/programmersTemplate.js';
import { getDomainDirList } from './getContents.js';

const __dirname = path.resolve(); // 현재 경로를 가져옵니다.
const FILE_TO_UPDATE = path.resolve(__dirname, './README.md'); // 현재 경로에 Readme 파일 붙임
const DOMAINS = ['백준', '프로그래머스', 'SWEA']; // 도메인들을 배열에 상수로 저장합니다.

// README.md 파일의 헤더 부분을 작성해줬습니다.
const readmeHeader = `
# javascript-for-algorithm

프로그래머스, 백준, 삼성 SW 역량테스트 등 문제풀이를 백준허브를 이용해 저장하기 위한 레포지토리입니다.
`;

// getContents.js에서 getDomainDirList() 함수를 가져와
// map()을 이용해 각 도메인 별 데이터 가져옵니다.
// 지금보니 getContents.js 라는 파일 이름이 마음에 들지 않군요... 적절한 파일명은 아닌 것 같습니다.
const [baekjun, programmers, swea] = DOMAINS.map((domain) =>
  getDomainDirList(domain)
);

// getDomainDirList()에서 반환된 각 도메인의 단계별 카운트를 매핑한 객체를
// 앞서 마크업에서 만들어두었던 Template 함수들에 전달인자로 전달합니다.
const baekJunString = baekjunTemplate(baekjun);
const programmersString = programmersTemplate(programmers);

// 이후 반환된 문자열을 join()을 이용해 합쳐줍니다.
const updateData = [readmeHeader, baekJunString, programmersString].join('\\n');

fs.writeFileSync(FILE_TO_UPDATE, updateData, 'utf-8'); // 그리고 README.md 파일에 써줍니다!