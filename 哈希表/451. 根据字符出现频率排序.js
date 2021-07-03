const frequencySort = s => {
    // 要返回的字符串
    let res = '';
    const map = new Map();

    // 遍历s，创建map
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // map根据value排序，创建mapSort
    const mapSort = new Map([...map].sort((a, b) => b[1] - a[1]));
    // 遍历排序好的mapSort
    mapSort.forEach((value, key) => {
        // 利用repeat()方法，对key重复value次
        // 再拼接到res上
        res += key.repeat(value);
    });

    return res;
};

frequencySort('tree');
