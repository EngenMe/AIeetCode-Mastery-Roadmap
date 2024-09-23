function strStr(haystack, needle) {
  if (needle === '') return 0;

  const haystackLen = haystack.length;
  const needleLen = needle.length;

  if (needleLen > haystackLen) return -1;

  for (let i = 0; i < haystack.length - needleLen; i++)
    if (haystack[i] === needle[0]) {
      let match = true;
      for (let j = 1; j < needleLen; j++)
        if (haystack[i + j] !== needle[j]) {
          match = false;
          break;
        }
      if (match) return i;
    }

  return -1;
}

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
console.log(strStr('mississippi', 'issip'));
