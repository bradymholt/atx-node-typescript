// ynab API example

import ynab from "ynab";

const accessToken = "b43439eaafe2_this_is_fake_b43439eaafe2";
const ynabAPI = new ynab.API(accessToken);

(async function() {
  const response = await ynabAPI.transactions.getTransactions("last-used");
  const transactions = response.data.transactions;
  for (let txn of transactions) {
    txn.cleared = ynab.TransactionDetail.ClearedEnum.Cleared;
    txn.flag_color = ynab.TransactionDetail.FlagColorEnum.Purple;
  }
})();
