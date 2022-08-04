import datetime
from typing import Dict

import pandas as pd
from parser_constant import SUMMARY_REPORT_CASH_BALANCE_REPORT_NAME_ROW, \
    SUMMARY_REPORT_CASH_BALANCE_REPORT_GROUP_REPORT_KEY, SUMMARY_REPORT_CASH_BALANCE_SAP_KEY_COL, \
    SUMMARY_REPORT_CASH_BALANCE_SAP_REPORT_DATE_KEY, SUMMARY_REPORT_CASH_BALANCE_REPORT_SHEET_NAME, \
    SUMMARY_REPORT_CASH_BALANCE_SAP_SHEET_NAME, SUMMARY_REPORT_CASH_BALANCE_SAP_VALUE_COL


class BeginningCash:
    def __init__(self, reserved_cash: float, available_cash: float, report_date: datetime.date):
        self.reserved_cash = reserved_cash
        self.available_cash = available_cash
        self.report_date = report_date

    def __repr__(self):
        return f' Reserved cash: {self.reserved_cash}, {self.available_cash} Available cash, on {self.report_date}'

    @classmethod
    def from_summary_report_dict(cls, whole_file: Dict):

        cash_dict = BeginningCash.find_reserved_and_available_cash(
            whole_file[SUMMARY_REPORT_CASH_BALANCE_REPORT_SHEET_NAME]
        )
        report_date = BeginningCash.find_report_date(whole_file[SUMMARY_REPORT_CASH_BALANCE_SAP_SHEET_NAME])
        return BeginningCash(reserved_cash=cash_dict["Reserved Cash"],
                             available_cash=cash_dict["Available Cash"],
                             report_date=report_date)

    @classmethod
    def find_reserved_and_available_cash(cls, cash_balance_report_sheet: pd.DataFrame):
        name_row = SUMMARY_REPORT_CASH_BALANCE_REPORT_NAME_ROW
        group_report_key = SUMMARY_REPORT_CASH_BALANCE_REPORT_GROUP_REPORT_KEY
        for col in cash_balance_report_sheet.columns:
            if cash_balance_report_sheet[col][name_row] == group_report_key:
                return {
                    cash_balance_report_sheet[col][name_row + 1]: cash_balance_report_sheet[col + 1][name_row + 1],
                    cash_balance_report_sheet[col][name_row + 2]: cash_balance_report_sheet[col + 1][name_row + 2]
                }

    @classmethod
    def find_report_date(cls, cash_balance_sap_sheet: pd.DataFrame):
        key_col = SUMMARY_REPORT_CASH_BALANCE_SAP_KEY_COL
        value_col = SUMMARY_REPORT_CASH_BALANCE_SAP_VALUE_COL
        report_date_key = SUMMARY_REPORT_CASH_BALANCE_SAP_REPORT_DATE_KEY
        for i in range(len(cash_balance_sap_sheet[key_col])):
            if cash_balance_sap_sheet[key_col][i] == report_date_key:
                return datetime.datetime.strptime(cash_balance_sap_sheet[value_col][i], '%d/%m/%Y').date()