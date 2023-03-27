/**
 * README.md 마크업을 위한 함수입니다.
 * @param {object} steps
 * @returns 문자열
 */
export default function programmersTemplate(steps) {
    const { lv0, lv1, lv2, lv3, lv4, lv5, unrated } = steps;
    const keys = Object.keys(steps);
    const total = keys.reduce((prev, curr) => prev + steps[curr], 0);
  
    const template = `
    ### 프로그래머스
    ---
    |   단계   | 해결한 문제 수 |
    | :------: | :------------:           |
    |   lv0    |       ${lv0 || 0}        |
    |   lv1    |       ${lv1 || 0}        |
    |   lv2    |       ${lv2 || 0}        |
    |   lv3    |       ${lv3 || 0}        |
    |   lv4    |       ${lv4 || 0}        |
    |   lv5    |       ${lv5 || 0}        |
    |  unrated |       ${unrated || 0}    |
    |  Total   |       ${total}           |
    `;
  
    return template;
  }