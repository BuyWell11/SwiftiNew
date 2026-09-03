import styles from './ContactsBlock.module.scss';
import { Box } from '@mui/material';
import TopicText from '@shared/ui/TopicText';
import { translate } from '@shared/services/LocalizationService';
import CardIcon from '@shared/assets/Card.svg';
import MailIcon from '@shared/assets/Mail.svg';
import TelegramIcon from '@shared/assets/Telegram.svg';
import { DONATE, EMAIL, TG } from '@shared/config/vars';

function ContactsBlock() {
  return (
    <Box className={styles.contactsBlock} id="contacts">
      <TopicText>{translate('mainPage.contacts.title')}</TopicText>
      <Box className={styles.contactsBlockContent}>
        <Box className={styles.contactGroup}>
          <span>{translate('mainPage.contacts.contactUs.content')}</span>
          <Box className={styles.contactRow}>
            <img src={MailIcon} alt="img" />
            <a href="mailto:swiftitraveler@gmail.com" rel="noreferrer">
              {EMAIL}
            </a>
          </Box>
          <Box className={styles.contactRow}>
            <img src={TelegramIcon} alt="img" />
            <a href="https://t.me/swifti_app" target="_blank" rel="noreferrer">
              {TG}
            </a>
          </Box>
        </Box>
        <Box className={styles.contactGroup}>
          <span>{translate('mainPage.contacts.donateUs.content')}</span>
          <Box className={styles.contactRow}>
            <img src={CardIcon} alt="img" />
            <a href="mailto:swiftitraveler@gmail.com" target="_blank" rel="noreferrer">
              {DONATE}
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactsBlock;
