// 1. Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance = null;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {

  // 3. Constructor that takes `branchInfo` as a parameter.
  constructor(branchInfo) {
    // Check if `bankBranchInstance` is null (indicating no instance exists).
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;  // If no instance exists, create one.
      bankBranchInstance = this;     // Assign this instance to the singleton variable.
    }
    return bankBranchInstance;       // Return the singleton instance.
  }

  // 4. Method to retrieve branch details.
  getBranchInfo() {
    return this.branchInfo;
  }
}

// 5. Usage section:
// Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
const branchA = new BankBranch('Branch A Information');
console.log(branchA.getBranchInfo());  // Output: 'Branch A Information'

// Try to create another instance with different branch information.
const branchB = new BankBranch('Branch B Information');
console.log(branchB.getBranchInfo());  // Output: 'Branch A Information' (since it's a singleton)

// Verify that `branchA` and `branchB` are both referring to the same instance.
console.log(branchA === branchB);  // Output: true
