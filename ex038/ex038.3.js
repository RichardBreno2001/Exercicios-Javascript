const RegexPreciso = /\d{4,5}-\d{4}/

console.log(RegexPreciso.test('99999-9999')) // true

console.log(RegexPreciso.test('999')) // false



