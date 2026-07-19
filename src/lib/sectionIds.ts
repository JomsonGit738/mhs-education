const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const getServiceSectionId = (title: string) => `service-${toSlug(title)}`;

export const getOfferingSectionId = (title: string) => `support-${toSlug(title)}`;
