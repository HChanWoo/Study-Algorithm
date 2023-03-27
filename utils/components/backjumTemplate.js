/**
 * README.md 마크업을 위한 함수입니다.
 * @param {object} steps
 * @returns 문자열
 */
export default function baekjunTemplate(steps) {
    const { Bronze, Silver, Gold, Platinum, Diamond, Ruby } = steps;
    const keys = Object.keys(steps);
    const total = keys.reduce((prev, curr) => prev + steps[curr], 0);
  
    const template = `
    ### 백준
    ---
    |   단계   | 해결한 문제 수 |
    | :------: | :------------: |
    |  Bronze  |       ${Bronze || 0}        |
    |  Silver  |       ${Silver || 0}        |
    |   Gold   |       ${Gold || 0}          |
    | Platinum |       ${Platinum || 0}      |
    | Diamond  |       ${Diamond || 0}       |
    |   Ruby   |       ${Ruby || 0}          |
    |  Total   |       ${total}         |
    `;
  
    return template;
  }