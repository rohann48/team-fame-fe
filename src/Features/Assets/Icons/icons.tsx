import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faTimes,
  faPaperclip,
  faCircle,
  faCalendar,
  faClock,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";

import { faMessage, faTrashCan } from "@fortawesome/free-regular-svg-icons";
const icons = {
  location: <FontAwesomeIcon icon={faLocationDot} size="1x" color="#BD9255" />,
  phone: <FontAwesomeIcon icon={faPhone} size="1x" color="#BD9255" />,
  envelope: <FontAwesomeIcon icon={faEnvelope} size="1x" color="#BD9255" />,
  cross: <FontAwesomeIcon icon={faTimes} size="1x" color="black" />,
  attachmentGray: <FontAwesomeIcon icon={faPaperclip} size="1x" color="grey" />,
  attachmentBlue: <FontAwesomeIcon icon={faPaperclip} size="1x" color="blue" />,
  noteGrey: <FontAwesomeIcon icon={faMessage} size="1x" color="grey" />,
  noteBlue: <FontAwesomeIcon icon={faMessage} size="1x" color="blue" />,
  delete: <FontAwesomeIcon icon={faTrashCan} size="1x" color="red" />,
  info: <FontAwesomeIcon icon={faCircle} size="1x" color="red" />,
  date: <FontAwesomeIcon icon={faCalendar} size="1x" color="#bd9255" />,
  clock: <FontAwesomeIcon icon={faClock} size="1x" color="#bd9255" />,
  userIcon: <FontAwesomeIcon icon={faUserNinja} size="4x" color="red" />,
  // facebook: <FontAwesomeIcon icon={faSquareFacebook} />
};
export default icons;
