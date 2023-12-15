
import { AiOutlineHome } from "react-icons/ai";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiArrowDropUpLine } from "react-icons/ri";
import { PiWechatLogoBold } from "react-icons/pi";
import { AiOutlineRightCircle } from "react-icons/ai";
import { PiExam } from "react-icons/pi";
import { GrTrophy } from "react-icons/gr";
import { PiExamDuotone } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { MdOutlineSubscriptions } from "react-icons/md";


const iconStyle = { color: '#8b8888', size: "0.5em" }
const iconActiveStyle = { color: '#fff' }

export const menus = [
  {
    title: "Home",
    link: "/",
    icon1: AiOutlineHome,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Live Classes",
    link: "/live-classes",
    icon1: LiaChalkboardTeacherSolid,
    icon2: RiArrowDropUpLine,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Homework help",
    link: "/homework-help",
    icon1: PiWechatLogoBold,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Video Library",
    link: "/video-library",
    icon1: AiOutlineRightCircle,
    icon2: RiArrowDropUpLine,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Mock Exam",
    link: "/mock-exam",
    icon1: PiExam,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Multiplayer Quiz",
    link: "/multiplayer-quiz",
    icon1: GrTrophy,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Practice Exam",
    link: "/practice-exam",
    icon1: PiExamDuotone,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Notifications",
    link: "/notifications",
    icon1: IoMdNotificationsOutline,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Learning Report",
    link: "/learning-report",
    icon1: BsGraphUp,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Buy Learning Plan",
    link: "/buy-plan",
    icon1: LiaCartArrowDownSolid,
    iconStyle,
    iconActiveStyle
  },

  {
    title: "Manage Subscription",
    link: "/subscription",
    icon1: MdOutlineSubscriptions,
    iconStyle,
    iconActiveStyle
  },
]