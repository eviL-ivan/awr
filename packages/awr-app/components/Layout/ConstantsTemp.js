import React from "react";

// Sidebar Icons
import CalendarIcon from "material-ui-icons/DateRange";
import MailIcon from "material-ui-icons/Mail";
import DocumentsIcon from "material-ui-icons/Assignment";
import LabelIcon from "material-ui-icons/Folder";
import AnnouncementIcon from "material-ui-icons/Announcement";
import QueryIcon from "material-ui-icons/RecordVoiceOver";
import HelpIcon from "material-ui-icons/Help";
import RssIcon from "material-ui-icons/RssFeed";

// Profile Menu icons
import ExitIcon from 'material-ui-icons/ExitToApp';
import SettingsIcon from 'material-ui-icons/Settings';
import LinkIcon from 'material-ui-icons/BookmarkBorder';
import PersonIcon from 'material-ui-icons/Person';

export const SIDEBAR_MENU = [
  {
    title: "Отчёты",
    key: "reports",
    icon: <DocumentsIcon />,
    children: [
      {
        title: "Все отчёты",
        icon: <DocumentsIcon />,
      },
      {
        title: "ПФР",
        icon: <LabelIcon />,
      },
      {
        title: "РАР",
        icon: <LabelIcon />,
      },
      {
        title: "Росстат",
        icon: <LabelIcon />,
      },
      {
        title: "РПН",
        icon: <LabelIcon />,
      },
      {
        title: "ФНС",
        icon: <LabelIcon />,
      },
      {
        title: "ФСС",
        icon: <LabelIcon />,
      }
    ]
  },
  {
    title: "Требования",
    key: "demands",
    icon: <AnnouncementIcon />,
    children: [
      {
        title: "Все требования",
        icon: <AnnouncementIcon />,
      },
      {
        title: "ФНС",
        icon: <LabelIcon />,
      }
    ]
  },
  {
    title: "Письма",
    key: "messages",
    icon: <MailIcon />,
    children: [
      {
        title: "Все письма",
        icon: <MailIcon />,
      },
      {
        title: "Рассылки",
        icon: <RssIcon />,
      },
      {
        title: "ПФР",
        icon: <LabelIcon />,
      },
      {
        title: "РАР",
        icon: <LabelIcon />,
      },
      {
        title: "Росстат",
        icon: <LabelIcon />,
      },
      {
        title: "ФНС",
        icon: <LabelIcon />,
      }
    ]
  },
  {
    title: "Запросы",
    key: "queries",
    icon: <QueryIcon />,
    children: [
      {
        title: "Все запросы",
        icon: <QueryIcon />,
      },
      {
        title: "ПФР",
        icon: <LabelIcon />,
      },
      {
        title: "ФНС",
        icon: <LabelIcon />,
      },
      {
        title: "ФСС",
        icon: <LabelIcon />,
      }
    ]
  },
  {
    title: "Календарь бухгалтера",
    key: "calendar",
    icon: <CalendarIcon />
  },
  {
    title: "Помощь",
    key: "help",
    icon: <HelpIcon />
  },
];


export const PROFILE_MENU = [
  {
    key: "profile",
    title: "Профиль",
    icon: <PersonIcon />,
    divider: true
  },
  {
    key: "settings",
    title: "Настройки",
    icon: <SettingsIcon />
  },
  {
    key: "link1",
    title: "Ссылка",
    icon: <LinkIcon />
  },
  {
    key: "link2",
    title: "Ссылка",
    icon: <LinkIcon />,
    divider: true
  },
  {
    key: "profile",
    title: "Выход",
    icon: <ExitIcon />
  },
];