import { bindHttp, TokenParams } from "plaza-sdk";
import { CheckToken, ExpensesList, ExpensesListParams, GetToken, OrderIdBasedParams, OrdersList, OrdersListParams, SingleOrder } from "plaza-sdk/uzum-market";
import { EditFbsStocks, FbsApi } from "plaza-sdk/uzum-market-openapi";

import { uzumHttp } from "@/services";

export const ordersList = (params: OrdersListParams) => {
  return OrdersList(uzumHttp, params);
};

export const getToken = async (username: string, password: string) => {
  const response = await GetToken(uzumHttp, { password, username });
  return response;
};

export const checkToken = bindHttp(CheckToken, uzumHttp);

export const expensesList = (params: ExpensesListParams) => {
  return ExpensesList(uzumHttp, params);
};

export const singleOrder = (params: OrderIdBasedParams) => {
  return SingleOrder(uzumHttp, params);
};

export const editFbsStocks = (params: TokenParams, payload: FbsApi.EditFbsStocks.Request) => {
  return EditFbsStocks(uzumHttp, params, payload);
};
