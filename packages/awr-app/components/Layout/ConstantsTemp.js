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
        key: "reports-andrei",
        icon: <DocumentsIcon />,
        link: "/mainLayoutProto"
      },
      {
        title: "Все отчёты/Миша",
        key: "reports-misha",
        icon: <DocumentsIcon />,
        link: "/grid"
      },
      {
        title: "Ссылка",
        key: "reports-link",
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
        key: "demands-all",
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
        key: "messages-all",
        icon: <MailIcon />,
        link: "/messages"
      },
      {
        title: "Рассылки",
        key: "messages-mass",
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
        key: "queries-all",
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

export const directionsConfig = [
  {
    direction: "fns",
    title: "ФНС"
  },
  {
    direction: "rpn",
    title: "РПН"
  },

  {
    direction: "rar",
    title: "РАР"
  },
  {
    direction: "fss",
    title: "ФСС"
  },
  {
    direction: "rosstat",
    title: "Росстат"
  },
  {
    direction: "pfr",
    title: "ПФР"
  }
];
