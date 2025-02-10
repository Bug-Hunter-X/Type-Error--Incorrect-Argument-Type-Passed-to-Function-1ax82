# Type Error in TypeScript

This repository demonstrates a common type error in TypeScript where a function expects a string argument, but an array of strings is provided. The error occurs because TypeScript's type system enforces type safety, and the mismatch leads to a compilation error. The solution provided shows how to address this by modifying the function to accept an array of strings and handling the array elements correctly. This example highlights the importance of careful type handling in TypeScript to ensure code reliability and maintainability.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` and examine the error.
3. Run `tsc bug.ts` to see the compilation error.
4. Open `bugSolution.ts` to see the corrected code. 
5. Run `tsc bugSolution.ts` to verify the successful compilation. 