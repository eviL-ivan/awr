import React from "react";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import Grid from "material-ui/Grid";

import withLayout from "utils/withLayout";

import Input from "../components/Common/Input";
import TextField from "material-ui/TextField";
import { InputLabel } from "material-ui/Input";

@withLayout
export default class Report extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Grid item xs={12}>
            <Typography style={{ textAlign: "end" }}>
              Приложение к Приказу ФНС РФ от 29.03.2007 № ММ-3-25/174@
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={2}>
              <TextField label="ИНН" value="9625990830" disabled />
            </Grid>
            <Grid item xs={2}>
              <TextField label="КПП" value="644901001" disabled />
            </Grid>
          </Grid>
          <Typography style={{ textAlign: "end" }}>
            Форма по КНД 1110018
          </Typography>
          <Typography
            variant="headline"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Сведения о среднесписочной численности работников за предшествующий
            календарный год
          </Typography>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              label="Номер корректировки"
              style={{ marginTop: 20, background: "antiquewhite" }}
            />
          </Grid>
          <Grid
            container
            spacing={24}
            style={{ marginTop: 40, display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={0}>
              <div style={{ marginTop: 20 }}>
                <InputLabel> Представляется в </InputLabel>
              </div>
            </Grid>
            <Grid item xs={5}>
              <Input
                label=""
                placeholder="ИФНС России по Московскому округу г. Калуги	"
                formHelperText="(наименование налогового органа)"
                autoFocus={false}
              />
            </Grid>
            <Grid item xs={0}>
              <Input label="" placeholder="4001" />
            </Grid>
          </Grid>
          <Input
            label=""
            placeholder="Общество с ограниченной ответственностью «Ромашка Плюс»"
            formHelperText="(полное наименование организации/фамилия, имя, отчество индивидуального предпринимателя)"
            fullWidth
            style={{ textAlign: "center" }}
          />
          <Grid item xs={0}>
            <div style={{ marginTop: 20 }} />
          </Grid>
          <Grid item xs={0}>
            <InputLabel>
              {" "}
              Среднесписочная численность по состоянию на{" "}
            </InputLabel>
            <TextField
              id="date"
              label=""
              type="date"
              defaultValue="2018-02-27"
              InputLabelProps={{
                shrink: true
              }}
            />
            <InputLabel> совтовляет</InputLabel>

            <TextField
              label=""
              style={{ marginLeft: 10, background: "antiquewhite" }}
            />

            <InputLabel> человек</InputLabel>
          </Grid>

          <div style={{ marginTop: 30 }}>
            <InputLabel>
              {" "}
              "* В случае представления сведений о среднесписочной численности
              работников за предшествующий календарный год, отражается дата - 1
              января текущего года, а в случае создания (реорганизации)
              организации, отражается первое число месяца, следующего за
              месяцем, в котором организация была создана (реорганизована)."
            </InputLabel>
          </div>

          <div style={{ marginTop: 30 }}>
            <Typography
              variant="headline"
              component="h5"
              style={{ textAlign: "center" }}
            >
              Достоверность и полноту представленных сведений, подтверждаю:
            </Typography>
          </div>

          <Grid>Для организации</Grid>
          <Grid>
            <Input
              placeholder="Руководитель"
              formHelperText="Фамилия, Имя, Отчество (полностью)"
              fullWidth
              style={{ textAlign: "center" }}
            />
          </Grid>
          <Grid>Представитель</Grid>
          <Grid>
            <Input
              placeholder="Ответственное лицо"
              formHelperText="(полное наименование организации / (фамилия, имя, отчество)"
              fullWidth
              style={{ textAlign: "center" }}
            />
          </Grid>
          <Grid>
            <Input
              placeholder="Доверенность"
              formHelperText="(наименование документа, подтверждающего полномочия представителя, копия прилагается)"
              fullWidth
              style={{ textAlign: "center" }}
            />
          </Grid>

          <Grid>
            <InputLabel> Дата подписи </InputLabel>
            <TextField
              id="date"
              label=""
              type="date"
              defaultValue="2018-02-27"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
