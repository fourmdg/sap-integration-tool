/**
 * Tipos específicos para IDocs
 * Re-exporta tipos do core + adiciona específicos
 */

export type {
  IdocField,
  IdocSegment,
  IdocData,
} from '@core/types';

/** Metadados de um IDoc para listagem */
export interface IdocMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  segmentCount: number;
}
