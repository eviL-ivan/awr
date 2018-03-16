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
import ExitIcon from "material-ui-icons/ExitToApp";
import SettingsIcon from "material-ui-icons/Settings";
import LinkIcon from "material-ui-icons/BookmarkBorder";
import PersonIcon from "material-ui-icons/Person";

export const SIDEBAR_MENU = [
  {
    title: "Отчёты",
    key: "reports",
    icon: <DocumentsIcon />,
    children: [
      {
        title: "Все отчёты/Андрей",
        icon: <DocumentsIcon />,
        link: "/mainLayoutProto"
      },
      {
        title: "Все отчёты/Миша",
        icon: <DocumentsIcon />,
        link: "/grid"
      },
      {
        title: "Ссылка",
        icon: <LabelIcon />,
        link: "/link"
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
        link: "/demands"
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
        link: "/messages"
      },
      {
        title: "Рассылки",
        icon: <RssIcon />,
        link: "/mass"
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
        link: "/queries"
      }
    ]
  },
  {
    title: "Календарь бухгалтера",
    key: "calendar",
    icon: <CalendarIcon />,
    link: "/report"
  },
  {
    title: "Помощь",
    key: "help",
    icon: <HelpIcon />,
    link: "/help"
  }
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
  }
];
