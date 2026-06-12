import {
  CheckCircle2,
  CircleDashed,
  CircleDot,
  CircleDotDashed,
  XCircle,
  type LucideIcon,
} from 'lucide-react';

export type FeedbackStatus = 'backlog' | 'planned' | 'in progress' | 'completed' | 'rejected';

export interface StatusOption {
  label: string;
  value: FeedbackStatus;
  icon: LucideIcon;
}

export const ALL_STATUS_OPTIONS: StatusOption[] = [
  { label: 'Backlog', value: 'backlog', icon: CircleDashed },
  { label: 'Planned', value: 'planned', icon: CircleDotDashed },
  { label: 'In Progress', value: 'in progress', icon: CircleDot },
  { label: 'Completed', value: 'completed', icon: CheckCircle2 },
  { label: 'Rejected', value: 'rejected', icon: XCircle },
];

export const PUBLIC_ROADMAP_STATUSES: FeedbackStatus[] = ['planned', 'in progress', 'completed'];

export function normalizeStatus(status: string | null | undefined): FeedbackStatus {
  const normalized = (status || 'backlog').toLowerCase().trim();
  const match = ALL_STATUS_OPTIONS.find((option) => option.value === normalized);
  return match?.value ?? 'backlog';
}

export function groupFeedbackByStatus<T extends { status?: string | null }>(
  items: T[],
  columns: StatusOption[]
): Record<FeedbackStatus, T[]> {
  const grouped = Object.fromEntries(columns.map((column) => [column.value, [] as T[]])) as Record<
    FeedbackStatus,
    T[]
  >;

  for (const item of items) {
    const status = normalizeStatus(item.status);
    if (grouped[status]) {
      grouped[status].push(item);
    }
  }

  return grouped;
}
