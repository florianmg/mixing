/**
 * Page: Classic
 *
 * ClassicPageProps = {
 *   originalClay: OriginalClayType;
 *   mixedClay: MixedClayTye;
 * }
 */
type OriginalClayType = {
  fimoId: string;
  color: string;
  link: string;
}[];

type MixedClayTye = {
  mixedId: string;
  color: string;
  base: [
    {
      fimoId: string;
      quantity: string;
    }
  ];
}[];

export type ClassicPageProps = {
  originalClay: OriginalClayType;
  mixedClay: MixedClayTye;
};
