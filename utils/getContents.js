// getContents.js
import * as fs from 'fs';
import path from 'path';

const __dirname = path.resolve(); // 현재 경로를 가져옵니다.
// 모듈 방식이 CommonJS이면 path를 사용하지 않고 그냥 __dirname으로 경로를 가져올 수 있습니다.
// console.log(__dirname);

/**
 *
 * @param {string} dir 도메인 경로
 * @return 도메인 별 존재하는 단계(레벨)들을 담은 배열을 반환합니다.
 * ex) 프로그래머스 디렉토리 안에 lv0, lv1, lv2 폴더가 존재한다고 가정하면 [lv0, lv1, lv2]가 반환됩니다.
 */
function getDirList(dir) {
  try {
    // 주어진 dir 매개변수를 통해 해당 경로 안의 단계들을 배열에 담아 반환합니다.
    // 즉 해당 디렉토리 내부에 있는 모든 폴더들의 이름을 가져옵니다.
    return fs
      .readdirSync(dir, { encoding: 'utf-8', withFileTypes: true }) // 전달받은 dir를 읽습니다. 디렉토리를 다 읽고 난 후에 동작해야되므로 동기로 수행합니다.
      .filter((dirent) => dirent.isDirectory()) // readdirSync는 `Dirent` 객체를 반환합니다. 해당 객체의 isDirectory()를 통해 디렉토리인지 파일인지 구분하여 디렉토리만 가져옵니다.
      .map((dirent) => dirent.name.normalize('NFC')) // 유니코드의 문자열을 유니코드 정규화 방식(Unicode Normalization Form)에 따라 정규화된 형태로 반환합니다.
      .sort(); // 오름차순으로 정렬합니다.
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 *
 * @param {string} domain 도메인 이름 ex)백준 / 프로그래머스 / SWEA
 * @returns 단계와 해당 단계의 파일 수를 객체로 반환합니다.
 * ex) 프로그래머스 디렉토리 안에 lv0, lv1, lv2 폴더가 존재하고
 * 각각 2,2,3 개의 파일이 존재한다고 가정하면 {lv0: 2, lv1: 2, lv2: 3}이 반환됩니다.
 */
export function getDomainDirList(domain) {
  const domainDir = path.resolve(__dirname, domain); // resolve()는 쉽게 생각해서 join()으로 생각하시면됩니다. 전달받은 두 문자열을 합쳐 하나의 문자열로 만들어 경로로 사용합니다.
  const stepList = getDirList(domainDir);

  // stepList를 순회하면서 단계별 문제풀이의 수를 가져옵니다.
  // 백준 허브는 `문제번호. 문제이름`의 형태로 하나의 디렉토리를 가지며 내부에 소스파일과 README.md 파일이 있습니다.
  // 즉, 단계별 디렉토리안에 디렉토리가 있는 형태이기 때문에
  // 카운팅할 때도 `getDirList()`를 재사용해 카운팅하겠습니다.
  const countArray = stepList.map((step) => {
    const stepDir = path.resolve(domainDir, step);

    const filesLength = fs.readdirSync(stepDir).length; // return array - all files names

    return filesLength;
  });

  // stepList와 countArray 두 배열을 하나의 객체로 합칩니다.
  // ex) stepList = [lv0, lv1, lv2] / countArray = [2, 2, 3];
  // merged = {lv0: 2, lv1: 2, lv2: 3}
  const merged = stepList.reduce(
    (obj, key, index) => ({ ...obj, [key]: countArray[index] }),
    {}
  );

  return merged;
}