'''
这个傻逼 subprocess 居然不允许我在后台调用 Word 处理 PDF
只能新建一个文件专门用来导出这个了，确定好基本目录就可以了
致敬传奇屎山代码 Windows 和傻逼 Office
'''
import os
import argparse
from datetime import datetime
from serve import ReportExporter

BASE_DIR = r'E:\pandownload1\ML\Police\Project'

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="传奇 bug 接口")
    parser.add_argument("--plate", type=str, default="津ABCDEF", help="需要导出的车牌")
    parser.add_argument("--report", type=str, default="Test text.", help="违规鉴定文本")
    parser.add_argument("--user", type=str, default="审核员 A-001", help="审核的人员")
    parser.add_argument("--docx", type=str, default=r'E:\pandownload1\ML\Police\Project\source\report.docx', help="docx 模板位置")
    opt = parser.parse_args()

    reporter = ReportExporter(
        output_dir=os.path.join(BASE_DIR, 'runs', 'reports'),
        verbose=True
    )

    reporter.export_report(
        report_name=f"{opt.plate}-违规报告-{str(datetime.now()).split()[0]}",
        format='pdf',
        status_dict={
            "datetime_report": str(datetime.now()).split()[0],
            "plate": opt.plate,
            "report": opt.report,
            "administrator": opt.user,
            "template_path": opt.docx
        }
    )