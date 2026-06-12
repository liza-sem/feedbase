'use client';

import {
  CheckCircle2,
  CircleDashed,
  CircleDot,
  CircleDotDashed,
  XCircle,
  type LucideIcon,
} from 'lucide-react';
import type { FeedbackStatus } from '@/lib/feedback-status';

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
