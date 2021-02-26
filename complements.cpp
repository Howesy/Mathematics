#include <Windows.h>
#include <stdint.h>
#include <math.h>

int32_t calculateNinesComplement(int32_t x) {
	int32_t calculatedDigits = reinterpret_cast<int32_t>(log(x) + 1);
	int32_t calculation = (pow(10, calculatedDigits) + 1) - x;
	return calculation;
}

int32_t calculateTensComplement(int32_t x) {
	return calculateNinesComplement(x) + 1;
}