from excel_parser import ExcelReader
from cash_balance_parser import WindowView

summary_report_path = "Summary Report 28022022.xlsx"
summary_whole_file = ExcelReader.read_whole_file(summary_report_path)

WindowView.from_summary_report_dict(whole_file=whole_file)