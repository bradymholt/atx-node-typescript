import ynab from "ynab";

const accessToken = "b43439eaafe2_this_is_fake_b43439eaafe2";
const ynabAPI = new ynab.API(accessToken);

(async function() {
  const transactionsResponse = await ynabAPI.transactions.getTransactions("last-used");
  const transactions = transactionsResponse.data.transactions;
  for (let txn of transactions) {
    txn.cleared = ynab.TransactionDetail.ClearedEnum.Reconciled;
  }
})();
