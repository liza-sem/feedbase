export const ANONYMOUS_DISPLAY_NAME = 'Anonymous';

export function getPublicAuthorName(fullName: string, hideAuthorNames: boolean): string {
  return hideAuthorNames ? ANONYMOUS_DISPLAY_NAME : fullName;
}

export function getPublicAuthorInitial(fullName: string, hideAuthorNames: boolean): string {
  if (hideAuthorNames || !fullName) {
    return '?';
  }

  return fullName[0];
}

export function getPublicAvatarUrl(avatarUrl: string | null | undefined, hideAuthorNames: boolean): string {
  return hideAuthorNames ? '' : avatarUrl || '';
}
