export type FeedbackStatus = 'backlog' | 'planned' | 'in progress' | 'completed' | 'rejected';

export const STATUS_LABELS: Record<FeedbackStatus, string> = {
  backlog: 'Backlog',
  planned: 'Planned',
  'in progress': 'In Progress',
  completed: 'Completed',
  rejected: 'Rejected',
};

export const ALL_STATUS_VALUES: FeedbackStatus[] = [
  'backlog',
  'planned',
  'in progress',
  'completed',
  'rejected',
];

export const PUBLIC_ROADMAP_STATUSES: FeedbackStatus[] = ['planned', 'in progress', 'completed'];

export function normalizeStatus(status: string | null | undefined): FeedbackStatus {
  const normalized = (status || 'backlog').toLowerCase().trim();
  if (ALL_STATUS_VALUES.includes(normalized as FeedbackStatus)) {
    return normalized as FeedbackStatus;
  }
  return 'backlog';
}

export function groupFeedbackByStatus<T extends { status?: string | null }>(
  items: T[],
  columns: FeedbackStatus[]
): Record<FeedbackStatus, T[]> {
  const grouped = Object.fromEntries(columns.map((column) => [column, [] as T[]])) as Record<
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
