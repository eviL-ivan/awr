import React from "react";
import IconButton from "material-ui/IconButton";
import List from "material-ui/List";
import { Collapse } from "material-ui/transitions";
// Компоненты
import CircularProgressBar from "../Common/CircularProgressBar";
import Document from "./Document";
// Стайлд
import {
  ReportWrapper,
  ReportTitle,
  ReportInfo,
  ExpandIcon
} from "./Styled/Report";

class Report extends React.Component {
  // разворачиваем по дефолту первый отчёт в первой группе по дате
  state = { open: !this.props.index && !this.props.groupIndex };

  // Развернуть/Свернуть список организаций в отчёте
  toggleReport = () => {
    this.setState({ open: !this.state.open });
  };

  // общее количество организаций по одному отчету
  getTotal = () => this.props.documents.length;
  // Количество организаций, у которых отчет в статусе "Завершен"
  getCompleted = () =>
    this.props.documents.reduce(
      (count, report) => (report.status === 3 ? ++count : count),
      0
    );

  // сортировка отчетов по полю
  sortDocuments = (field, ascending = true) => {
    const compare = (a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    };

    return ascending
      ? this.props.documents.sort(compare)
      : this.props.documents.sort(compare).reverse();
  };

  render() {
    const { name, description, direction } = this.props;
    const { open } = this.state;

    return [
      <ReportWrapper button onClick={this.toggleReport} key="report-wrapper">
        <CircularProgressBar
          strokeWidth={4}
          sqSize={55}
          percentage={parseInt(this.getCompleted() / this.getTotal() * 100)}
          text={`${this.getCompleted()}/${this.getTotal()}`}
        />
        <ReportTitle primary={name} secondary={description} />
        <ReportInfo primary={direction} secondary="Направление" />
        <IconButton>
          <ExpandIcon open={open} />
        </IconButton>
      </ReportWrapper>,
      <Collapse in={open} timeout="auto" key="report-organizations">
        <List disablePadding>
          {this.sortDocuments("status", false).map((document, index) => (
            <Document document={document} key={`${document.name}-${index}`} />
          ))}
        </List>
      </Collapse>
    ];
  }
}

export default Report;
