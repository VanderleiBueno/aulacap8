import { formatPrice } from "util/formatters";

test('formatPrice should format number pt-BR when given 10.1', () => {

// ARRANGE
const value = 10.1;

// ACT
const result = formatPrice(value);

// ASSSERT
expect(result).toEqual("10,10");

});