import React from "react";
import styled from "styled-components";
import Icon from 'material-ui-icons/DoneAll';

export const DOCUMENTS = [
  {
    date: "28.02.2018",
    reports: [
      {
        name: "Налог на добычу полезных ископаемых",
        direction: "ФНС",
        description: "Какое-то описание файла или доп. информация",
        organizations: [
          {
            name: "Рога и Копыта",
            status: 1,
            date: "26.02.2018 15:34",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "ЗАО Калуга Астрал",
            status: 2,
            date: "27.02.2018 12:20",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "Грудинин и КО",
            status: 3,
            date: "27.02.2018 17:20",
            period: "I квартал 2018",
            recipient: "ИФНС50"
          },
          {
            name: "Организация 5",
            status: 4,
            date: "27.02.2018 10:15",
            period: "I квартал 2018",
            recipient: "ИФНС21"
          },
          {
            name: "Русская держава Путин царь",
            status: 0,
            period: "I квартал 2018",
            recipient: "ИФНСКРЕМЛЬ"
          }
        ]
      },
      {
        name: "Налог на воздух",
        direction: "ФНС",
        description: "Какое-то описание файла или доп. информация",
        organizations: [
          {
            name: "Рога и Копыта",
            status: 1,
            date: "26.02.2018 15:34",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "ЗАО Калуга Астрал",
            status: 2,
            date: "27.02.2018 12:20",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "Русская держава Путин царь",
            status: 0,
            period: "I квартал 2018",
            recipient: "ИФНСКРЕМЛЬ"
          }
        ]
      }
    ]
  },
  {
    date: "01.03.2018",
    reports: [
      {
        name: "Налог на физических лиц",
        direction: "Росстат",
        description: "Какое-то описание файла или доп. информация",
        organizations: [
          {
            name: "Рога и Копыта",
            status: 1,
            date: "26.02.2018 15:34",
            period: "I квартал 2018",
            recipient: "Росстат Калуга"
          },
          {
            name: "Русская держава Путин царь",
            status: 0,
            period: "I квартал 2018",
            recipient: "Росстат Кремль"
          }
        ]
      }
    ]
  }
];

export const STATUSES = [
  {
    id: 0,
    title: "Не создан",
    icon: <Icon />
  },
  {
    id: 1,
    title: "Не отправлен",
    icon: <Icon />
  },
  {
    id: 2,
    title: "Отправлен",
    icon: <Icon style={{color: "#f00"}}/>
  },
  {
    id: 3,
    title: "Завершен",
    icon: <Icon />
  },
  {
    id: 4,
    title: "Требуется корректировка",
    icon: <Icon />
  }
];