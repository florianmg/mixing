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
  bases: [
    {
      fimoId: string;
      color: string;
      quantity: number;
    }
  ];
}[][];

export type ClassicPageProps = {
  originalClay: OriginalClayType;
  mixedClay: MixedClayTye;
};
