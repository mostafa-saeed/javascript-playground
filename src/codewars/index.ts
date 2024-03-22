// https://www.codewars.com/kata/55b42574ff091733d900002f/javascript
export const friend = (friends: string[]) =>
  friends.filter((friend) => friend.length === 4);

// https://www.codewars.com/kata/597770e98b4b340e5b000071/javascript
export const FileNameExtractor = {
  extractFileName(dirtyFileName: string) {
    return dirtyFileName.match(/(?<=_)[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+/)?.shift();
  },
};

// https://www.codewars.com/kata/55685cd7ad70877c23000102/javascript
export const makeNegative = (num: number) => (num === 0 ? 0 : -Math.abs(num));

// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
export const XO = (str: string) => {
  let xCount = 0;
  let oCount = 0;

  for (const letter of str) {
    if (letter.toLowerCase() === 'x') {
      xCount++;
      continue;
    }

    if (letter.toLowerCase() === 'o') {
      oCount++;
      continue;
    }
  }

  return xCount === oCount;
};

// https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript
export const deleteNth = (array: number[], n: number) => {
  const hash: Record<string, number> = {};

  return array.reduce<number[]>((newArray, number) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!hash[number]) {
      hash[number] = 0;
    }

    hash[number]++;
    if (hash[number] <= n) {
      newArray.push(number);
    }

    return newArray;
  }, []);
};
