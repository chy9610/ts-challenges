type Absolute<T extends number | string | bigint> =
    `${T}` extends `-${infer F}` ? F : `${T}`;

// 暂时未搞懂此处的思路（答案抄网友）