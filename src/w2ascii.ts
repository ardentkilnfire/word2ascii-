export function w2ascii(str: string): number {
    let sum = 0;
    for (let i = 0; i < str.length && str[i] !== ' '; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}
