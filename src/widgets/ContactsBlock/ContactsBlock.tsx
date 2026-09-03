import styles from './ContactsBlock.module.scss';
import TopicText from '@shared/ui/TopicText';
import { translate } from '@shared/services/LocalizationService';
import CardIcon from '@shared/assets/Card.svg';
import MailIcon from '@shared/assets/Mail.svg';
import TelegramIcon from '@shared/assets/Telegram.svg';
import { DONATE, EMAIL, TG } from '@shared/config/vars';

function ContactsBlock() {
  return (
    <div className={styles.contactsBlock} id="contacts">
      <TopicText>{translate('mainPage.contacts.title')}</TopicText>
      <div className={styles.contactsBlockContent}>
        <div className={styles.contactGroup}>
          <span>{translate('mainPage.contacts.contactUs.content')}</span>
          <div className={styles.contactRow}>
            <img src={MailIcon} alt="img" />
            <a href="mailto:swiftitraveler@gmail.com" rel="noreferrer">
              {EMAIL}
            </a>
          </div>
          <div className={styles.contactRow}>
            <img src={TelegramIcon} alt="img" />
            <a href="https://t.me/swifti_app" target="_blank" rel="noreferrer">
              {TG}
            </a>
          </div>
        </div>
        <div className={styles.contactGroup}>
          <span>{translate('mainPage.contacts.donateUs.content')}</span>
          <div className={styles.contactRow}>
            <img src={CardIcon} alt="img" />
            <a href="mailto:swiftitraveler@gmail.com" target="_blank" rel="noreferrer">
              {DONATE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsBlock;
