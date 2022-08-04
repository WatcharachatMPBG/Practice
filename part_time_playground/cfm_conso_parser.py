from typing import Dict, List

import pandas as pd
from parser_constant import CFM_CONSO_SHEET_NAME, CFM_CONSO_SECTION_COL, CFM_CONSO_YEAR_START_COL, \
    CFM_CONSO_CASH_MAIN_TYPE_COL, CFM_CONSO_TYPE_COL, CFM_CONSO_SUB_TYPE_COL, CFM_CONSO_YEAR_ROW
from excel_parser import SectionRange
import xlrd


class ConsoSheetReader:
    def __init__(self,
                 conso_sheet: xlrd.sheet.Sheet,
                 interested_section: List[str]
                 ):
        self.conso_sheet = conso_sheet
        self.interested_section = interested_section
        self.YEAR_START_COL = CFM_CONSO_YEAR_START_COL
        self.YEAR_ROW = CFM_CONSO_YEAR_ROW
        self.Q_START_COL = self.find_quarter_start_col()

        self.SECTION_COL = CFM_CONSO_SECTION_COL
        self.CASH_MAIN_TYPE_COL = CFM_CONSO_CASH_MAIN_TYPE_COL
        self.TYPE_COL = CFM_CONSO_TYPE_COL
        self.SUB_TYPE_COL = CFM_CONSO_SUB_TYPE_COL
        self.all_sections_mapping = self.create_conso_sheet_all_sections_mapping()

    def find_quarter_start_col(self):
        found = False
        i_year = self.YEAR_START_COL
        while not found:
            i_year += 1
            i_year_val = self.conso_sheet[i_year][self.YEAR_ROW]
            if i_year_val == "Q1":
                found = True
        return i_year

    def create_conso_sheet_all_sections_mapping(self):
        all_section_mapping = dict()
        saved_name = None
        start_row = None
        for row, name in enumerate(self.conso_sheet[self.SECTION_COL]):
            if not pd.isnull(name):
                if name in self.interested_section and start_row is None:
                    saved_name = name
                    start_row = row
                elif name in self.interested_section:
                    all_section_mapping[saved_name] = SectionRange(saved_name, start_row, row - 1)
                    saved_name = name
                    start_row = row
                else:
                    if start_row is not None:
                        all_section_mapping[saved_name] = SectionRange(saved_name, start_row, row - 1)
                        saved_name = None
                        start_row = None
        return all_section_mapping

    @classmethod
    def from_cfm(cls, cfm: Dict[str, xlrd.sheet.Sheet],
                 interested_section: List[str]):
        return ConsoSheetReader(cfm[CFM_CONSO_SHEET_NAME], interested_section)