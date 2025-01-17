/*
  DO NOT EDIT THE LINE BELOW
  -------------------------- */
const generateTable = require("./lib/tables");

/*
  YOU MAY EDIT THE LINES BELOW
  ---------------------------- */

/**
 * Write a function that calculates the pending balance on your account.
 *
 * Pending payments are payments that you have made but which have not
 * yet cleared. So they have not yet been deducted from your current
 * account balance.
 *
 * This function should return your account balance after all of the
 * pending payments have been deducted.
 *
 * @param {Array<Number>} pendingPayments Array of pending payments
 * @param {Number} currentBalance How much money is currently in the account
 * @return {Number}
 */
function getPendingBalance(pendingPayments, currentBalance) {
  var number = 0;
  for (var x = 0; x < pendingPayments.length; x++) {
    var total = number + pendingPayments[x];
    number = total;
  }
  var remainingBalace = currentBalance - number;
  return remainingBalace;
}

/**
 * Write a function that calculates the total expenditures for this month.
 *
 * This function should return the total value of all payments that you
 * have made, including those that have cleared and those that are still
 * pending.
 *
 * @param {Array<Number>} clearedPayments Array of payments that have cleared
 * @param {Array<Number>} pendingPayments Array of payments that have not yet cleared
 * @return {Number}
 */
function getTotalExpenditures(clearedPayments, pendingPayments) {
  var sumOfClearedPayment = 0;
  for (var x = 0; x < clearedPayments.length; x++) {
    var totalCleared = sumOfClearedPayment;
    sumOfClearedPayment = clearedPayments[x] + totalCleared;
  }
  var sumOfPendingPayment = 0;
  for (var y = 0; y < pendingPayments.length; y++) {
    var totalPending = sumOfPendingPayment;
    sumOfPendingPayment = pendingPayments[y] + totalPending;
  }
  var result = sumOfClearedPayment + sumOfPendingPayment;

  return result;
}

/**
 * Write a function that calculates the remaining budget after setting aside
 * some money for savings.
 *
 * For example, if you are saving £25 each month, you will need to deduct
 * that from your remaining budget. Your remaining budget should also take
 * into account payments that have not yet cleared.
 *
 * @param {Number} amountToSave How much money you will save each month
 * @param {Number} currentBalance How much money is currently in the account
 * @param {Array<Number>} pendingPayments Array of payments that have not yet cleared
 * @return {Number}
 */
function getRemainingBudget(amountToSave, currentBalance, pendingPayments) {
  var sumOfPendingPayment = 0;
  for (var y = 0; y < pendingPayments.length; y++) {
    var totalPending = sumOfPendingPayment;
    sumOfPendingPayment = pendingPayments[y] + totalPending;
  }
  var totalDeduction = sumOfPendingPayment + amountToSave;
  var getRemainingBudget = currentBalance - totalDeduction;
  return getRemainingBudget;
}

/**
 * Write a function that finds the largest expense this month.
 *
 * The largest expense can come from any payment that you have made.
 *
 * @param {Array<Number>} clearedPayments Array of payments that have cleared
 * @param {Array<Number>} pendingPayments Array of payments that have not yet cleared
 * @return {Number}
 */
function getLargestExpense(clearedPayments, pendingPayments) {
  var largestExpenseCleared = 0;
  for (var x = 0; x <= largestExpenseCleared; x++) {
    if (clearedPayments[x] > largestExpenseCleared) {
      largestExpenseCleared = clearedPayments[x];
    }
  }
  var largestExpensePending = 0;
  for (var y = 0; y <= largestExpensePending; y++) {
    if (pendingPayments[y] > largestExpensePending) {
      largestExpensePending = pendingPayments[y];
    }
  }
  var largestExpenditure = largestExpenseCleared + largestExpensePending;
  return largestExpenditure;
}
/**
 * Write a function that calculates the account balance at the start
 * of the month.
 *
 * The account balance at the start of this month will be whatever the
 * balance was before the cleared payments were deducted.
 *
 * @param {Array<Number>} clearedPayments Array of payments that have cleared
 * @param {Number} currentBalance How much money is currently in the account
 * @return {Number}
 */
function getStartingBalance(clearedPayments, currentBalance) {
  var sumOfClearedPayment = 0;
  for (var x = 0; x < clearedPayments.length; x++) {
    var total = sumOfClearedPayment + clearedPayments[x];
    sumOfClearedPayment = total;
    console.log(sumOfClearedPayment);
  }

  var startingBalance = sumOfClearedPayment + currentBalance;
  return startingBalance;
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

const exampleClearedPayments = [21.23, 19.01, 12.21, 56.92, 72, 2.23];
const examplePendingPayments = [72.2, 41.21];
const exampleCurrentBalance = 292.12;

generateTable("Account", [
  {
    "Starting Balance": getStartingBalance(
      exampleClearedPayments,
      exampleCurrentBalance
    ).toFixed(2)
  },
  {
    "Total Cleared Payments": exampleClearedPayments
      .reduce((sum, a) => sum + a)
      .toFixed(2)
  },
  {
    "Total Pending Payments": examplePendingPayments
      .reduce((sum, a) => sum + a)
      .toFixed(2)
  },
  {
    "Total Expenditures": getTotalExpenditures(
      exampleClearedPayments,
      examplePendingPayments
    ).toFixed(2)
  },
  {
    "Largest Expenditure": getLargestExpense(
      exampleClearedPayments,
      examplePendingPayments
    ).toFixed(2)
  },
  {
    "Balance after pending payments clear": getPendingBalance(
      examplePendingPayments,
      exampleCurrentBalance
    ).toFixed(2)
  },
  {
    "Remaining budget after saving £50": getRemainingBudget(
      50,
      exampleCurrentBalance,
      examplePendingPayments
    ).toFixed(2)
  }
]);
