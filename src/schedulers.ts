// import cron from "node-cron";
// import * as Modules from "./modules";

// // Orders task
// cron.schedule("20 1 * * *", async () => {
//     const orders = await Modules.getAllOrders();
//     await Modules.getAllOrdersExcel(orders);
//     await Modules.updateAllOrders(orders);
// });

// // Stocks task
// cron.schedule("30 3 * * *", async () => {
//     const stocks = await Modules.getAllStocks();
//     await Modules.getAllStocksExcel(stocks);
//     await Modules.updateAllStocks(stocks);
// });

// // Invoices task
// cron.schedule("25 4 * * *", async () => {
//     const invoices = await Modules.getAllInvoices();
//     await Modules.getAllInvoicesExcel(invoices);
//     await Modules.updateAllInvoices(invoices);
// });

// // Returns task
// cron.schedule("15 5 * * *", async () => {
//     const returns = await Modules.getAllReturns();
//     await Modules.getAllReturnsExcel(returns);
//     await Modules.updateAllReturns(returns);
// });

// // Entities update
// cron.schedule("45 2 * * *", Modules.updateEntitiesList);

// // Daily orders
// cron.schedule("40 8,20 * * *", Modules.updateDailyOrders);
