// Shared category images for article pages (Pexels free stock photos,
// credited on every article banner and in the site footer). No club logos
// or copyrighted images are used.
// NOTE: ArticleCard.astro carries its own copy of this same map for the
// story cards — if an image ever changes, update both files.
export const CATEGORY_IMAGES = {
  'Football News': {
    src: 'https://images.pexels.com/photos/14334478/pexels-photo-14334478.jpeg?auto=compress&w=1260&h=750&dpr=1',
    credit: 'Francisco Medeiros',
  },
  'FPL Tips': {
    src: 'https://images.pexels.com/photos/7307524/pexels-photo-7307524.jpeg?auto=compress&w=1260&h=750&dpr=1',
    credit: 'Alexander Nadrilyanski',
  },
  'FPL Guides': {
    src: 'https://images.pexels.com/photos/9519554/pexels-photo-9519554.jpeg?auto=compress&w=1260&h=750&dpr=1',
    credit: 'Anastasia Shuraeva',
  },
};

export function imageFor(category) {
  return CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES['Football News'];
}
