import pandas as pd
from dataclasses import dataclass


class ExcelReader:

    @classmethod
    def read_whole_file(cls, file_path):
        whole_file = pd.read_excel(file_path, sheet_name=None, header=None)
        return whole_file


@dataclass
class SectionRange:
    def __init__(self, section_name, start_row, end_row):
        self.section_name = section_name
        self.start_row = start_row
        self.end_row = end_row

    def __repr__(self):
        return f'{self.section_name}: {self.start_row} - {self.end_row}'