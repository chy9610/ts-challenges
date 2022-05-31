type Replace<S extends string, From extends string, To extends string> =
    S extends `${infer U}${From}${infer K}` ?
    From extends '' ? S : `${U}${To}${K}`
    : S;
;
