import { translate } from '@shared/services/LocalizationService';

export type TermOfUseSectionData = {
  title: string;
  paragraphs: string[];
};

const getParagraphs = (path: string, count: number): string[] =>
  Array.from({ length: count }, (_, index) => translate(`${path}.part${index + 1}`));

export function getTermOfUseContent(): TermOfUseSectionData[] {
  return [
    {
      title: translate('termOfUsePage.content.generalProvisions.title'),
      paragraphs: getParagraphs('termOfUsePage.content.generalProvisions.content', 7),
    },
    {
      title: translate('termOfUsePage.content.serviceUsage.title'),
      paragraphs: getParagraphs('termOfUsePage.content.serviceUsage.content', 6),
    },
    {
      title: translate('termOfUsePage.content.otherProvision.title'),
      paragraphs: getParagraphs('termOfUsePage.content.otherProvision.content', 4),
    },
    {
      title: translate('termOfUsePage.content.copyrightInfo.title'),
      paragraphs: getParagraphs('termOfUsePage.content.copyrightInfo.content', 1),
    },
  ];
}
