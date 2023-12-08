import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faTimes,
  faPaperclip,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faTrashCan } from "@fortawesome/free-regular-svg-icons";
const icons = {
  location: <FontAwesomeIcon icon={faLocationDot} size="1x" color="#293C6F" />,
  phone: <FontAwesomeIcon icon={faPhone} size="1x" color="#293C6F" />,
  envelope: <FontAwesomeIcon icon={faEnvelope} size="1x" color="#293C6F" />,
  cross: <FontAwesomeIcon icon={faTimes} size="1x" color="black" />,
  attachmentGray: <FontAwesomeIcon icon={faPaperclip} size="1x" color="grey" />,
  attachmentBlue: <FontAwesomeIcon icon={faPaperclip} size="1x" color="blue" />,
  noteGrey: <FontAwesomeIcon icon={faMessage} size="1x" color="grey" />,
  noteBlue: <FontAwesomeIcon icon={faMessage} size="1x" color="blue" />,
  delete: <FontAwesomeIcon icon={faTrashCan} size="1x" color="red" />,
  info: <FontAwesomeIcon icon={faCircle} size="1x" color="red" />,
};
export default icons;
