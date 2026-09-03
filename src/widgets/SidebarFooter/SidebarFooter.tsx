import styles from './SidebarFooter.module.scss';
import { AppBar, Box } from '@mui/material';
import Telegram from '@shared/assets/TelegramIcon.svg';
import MailIcon from '@shared/assets/MailIcon.svg';
import DonateIcon from '@shared/assets/DonateIcon.svg';
import IconLink from '@shared/ui/IconLink';
import CustomSelect from '@shared/ui/CustomSelect';
import SlideMenuWave from '@shared/assets/SlideMenuWave.svg';
import { translate } from '@shared/services/LocalizationService';
import { changeLocalization } from '@entities/user/userSlice';
import { useAppDispatch, useAppSelector } from '@shared/hooks/reduxHooks';
import { CustomSelectOption } from '@shared/types/CustomSelectOption';
import { localizationOptions } from '@shared/config/vars';

interface Props {
  className: string;
}

function SidebarFooter({ className }: Props) {
  const localization = useAppSelector((state) => state.user.localization);
  const dispatch = useAppDispatch();

  const translatedLanguages = localizationOptions.map((language) => {
    return { label: translate(`basement.language.${language.label}`), value: language.value };
  });

  const handleChangeLanguage = (option: CustomSelectOption) => {
    dispatch(changeLocalization(option));
  };

  return (
    <AppBar position="static" color="primary" className={`${styles.appBarFooter} ${className}`}>
      <img src={SlideMenuWave} alt="Wave" className={styles.sidebarFooterWave} />
      <Box className={styles.sidebarFooter}>
        <hr className={styles.separator} />
        <Box className={styles.imgBoxAndSelect}>
          <Box className={styles.sidebarFooterImgBox}>
            <IconLink image={MailIcon} link="mailto:swiftitraveler@gmail.com" />
            <IconLink image={Telegram} link="https://t.me/swifti_app" />
            <IconLink image={DonateIcon} link="https://socprofile.com/swifti/" />
          </Box>
          <CustomSelect
            options={translatedLanguages}
            selectedOption={translatedLanguages.find((language) => language.value === localization.value) || localization}
            handleClick={handleChangeLanguage}
          />
        </Box>
      </Box>
    </AppBar>
  );
}

export default SidebarFooter;
